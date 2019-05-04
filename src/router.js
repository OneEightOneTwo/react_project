import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
// 引入组件
import IndexPage from './routes/IndexPage/IndexPage.js';
import DingdangPage from './routes/DingdangPage/DingdangPage.js';
import MinePage from './routes/MinePage/MinePage.js';
import CartPage from './routes/CartPage/CartPage.js';
import Search from './components/Search/Search';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* 首页 */}
        <Route path="/home" exact component={IndexPage} />
        {/* 叮当商城 */}
        <Route path="/dingdang" exact component={DingdangPage} />
        {/* 我的 */}
        <Route path="/mine" exact component={MinePage} />
        {/* 购物车 */}
        <Route path="/cart" exact component={CartPage} />
        {/* 搜索 */}
        <Route path="/search" exact component={Search} />
        {/* 默认首页路由 */}
        <Redirect path='/' to={{pathname:'/home'}}  />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
