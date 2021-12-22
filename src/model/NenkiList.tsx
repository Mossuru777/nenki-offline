import moment from "moment-timezone";
import Person from "./Person";
import Nenki from "./Nenki";

/**
 * 年忌法要のリスト
 */
export default class NenkiList {
  /**
   * 今日
   * @private
   */
  static #TODAY = moment.tz("Asia/Tokyo");

  /**
   * 命日・祥月命日・年忌法要(50回忌まで)の年忌インスタンスの不変配列
   */
  readonly nenki_array: readonly Nenki[];

  /**
   * 次回の年忌法要 (今日を含む)
   */
  readonly next_nenki: Nenki | null;

  /**
   * 前回の年忌法要 (今日は含まず)
   */
  readonly last_nenki: Nenki | null;

  /**
   * その人の命日・祥月命日・年忌法要(50回忌まで)の年忌リストインスタンスの作成します
   *
   * @param person 対象の人
   */
  constructor(person: Person) {
    const dates = [
      new Nenki(moment.duration(0), person),
      new Nenki(moment.duration(48, "days"), person),
      new Nenki(moment.duration(99, "days"), person)
    ];
    for (let years_elapsed = 1; years_elapsed <= 49; years_elapsed++) {
      dates.push(new Nenki(moment.duration(years_elapsed, "years"), person));
    }

    this.nenki_array = Object.freeze(Array.from(dates));

    this.next_nenki = dates.find(n => n.title !== null && n.date.isSameOrAfter(NenkiList.#TODAY)) ?? null;
    this.last_nenki = dates.reverse().find(n => n.title !== null && n.date.isBefore(NenkiList.#TODAY)) ?? null;
  }
}
