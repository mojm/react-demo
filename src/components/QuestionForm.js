import React from 'react';
import ReactDOM from 'react-dom';

var QuestionForm = React.createClass({

	submitQuestion: function(e){
		e.preventDefault();
		var newQuestion = {
			title: this.refs.newTitle.value,
			description: this.refs.newDescription.value,
			voteCount: 0
		};
		this.refs.addQuestionForm.reset();
		this.props.addQuestion(newQuestion);
	},

	render: function(){


	var styleObj = {
		display: this.props.formDisplay ? 'block' : 'none'
	};
		return (
				<form onSubmit={this.submitQuestion} ref = 'addQuestionForm' name = 'addQuestion' role='form' className="col-md-8 col-md-offset-2" style = {styleObj}>
					<div className="form-group">
						<label htmlFor="inputTitle">你的问题</label>
						<input type="text" id='inputTitle' className="form-control" placeholder='你问题的标题' ref='newTitle'/>
					</div>
					<textarea rows="5" className="form-control" placeholder='问题的描述' ref='newDescription'></textarea>
					<button type='button' className="btn btn-default pull-right" onClick = {this.props.toggleForm}>取消</button>
					<button type='submit' className="btn btn-success pull-right" >确认</button>
				</form>
		)
	}
})

module.exports = QuestionForm;