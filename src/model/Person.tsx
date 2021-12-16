import moment, {Moment} from "moment-timezone";
import assert from "assert";

export type PersonFormData = {
  db_id: number | null,
  name: string,
  title: string,
  death_date: string,
  gyounen: number | null,
  kyounen: number | null,
  birth_date: string | null,
  is_birth_date_accurate: boolean | null
};

export default class Person {
  /**
   * DBでのID
   * @type {number|null}
   */
  db_id: number | null;
  /**
   * 名前
   * @type {string}
   */
  name: string;
  /**
   * 敬称
   * @type {string}
   */
  title: string;
  /**
   * 命日
   * @type {Moment}
   */
  death_date: Moment;
  /**
   * 行年 (満年齢)
   * @type {number | null}
   */
  gyounen: number | null;
  /**
   * 享年 (数え年)
   * @type {number | null}
   */
  kyounen: number | null;

  /**
   * 生年月日
   * @type {Moment | null}
   */
  birth_date: Moment | null;

  /**
   * 生年月日は正確かどうか (birth_dateがnull時はnull)
   * @type {boolean | null}
   */
  is_birth_date_accurate: boolean | null;

  /**
   * 人物情報クラス インスタンスを作成します
   * @param {number | null} db_id DBでのID
   * @param {string} name 名前
   * @param {string} title 敬称
   * @param {Moment} death_date 命日
   * @param {Moment | null} birth_date 生年月日
   * @param {boolean | null} is_birth_date_accurate 生年月日は正確かどうか (birth_dateがnull時はnull)
   */
  constructor(db_id: number | null, name: string, title: string, death_date: Moment, birth_date: Moment | null, is_birth_date_accurate: boolean | null) {
    assert(birth_date !== null || is_birth_date_accurate === null, "If birth_date is null, is_birth_date_accurate must be set null.");

    this.db_id = db_id;
    this.name = name;
    this.title = title;
    this.death_date = death_date;
    this.gyounen = birth_date !== null ? death_date.diff(birth_date, "years") : null;
    this.kyounen = (() => {
      if (this.gyounen === null) {
        return null;
      }
      // 享年(数え年)計算：生まれた日を1歳として、以降、元日が来るたびに1歳ずつ加算
      let kyounen = this.gyounen; // 誕生日が元日 かつ 命日が誕生日より後の場合
      if (birth_date!.month() > 0 || birth_date!.date() > 1) { // moment().month()はzero indexed, moment().date()はone indexed
        // 誕生日が元日より後の場合は+1歳
        kyounen += 1;
        // 命日が誕生日より前の場合はさらに+1歳
        const between_birth_and_death_year_diff = death_date.diff(birth_date, "years");
        const same_year_birth_date = moment(birth_date).add(between_birth_and_death_year_diff, "years");
        if (!death_date.isSameOrAfter(same_year_birth_date)) {
          kyounen += 1;
        }
      }
      return kyounen;
    })();
    this.birth_date = birth_date;
    this.is_birth_date_accurate = birth_date !== null ? is_birth_date_accurate : null;
  }

  getFormData(): PersonFormData {
    const death_date = this.death_date.format("YYYY-MM-DD");
    const birth_date = this.birth_date?.format("YYYY-MM-DD") ?? null;
    return {
      db_id: this.db_id,
      name: this.name,
      title: this.title,
      death_date,
      gyounen: this.gyounen,
      kyounen: this.kyounen,
      birth_date,
      is_birth_date_accurate: this.is_birth_date_accurate
    }
  };
}
