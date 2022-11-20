import { createEvents, DateArray } from "ics";
import moment from "moment-timezone";
import Person from "../model/Person";

export default function generate_ics_blob_url(persons: Person[]): [string, moment.Moment] {
  const now = moment.tz("Asia/Tokyo");

  const event_base = {
    calName: "年忌カレンダー",
    productId: "Nenki Calendar",
    lastModified: create_ics_datearray(moment(now).utc(), true)
  };

  const events = [];
  for (const p of persons) {
    const ics_death_date = create_ics_datearray(p.death_date, false); // 日付のみなのでUTCに変換しない
    for (const n of p.nenki_list.nenki_array) {
      events.push(
        Object.assign(
          {
            start: create_ics_datearray(n.date, false), // 日付のみなのでUTCに変換しない
            end: create_ics_datearray(moment(n.date).add(1, "days"), false), // icsの仕様によりall-dayイベントの終わりはその日の翌日を指定, 日付のみなのでUTCに変換しない
            title: n.summary,
            description: n.description,
            created: ics_death_date
          },
          event_base
        )
      );
    }
  }

  const calendar = createEvents(events);
  if (calendar.error) {
    throw calendar.error;
  }

  const calendar_url = URL.createObjectURL(new Blob([calendar.value!], {type: "text/calendar"}));

  return [calendar_url, now];
}

function create_ics_datearray(m: moment.Moment, include_time: boolean): DateArray {
  const date_array = [m.year(), m.month()+1, m.date()];
  if (include_time) {
    date_array.push(m.hour(), m.minute());
  }
  return date_array as DateArray;
}
