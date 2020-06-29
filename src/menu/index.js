import React, { useState } from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

// import { Container } from './styles';

function MenuComponente() {
    const [current, setCurrent] = useState();

    function handleClick(e) {
        console.log('click ', e);
        setCurrent(e.key);
      };
      
    
    return(
    <>
    <React.StrictMode>
    <Menu onClick={(e) => (handleClick)} selectedKeys={current} mode="horizontal">
        <SubMenu title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
    </Menu>
    </React.StrictMode>
    </>
      
    );
}



export default MenuComponente;