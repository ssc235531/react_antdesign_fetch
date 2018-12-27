import React, { Component } from "react";
import { Select,InputNumber } from 'antd';
import '../css/HomePage.css';
import { post} from '../fetch'

const Option = Select.Option;
class HomePage extends Component{
    constructor(){
        super();
        this.state = {
            number1: '',
            number2: '',
            number3: ''
        }
    }
    componentWillMount() {
        //  "proxy": "http://192.168.3.99:8888"
        // type=hot
        // get('/api/v1/xadmin/object/property/',{obj_key: 'c100_3IPr0HKv'}).then((res) => {
        //     console.log(res)
        // })

        post('/v2/login',{
            captcha_code: '9987',
            password: "ssc",
            username: "ssc"
        }).then((res) => {
            console.log(res)
        })
        // put('/api/v1/xadmin/object/property/',{
        //
        // }).then((res) => {
        //     console.log(res)
        // })
    }
    onChange = () => {
        console.log(this.state.number)
    }
    handleChange = () => {
        console.log("shishishishi")
    }
    submitBtn = () => {
        if(this.state.number1 && this.state.number1.length > 0){
            if(this.state.number2 && this.state.number2.length > 0) {
                if(this.state.number3 && this.state.number3.length > 0) {

                }
            }
        }
    }
    render() {
        return (
            <div className='homepage_box'>
                <div className="homepage_head">
                    <div className="homepage_head_left">
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={this.handleChange}
                            // onFocus={handleFocus}
                            // onBlur={handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </div>
                    <InputNumber min={1} max={10} defaultValue={this.state.number1} onChange={this.onChange} />
                    <InputNumber min={1} max={10} defaultValue={this.state.number2} onChange={this.onChange} />
                    <InputNumber min={1} max={10} defaultValue={this.state.number3} onChange={this.onChange} />
                    <button onClick={this.submitBtn}></button>
                </div>
            </div>
        )
    }
}
export default HomePage;