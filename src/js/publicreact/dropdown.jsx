var React = require ("react");
var ReactDOM = require("react-dom");


module.exports = function(opt){

	var Optiontab = React.createClass({
	render: function() {
		var classId = this.props.idNumber;

		var optionNodes = this.props.data.map(function (comment,index) {
		      return  (<li key={index}><a href="javascript:;" className={"_module_select_" + classId }>{comment.name}</a></li>);
    	});

	    return (<ul className="dropdown-menu">{optionNodes}</ul>);

	  }

	});



    var SelectBox = React.createClass({
	render: function() {
	    return (
		    <div className="btn-group">
			    <button data-toggle="dropdown" className="btn btn-default dropdown-toggle" aria-expanded="false">
			    {this.props.select} <span className="caret"></span>

			    </button>
			    
			 	<Optiontab data={this.props.data} idNumber={this.props.idNumber}/>
			    
			</div>
	    );
	  }
	});


	ReactDOM.render(
	  <SelectBox data={opt.option} select={opt.select} idNumber={opt.id}/>,
	  opt.dom
	);

	$("._module_select_" + opt.id).click(function(){

		var select_index = $(this).parent().index();
		opt.onSelect(opt.option[select_index]);

	})


}

