import { Component } from 'react';
import { connect } from 'dva';
import styles from './LoginPage.css';
import { withRouter } from 'dva/router';
// 弹窗
import JumpWindow from '../../components/JumpWindow/JumpWindow.js'
class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // 控制弹窗
            bool: true,
            // 传入弹窗组件的提示信息
            info:""
        }
    }
    // 组件创建后/挂载后
    componentDidMount() {
        //注册手机号聚焦
        this.refs.phone.focus()
    }
    // 跳注册
    gotoRegister = () => {
        this.props.history.push('./register')
    }
    // 登录
    login = () => {
        let user = this.refs.phone.value * 1;
        let psw = this.refs.password.value * 1;
        if (user && psw) {
            if (user === 123 & psw === 123) {
                // 存入本地
                localStorage.setItem('user',JSON.stringify(user));
                // 跳首页
                this.props.history.push('./index')
            } else {
                this.setState({
                    bool: false,
                    info:"账号或密码错误"
                })
            }
        } else {
            this.setState({
                bool: false,
                info:"信息不能为空"
            })
        }
    }
    // 传给子组件（弹窗）可以设置父组件的boolean值(隐藏弹窗)
    changeJumpWindow = (bool) => {
        this.setState(bool)
    }
    render() {
        return (
            <div>
                <div className={styles.reg_content}>
                    <ul>
                        <p>叮当快药欢迎您！账户登录</p>
                        <li>
                            <input type="text" ref='phone' placeholder="请输入手机号码" />
                        </li>
                        <li>
                            <input type="password" ref='password' placeholder="请输入登陆密码" />
                        </li>
                        <p className={styles.pswForget}>
                            忘记密码？
                        </p>
                    </ul>
                </div>
                <div className={styles.reg_btnBox}>
                    <a onClick={this.login} className={styles.reg_btn} style={{ background: 'rgb(204,51,51)' }}>
                        登录
                    </a>
                    <p className={styles.Register}>还没有账号？快去<a onClick={this.gotoRegister}>注册一下</a></p>
                </div>
                {/* 弹窗 */}
                <JumpWindow bool={this.state.bool} info={this.state.info} onClicked={this.changeJumpWindow} />
            </div>
        )
    }
}
LoginPage = withRouter(LoginPage)
export default connect()(LoginPage)