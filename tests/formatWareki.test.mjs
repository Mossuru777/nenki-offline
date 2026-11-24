import assert from "node:assert/strict";
import {test} from "node:test";
import moment from "moment-timezone";
import formatWareki from "../src/util/formatWareki.ts";

test("改元日の前後と元年を表示する", () => {
  for (const [date, expected] of [
    ["1912-07-29", "明治45年7月29日"],
    ["1912-07-30", "大正元年7月30日"],
    ["1926-12-24", "大正15年12月24日"],
    ["1926-12-25", "昭和元年12月25日"],
    ["1989-01-07", "昭和64年1月7日"],
    ["1989-01-08", "平成元年1月8日"],
    ["2019-04-30", "平成31年4月30日"],
    ["2019-05-01", "令和元年5月1日"]
  ]) {
    assert.equal(formatWareki(moment.tz(date, "Asia/Tokyo")), expected, date);
  }
});

test("明治改暦の前は西暦で表示し、無効な日付は空欄にする", () => {
  assert.equal(formatWareki(moment.utc("1872-12-31")), "西暦1872年12月31日");
  assert.equal(formatWareki(moment.utc("1873-01-01")), "明治6年1月1日");
  assert.equal(formatWareki(moment.invalid()), "");
});

test("Moment のタイムゾーンで表示している日付を使う", () => {
  const date = moment.tz("2019-04-30T23:30", "America/Los_Angeles");
  assert.equal(date.toISOString().slice(0, 10), "2019-05-01");
  assert.equal(formatWareki(date), "平成31年4月30日");
});
