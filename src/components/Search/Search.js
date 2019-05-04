import { Component } from 'react';
import { connect } from 'dva';
import styles from './Search.css';
import { SearchBar } from 'antd-mobile';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '美食',
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
            }]
        }
    }
    // componentDidMount() {
    //     this.autoFocusInst.focus();
    // }
    // onChange = (value) => {
    //     this.setState({ value });
    // };
    // clear = () => {
    //     this.setState({ value: '' });
    // };
    // handleClick = () => {
    //     this.manualFocusInst.focus();
    // }
    render() {
        return (
            <div>
                <SearchBar
                    // value={this.state.value}
                    placeholder="搜索药品、症状、品牌"
                    onFocus={() => console.log('onFocus')}
                    // onBlur={() => console.log('onBlur')}
                    // onCancel={() => console.log('onCancel')}
                    showCancelButton
                    cancelText="搜索"
                // onChange={this.onChange}
                />
                <div className={styles.cententBox}>
                    <div className={styles.hotSearchBox}>
                        <p>热门搜索</p>
                        <ul className={styles.search + "" + styles.cl}>
                            <li>超值拼团</li>
                            <li>三七粉</li>
                            <li>驱蚊</li>
                            <li>过敏</li>
                            <li>感冒</li>
                            <li>喉咙痛</li>
                            <li>避孕</li>
                            <li>卫生巾</li>
                            <li>日本贝亲</li>
                            <li>狮王祛痘</li>
                        </ul>
                    </div>
                    <div className={styles.commonBox}>
                        <p>常用分类</p>
                        <div className={styles.drugList}>
                            {
                                this.state.drugList.map((item, index) => {
                                    return <div key={index}>
                                        <img src={item.url} alt="" />
                                        <p>{item.titel}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect()(Search)