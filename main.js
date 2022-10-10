function addNewEvent() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;

    if (text.length === 0) {
        alert("digite algo");
        document.getElementById("task_name").focus();
        return;
    }

    var listItem = document.createElement("li");
    listItem.className = "list-item";

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);

    document.getElementById("task_name").value = '';
    document.getElementById("task_name").focus();
}

(function () {
    document.getElementById("task_name").focus();
})();