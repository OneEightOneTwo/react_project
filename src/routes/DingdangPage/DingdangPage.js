import { Component } from 'react';
import { connect } from 'dva';
// import styles from './DingdanPage.css';
import FooterPage from '../FooterPage/FooterPage.js';
class DingdangPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <div>
                叮当商城
                <FooterPage src={'1542445962489_104_104.jpg'}/>
            </div>
        )
    }
}
export default connect()(DingdangPage)