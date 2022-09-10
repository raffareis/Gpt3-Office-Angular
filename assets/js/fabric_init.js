var ButtonElements = document.querySelectorAll(".ms-Button.AlertExamples");
for (var i = 0; i < ButtonElements.length; i++) {
  new fabric["Button"](ButtonElements[i], function () {
    alert("You clicked a New User button");
  });
}

var DropdownHTMLElements = document.querySelectorAll(".ms-Dropdown");
for (var j = 0; j < DropdownHTMLElements.length; ++j) {
  var Dropdown = new fabric["Dropdown"](DropdownHTMLElements[j]);
}
