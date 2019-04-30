import { Component } from 'react';
import { connect } from 'dva';
import { Carousel, WingBlank } from 'antd-mobile';
//引入高阶组件，引入footerPage的爸爸
class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [
                    require('../../assets/banner-1.jpg'),
                    require('../../assets/banner-2.jpg'),
                    require('../../assets/banner-3.jpg'),
                    require('../../assets/banner-4.jpg'),
                    require('../../assets/banner-5.jpg'),
                    require('../../assets/banner-6.jpg')
                ],
            });
        }, 100);
    }
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                    autoplay
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        )
    }
}
export default connect()(Banner);