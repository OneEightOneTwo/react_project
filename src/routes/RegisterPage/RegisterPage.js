import { Component } from 'react';
import { connect } from 'dva';
import styles from './RegisterPage.css';
// 弹窗
import JumpWindow from '../../components/JumpWindow/JumpWindow.js'
class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bool1: true,
            // 控制弹窗
            bool: true,
            // 传入弹窗组件的提示信息
            info: ""
        }
    }
    // 密码清空
    clearText() {
        this.refs.psw.value = "";
    }
    // 组件创建后/挂载后
    componentDidMount() {
        //注册手机号聚焦
        this.refs.phone.focus()
    }
    // 选中协议
    changeAgree = () => {
        this.state.bool1 ? this.setState({
            bool1: false
        }) : this.setState({
            bool1: true
        })
    }
    //注册
     user = () => {
        let user = this.refs.phone.value * 1;
        let psw = this.refs.psw.value * 1;
        if (user && psw) {
            // 简单手机正则
            let TEL_REGEXP = /^1[3-9]\d{9}$/;
            if (TEL_REGEXP.test(user)) {
                if (this.state.bool1) {
                    // 差发送ajax存入数据库
                    // 注册成功
                     this.setState({
                        bool: false,
                        info: "注册成功"
                    })
                } else {
                    this.setState({
                        bool: false,
                        info: "请勾选同意用户协议"
                    })
                }
            } else {
                this.setState({
                    bool: false,
                    info: "请输入正确的手机号码"
                })
            }
        } else {
            this.setState({
                bool: false,
                info: "信息不能为空"
            })
        }
    }
    // 传给子组件（弹窗）可以设置父组件的boolean值(隐藏弹窗)
    changeJumpWindow = (bool) => {
        this.setState(bool)
    }
    //去登录页
    gotoLogin=()=>{
        this.props.history.push('./login')
    }
    render() {
        return (
            <div>
                <div className={styles.reg_content}>
                    <ul>
                        <p>叮当快药欢迎您！注册账户</p>
                        <li>
                            <input type="text" ref='phone' placeholder="请输入手机号码" />
                        </li>
                        <li>
                            <input type="password" ref='psw' placeholder="请设置登录密码" />
                            <i>
                                <img src={require('../../assets/clear-tel.png')} alt="" onClick={this.clearText.bind(this)} />
                            </i>
                        </li>
                    </ul>
                </div>
                <div className={styles.reg_btnBox}>
                    <p className={styles.agree}>
                        <i onClick={this.changeAgree} className={styles.user_yes} style={this.state.bool1 ? { display: 'block' } : { display: 'none' }}></i>
                        <i onClick={this.changeAgree} className={styles.user_not} style={this.state.bool1 ? { display: 'none' } : { display: 'block' }}></i>
                        <span>同意用户协议</span>
                    </p>
                    <a onClick={this.user} className={styles.reg_btn} style={this.state.bool1 ? { background: 'rgb(204,51,51)' } : { background: 'rgb(204,204,204)' }}>
                        注册
                    </a>
                    <p className={styles.Register}>注册好了？快去<a onClick={this.gotoLogin}>登录</a></p>
                </div>
                <JumpWindow bool={this.state.bool} info={this.state.info} onClicked={this.changeJumpWindow} />
            </div>
        )
    }
}
export default connect()(RegisterPage)