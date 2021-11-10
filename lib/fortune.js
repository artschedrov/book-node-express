let fortunes = [
  "fortunes 1",
  "fortunes 2",
  "fortunes 3",
  "fortunes 4",
  "fortunes 5",
  "fortunes 6"
];

exports.getFortunes = function () {
  let idx = Math.floor(Math.random() * fortunes.length);
  return fortunes[idx];
}