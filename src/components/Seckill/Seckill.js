import Recat from 'react'
import { connect } from 'dva';
import styles from './Seckill.css'

class Seckill extends Recat.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    img: 'https://img.ddky.com/c/cms/temp/20181009/1539076687491_336_248.jpg',
                    name: '餐后一片 悄悄变女神',
                    effect: '【2盒装】[雅塑]奥利司他胶囊',
                    price: '￥69.00',
                    agoprice: '￥192.00'
                },
                {
                    img: 'https://img.ddky.com/c/cms/temp/20171122/1511333119032_336_248.jpg',
                    name: '滋补气血 调经舒郁 让女人越来越美丽',
                    effect: '月经不调组包',
                    price: '￥148.00',
                    agoprice: '￥217.80'
                },
                {
                    img: 'https://img.ddky.com/c/cms/temp/20190103/1546481926811_336_248.jpg',
                    name: '每天一杯 一身轻松',
                    effect: '【3盒装】[药都行]红豆芡实薏米茶',
                    price: '￥36.60',
                    agoprice: '￥68.40'
                },
                {
                    img: 'https://img.ddky.com/c/cms/temp/20171122/1511333680132_336_248.jpg',
                    name: '坚持不“泄” 让男人更硬更强',
                    effect: '阳痿早泄兼治组包',
                    price: '￥658.00',
                    agoprice: '￥723.00'
                }
            ],
            isSelect: 0,
            arr: ['热销推荐', '男性健康', '女性健康', '营养保健', '避孕验孕', '慢病调理', '儿童健康', '个人护理'],
        }

    }
    setCur(index) {
        
        this.setState({
            isSelect: index
        });
    }

    render() {
        return (
            <div className={styles.top}>
                {/* 秒杀专区 */}
                <div className={styles.secondkill}>
                    <div className={styles.timer}>
                        <img src='https://img.ddky.com/c/cms/temp/20161209/1481213731865_1080_98.jpg' alt="" />
                        <div className={styles.countdown}>
                            距结束：
                            <span>0</span>天
                            <span>16</span>时
                            <span>9</span>分
                            <span>07</span>秒
                        </div>
                    </div>
                    <div className={styles.drugItems + " " + styles.cl}>
                        <img src="https://img.ddky.com/c/cms/temp/20190423/1556000018877_375_270.jpg" alt="" className={styles.fl} style={{ width: "50%" }} />
                        <img src="https://img.ddky.com/c/cms/temp/20190423/1556000027965_375_270.jpg" alt="" className={styles.fl} style={{ width: "50%" }} />
                    </div>
                </div>
                {/* 推荐 */}
                <div className={styles.brandSaleList + " " + styles.cl}>
                    <img src="https://img.ddky.com/c/cms/temp/20190424/1556071634946_540_504.jpg" alt="" className={styles.w50 + " " + styles.fl} />
                    <img src="https://img.ddky.com/c/cms/temp/20190418/1555550231425_540_252.jpg" alt="" className={styles.w50 + " " + styles.fl} />
                    <img src="https://img.ddky.com/c/cms/temp/20190419/1555667680155_540_252.jpg" alt="" className={styles.w50 + " " + styles.fl} />
                </div>
                {/* 主要内容 */}
                <div className={styles.categoryList + " " + styles.cl}>
                    <div className={styles.ulDad}>
                        <ul className={styles.ulList + " " + styles.cl} style={{ width: '614px' }}>
                            {this.state.arr.map((item, i) => {
                                return <li key={i} onClick={this.setCur.bind(this, i)} className={this.state.isSelect === i ? styles.active : ''}>
                                    <span >{item}</span>
                                </li>
                            })}
                            {/* <li>
                                <span className={styles.active}>热销推荐</span>
                            </li>
                            <li>
                                <span className={styles}>男性健康</span>
                            </li>
                            <li>
                                <span className={styles}>女性健康</span>
                            </li>
                            <li>
                                <span className={styles}>营养保健</span>
                            </li>
                            <li>
                                <span className={styles}>避孕验孕</span>
                            </li>
                            <li>
                                <span className={styles}>慢病调理</span>
                            </li>
                            <li>
                                <span className={styles}>儿童健康</span>
                            </li>
                            <li>
                                <span className={styles}>个人护理</span>
                            </li> */}
                        </ul>
                    </div>
                    <div className={styles.imgList}>
                        {/* 热销推荐 */}
                        <div className={styles.b2cdrugbox}>
                            {this.state.data.map((item, index) => (
                                <div className={styles.imgListBox + " " + styles.cl} key={index}>
                                    <div className={styles.imgPreBox + " " + styles.fl}>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className={styles.fr + " " + styles.infoBox}>
                                        <p className={styles.name} >
                                            <span className={styles.sign}>3-5天</span>
                                            {/* 餐后一片 悄悄变女神 */}
                                            {item.name}
                                        </p>
                                        <p className={styles.zhuzhi_info}>{item.effect}</p>
                                        <div className={styles.prootiomBox}>
                                            <span className={styles.promotion}>立省123.00元</span>
                                        </div>
                                        <div className={styles.goods_buyBox + " " + styles.cl}>
                                            <div className={styles.aboutLeft + " " + styles.fl}>
                                                <p className={styles.setmeal + " " + styles.fl}>{item.price}</p>
                                                <p className={styles.sales + " " + styles.fl}>{item.agoprice}</p>
                                            </div>
                                            <div className={styles.addCarBox + " " + styles.fr}>
                                                <img src="//img.ddky.com/c/wap/images/ddky3.1/listShop.png?ddkycache=ad2d8d2beddf679ce7c2acbc7f79c59f" alt="" className={styles.addCarImg} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* <div className={styles.imgListBox +" "+ styles.cl}>
                                <div className={styles.imgPreBox +" "+ styles.fl}>
                                    <img src="https://img.ddky.com/c/cms/temp/20181009/1539076687491_336_248.jpg" alt="" />
                                </div>
                                <div className={styles.fr +" "+ styles.infoBox}>
                                    <p className={styles.name}>
                                        <span className={styles.sign}>3-5天</span>
                                        餐后一片 悄悄变女神
                                        </p>
                                    <p className={styles.zhuzhi_info}>【2盒装】[雅塑]奥利司他胶囊</p>
                                    <div className={styles.prootiomBox}>
                                        <span className={styles.promotion}>立省123.00元</span>
                                    </div>
                                    <div className={styles.goods_buyBox +" "+ styles.cl}>
                                        <div className={styles.aboutLeft +" "+ styles.fl}>
                                            <p className={styles.setmeal +" "+ styles.fl}>￥69.00</p>
                                            <p className={styles.sales +" "+ styles.fl}>￥192.00</p>
                                        </div>
                                        <div className={styles.addCarBox +" "+ styles.fr}>
                                            <img src="//img.ddky.com/c/wap/images/ddky3.1/listShop.png?ddkycache=ad2d8d2beddf679ce7c2acbc7f79c59f" alt="" className={styles.addCarImg} />
                                         </div>
                                        </div>
                                    </div>
                                </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect()(Seckill)
