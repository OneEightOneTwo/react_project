import { Component } from 'react';
import { connect } from 'dva';
import styles from './GoodsListPage.css';
import base from '../../base/base.css'
import { withRouter } from 'dva/router';
class GoodsListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    // 跳首页
    gotoIndex = () => {
        this.props.history.push('./index')
    }
    render() {
        return (
            <div>
                {/* 头部 */}
                <header className={styles.header} >
                    <img onClick={this.gotoIndex} className={styles.homeImg} src={require('../../assets/home_icon2.png')} alt="" />
                    <div className={styles.search}>
                        <img className={styles.searchImg} src={require('../../assets/icon_search.png')} alt="" />
                        <p>搜索药品、症状、品牌</p>
                    </div>
                    <span>搜索</span>
                </header>
                {/* 类型 */}
                <div className={styles.header_list}>
                    <span className={styles.active}>全部</span>
                    <span>补钙</span>
                    <span>贫血</span>
                    <span>新盖中盖</span>
                    <span>新盖中盖</span>
                    <span>新盖中盖</span>
                    <span>新盖中盖</span>
                    <span>新盖中盖</span>
                </div>
                {/* 排序 */}
                <div className={styles.navList}>
                    <ul>
                        <li className={styles.active}>默认</li>
                        <li>销量</li>
                        <li>
                            价格
                            <i>
                                <span className={styles.shangjiao_up}></span>
                                <span className={styles.shangjiao_down}></span>
                            </i>
                        </li>
                        <li className={styles.nav_change}>
                            <span>大图</span>
                            <img src={require('../../assets/towpic.png')} alt="" />
                        </li>
                    </ul>
                </div>
                {/* 商品列表 */}
                <div className={styles.List}>
                    <div className={styles.goods}>
                        <dt className={base.fl}>
                            <img src={require('../../assets/z_1.jpg')} alt="" />
                        </dt>
                        <dd className={base.fr}>
                            <h3><span>28分钟</span> [力度伸]维生素C泡腾片(橙味) </h3>
                            <p className={styles.info}>1. 增强机体抵抗力，用于预防和治疗各种急、慢性传染性疾病或其他疾病。2. 用于病后恢复期，创伤愈合期及过敏性疾病的辅助治疗。3. 用于预防和治疗坏血病。</p>
                            <p className={styles.other}>
                                1g×10片
                            </p>
                            <div className={styles.buyBox}>
                                <div className={styles.about}>
                                    <p className={styles.price}>
                                        ￥38.00
                                    </p>
                                    <p className={styles.sales}>
                                        月售7157笔
                                    </p>
                                    <img src={require("../../assets/icon_add_cart.png")} alt=""/>
                                </div>
                            </div>
                            <div className={styles.prootiomBox}>
                            <span className={styles.promotion}>低价换购</span>
                            <span className={styles.promotion}>1元换购</span>
                            </div>
                        </dd>
                    </div>
                </div>
            </div>
        )
    }
}
GoodsListPage = withRouter(GoodsListPage)
export default connect()(GoodsListPage)