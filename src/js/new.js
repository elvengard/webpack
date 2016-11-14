console.log("sys error");

var react = require("./publicreact/demo.jsx");


var dropdown = require("./publicreact/dropdown.jsx");


var dropdownC1 = new dropdown({
	dom:document.getElementById("dropdown1"),
	option:[
				{name:"测试1",value:"测试2"},
				{name:"测试2",value:"测试3"},
				{name:"测试3",value:"测试4"},
				{name:"测试4",value:"测试5"}
			],
	select:"--请选择--",
	id:"C1",
	onSelect:function(json){
		console.log(json)
	}
});

var dropdownC2 = new dropdown({
	dom:document.getElementById("dropdown2"),
	option:[
				{name:"100ml",value:"测试2"},
				{name:"200ml",value:"测试3"},
				{name:"300ml",value:"测试4"},
				{name:"400ml",value:"测试5"}
			],
	select:"请选择规格",
	id:"C2",
	onSelect:function(json){
		console.log(json);
	}
});

