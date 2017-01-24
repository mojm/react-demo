import React from 'react';
import ReactDOM from  'react-dom';

var QuestionItem = React.createClass({
	voteUp: function(){
		var newCount = this.props.voteCount + 1;
		this.props.onVote(this.props.id, newCount);
	},
	voteDown: function(){
		var newCount = this.props.voteCount - 1;
		this.props.onVote(this.props.id, newCount)
	},
	render: function(){

		return (
			<div className = 'media row'>
				<div className="media-left col-md-1">
					<button className="btn btn-default" onClick = {this.voteUp}>
						<span className="glyphicon glyphicon-thumbs-up"></span>
						<span className="vote-count">{this.props.voteCount}</span>
					</button>
					<button className="btn btn-default" onClick = {this.voteDown}>
						<span className="glyphicon glyphicon-thumbs-down"></span>
					</button>
				</div>
				<div className="media-body col-md-11">
					<h4>{this.props.title}</h4>
					<p>{this.props.description}</p>
				</div>
			</div>
		)
	}
});

module.exports = QuestionItem;