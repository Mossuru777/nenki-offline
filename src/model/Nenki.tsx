import assert from "assert";
import moment, {Duration, Moment} from "moment-timezone";
import Person from "./Person";

/**
 * 年忌法要
 */
export default class Nenki {
  /**
   * 命日からの経過に対応する法要辞書
   * @private
   */
  static #HOUYOU_ARRAY: [Duration, string][] = [
    [moment.duration(0), "没"],
    [moment.duration(6, "days"), "初七日法要"],
    [moment.duration(48, "days"), "四十九日法要"],
    [moment.duration(99, "days"), "百ヶ日法要"],
    [moment.duration(1, "years"), "一周忌法要"],
    [moment.duration(2, "years"), "三回忌法要",],
    [moment.duration(6, "years"), "七回忌法要",],
    [moment.duration(12, "years"), "十三回忌法要",],
    [moment.duration(16, "years"), "十七回忌法要",],
    [moment.duration(22, "years"), "二十三回忌法要",],
    [moment.duration(24, "years"), "二十五回忌法要",],
    [moment.duration(26, "years"), "二十七回忌法要",],
    [moment.duration(32, "years"), "三十三回忌法要",],
    [moment.duration(36, "years"), "三十七回忌法要",],
    [moment.duration(42, "years"), "四十三回忌法要",],
    [moment.duration(46, "years"), "四十七回忌法要",],
    [moment.duration(49, "years"), "五十回忌法要"]
  ];

  /**
   * 日付
   */
  readonly date: Moment;

  /**
   * 概要
   */
  readonly summary: string;

  /**
   * 詳細情報（経過時間や享年など）
   */
  readonly description: string;

  /**
   * 年忌インスタンスを初期化します
   *
   * @param duration 経過時間
   * @param person 対象人物
   */
  constructor(duration: Duration, person: Person) {
    const years = duration.asYears();
    const days = duration.asDays();

    const houyou = Nenki.#HOUYOU_ARRAY.find(value => (value[0].asDays() - days) === 0);
    assert(years >= 1 || houyou !== undefined, "不正なduration");

    this.date = moment(person.death_date);
    this.date.add(duration);

    const generate_nenki_duration_description_str = () => {
      if (days === 0) {
        return "";
      }
      let str = "\n亡くなってから";
      if (days <= 100) {
        str += `${days + 1}日目`;
      } else {
        str += `${years}年が経過`;
      }
      return str;
    };

    if (houyou !== undefined) {
      this.summary = `${person.name}${person.title} ${houyou[1]}`;
      this.description = `${this.summary}`;
      if (days === 0) {
        if (person.gyounen !== null) {
          this.summary += ` (行年 ${person.gyounen}歳)`;
        }
        if (person.birth_date !== null) {
          this.description += `\n${person.birth_date.format("YYYY年M月D日 生")}`;
        }
        if (person.gyounen !== null) {
          this.description += `\n行年 ${person.gyounen}歳`;
        }
        if (person.kyounen !== null) {
          this.description += `\n享年 ${person.kyounen}歳`;
        }
      } else {
        this.description += generate_nenki_duration_description_str();
      }
    } else {
      this.summary = `${person.name}${person.title} 命日`;
      this.description = `${this.summary}${generate_nenki_duration_description_str()}`;
    }
  }
}
