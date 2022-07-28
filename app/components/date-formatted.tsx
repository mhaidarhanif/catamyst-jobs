import { dateFormat } from "../libs/date-fns";

export function DateFormatted({ date }: { date: Date }) {
  return <p>Posted {dateFormat(date, "d LLLL yyyy")}</p>;
}
