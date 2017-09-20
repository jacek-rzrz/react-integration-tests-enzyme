export function calendar(div) {
    const span = document.createElement("span");
    span.setAttribute("data-qa", "today");
    span.innerHTML = new Date().toLocaleDateString("en-GB");

    div.appendChild(document.createTextNode("Today is "));
    div.appendChild(span);
}