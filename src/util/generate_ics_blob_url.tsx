import ical_generator from "ical-generator";
import moment from "moment-timezone";
import Person from "../model/Person";

export default function generate_ics_blob_url(persons: Person[]): [string, moment.Moment] {
  const now = moment.tz("Asia/Tokyo");

  const cal = ical_generator();
  cal.prodId({
    company: "Nenki Calendar",
    product: "Nenki Calendar",
    language: "JA"
  });
  cal.name("年忌カレンダー");
  cal.timezone("Asia/Tokyo");

  for (const p of persons) {
    for (const n of p.nenki_list.nenki_array) {
      cal.createEvent({
        start: n.date,
        timezone: n.date.tz(),
        allDay: true,
        summary: n.summary,
        description: n.description,
        created: p.death_date,
        lastModified: now
      });
    }
  }

  return [cal.toURL(), now];
}
