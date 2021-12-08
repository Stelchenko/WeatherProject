export type DailyScreenViewProps = {
  getLocation: () => void,
  viewLocation: null | {latitude: number, longitude: number}
}