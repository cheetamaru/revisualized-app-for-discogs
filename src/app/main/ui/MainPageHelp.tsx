import { InfoCircleOutlined } from '@ant-design/icons';
import { Collapse, CollapseProps, ConfigProvider } from 'antd'
import React from 'react'

const MainPageHelp = () => {
    const text = `The purpose of the site is to show other people your wantlist of music releases.
    To use this site you should have the username of a Discogs.com user with an open account.`
  
    const items: CollapseProps['items'] = [
      {
        key: '1',
        label: <p><span style={{marginRight: 4}}><InfoCircleOutlined /></span> How to use this site?</ p>,
        children: <p> {text}</p>,
        showArrow: false,
      },
    ];

  return (
    <ConfigProvider
        theme={{
        components: {
            Collapse: {
            contentPadding: "0",
            }
        },
        token: {
            colorText: "rgba(255, 255, 255, 0.5)",
            padding: 0,
        },
        }}
    >
        <Collapse
            items={items}
            ghost
        />
    </ConfigProvider>
  )
}

export default MainPageHelp;
