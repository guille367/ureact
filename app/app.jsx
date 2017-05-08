import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';
import {Main} from 'app/components/Main';
import {Timer} from './components/Timer';
import {Countdown} from './components/Countdown';

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/Timer" component={Timer}></Route>
            <Route path="/Countdown" component={Countdown}></Route>
        </Route>
    </Router>,
    document.getElementById('app')
);