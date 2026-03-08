function formatDate(date: string) {
  try {
    const formatter = Intl.DateTimeFormat("en-IN");

    return formatter.format(new Date(date));
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(`Error: ${error}`);
    }
  }
}

export default formatDate;
