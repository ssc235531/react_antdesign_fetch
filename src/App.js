import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Icon,} from 'antd';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import HomePage from './basePage/HomePage'; // 基本管理页面
import ConcatPae from './basePage/ConcatPage'; // 搜索合并页面
import AddPropertyPage from './basePage/AddPropertyPage'; // 扩展属性页面
import RelatedObjectPage from './basePage/RelatedObjectPage'; // 关联对象页面
const { Header, Content, Sider } = Layout;
class App extends Component {
    render() {
      return (
          <Router>
              <Layout className='layout_box'>
                  <Header className="header">
                      <div className="logo" >
                          <Icon type="smile" style={{fontSize: '30px',color: 'red'}} theme="twoTone" />
                      </div>
                      <div className="log_out">
                          <Icon type="close-circle" style={{fontSize: '30px',color: 'red'}} theme="twoTone" />
                      </div>
                  </Header>
                  <Layout className='layout_body'>
                      <Sider width={200} style={{ background: '#001529' }}>
                          <Menu
                              defaultSelectedKeys={['1']}
                              defaultOpenKeys={['sub1']}
                              mode="inline"
                              theme="dark"
                          >
                              <Menu.Item key="1">
                                  <Icon type="pie-chart" />
                                  <span><Link to='/'>基本管理</Link></span>
                              </Menu.Item>
                              <Menu.Item key="2">
                                  <Icon type="desktop" />
                                  <span><Link to='/concatPage'>搜索合并</Link></span>
                              </Menu.Item>
                              <Menu.Item key="3">
                                  <Icon type="inbox" />
                                  <span><Link to='/addPropertyPage'>扩展属性</Link></span>
                              </Menu.Item>
                              <Menu.Item key="4">
                                  <Icon type="inbox" />
                                  <span><Link to='/relatedObjectPage'>关联对象</Link></span>
                              </Menu.Item>
                          </Menu>
                      </Sider>
                      <Layout>
                          <Content style={{
                              background: '#fff', padding: 20, margin: 20, minHeight: 280,
                          }}
                          >
                              <Route exact path='/' component={HomePage}></Route>
                              <Route path='/concatPage' component={ConcatPae}></Route>
                              <Route path='/addPropertyPage' component={AddPropertyPage}></Route>
                              <Route path='/relatedObjectPage' component={RelatedObjectPage}></Route>
                          </Content>
                      </Layout>
                  </Layout>
              </Layout>
          </Router>
      )
  }
}

export default App;
