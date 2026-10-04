function validateTaskText(text) {
  if (typeof text !== "string" || text.trim() === "") {
    return "Task text is required";
  }

  return null;
}

module.exports = { validateTaskText };