import moment from "moment";

export function buildWeek() {
  const startDay = moment().startOf("isoWeek");
  let week = [startDay];
  for (let i = 0; i < 6; i++) {
    const day = week[week.length - 1].clone().add(1, "d");
    week.push(day);
  }
  return week;
}
