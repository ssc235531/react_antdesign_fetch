import React, { Component } from 'react';
import './App.css';
// import Head from './head/head'
// import BodyLeft from './body/bodyLeft'
// import BodyRight from './body/bodyRight'
import { Calendar, Icon, Upload, Modal } from 'antd';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
class App extends Component {
    constructor() {
        super();
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [
                {
                    uid: '-1',
                    name: 'xxx.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }
            ],
        }
    }
    handleCancel = () => this.setState({ previewVisible: false })
    handlePreview = (file) => {
        console.log(file)
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    handleChange = ({ fileList }) => {
        this.setState({ fileList })
    }
    amountNumber = (res) => {
        console.log('res');
        console.log(res)
    }
    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <Router>
                <div>
                    <Upload
                        headers={{'Content-Disposition':'form-data'}}
                        action="https://elm.cangdu.org/v1/addimg/"
                        data={{type:'shop'}}
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                    >
                        {fileList.length >= 3 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                </div>
            </Router>
        )
    }
}

export default App;

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function onPanelChange(value, mode) {
    console.log(value, mode);
}

// function Topics({ match }) {
//     return (
//         <div>
//             <h2>Topics</h2>
//             <ul>
//                 <li>
//                     <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//                 </li>
//                 <li>
//                     <Link to={`${match.url}/components`}>Components</Link>
//                 </li>
//                 <li>
//                     <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//                 </li>
//             </ul>
//             <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
//                 <Calendar fullscreen={false} onPanelChange={onPanelChange} />
//             </div>
//             <Icon type="step-forward" />
//             <Route path={`${match.path}/:topicId`} component={Topic} />
//             <Route
//                 exact
//                 path={match.path}
//                 render={() => <h3>Please select a topic.</h3>}
//             />
//         </div>
//     );
// }
export class Topics extends Component{
    constructor(props){
        super(props);
        console.log(this.props)
    }
    render() {
        return(
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/rendering`}>Rendering with React</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>
                <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
                <Icon type="step-forward" />
                <Route path={`${this.props.match.path}/:topicId`} component={Topic} />
                <Route
                    exact
                    path={this.props.match.path}
                    render={() => <h3>Please select a topic.</h3>}
                />
            </div>
        )
    }
}

function Topic({ match }) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
}