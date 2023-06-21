function formatDate(inputDate: any) {
  const dateObject = new Date(inputDate);

  // Convert to the desired format
  const year = dateObject.getUTCFullYear(); // 2023
  const month = (dateObject.getUTCMonth() + 1).toString().padStart(2, "0"); // 01
  const day = dateObject.getUTCDate().toString().padStart(2, "0"); // 11
  const hours = dateObject.getUTCHours().toString().padStart(2, "0"); // 18
  const minutes = dateObject.getUTCMinutes().toString().padStart(2, "0"); // 30
  const seconds = dateObject.getUTCSeconds().toString().padStart(2, "0"); // 00
  const milliseconds = dateObject
    .getUTCMilliseconds()
    .toString()
    .padStart(3, "0"); // 000

  const convertedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  return convertedDate; // Output: 2023-01-11 18:30:00.000
}

// Example usage
const inputDate = "2023-01-11T18:30:00.000Z";
console.log(formatDate(inputDate));
