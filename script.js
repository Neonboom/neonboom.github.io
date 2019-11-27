function CopyTitle() {
    document.getElementById("title").value =
    document.getElementById("newtitle").value;
}
    function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function RPOon() {
    document.getElementById("overlay").style.display = "block";
}

function RPOoff() {
    document.getElementById("overlay").style.display = "none";
}
function highlightCool() {
	$("ul.CoolmathgamesWebsites").addClass("CoolmathgamesWebsites1");
  setTimeout('$("ul.CoolmathgamesWebsites").addClass("CoolmathgamesWebsites2");', 500);
}
function changeTitle(x) {
  document.getElementById("title").value = x;
}