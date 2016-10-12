module.exports = function(opt){
	this.num1 = opt.num1;
	this.num2 = opt.num2;
	this.sum = function(){
		console.log(this.num1+this.num2);
	}


}
