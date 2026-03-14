export function formatDate(isoDateTimeFormatString: string) {
  try {
    const date = new Date(isoDateTimeFormatString);

    const formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });

    return formattedDate;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(`Error: ${error}`);
    }
  }
}
