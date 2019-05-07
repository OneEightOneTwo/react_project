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
            // initValue: this.props.dispatch.length,
            arr: [],
            arr1: [],
            totalPrice: [],
            bool:true,
            str: [
                {
                    defaultChecked: false,
                    redact: false,
                    allChecked: false
                }
            ],
            List: [
                {
                    id: 1,
                    name: '[999]感冒灵颗粒',
                    num: 1,
                    measure: '10gx9袋',
                    price: '13.80',
                    img: 'https://imgq.ddky.com/c/product/106723/big/z_1.jpg?t=9898&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100',
                    totalPrice: '13.80',
                    checked: false
                },
                {
                    id: 2,
                    name: '【2盒装】[雅塑]奥利司他胶囊',
                    num: 1,
                    measure: '0.12gx6粒x2盒',
                    price: '69.00',
                    img: 'https://imgq.ddky.com/c/product/533955/big/z_1.jpg?t=1544608207598&watermark%2F1%2Fimage%2FaHR0cHM6Ly9pbWdxLmRka3kuY29tL2Mvd2F0ZXJQaWMvMTA4MC5wbmc%3D%2Fdissolve%2F80%2Fgravity%2FCenter%2Fdx%2F0%2Fdy%2F0%7CimageMogr2%2Fauto-orient%2Fthumbnail%2F240x240%21%2Fquality%2F100',
                    totalPrice: '69.00',
                    checked: false
                }
            ]

        }
        //与render函数的onClick绑定，必须绑定，不然js找不到这两个函数

        // this.onChangeAll = this.onChangeAll.bind(this)
    }
    // 编辑
    redact = (data) => {
        this.state.arr = []
        this.setState({
            arr: this.state.arr
        })
        if (data[0].redact) {
            this.refs.redact.innerHTML = '编辑'
            this.refs.allnum.style.display = 'block'
            this.refs.del.style.display = 'none'
            // this.refs.allprice.style.display = 'block'
        } else {
            this.refs.redact.innerHTML = '完成'
            this.refs.allnum.style.display = 'none'
            this.refs.del.style.display = 'block'
            // this.refs.allprice.style.display = 'none'
        }
        data[0].redact = !data[0].redact
    }
    // 单选
    onChange = (ind) => {
        // 控制单选出现
        let val = this.state.List[ind].checked;
        this.setState({
            List: this.state.List
        })
        this.state.List[ind].checked = !val;

        //存下标
        if (this.state.List[ind].checked === true) {
            this.state.arr.push(this.state.List[ind].id)
            this.state.arr1.push(ind)
        } else {
            for (let i in this.state.arr) {
                if (this.state.arr[i] === this.state.List[ind].id) {
                    this.state.arr.splice(i, 1)
                }
            }
            for (let i in this.state.arr1) {
                this.state.arr1.splice(i, 1)
            }
        }
        // 单选控制全选
        if (this.state.arr.length === this.state.List.length) {
            this.state.str[0].allChecked = true
            this.setState({
                str: [
                    {
                        defaultChecked: this.state.str[0].defaultChecked,
                        redact: this.state.str[0].redact,
                        allChecked: true
                    }
                ]
            })
        } else {
            this.state.str[0].allChecked = false
            this.setState({
                str: [
                    {
                        defaultChecked: this.state.str[0].defaultChecked,
                        redact: this.state.str[0].redact,
                        allChecked: false
                    }
                ]
            })
        }

        // 结算
        this.total()
    }
    // 全选
    onChangeAll = () => {
        let val = this.state.str[0].allChecked;
        for (let i in this.state.List) {
            this.setState({
                List: this.state.List
            })
            this.state.List[i].checked = !val;

            if (this.state.List[i].checked === true) {
                this.state.arr.push(this.state.List[i].id)
            } else {
                this.state.arr = [];
            }
        }
        this.setState({
            str: [
                {
                    defaultChecked: !this.state.str[0].defaultChecked,
                    redact: this.state.str[0].redact,
                    allChecked: !this.state.str[0].allChecked
                }
            ]
        })
        // 结算
        this.total()

    }
    //+ =>函数
    onClickAdd = (ind) => {
        let list = this.state.List[ind].num;
        list++;
        //更新state
        // 设置state
        this.setState({
            List: this.state.List
        })
        this.state.List[ind].num = list
        // console.log(list);
        this.SumPrice(ind, list)
        this.total()
    }
    //- => 函数
    onCLickReduce(ind) {
        let list = this.state.List[ind].num;
        list--;
        if (list < 1) {
            list = 1;
        }
        //更新state
        // 设置state
        this.setState({
            List: this.state.List
        })
        this.state.List[ind].num = list
        // console.log(list)
        this.SumPrice(ind, list)
        this.total()
    }


    //计算小计
    SumPrice = (ind, list) => {
        let pric = this.state.List[ind].price;
        let sum = (pric * list).toFixed(2);
        this.setState({
            List: this.state.List
        })
        this.state.List[ind].totalPrice = sum;
        // console.log(pric)
    }
    //计算总价
    total = () => {
        let num = 0;
        let price = 0;
        let allprice = 0;
        let alltotal = 0;
        let allnum = 0;
        for (let i of this.state.arr) {
            for (let j of this.state.List) {
                if (j.id === i) {
                    num = j.num
                    price = j.price
                    allnum += num
                    // console.log(j.num)
                }
            }
            allprice = num * price;
            alltotal += allprice;
        }
        this.refs.allprice.innerHTML = '总计：¥' + alltotal.toFixed(2);
        this.refs.allnum.innerHTML = '结算(' + allnum + ')'

    }
    // 生命周期更新后
    componentDidUpdate(){
        if(this.state.List.length===0){
            // this.setState({
            //     bool:false
            // })
            this.refs.shadiao.innerHTML = ' ';
            this.refs.dell.style.display = 'block ';
        }
        // console.log(this.state.List.length)
    }
    // 商品删除
    del = () => {
        let newArr = [];
        this.state.List.map(item => {
            return newArr.push(item)
        })
        for (let i in newArr) {
            for (let j in this.state.arr) {
                if (newArr[i].id === this.state.arr[j]) {
                    newArr.splice(i, 1)
                }
            }
        }
        this.setState({
            List: [...newArr]
        })
    }
    //商品删除全选
    ondelall = () => {
        let val = this.state.List[0].allChecked;
        for (var i in this.state.List) {
            this.setState({
                List: this.state.List
            })
            this.state.List[i].checked = !val;

            if (this.state.List[i].checked === true) {
                this.state.arr.push(this.state.List[i].id);

            } else {
                this.state.arr = [];
            }

        }
        this.setState({
            status: [
                {
                    defaultChecked: !this.state.str[0].defaultChecked,
                    redact: this.state.str[0].redact,
                    allChecked: !this.state.str[0].allChecked
                }
            ]
        })

    }

    render() {

        return (
            <div>
                {/* 头部 */}
                <div className={styles.top}>
                    <span className={styles.bianji} onClick={() => {
                        this.redact(this.state.str)
                    }}
                        ref='redact'
                    >编辑</span>
                    <h1 className={styles.h1}>清单列表</h1>
                </div>
                {/* 清单商品 */}
                <div className={styles.content} style={this.state.bool?{display:'block'}:{display:'none'}} ref='shadiao'>
                    <div className={styles.shopBox}>
                        <dl>
                            <dt className={styles.shoptitle}>
                                <h2>
                                    <img src="https://img.ddky.com/c/wap/images/ddky2/kuai_icon.png" alt="" />
                                    <span className={styles.shopName}>叮当智慧药房（广州）有限公司广州越秀东川路店</span>
                                    <span className={styles.deliverTip + " " + styles.fr}>急送,满¥28免运费</span>
                                </h2>
                            </dt>
                            <dd>
                                {
                                    this.state.List.map((itm, ind) => {
                                        return <div className={styles.item} key={ind} >
                                            <div className={styles.left}>
                                                {
                                                    this.state.str.map(i => {
                                                        return <Flex key={i.defaultChecked}>
                                                            <Flex.Item>
                                                                <AgreeItem data-seed="logId"
                                                                    onChange={
                                                                        // (e => console.log(e))
                                                                        () => this.onChange(ind)
                                                                    }
                                                                    checked={i.allChecked || this.state.List[ind].checked ? true : false}
                                                                >
                                                                    <a style={{ display: 'inline-block' }}></a>
                                                                </AgreeItem>
                                                            </Flex.Item>
                                                        </Flex>
                                                    })
                                                }

                                            </div>
                                            <div className={styles.right}>
                                                <div className={styles.goodsInfo + " " + styles.fl}>
                                                    <div className={styles.goodsImg + " " + styles.fl}>
                                                        <img src={itm.img} alt="" />
                                                    </div>
                                                    <div className={styles.goods_description}>
                                                        <h3 >{itm.name}</h3>
                                                        <p className={styles.promotionsDesc}>{itm.measure}</p>
                                                        <p className={styles.goods_promition}></p>
                                                        <p>{itm.totalPrice}</p>
                                                        <p className={styles.goodsPrice} >{itm.price}</p>
                                                    </div>
                                                    <div className={styles.goodsNumEdit}>
                                                        <img onClick={() => {
                                                            this.onCLickReduce(ind)
                                                        }} src="https://img.ddky.com/c/wap/images/ddky2/jian_icon.png" alt="" className={styles.fl} />
                                                        <i className={styles.goodsnum} ref='dan'>{itm.num}</i>
                                                        <img onClick={() => {
                                                            this.onClickAdd(ind)
                                                        }} src="https://img.ddky.com/c/wap/images/ddky2/jia_icon.png" className={styles.fr} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* 总计价格 */}
                                            <div className={styles.totalBox + " " + styles.cl} ref='dff'>
                                                <div className={styles.left}>
                                                    <Flex>
                                                        <Flex.Item>
                                                            <AgreeItem data-seed="logId" onChange={
                                                                () => this.onChangeAll()
                                                            }
                                                                checked={this.state.str[0].allChecked ? true : false}
                                                            >
                                                                <a style={{ display: 'inline-block' }}>全选</a>
                                                            </AgreeItem>
                                                        </Flex.Item>
                                                    </Flex>
                                                </div>
                                                <div className={styles.totalPrice + " " + styles.fl}>
                                                    <p ref='allprice'>总计：¥0.00</p>
                                                </div>
                                                <p className={styles.settle + " " + styles.fr} ref='allnum'>结算(0)</p>
                                                <span onClick={() => {
                                                    this.del()
                                                }} className={styles.bianjiDel + " " + styles.fr + " " + styles.col_c7c} ref='del' style={{ display: 'none' }}>删除</span>
                                            </div>
                                            {/* 全删 */}
                                            <div className={styles.bianjiDelBox + " " + styles.cl} ref='del' style={{ display: 'none' }}>
                                                <p className={styles.fl}>
                                                        <Flex>
                                                            <Flex.Item>
                                                                <AgreeItem data-seed="logId" onChange={
                                                                    () => this.onChangeAll()
                                                                }
                                                                    checked={this.state.str[0].allChecked ? true : false}
                                                                >
                                                                    <a style={{ display: 'inline-block' }}>全选</a>
                                                                </AgreeItem>
                                                            </Flex.Item>
                                                        </Flex>
                                                </p>
                                                 <span onClick={() => {
                                                    this.del()
                                                }} className={styles.bianjiDel + " " + styles.fr + " " + styles.col_c7c}>删除</span>
                                            </div>
                                        </div>
                                    })
                                }

                            </dd>
                        </dl>
                    </div>
                </div>
                <div className={styles.content} style={this.state.bool?{display:'none'}:{display:'block'}} ref='dell'>
                    <div className={styles.nothingImgBox}>
                        <img src="https://img.ddky.com/c/wap/images/ddky2/onthing.png" alt="" />
                        <p>亲，这里空空的耶，快去挑选吧～</p>
                    </div>
                    <div className={styles.hotSbox}>
                        <div className={styles.recommendBox}>
                            <img src="https://img.ddky.com/c/wap/images/ddky2/recommend.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




// Shopping = withRouter(Shopping)
export default connect((state) => {
    return state
})(Shopping)