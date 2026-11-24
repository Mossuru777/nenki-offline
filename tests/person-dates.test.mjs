import assert from "node:assert/strict";
import {test} from "node:test";
import moment from "moment-timezone";
import Nenki from "../src/model/Nenki.ts";
import Person from "../src/model/Person.ts";

test("うるう日の年忌、四十九日、行年と享年を維持する", () => {
  const death = moment.tz("2020-02-29", "Asia/Tokyo");
  const birth = moment.tz("1980-02-29", "Asia/Tokyo");
  const person = new Person(42, "テスト", "様", death, birth, true);

  assert.equal(person.gyounen, 40);
  assert.equal(person.kyounen, 41);
  for (const [title, expected] of [
    ["四十九日法要", "2020-04-17"],
    ["百ヶ日法要", "2020-06-07"],
    ["一周忌法要", "2021-02-28"],
    ["五十回忌法要", "2069-02-28"]
  ]) {
    const event = person.nenki_list.nenki_array.find(event => event.title === title);
    assert.equal(event?.date.format("YYYY-MM-DD"), expected, title);
  }
  assert.equal(death.format("YYYY-MM-DD"), "2020-02-29");
});

test("生年月日が不明な人物と既存の入力チェックを維持する", () => {
  const death = moment.tz("2019-04-30", "Asia/Tokyo");
  const person = new Person(42, "テスト", "様", death, null, null);

  assert.equal(person.gyounen, null);
  assert.equal(person.kyounen, null);
  assert.throws(() => new Person(42, "テスト", "様", death, null, true), /生年月日/);
  assert.throws(() => new Nenki(moment.duration(1, "day"), person), /経過期間/);
});
