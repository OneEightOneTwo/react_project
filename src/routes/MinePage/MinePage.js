import { Component } from 'react';
import { connect } from 'dva';
// import styles from './MinePage.css';

class MinePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <div>
                我的
            </div>
        )
    }
}
export default connect()(MinePage)