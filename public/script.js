const socket = io();
const textArea = document.getElementById("textArea");

function encodeBase64(content) {
  return btoa(unescape(encodeURIComponent(content)));
}
function decodeBase64(encoded) {
  return decodeURIComponent(escape(atob(encoded)));
}
textArea.addEventListener("input", () => {
  const content = textArea.value;
  const encodedContent = encodeBase64(content);
  socket.emit("editInput", encodedContent);
});

socket.on("updateInput", (encodedContent) => {
  const content = decodeBase64(encodedContent);
  textArea.value = content;
});
