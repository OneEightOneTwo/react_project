import { Component } from 'react';
import { connect } from 'dva';
import styles from './FooterPage.css';
class FooterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: [require('../../assets/1542445956477_104_104.jpg'),
            require('../../assets/1542445964888_104_104.jpg'),
            require('../../assets/1542445971938_104_104.jpg'),
            require('../../assets/1542445977803_104_104.jpg')]
        }
    }
    toPage(index) {
        if (index.index === 0) {
            this.setState({
                img: [require('../../assets/1542445952383_104_104.jpg'),
                require('../../assets/1542445964888_104_104.jpg'),
                require('../../assets/1542445971938_104_104.jpg'),
                require('../../assets/1542445977803_104_104.jpg')]
            })
            window.location.href = "#/home"
        } else if (index.index === 1) {
            this.setState({
                img: [require('../../assets/1542445956477_104_104.jpg'),
                require('../../assets/1542445962489_104_104.jpg'),
                require('../../assets/1542445971938_104_104.jpg'),
                require('../../assets/1542445977803_104_104.jpg')]
            })
            window.location.href = "#/dingdang"
            console.log(index.index)
        } else if (index.index === 2) {
            window.location.href = "#/cart"
        } else if (index.index === 3) {
            window.location.href = "#/mine"
        }
        // console.log(index.index)
    }
    render() {
        return (
            <div>
                <ul className={styles.footer}>
                    {this.state.img.map((item, index) => {
                        return <li onClick={this.toPage.bind(this, { index })} className={styles.footer_l} key={item}>
                            <img src={item} alt="" />
                        </li>
                    })}
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
                </ul>
            </div>
        )
    }
}
export default connect()(FooterPage)