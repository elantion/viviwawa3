const socket = new WebSocket('/ws');

socket.addEventListener('message', e => {
    document.getElementById("messages").append(e.data, document.createElement("br"));
});

const form = document.querySelector("form");
form.addEventListener("submit", () => {
    socket.send(form.elements.namedItem("content").value);
    form.elements.namedItem("content").value = "";
});
