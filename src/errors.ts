export function checkDuplicateVersionCodeError(message: string): boolean {
  const regex = /Version code \d+ has already been used\./;
  return regex.test(message);
}