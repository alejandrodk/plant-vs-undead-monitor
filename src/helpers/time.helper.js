import {
  addDays,
  eachDayOfInterval,
  endOfMonth,
  format,
  startOfMonth,
  subDays,
  setDay,
  setHours,
  setMinutes,
  addHours,
  addMinutes,
} from "date-fns";
import { es } from "date-fns/locale";

export function getUTCDate(date) {
  const localDate = date ? new Date(date) : new Date();
  return new Date(
    Date.UTC(
      localDate.getUTCFullYear(),
      localDate.getUTCMonth(),
      localDate.getUTCDate(),
      localDate.getUTCHours(),
      localDate.getUTCMinutes(),
      localDate.getUTCSeconds()
    )
  );
}

export function getCurrentMonthAndYear({ verbose = false }) {
  return verbose
    ? format(new Date(), "MMMM yyy", {
        locale: es,
      })
    : format(new Date(), "M-yyy");
}

export function getDayFromDate(date) {
  return format(new Date(date), "dd");
}

export function getHourFromDate(date) {
  return format(new Date(date), "HH");
}

export function getDayOfWeek(date) {
  return getUTCDate(date).getUTCDay();
}

export function getDayOfWeekName(date) {
  return format(getDateWithLocalOffset(date), "EEEE", {
    locale: es,
  });
}

export function getMonthStartDayOfWeek(month) {
  return startOfMonth(month).getUTCDay();
}

export function getMonthEndDayOfWeek(month) {
  return endOfMonth(month).getUTCDay();
}

export function getDaysBeforeMonthStart(month, quantity) {
  return eachDayOfInterval({
    start: subDays(startOfMonth(month), quantity),
    end: subDays(startOfMonth(month), 1),
  });
}

export function getDaysFromMonth(month) {
  return eachDayOfInterval({
    start: startOfMonth(month),
    end: endOfMonth(month),
  });
}

export function getDaysBeforeMonthEnd(month, quantity) {
  return eachDayOfInterval({
    start: addDays(endOfMonth(month), 1),
    end: addDays(endOfMonth(month), 6 - quantity),
  });
}

export function getDaysBetweenDates(start, end) {
  return eachDayOfInterval({
    start,
    end,
  });
}

export function setTimeToDate(date, hours, minutes) {
  return setHours(setMinutes(date, minutes), hours);
}

export function addMinutesToDate(date, minutes) {
  return addMinutes(date, minutes);
}

export function convertTo24Hs(date, sufix) {
  return sufix === "pm" ? addHours(date, 12) : date;
}

export function setDateValues(date, hours, minutes, sufix) {
  const d = setTimeToDate(date, hours, minutes);
  return sufix ? convertTo24Hs(d, sufix) : d;
}

export function getDateWithLocalOffset(date) {
  return new Date(
    getUTCDate(date).valueOf() +
      getUTCDate(date).getTimezoneOffset() * 60 * 1000
  );
}

export function getTime12HVerbose(date) {
  return format(getDateWithLocalOffset(date), "h:mm aaa", {
    locale: es,
  });
}

export function getWeekDayName(day) {
  return format(setDay(getDateWithLocalOffset(new Date()), day), "eeee", {
    locale: es,
  });
}
