import { Component } from 'react';
import { connect } from 'dva';
import styles from "./ListBox.css";
import { withRouter } from 'dva/router';

//引入高阶组件，引入footerPage的爸爸
class ListBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // 固定的数据
            drugList: [{
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556162658298_78_78.jpg',
                titel: '感冒发烧',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556162353847_78_78.jpg',
                titel: '清热解毒',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556162136151_78_78.jpg',
                titel: '咳嗽用药',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556162300107_78_78.jpg',
                titel: '皮肤用药',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556162343354_78_78.jpg',
                titel: '肠胃用药',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556162241299_78_78.jpg',
                titel: '性福生活',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556162313064_78_78.jpg',
                titel: '男科用药',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556162324278_78_78.jpg',
                titel: '妇科用药',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556185185194_78_78.jpg',
                titel: '滋补调养',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556185169764_78_78.jpg',
                titel: '维矿补益',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556185169764_78_78.jpg',
                titel: '医疗器械',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556161774005_78_78.jpg',
                titel: '驱蚊避暑',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556185136942_78_78.jpg',
                titel: '家庭常备',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556162334694_78_78.jpg',
                titel: '儿童用药',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556162225910_78_78.jpg',
                titel: '功能保健',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556162109462_78_78.jpg',
                titel: '眼科用药',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556162166106_78_78.jpg',
                titel: '耳鼻喉药',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556161906864_78_78.jpg',
                titel: '养生花茶',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556185154329_78_78.jpg',
                titel: '三高用药',
            }, {
                url: 'https://img.ddky.com/c/cms/temp/20190425/1556161947593_78_78.jpg',
                titel: '精品中药',
            }],
            // ajax请求回来的数据
            specialList: [
                {
                    id: '1',
                    name: '感冒抗病毒组包',
                    function: '抗病毒，治流感，快速缓解发热、头痛、咽喉痛！',
                    specification: '10mlx14支x2盒+0.35gx36粒x2盒+12粒x2板',
                    price: '19',
                    agoprice: '25',
                    img: 'https://imgq.ddky.com/c/product/528902/ad/1489542907162.jpg?t=1489542907193'
                }, {
                    id: '2',
                    name: '感冒抗病毒组包',
                    function: '抗病毒，治流感，快速缓解发热、头痛、咽喉痛！',
                    specification: '10mlx14支x2盒+0.35gx36粒x2盒+12粒x2板',
                    price: '113',
                    agoprice: '155',
                    img: 'https://imgq.ddky.com/c/product/106745/ad/1484273616492.jpg?t=1000'
                }, {
                    id: '3',
                    name: '感冒抗病毒组包',
                    function: '抗病毒，治流感，快速缓解发热、头痛、咽喉痛！',
                    specification: '10mlx14支x2盒+0.35gx36粒x2盒+12粒x2板',
                    price: '113',
                    agoprice: '155',
                    img: 'https://imgq.ddky.com/c/product/534834/ad/1525412773771.jpg?t=1525412773867'
                }, {
                    id: '4',
                    name: '感冒抗病毒组包',
                    function: '抗病毒，治流感，快速缓解发热、头痛、咽喉痛！',
                    specification: '10mlx14支x2盒+0.35gx36粒x2盒+12粒x2板',
                    price: '113',
                    agoprice: '155',
                    img: 'https://imgq.ddky.com/c/product/534834/ad/1525412773771.jpg?t=1525412773867'
                }, {
                    id: '5',
                    name: '感冒抗病毒组包',
                    function: '抗病毒，治流感，快速缓解发热、头痛、咽喉痛！',
                    specification: '10mlx14支x2盒+0.35gx36粒x2盒+12粒x2板',
                    price: '113',
                    agoprice: '155',
                    img: 'https://imgq.ddky.com/c/product/534834/ad/1525412773771.jpg?t=1525412773867'
                },
            ]
        }
    }
    // 跳转到详情页
    gotoDetail(id){
        // console.log(11);
        // console.log(this.props.history)
        this.props.history.push("/good/:"+id);
        console.log(id);
    }
    render() {
        return (
            <div>
                {/* 大盒子 */}
                <div className={styles.priceBox}>
                    <div className={styleMedia.priceBox_item}>
                        <img src="https://img.ddky.com/c/wap/images/ddky2/true_icon.png" alt="" />
                        <p>28分钟快送</p>
                    </div>
                    <div className={styleMedia.priceBox_item}>
                        <img src="https://img.ddky.com/c/wap/images/ddky2/true_icon.png" alt="" />
                        <p>满28免运费</p>
                    </div>
                    <div className={styleMedia.priceBox_item}>
                        <img src="https://img.ddky.com/c/wap/images/ddky2/true_icon.png" alt="" />
                        <p>24小时服务</p>
                    </div>
                </div>
                {/* 大盒子 */}
                <div className={styles.adviceBox}>
                    <img src="https://img.ddky.com/c/cms/temp/20180919/1537323873480_180_168.jpg" alt="" />
                    <img src="https://img.ddky.com/c/cms/temp/20180919/1537323877744_180_168.jpg" alt="" />
                    <img src="https://img.ddky.com/c/cms/temp/20180919/1537323890865_180_168.jpg" alt="" />
                    <img src="https://img.ddky.com/c/cms/temp/20180919/1537323895801_180_168.jpg" alt="" />
                    <img src="https://img.ddky.com/c/cms/temp/20190307/1551954235298_180_168.jpg" alt="" />
                    <img src="https://img.ddky.com/c/cms/temp/20190307/1551954237585_180_168.jpg" alt="" />
                    <img src="https://img.ddky.com/c/cms/temp/20190307/1551954239827_180_168.jpg" alt="" />
                    <img src="https://img.ddky.com/c/cms/temp/20190307/1551954241650_180_168.jpg" alt="" />
                </div>
                {/* 大盒子 */}
                <div className={styles.flash_sale}>
                    <img src="https://img.ddky.com/c/cms/temp/20190401/1554084282272_360_118.jpg" alt="" />
                    <img src="https://img.ddky.com/c/cms/temp/20190429/1556503173808_360_118.jpg" alt="" />
                </div>
                {/* 大盒子 */}
                <div className={styles.drugList}>
                    {
                        this.state.drugList.map((item, index) => {
                            return <div key={index}>
                                <img src={item.url} alt="" />
                                <p>{item.titel}</p>
                            </div>
                        })
                    }
                    {/* <div >
                        <img src="https://img.ddky.com/c/cms/temp/20190425/1556162353847_78_78.jpg" alt="" />
                        <p>清热解毒</p>
                    </div>
                    <div >
                        <img src="https://img.ddky.com/c/cms/temp/20190425/1556162136151_78_78.jpg" alt="" />
                        <p>咳嗽用药</p>
                    </div>
                    <div >
                        <img src="https://img.ddky.com/c/cms/temp/20190425/1556162300107_78_78.jpg" alt="" />
                        <p>皮肤用药</p>
                    </div>
                    <div >
                        <img src="https://img.ddky.com/c/cms/temp/20190425/1556162343354_78_78.jpg" alt="" />
                        <p>肠胃用药</p>
                    </div>
                   */}
                </div>
                {/* 大盒子 */}
                <div className={styles.special}>
                    <div className={styles.special_choose}>
                        <img src="https://img.ddky.com/c/wap/images/ddky2/choose.jpg" alt="" />
                        <p>热销推荐</p>
                    </div>
                    <div className={styles.special_drug} >
                        {
                            this.state.specialList.map((item, index) => {
                                return <div className={styles.special_drug} key={index} onClick={this.gotoDetail.bind(this,item.id)}>
                                    <img src={item.img} alt="" />
                                    <div className={styles.top}>
                                        <p>{item.function}</p>
                                        <p>{item.name}</p>
                                        <p>{item.specification}</p>
                                        <p> 立省{item.agoprice * 1 - item.price * 1}元</p>
                                        <div className={styles.down}>
                                            <span >¥{item.price}</span>
                                            <span >¥{item.agoprice}</span>
                                            <p >已卖出391件</p>
                                        </div>
                                        <img src="https://img.ddky.com/c/wap/images/ddky2/car.png" alt="" />
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    {/* <img src="https://imgq.ddky.com/c/product/528902/ad/1489542907162.jpg?t=1489542907193" alt="" />
                        <div className={styles.top}>
                            <p>抗病毒，治流感，快速缓解发热、头痛、咽喉痛！</p>
                            <p>感冒抗病毒组包</p>
                            <p>10mlx14支x2盒+0.35gx36粒x2盒+12粒x2板</p>
                            <p> 立省14.80元</p>
                            <div className={styles.down}>
                                <span class="spec">¥113.00</span>
                                <span class="spec1 addLine">¥127.80</span>
                                <p class="spec1">已卖出391件</p>
                            </div>
                            <img id="showcart" src="https://img.ddky.com/c/wap/images/ddky2/car.png" alt="" />
                        </div>
                        <img src="" alt="" class="yellowIcon" />
                    </div> */}
                </div>
            </div>
        )
    }
}

ListBox = withRouter(ListBox);
export default connect()(ListBox);