import React from 'react';
import ReactDOM from 'react-dom';
import QuestionItem from '../components/QuestionItem.js';

var QuestionList = React.createClass({

	render: function(){
		var onVote = this.props.onVote;
		var questions = this.props.questions;
		var questionComs = questions.map(function(e){
			return (
				<QuestionItem key = {e.id} id= {e.id} title = {e.title} description = {e.description} voteCount = {e.voteCount} onVote={onVote}/>
			)
		});

		return (

			<div className= 'row col-md-8 col-md-offset-2'>
			{questionComs}
			</div>
		)
	}
});

module.exports = QuestionList;