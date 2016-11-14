var React = require ("react");
var ReactDOM = require("react-dom");


module.exports = function(opt){




	//react组件区-----------------------------------
	var Optiontab = React.createClass({
	render: function() {
		var classId = this.props.idNumber;

		var optionNodes = this.props.data.map(function (comment,index) {
		      return  (
		      			<li key={index}>
		      				<a href="javascript:;" className={"_module_select_" + classId }>
		      					{comment.name}
		      				</a>
		      			</li>
		      		   );
    	});

	    return (<ul className="dropdown-menu">{optionNodes}</ul>);

	  }

	});


	var bottonStyle = {minWidth: "100px" }
	var titleStyle = {marginRight: "12px"}


    var SelectBox = React.createClass({
	render: function() {
	    return (
		    <div className="btn-group">
			    <button data-toggle="dropdown" className="btn btn-default dropdown-toggle" aria-expanded="false"
			     style={bottonStyle}>
				    <span className="_module_title" style={titleStyle}>{this.props.title}</span>
				    <span className="caret"></span>
			    </button>
			    
			 	<Optiontab data={this.props.data} idNumber={this.props.idNumber}/>
			    
			</div>
	    );
	  }
	});


	ReactDOM.render(
	  <SelectBox data={opt.option} title={opt.title} idNumber={opt.id}/>,
	  opt.dom
	);
	//react组件区----------------------------------------------------------------------------------------



	$("._module_select_" + opt.id).click(function(){

		var select_index = $(this).parent().index();
		opt.onSelect(opt.option[select_index]);
		$(this).parent().parent().parent().find("._module_title").text(opt.option[select_index].name);

	})


}

