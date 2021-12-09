import {Dt} from "../../../../types";

export type DailyCardProps = {
  dailyInfo : {
    dt: Dt,
    temp: { day: number},
    weather: [{icon: string}]
  }
}