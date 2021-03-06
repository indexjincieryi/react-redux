// 第三方
import { connect } from 'react-redux';
import { polyfill } from 'es6-promise';
polyfill();
import Bundle from './containers/Bundle.jsx';

// 样式
import './styles';

import React from 'react';
import ReactDom from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// 全局存储 Redux Store
import store from './store';
// 页面
import IndexPage from './containers/index.jsx';
//import TestPage from './containers/test.jsx';

// 异步引入

import TestPageContainer from 'bundle-loader?lazy&name=app-[List]!./containers/test.jsx';
const TestPage = () => (
  <Bundle load={TestPageContainer}>
    {(TestPage) => <TestPage />}
  </Bundle>
);


const App = (props) => (
  <BrowserRouter>
    <Switch>
      <Route path='/test' component={TestPage}/>
      <Route path='/' component={IndexPage}/>
    </Switch>
  </BrowserRouter>
);

//const connectedApp = connect(state => state)(App);

ReactDom.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));