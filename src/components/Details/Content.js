import { Component } from 'react';
import { connect } from 'dva';
import styles from "./Content.css";
//引入轮播图组件
import Banner from '../../components/public/Banner';
class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [{
                name: "商品"
            }, {
                name: "详情"
            }, {
                name: "评价"
            }],
            curId: 0,
            history: [0]
        }  // 给组件添加状态
    }
    changeIdx(idx) {
        // console.log(idx);
        this.setState({
            curId: idx,
        })
    }
    render() {
        var isBox1show = this.state.curId === 0 ? 'block' : 'none';
        var isBox2show = this.state.curId === 1 ? 'block' : 'none';
        var isBox3show = this.state.curId === 2 ? 'block' : 'none';
        return (
            <div style={styles}>
                {/* tab的标题 */}
                <div className={styles.headerList}>
                    {
                        this.state.arr.map((item, index) => {
                            return <span key={index}
                                onClick={this.changeIdx.bind(this, index)} className={index === this.state.curId ? styles.active : ""}>
                                {item.name}
                            </span>
                        })
                    }
                </div>
                {/* tab的内容 */}
                <div className={styles.introduce}>
                    <div style={{ "display": isBox1show }}>
                        {/* 轮播图组件 */}
                        <Banner></Banner>
                        <div className={styles.txt}>
                            <h1>
                                <span>
                                    28分钟
                                </span>
                                [仁和可立克]复方氨酚烷胺胶囊
                            </h1>
                            <div className={styles.zhuzhi}>
                                <p >适用于缓解普通感冒及流行性感冒引起的发热、头痛、四肢酸痛、打喷嚏、流鼻涕、鼻塞、咽痛等症状，也可用于流行性感冒的预防和治疗。</p>
                                <p >说明书</p>
                            </div>
                            <p className={styles.other}>
                                <span>12粒x2板;</span>
                                <span>新老包装随机发货；</span>
                            </p>
                            <div className={styles.moneybox}>
                                <p >¥<span>28.00</span>
                                </p>
                                <p >月售 29468 笔</p>
                            </div>
                        </div>
                        <footer>
                                <ul>
                                    <li>
                                        <img src="https://img.ddky.com/c/wap/images/ddky2/wo.png" alt=""></img>
                                        <span>药师咨询</span>
                                    </li>
                                    <li>
                                        <img src="https://img.ddky.com/c/wap/images/ddky2/cart2.png" alt=""></img>
                                        <span>清单列表</span>
                                    </li>
                                    <li>加入清单</li>
                                </ul>
                            </footer>
                    </div>
                    <div style={{ "display": isBox2show }}>详情</div>
                    <div style={{ "display": isBox3show }}>评价</div>
                </div>
            </div>
        )
    }
}
export default connect()(Content);