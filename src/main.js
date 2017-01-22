import React from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap';
import QuestionApp from './container/QuestionApp.js';

var body = document.getElementsByTagName('body')[0];
var app = document.createElement('div');
app.setAttribute('id', 'app');
body.append(app);

ReactDOM.render(
	<QuestionApp />,
	document.getElementById('app')
);


