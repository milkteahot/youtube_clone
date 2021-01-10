dragElement(document.getElementById("mydiv"));

function dragElement(elem) {
    var pos1 = 0, post2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elem.id + "header")) {
        document.getElementById(elem.id + "header").onmousedown = dragMouseDown;
    }
}