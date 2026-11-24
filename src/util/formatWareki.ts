import type {Moment} from "moment-timezone";

const japaneseYear = new Intl.DateTimeFormat("ja-JP-u-ca-japanese-nu-latn", {
  era: "long",
  year: "numeric",
  timeZone: "UTC"
});

export default function formatWareki(date: Moment): string {
  if (!date.isValid()) {
    return "";
  }

  const year = date.year();
  const month = date.month();
  const day = date.date();
  const monthAndDay = `${month + 1}月${day}日`;

  // 明治の改暦より前は従来どおり西暦で表示する。
  if (year < 1873) {
    return `西暦${year}年${monthAndDay}`;
  }

  // 画面に表示する年月日を UTC に組み立て、時差による日付ずれを防ぐ。
  const parts = japaneseYear.formatToParts(Date.UTC(year, month, day));
  const era = parts.find(part => part.type === "era")?.value;
  const eraYear = parts.find(part => part.type === "year")?.value;
  if (!era || !eraYear) {
    return `西暦${year}年${monthAndDay}`;
  }

  return `${era}${eraYear === "1" ? "元" : eraYear}年${monthAndDay}`;
}
