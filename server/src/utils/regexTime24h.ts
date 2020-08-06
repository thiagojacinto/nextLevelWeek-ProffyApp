/**
 * RegEx used to validate a time in format "12:30".
 *
 * Examples:
 * - valid: "13:25", "23:54", "03:00", "19:01"
 * - not valid: "1:03", "5:5", "24:01"
 *
 * Source: https://digitalfortress.tech/tricks/top-15-commonly-used-regex/
 */
export const regexTime24h = new RegExp("^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$");
