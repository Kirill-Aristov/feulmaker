interface Rows {
  rows: string,
  rowsTitle: string,
  massa: number | "",
  humidity: number | "",
  ashContent: number | "",
  heat: number | "",
}
interface HeaderRows {
  rows: string,
  headerTitle?: string,
  nestedRows: Rows[],
}