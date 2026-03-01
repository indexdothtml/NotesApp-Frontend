function formatDate(date) {
  if (!date) {
    return date;
  }
  try {
    const formatter = Intl.DateTimeFormat("en-IN");

    return formatter.format(new Date(date));
  } catch (error) {
    throw new Error(error);
  }
}

export default formatDate;
