import { Component } from 'react';
import { connect } from 'dva';
// import { withRouter } from 'dva/router';
import styles from './JumpWindow.css';
class JumpWindow extends Component {
    // 需要父组件传布尔值，和提示信息
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>                   
                <div className={styles.shadowing} style={
                    // 显示隐藏
                    this.props.bool ? { display: 'none' } : { display: 'block' }
                    }>
                    <div className={styles.window}>
                        {/*提示信息 */}
                        <p>{this.props.info}</p>
                        {/* 修改父组件的值 */}
                        <button onClick={()=>this.props.onClicked({
                            bool:true
                        })}>确定</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect()(JumpWindow)