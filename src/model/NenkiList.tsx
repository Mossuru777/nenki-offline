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
      new Nenki(moment.duration(99, "days"), person)
    ];
    for (let years_elapsed = 1; years_elapsed <= 49; years_elapsed++) {
      dates.push(new Nenki(moment.duration(years_elapsed, "years"), person));
    }

    this.nenki_array = Object.freeze(dates);

    const nenki_exclude_death_date = dates.slice(1);
    this.next_nenki = nenki_exclude_death_date.find(n => n.date.isSameOrAfter(NenkiList.#TODAY)) ?? null;
    this.last_nenki = nenki_exclude_death_date.reverse().find(n => n.date.isBefore(NenkiList.#TODAY)) ?? null;
  }
}
