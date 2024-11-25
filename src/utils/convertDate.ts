export const convertDate = (date: string | null): string => {
  if (!date) return '';

  const newDate = new Date(date);
  return `${newDate.getDate()}.${
    newDate.getMonth() + 1
  }.${newDate.getFullYear()}`;
};
