import dva from 'dva';
import './index.css';

//全局引入Ui框架的样式
import 'antd-mobile/dist/antd-mobile.css'; 
// 1. Initialize
const app = dva();

// 2. Plugins 使用插件
// app.use({});

// 3. Model Redux路径
// app.model(require('./models/example').default);

// 4. Router 路由路径
app.router(require('./router').default);



// 5. Start 
app.start('#root');
