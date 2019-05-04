import { Component } from 'react';
import { connect } from 'dva';
import styles from './GoodsListPage.css';
import base from '../../base/base.css'
import { withRouter } from 'dva/router';
class GoodsListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList:[{
                img:require('../../assets/z_1.jpg'),
                title:'[力度伸]维生素C泡腾片(橙味)',
                ppt:'1. 增强机体抵抗力，用于预防和治疗各种急、慢性传染性疾病或其他疾病。2. 用于病后恢复期，创伤愈合期及过敏性疾病的辅助治疗。3. 用于预防和治疗坏血病。',
                price:'38.00',
                sales:7157,
                other:'1g×10片'
            },{
                img:require('../../assets/z_1 (1).jpg'),
                title:'[仁和]叶酸片',
                ppt:'1. 预防胎儿先天性神经管畸形。2. 妊娠期、哺乳期妇女预防用药。',
                price:'16.80',
                sales:1207,
                other:'0.4mgx15片x2板'
            },{
                img:require('../../assets/z_1 (2).jpg'),
                title:'[恒健]维生素B2片',
                ppt:'用于预防和治疗维生素B2缺乏症，如口角炎、唇干裂、舌炎、阴囊炎、结膜炎、脂溢性皮炎等。',
                price:'5.50',
                sales:2636,
                other:'5mgx100片'
            },]
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
                {this.state.goodsList.map((item,index)=>{
                    return <div className={styles.goods} key={index}>
                                <dt className={base.fl}>
                                    <img src={item.img} alt="" />
                                </dt>
                                <dd className={base.fr}>
                                    <h3><span>28分钟</span> {item.title} </h3>
                                    <p className={styles.info}>{item.ppt}</p>
                                    <p className={styles.other}>
                                        {item.other}
                                    </p>
                                    <div className={styles.buyBox}>
                                        <div className={styles.about}>
                                            <p className={styles.price}>
                                                ￥{item.price}
                                            </p>
                                            <p className={styles.sales}>
                                                月售{item.sales}笔
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
                })}
                    {/* <div className={styles.goods}>
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
                    </div> */}
                </div>
            </div>
        )
    }
}
GoodsListPage = withRouter(GoodsListPage)
export default connect()(GoodsListPage)