import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage.js';
import DingdangPage from './routes/DingdangPage/DingdangPage.js';
import MinePage from './routes/MinePage/MinePage.js';
import CartPage from './routes/CartPage/CartPage.js';
import RegisterPage from './routes/RegisterPage/RegisterPage.js';
import LoginPage from './routes/LoginPage/LoginPage.js';
import GoodsListPage from './routes/GoodsListPage/GoodsListPage.js';
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
        {/* 注册 */}
        <Route path="/register" exact component={RegisterPage} />
        {/* 登录 */}
        <Route path="/login" exact component={LoginPage} />
        {/* 商品列表 */}
        <Route path="/goodslist" exact component={GoodsListPage} />
        {/* 默认首页路由 */}
        <Redirect path='/' to={{pathname:'/home'}}  />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
