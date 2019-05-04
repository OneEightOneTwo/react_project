import { Component } from 'react';
import { connect } from 'dva';
//引入高阶组件，引入footerPage的爸爸
import { withRouter } from 'dva/router';
import styles from './FooterPage.css';
// 弹窗
import JumpWindow from '../JumpWindow/JumpWindow.js'
class FooterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: [
                {
                    pic1: require('../../assets/1542445956477_104_104.jpg'),
                    pic2: require('../../assets/1542445952383_104_104.jpg'),
                    path: '/home'
                }, {
                    pic1: require('../../assets/1542445964888_104_104.jpg'),
                    pic2: require('../../assets/1542445962489_104_104.jpg'),
                    path: '/dingdang'
                }, {
                    pic1: require('../../assets/1542445971938_104_104.jpg'),
                    pic2: require('../../assets/1542445969502_104_104.jpg'),
                    path: '/cart'
                }, {
                    pic1: require('../../assets/1542445977803_104_104.jpg'),
                    pic2: require('../../assets/1542445977803_104_104.jpg'),
                    path: '/mine'
                },
            ],
            // 默认index
            activeId: 0,
            // 控制弹窗
            bool: true,
            // 传入弹窗组件的提示信息
            info: ""
        }
    }
    // 组件被渲染到页面上后立马执行，在组件的整个生命周期内只执行一次
    //第次切换页面，activeId都会被重置为0
    componentDidMount() {
        // console.log('读取路由');
        // console.log(this.props.history.location.pathname);
        if (this.props.history.location.pathname === '/dingdang') {
            this.setState({
                activeId: 1
            })
        } else if (this.props.history.location.pathname === '/cart') {
            this.setState({
                activeId: 2
            })
        }
        //挂载后，拦截路由进入购物车，判断是否登录
        let user = localStorage.getItem('user')
        // console.log(this.props.history.location.pathname)
        if (user === null && this.props.history.location.pathname === '/cart') {
            this.setState({
                bool: false,
                info: "请登录查看清单列表"
            })
        }
    }
    changePage(index, path) {
        // console.log(index,path)
        this.props.history.push(path);
        this.setState({
            activeId: index
        })
        // console.log(this.state.activeId)
        // console.log(this.props)
        // this.$router.push(path);
    }
    // 传给子组件（弹窗）可以设置父组件的boolean值(隐藏弹窗)
    changeJumpWindow = (bool) => {
        this.setState(bool)
        this.props.history.push('/login');
    }
    render() {
        return (
            <div>
                <ul className={styles.footer}>
                    {/* <li className={styles.footer_l}>
                        <img src={require('../../assets/' + this.state.img)} alt="" />
                    </li>
                    <li className={styles.footer_l}>
                        <img src={require('../../assets/' + this.state.img)} alt="" />
                    </li>
                    <li className={styles.footer_l}>
                        <img src={require('../../assets/1542445971938_104_104.jpg')} alt="" />
                    </li>
                    <li className={styles.footer_l}>
                        <img src={require('../../assets/1542445977803_104_104.jpg')} alt="" />
                    </li> */}
                    {
                        this.state.img.map((item, index) => {
                            return <li className={styles.footer_l} key={index} onClick={this.changePage.bind(this, index, item.path)}>
                                <img src={index === this.state.activeId ? item['pic2'] : item['pic1']} alt='' />
                            </li>
                        })
                    }
                </ul>
                {/* 弹窗 */}
                <JumpWindow bool={this.state.bool} info={this.state.info} onClicked={this.changeJumpWindow} />
            </div>
        )
    }
}

FooterPage = withRouter(FooterPage);
export default connect()(FooterPage);