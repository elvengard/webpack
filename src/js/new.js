console.log("sys error");

var react = require("./publicreact/demo.jsx");


var dropdown = require("./publicreact/dropdown.jsx");


var dropdownC1 = new dropdown({
	dom:document.getElementById("dropdown1"),
	id:"C1",
	title:"--请选择要的规格--",
	option:[
				{name:"测试1",value:"测试2"},
				{name:"测试2",value:"测试3"},
				{name:"测试3",value:"测试4"},
				{name:"测试4",value:"测试5"}
			],
	value:undefined,
	

	onSelect:function(json){
		console.log(json)
		dropdownC1.value = json.value;
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
	title:"请选择规格",
	id:"C2",
	onSelect:function(json){
		console.log(json);
		dropdownC2.value = json.value;
	},
	value:undefined
});



$("#bb_add_user").click(function(){
	console.log(dropdownC1.value);
	console.log(dropdownC2.value);
})

