import React from 'react';
import ReactDom from 'react-dom';
var AddQuestion = React.createClass({



	render: function(){
		return (
			<button className="btn btn-default btn-success pull-right" onClick = {this.props.toggleForm}>添加问题</button>
		)
	}
});

module.exports = AddQuestion;