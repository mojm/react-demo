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
				title: '蝙蝠侠是正义（just）的吗？',
				description: '简单来说，法律代表着社会正义，超级英雄代表着个人正义。按理来说，这两种正义应该是一致的，可是现实生活中我们看到的却是相反的。警察要抓蝙蝠侠，抓绿箭侠，抓蜘蛛侠等等等等。还有就是，法律是不允许刑讯逼供的，虽然这样可能会更有效率的得到线索，拯救更多的人。比如，蝙蝠侠如果砍下监狱里小丑同党的一只胳膊，他就会说出核弹的具体位置，警方就能拯救城市，可是在法律面前，能那么做吗？这就是戏剧冲突。',
				voteCount: 10
			},{
				id:2,
				title: '蝙蝠侠的「核心」魅力在哪里？',
				description: '高智商就是主角光环，照你这种理解，超人的能力也是主角光环，绿灯的戒指也是主角光环，闪电的神速力也是主角光环，戴安娜的神之血统也是主角光环。超级英雄漫画哪个不是主角光环？你的理解是蝙蝠侠的优点是编剧照顾他，而缺点就是实打实的？乔夫琼斯肯定喜欢你。',
				voteCount: 8
			},{
				id:3,
				title: '蝙蝠侠的 Wayne 集团和钢铁侠的 Stark 工业相比哪个实力更强？',
				description: '恩家族从最初殖民者时代就开始在高谭市的土地上建立自己的帝国了，可以说是美国老贵族的代表。史塔克家族则是在美国20世纪初期高技术迅猛发展的时代利用新科技发明迅速成长起来的高科技富豪。这点从他们的住宅风格和个人的行事风格就有明显的区分。个人认为从账面上来看史塔克家族应该是最富有的，但是韦恩家族的隐形资产应该要多很多。要不是韦恩家族人丁不旺，应该是远超史塔克家族的.',
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
		var index = 0;
		for (var i = 0, j = questions.length; i < j; i++) {
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
						蝙蝠侠
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
