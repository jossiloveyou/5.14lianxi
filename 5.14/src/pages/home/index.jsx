import React from 'react'
import './style.less'
import { Layout, Menu, Breadcrumb } from 'antd'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import Quan from './comp/Quan'
let { Header, Content, Sider } = Layout

// import {AppstoreOutlined, MenuUnfoldOutlined,MenuFoldOutlined,
//     PieChartOutlined,
//     DesktopOutlined,
//     InboxOutlined,
//     MailOutlined,
//   } from '@ant-design/icons';
let { SubMenu } =Menu




export default class Home extends React.Component{
  state = {
      collapsed: false,
  };
  toggleCollapsed = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
  };
  render () {
    return (
      <div className="Home">
        <Layout
          className="layout"   //容器 className
          style={{background:"#FFF"}}  //指定样式
          >
          <Header style={{background:"black",color:"white",fontSize:"18px"}}>
              <p >
                  <span style={{float:'left'}}>Purple</span>
                  <span style={{float:'right'}}>Daniel Russiel</span>
              </p>
          </Header>
          <Layout>
            <Sider style={{height:"300px",background:"#f1f1f1"}}>
            <Menu
              defaultSelectedKeys={['2']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              // Collapsed={this.state.collapsed}
              >
              
              <SubMenu
                key="sub1"
                title={
                <span>
                    {/* <MailOutlined /> */}
                    <span>Dshboard (2 new updates)</span>
                </span>
                }
              >
                
                <Menu.Item key="1"><NavLink to="/home/quan">666</NavLink></Menu.Item>
                
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                <span>
                    {/* <AppstoreOutlined /> */}
                    <span>Basic UI Elements</span>
                </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                <span>
                    {/* <AppstoreOutlined /> */}
                    <span>Icons</span>
                </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                <span>
                    {/* <AppstoreOutlined /> */}
                    <span>Form Elememts</span>
                </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                <span>
                    {/* <AppstoreOutlined /> */}
                    <span>Chart</span>
                </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub6"
                title={
                <span>
                    {/* <AppstoreOutlined /> */}
                    <span>Table</span>
                </span>
                }
              >
              </SubMenu>
              <SubMenu
                key="sub7"
                title={
                <span>
                    {/* <AppstoreOutlined /> */}
                    <span>Sample Pages</span>
                </span>
                }
              >
              </SubMenu>
              
            </Menu>
            </Sider>
            <Content style={{background:"white"}}>
                
              <Switch>
                  <Route path="/home/quan" component={Quan}/>
                  <Redirect to="/home/quan"/>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}