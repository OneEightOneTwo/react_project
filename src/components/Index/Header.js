import { Component } from 'react';
import { connect } from 'dva';
import styles from "./Header.css";
import { withRouter } from 'dva/router';
//引入高阶组件，引入footerPage的爸爸
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            path: '/search'
        }
        this.goSearch = this.goSearch.bind(this)
    }
    goSearch() {
        this.props.history.push('/search')
    }

    render() {
        return (
            <div style={{ height: "45px" }}>
                <header className={styles.Header} >
                    <div className={styles.addBox}>
                        <img src="https://img.ddky.com/c/wap/images/ddky2/locaton_icon.png" alt="" />
                        <span>叮当智慧药房（广州）</span>
                        <img src="https://img.ddky.com/c/wap/images/ddky2/down_arrow.png" alt="" />
                    </div>
                    <div className={styles.searchBox} onClick={this.goSearch}>
                        <input className={styles.input} placeholder="搜索药品、症状、品牌"></input>
                        <img src="https://img.ddky.com/c/wap/images/ddky2/big_glass.png" alt="" />
                    </div>
                </header>
            </div>

        )
    }
}
Header = withRouter(Header)
export default connect()(Header);