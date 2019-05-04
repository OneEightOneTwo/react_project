import { Component } from 'react';
import { connect } from 'dva';
// import styles from './CartPage.css';
import FooterPage from '../../components/public/FooterPage';
import Shopping from '../../components/Shopping/Shopping';
class CartPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <div>
                <Shopping />
                <FooterPage/>
            </div>
        )
    }
}
export default connect()(CartPage)