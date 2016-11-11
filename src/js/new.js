console.log("sys error");

var react = require("./publicreact/demo.jsx");


var dropdown = require("./publicreact/dropdown.jsx");


var dropdownC1 = new dropdown({
	dom:document.getElementById("dropdown1")
});

var dropdownC2 = new dropdown({
	dom:document.getElementById("dropdown2")
});

