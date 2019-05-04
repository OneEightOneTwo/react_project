import { Component } from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import styles from './MinePage.css';

class MinePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // 导航订单
            form: [{
                text: '待付款',
                img: require('../../assets/new_fukuan.png')
            }, {
                text: '当前订单',
                img: require('../../assets/new_dingdan.png')
            }, {
                text: '待评价',
                img: require('../../assets/new_pingjia.png')
            }],
            // 主体
            main: [{
                text: '全部订单',
                img: require('../../assets/dingdan2.png')
            }, {
                text: '叮当送礼',
                img: require('../../assets/gifts.png')
            }, {
                text: '优惠价',
                img: require('../../assets/youhuiquan.png')
            }, {
                text: '地址管理',
                img: require('../../assets/dingwei3.png')
            }, {
                text: '常见问题',
                img: require('../../assets/problems.png')
            }, {
                text: '预订订单',
                img: require('../../assets/preSaleOrderList.png')
            }],
            // 登陆状态
            bool: true,
            userName: ''
        }
    }
    //跳登录
    gotoLogin = () => {
        this.props.history.push('./login')
    }
    // 跳注册
    gotoRegister = () => {
        this.props.history.push('./register')
    }
    // 跳首页
    gotoIndex = () => {
        this.props.history.push('./index')
    }
    // 退出登录状态
    removeUser = () => {
        localStorage.removeItem('user');
        this.setState({
            bool: true,
            userName: ''
        })
    }
    // 挂载后
    componentDidMount() {
        // 判断登录状态
        let user = JSON.parse(localStorage.getItem('user'))
        // console.log(user)
        if (user == null) {
            return
        } else {
            this.setState({
                bool: false,
                userName: user
            })
        }
    }
    render() {
        return (
            <div>
                {/* 头部登录 */}
                <header className={styles.header}>
                    <img src={require('../../assets/personal_bg.png')} alt="" />
                    <ul className={styles.header_user}>
                        <li className={styles.userImage}>
                            <img src={require('../../assets/personal_ren.png')} alt="" />
                        </li>
                        {/* 未登录状态 */}
                        <li className={styles.login} style={this.state.bool ? { display: 'block' } : { display: 'none' }}>
                            <span onClick={this.gotoRegister}>注册</span>
                            <span> / </span>
                            <span onClick={this.gotoLogin}>登录</span>
                        </li>
                        {/* 登录状态 */}
                        <li className={styles.login} style={this.state.bool ? { display: 'none' } : { display: 'block' }}>
                            <span>欢迎您</span>
                            <span> </span>
                            <span>{this.state.userName}</span>
                        </li>
                    </ul>
                </header>
                {/* 导航订单 */}
                <nav>
                    <ul className={styles.form}>
                        {this.state.form.map((item, index) => {
                            return <li key={index}>
                                <i>
                                    <img src={item.img} alt="" />
                                </i>
                                <span>{item.text}</span>
                            </li>
                        })}
                        {/* <li>
                            <i> <img src={require('../../assets/new_fukuan.png')} alt="" /></i>
                            <span>待付款</span>
                        </li>
                        <li>
                            <i> <img src={require('../../assets/new_dingdan.png')} alt="" /></i>
                            <span>当前订单</span>
                        </li>
                        <li>
                            <i> <img src={require('../../assets/new_pingjia.png')} alt="" /></i>
                            <span>待评价</span>
                        </li> */}
                    </ul>
                </nav>
                {/* 主体 */}
                <main>
                    <ul>
                        {this.state.main.map((item, index) => {
                            return <li key={index}>
                                <i>
                                    <img src={item.img} alt="" />
                                </i>
                                <span>{item.text}</span>
                            </li>
                        })}
                        {/* <li>
                            <i>
                                <img src={require('../../assets/dingdan2.png')} alt="" />
                            </i>
                            <span>全部订单</span>
                        </li>
                        <li>
                            <i>
                                <img src={require('../../assets/gifts.png')} alt="" />
                            </i>
                            <span>叮当送礼</span>
                        </li>
                        <li>
                            <i>
                                <img src={require('../../assets/youhuiquan.png')} alt="" />
                            </i>
                            <span>优惠价</span>
                        </li>
                        <li>
                            <i>
                                <img src={require('../../assets/dingwei3.png')} alt="" />
                            </i>
                            <span>地址管理</span>
                        </li>
                        <li>
                            <i>
                                <img src={require('../../assets/problems.png')} alt="" />
                            </i>
                            <span>常见问题</span>
                        </li>
                        <li>
                            <i>
                                <img src={require('../../assets/preSaleOrderList.png')} alt="" />
                            </i>
                            <span>预订订单</span>
                        </li> */}
                        <h1 className={styles.service}>
                            客服电话：95028
                        </h1>
                    </ul>
                </main>
                {/* 遮罩 */}
                <div className={styles.layer_menu}></div>
                {/* 十字 */}
                <div className={styles.cross}>

                </div>
                {/* 底部 */}
                <footer>
                    <ul>
                        <li onClick={this.gotoIndex}>首页</li>
                        <li onClick={this.state.bool ? this.gotoLogin : this.removeUser}>{this.state.bool ? '登录' : '退出'}</li>
                    </ul>
                </footer>
            </div >
        )
    }
}
withRouter(MinePage)
export default connect()(MinePage)