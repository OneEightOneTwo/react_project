import { Component } from 'react'
import { connect } from 'dva';
import styles from './Shopping.css';
// import { withRouter } from 'dva/router';
// 引入ant
import 'antd-mobile/dist/antd-mobile.css';
import { Checkbox, Flex } from 'antd-mobile';


const AgreeItem = Checkbox.AgreeItem;

class Shopping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initValue: this.props.dispatch.length,
            str: [
                {
                    defaultChecked: false,
                    allChecked: false
                }
            ]

        }
        //与render函数的onClick绑定，必须绑定，不然js找不到这两个函数
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onCLickReduce = this.onCLickReduce.bind(this);

        this.onChangeAll = this.onChangeAll.bind(this)
    }

    onChange = (val) => {
   
        this.setState({
            str: [
                {
                    defaultChecked: !this.state.str[0].defaultChecked,
                    allChecked: !this.state.str[0].allChecked
                }
            ]
        })
    }

    onChangeAll = () => {
        this.setState({
            str: [
                {
                    defaultChecked: !this.state.str[0].defaultChecked,
                    allChecked: !this.state.str[0].allChecked
                }
            ]
        });

    }
    //+ =>函数
    onClickAdd() {
        // this.state.initValue++;
        //设置state
        // this.setState({initValue:this.state.initValue})
        this.onUpdateFunc(true)
        // console.log(this)
    }
    //- => 函数
    onCLickReduce() {
        // this.state.initValue--;
        //设置state
        // this.setState({initValue:this.state.initValue})
        this.onUpdateFunc(false)
    }
    onUpdateFunc(flag) {
        // const previousValue = this.state.initValue
        //当点击+时flag为真，返回++，反之亦然
        const newValue = flag ? ++this.state.initValue : --this.state.initValue
        //这个函数作为一个props来传递数据，这里是最重要的
        // this.props.dispatch(previousValue,newValue)
        if (this.state.initValue < 1) {
            this.state.initValue = 1
        } else {
            this.setState({ initValue: newValue })
        }
    }

    render() {
        // const data = [
        //     { defaultChecked: false }
        // ]
        return (
            <div>
                {/* 头部 */}
                <div className={styles.top}>
                    <span className={styles.bianji}>编辑</span>
                    <h1 className={styles.h1}>清单列表</h1>
                </div>
                {/* 清单商品 */}
                <div className={styles.content}>
                    <div className={styles.shopBox}>
                        <dl>
                            <dt className={styles.shoptitle}>
                                <Flex>
                                    <Flex.Item>
                                        <AgreeItem data-seed="logId"
                                            onChange={
                                                () => this.onChangeAll()
                                            }>
                                            <a style={{display:'inline-block'}}></a>
                                        </AgreeItem>
                                    </Flex.Item>
                                </Flex>
                                <h2>
                                    <img src="https://img.ddky.com/c/wap/images/ddky2/kuai_icon.png" alt="" />
                                    <span className={styles.shopName}>叮当智慧药房（广州）有限公司广州越秀东川路店</span>
                                    <span className={styles.deliverTip + " " + styles.fr}>急送,满¥28免运费</span>
                                </h2>
                            </dt>
                            <dd>
                                <div className={styles.item}>
                                    <div className={styles.left}>
                                        {
                                            this.state.str.map((item) => {
                                                return <Flex key={item.defaultChecked}>
                                                    <Flex.Item>
                                                        <AgreeItem data-seed="logId"
                                                            onChange={
                                                                // (e => console.log(item.defaultChecked, e))
                                                                () => this.onChange(item.defaultChecked)
                                                            }
                                                            checked={item.allChecked ? true : false}>
                                                            <a style={{display:'inline-block'}}></a>
                                                        </AgreeItem>
                                                    </Flex.Item>
                                                </Flex>
                                            })
                                        }
                                    </div>
                                    <div className={styles.right}>
                                        <div className={styles.goodsInfo + " " + styles.fl}>
                                            <div className={styles.goodsImg + " " + styles.fl}>
                                                <img src="https://imgq.ddky.com/c/product/106723/big/z_1.jpg?t=9898&amp;watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100" alt="" />
                                            </div>
                                            <div className={styles.goods_description}>
                                                <h3 >[999]感冒灵颗粒</h3>
                                                <p className={styles.promotionsDesc}>10gx9袋</p>
                                                <p className={styles.goods_promition}></p>
                                                <p className={styles.goodsPrice}>￥13.80</p>
                                            </div>
                                            <div className={styles.goodsNumEdit}>
                                                <img onClick={this.onCLickReduce} src="https://img.ddky.com/c/wap/images/ddky2/jian_icon.png" alt="" className={styles.fl} />
                                                <i className={styles.goodsnum}>{this.state.initValue}</i>
                                                <img onClick={this.onClickAdd} src="https://img.ddky.com/c/wap/images/ddky2/jia_icon.png" className={styles.fr} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
                {/* 总计价格 */}
                <div className={styles.totalBox + " " + styles.cl}>
                    <div className={styles.totalPrice + " " + styles.fl}>
                        <p>总计：￥0.00</p>
                        <span>金额：￥0.00</span>
                        <span>优惠：￥-0.00</span>
                    </div>
                    <p className={styles.settle + " " + styles.fr}>结算(0)</p>
                </div>
                {/* <div className={styles.content}>
                    <div className={styles.nothingImgBox}>
                        <img src="https://img.ddky.com/c/wap/images/ddky2/onthing.png" alt="" />
                        <p>亲，这里空空的耶，快去挑选吧～</p>
                    </div>
                    <div className={styles.hotSbox}>
                        <div className={styles.recommendBox}>
                            <img src="https://img.ddky.com/c/wap/images/ddky2/recommend.png" alt="" />
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}




// Shopping = withRouter(Shopping)
export default connect()(Shopping)