export const formatText = (selection, format) => {
  let markdown;
  format === "bold"
    ? (markdown = "**")
    : format === "italic"
    ? (markdown = "*")
    : format === "heading" && (markdown = "##");

  let formattedText;

  // **this is a strong text**
  // ##This is a Heading text

  if (format !== "heading") {
    formattedText = markdown + selection.toString() + markdown;
  } else {
    formattedText = markdown + selection.toString();
  }

  return formattedText;
};

export const reverseFormatText = (selection, format) => {
  let markdown;
  format === "bold"
    ? (markdown = "**")
    : format === "italic"
    ? (markdown = "*")
    : format === "heading" && (markdown = "##");

  let formattedText;

  // **this is a strong text**
  // ##This is a Heading text

  if (format !== "heading") {
    formattedText = markdown + selection.toString() + markdown;
  } else {
    formattedText = markdown + selection.toString();
  }

  return formattedText;
};
