export default interface DBPerson {
  id?: number;
  name: string;
  title: string;
  death_date_unixtime: number;
  birth_date_unixtime: number | null;
  is_birth_date_accurate: boolean | null;
}
