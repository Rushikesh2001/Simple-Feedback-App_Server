function generateId() {
  var issueId = "IS";
  for (let i = 0; i < 5; i++) {
    issueId += parseInt(Math.random() * 10).toString();
  }
  return issueId;
}

module.exports = generateId;
