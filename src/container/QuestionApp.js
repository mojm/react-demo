import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './QuestionList.js';
import QuestionForm from '../components/QuestionForm.js';
import AddQuestion from '../components/AddQuestion.js';
import '../../css/style.css';

var QuestionApp = React.createClass({

	getInitialState: function(){
		var questions = [
			{
				id:1,
				title: '产品经理与程序员矛盾的本质是什么？',
				description: '理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
				voteCount: 10
			},{
				id:2,
				title: '热爱编程是一种怎样的体验？',
				description: '别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
				voteCount: 8
			},{
				id:3,
				title: '热爱编程是一种怎样的体验？',
				description: '别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
				voteCount: 5
			}
		];
		return {
			questions: questions,
			formDisplay: false
		}
	},

	addQuestion: function(newQuestion){
		newQuestion.id = this.state.questions.length + 1 ;
		var newQuestions = this.state.questions.concat( newQuestion );
		this.sortQuestion(newQuestions);

	},

	onVote: function(key, newCount){
		var questions = this.state.questions;
		for (var i = 0, j = questions.length; i < j; i++) {
		var index = 0;
			if(key === questions[i].id) {
				index = i;
			}
		}

		questions[index].voteCount = newCount;
		this.sortQuestion(questions);

	},

	toggleForm: function(){
		this.setState({
			formDisplay:!this.state.formDisplay
		})

	},

	sortQuestion: function(questions){
		questions.sort(function(a, b){
			return b.voteCount - a.voteCount;
		})
		this.setState({
			questions: questions
		})
	},

	render: function(){
		return (
			<div>
			<div className="jumbotron text-center clearfix">
				<div id= 'banner' className='col-md-10 col-md-offset-1'>
					<h1>
						React
					</h1> 
					<AddQuestion toggleForm = {this.toggleForm}/>
				</div>
			</div>
			<div className="main container">

				<div className = 'row'>
					<QuestionForm formDisplay = {this.state.formDisplay} addQuestion= {this.addQuestion} toggleForm = {this.toggleForm}/>
					<QuestionList questions = {this.state.questions} onVote={this.onVote}/>
				</div>
			</div>
			</div>

		)
	}
});

module.exports = QuestionApp;
