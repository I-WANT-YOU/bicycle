import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu, Button, Icon} from 'antd';
import MenuList from '../../config/menuConfig'
import './index.less';

const {SubMenu} = Menu;

export default class navLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: '',
            collapsed: false,
        };
    }

    componentWillMount() {
        let navList = this.renderNavList(MenuList);
        this.setState({
            navList: navList
        })
    }

    //菜单收缩
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    //生成导航列表
    renderNavList = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={
                        item.icon ?
                            <NavLink to=''>
                                <Icon type={item.icon}/>
                                <span>{item.title}</span>
                            </NavLink>
                            :
                            <NavLink to=''>
                                <Icon type=','/>
                                <span>{item.title}</span>
                            </NavLink>

                    }>
                        {this.renderNavList(item.children)}
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.key}>
                        {
                            item.icon ?
                                <NavLink to=''>
                                    <Icon type={item.icon}/>
                                    <span>{item.title}</span>
                                </NavLink>
                                :
                                <NavLink to=''>
                                    <Icon type=','/>
                                    <span>{item.title}</span>
                                </NavLink>
                        }
                    </Menu.Item>)
            }

        })
    }

    render() {
        return (
            <div className='leftNav' style={{width: '100%', height: "100%"}}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 16}}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
                </Button>
                <Menu
                    // style={{width: "100%", height: "100%"}}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    theme={"dark"}
                    mode={"inline"}
                    inlineCollapsed={this.state.collapsed}
                >
                    {this.state.navList}
                </Menu>
            </div>

        );
    }

}

