var termText = document.getElementById("terminalText");
var termTextTest = document.getElementById("terminalText");
var mainText = document.getElementById("mainText");
const history = [];
var historyPlace = 0;
var oneAtATime = 0;

var i = 0;

initialize();
rightTerminal();

function rightTerminal() {
  if (window.getComputedStyle(termText).display === "none") {
    termText = document.getElementById("mobileterminalText");
  }
}
//init
function initialize() {
  writeLines(banner, "banner");
  writeLines(mobilebanner, "mobilebanner");
}
termText.scrollIntoView(false);

function mobileKeyboardDown() {
  if (window.getComputedStyle(termTextTest).display === "none") {
    termText.blur();
  }
}
function enterKey(e) {
  e = e || window.event;
  var temp = termText.value;

  if (e.keyCode == 13 && oneAtATime == 0) {
    mobileKeyboardDown();
    switch (temp.toLowerCase().trim()) {
      case "help":
        writeLines(help, "mainText");
        break;
      case "ls":
        writeLines(help, "mainText");
        break;
      case "cd whoisadam":
      case "whoisadam":
        writeLines(whoisadam, "mainText");
        writeLines(whoisadammobile, "mainText");
        break;
      case "cd email":
      case "email":
        writeLines(openmail, "mainText");
        OpenNewTab("mailto:adamroohr@gmail.com");
        break;
      case "cd cv":
      case "cv":
        writeLines(openpdf, "mainText");
        OpenNewTab("attachments/CV_2026.pdf");
        break;
      case "cd banner":
      case "banner":
        writeLines(onlyBanner, "mainText");
        break;
      case "cd history":
      case "history":
        writeLines(newline, "mainText");
        writeLines(history, "mainText");
        break;
      case "clear":
        document.getElementById("mainText").innerHTML = "";
        break;
      case "cd social":
      case "social":
        writeLines(social, "mainText");
        break;
      case "cd projects":
      case "projects":
        writeLines(projects, "mainText");
        break;
      case "cd linkedin":
      case "linkedin":
        OpenNewTab("https://www.linkedin.com/in/adam-r%C3%B6hr-90720ba1/");
        break;
      case "cd github":
      case "github":
        OpenNewTab("https://github.com/Rohret");
        break;
      case "cd instagram":
      case "instagram":
        OpenNewTab("https://www.instagram.com/adamrohr_/");
        break;
      case "cd facebook":
      case "facebook":
        OpenNewTab("https://www.facebook.com/adam.rohr.94");
        break;
      default:
        writeLines(commandnotfound, "mainText");
        writeLines(commandnotfoundmobile, "mainText");
        break;
    }
    const noWhitespace = temp.replace(/\s/g, "");
    if (noWhitespace != "") {
      history.push(noWhitespace);
    }
    termText.value = "";
    historyPlace = history.length;
  }
}

function checkarrowkey(e) {
  e = e || window.event;

  if (e.keyCode === 38) {
    if (historyPlace > 0) {
      historyPlace--;
      termText.value = history[historyPlace];
      setTimeout(() => {
        termText.setSelectionRange(
          termText.value.length,
          termText.value.length
        );
        termText.focus();
      }, 0);
    }
    if (termText.value == history[0]) {
      setTimeout(() => {
        termText.setSelectionRange(
          termText.value.length,
          termText.value.length
        );
        termText.focus();
      }, 0);
    }
  }
  if (e.keyCode === 40) {
    if (historyPlace < history.length - 1) {
      historyPlace++;
      termText.value = history[historyPlace];
    }
  }
}
function OpenNewTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 750);
}

function promiseFunc(name, time) {
  if (time != 33) {
    console.log(time);
    oneAtATime = 1;
    setTimeout(() => {
      oneAtATime = 0;
    }, time * 50);
  }
}

function writeLines(name, id) {
  promiseFunc(name, name.length);
  name.forEach(function (item, index) {
    setTimeout(() => {
      addLine(item, id);
      window.scrollTo(0, document.body.offsetHeight);
    }, index * 50);
  });
}

function addLine(text, paraId) {
  const newPara = document.createElement("p");
  newPara.innerHTML = text;
  document.getElementById(paraId).appendChild(newPara);
}

function notFocused() {
  setTimeout(function () {
    termText.focus();
  }, 100);
}
