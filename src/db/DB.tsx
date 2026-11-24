import Dexie, {type Table} from "dexie";
import moment from "moment-timezone";
import DBPerson from "./DBPerson";
import Person from "../model/Person";

export default class DB extends Dexie {
  static readonly instance: DB = new DB();

  persons!: Table<DBPerson, number>;

  private constructor() {
    // 既存の IndexedDB をそのまま開けるように、名前とスキーマを維持する。
    super("PersonDB");
    this.version(1).stores({
      persons: "++id, name, title, death_date_unixtime, birth_date_unixtime, is_birth_date_accurate"
    });
  }

  async addPerson(person: Person): Promise<number> {
    return this.persons.add(this.toRecord(person));
  }

  async updatePerson(person: Person): Promise<number> {
    return this.persons.update(person.db_id!, this.toRecord(person));
  }

  private toRecord(person: Person): Omit<DBPerson, "id"> {
    return {
      name: person.name,
      title: person.title,
      death_date_unixtime: person.death_date.valueOf(),
      birth_date_unixtime: person.birth_date?.valueOf() ?? null,
      is_birth_date_accurate: person.is_birth_date_accurate
    };
  }

  async deletePerson(person: Person): Promise<void | PromiseRejectedResult> {
    if (person.db_id === null) {
      return Promise.reject("Person has no db_id.");
    }
    return this.persons.delete(person.db_id!);
  }

  async getAllPersons(): Promise<Person[]> {
    return this.persons.toArray()
      .then((dp_array: DBPerson[]) => {
        return dp_array.map((dp: DBPerson) => new Person(
            dp.id ?? null,
            dp.name,
            dp.title,
            moment(dp.death_date_unixtime),
            dp.birth_date_unixtime ? moment(dp.birth_date_unixtime) : null,
            dp.is_birth_date_accurate
          )
        );
      });
  }
}
