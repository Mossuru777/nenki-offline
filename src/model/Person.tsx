import moment, {Moment} from "moment-timezone";
import assert from "assert";
import NenkiList from "./NenkiList";

export default class Person {
  /**
   * DBでのID
   */
  db_id: number | null;
  /**
   * 名前
   */
  name: string;
  /**
   * 敬称
   */
  title: string;
  /**
   * 行年 (満年齢)
   * @type {number | null}
   */
  gyounen: number | null;
  /**
   * 享年 (数え年)
   */
  kyounen: number | null;
  /**
   * 生年月日
   */
  birth_date: Moment | null;
  /**
   * 生年月日は正確かどうか (birth_dateがnull時はnull)
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
    this._death_date = death_date;
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
    this._nenki_list = new NenkiList(this);
  }

  /**
   * 命日
   * @private
   */
  private _death_date: Moment;

  /**
   * 命日
   */
  get death_date(): Moment {
    return this._death_date;
  }

  set death_date(date) {
    if (date.isSame(this._death_date)) {
      return;
    }
    this._death_date = moment(date);
    this._nenki_list = new NenkiList(this);
  }

  /**
   * 年忌法要のリスト
   * @private
   */
  private _nenki_list: NenkiList;

  /**
   * 年忌法要のリスト
   */
  get nenki_list(): NenkiList {
    return this._nenki_list;
  }
}
