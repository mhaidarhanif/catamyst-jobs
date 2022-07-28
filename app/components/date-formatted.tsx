import { dateFormat } from "~/libs/date-fns";

export function DateFormatted({ date }: { date: Date }) {
  const dateObject = new Date(date);
  return <p>Posted {dateFormat(dateObject, "d LLLL yyyy")}</p>;
}
