import { Component } from 'react';
import { connect } from 'dva';
// import styles from './CartPage.css';
import FooterPage from '../../components/public/FooterPage';
class CartPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <div>
                购物车
                <FooterPage/>
            </div>
        )
    }
}
export default connect()(CartPage)