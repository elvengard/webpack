var React = require ("react");
var ReactDOM = require("react-dom");


module.exports = function(opt){

    var CommentBox = React.createClass({
	render: function() {
	    return (
		    <div className="btn-group">
			    <button data-toggle="dropdown" className="btn btn-default dropdown-toggle" aria-expanded="false">
			    Action <span className="caret"></span>

			    </button>
			    <ul className="dropdown-menu">
			        <li><a href="buttons.html#">选项一</a></li>
			        <li><a href="buttons.html#">Another action</a></li>
			        <li><a href="buttons.html#">Something else here</a></li>
			        <li className="divider"></li>
			        <li><a href="buttons.html#">Separated link</a></li>
			    </ul>
			</div>
	    );
	  }
	});

	ReactDOM.render(
	  <CommentBox />,
	  opt.dom
	);

}

