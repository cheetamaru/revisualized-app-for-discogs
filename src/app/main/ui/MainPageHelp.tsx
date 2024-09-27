import { InfoCircleOutlined } from '@ant-design/icons';
import { Collapse, CollapseProps, ConfigProvider } from 'antd'
import React from 'react'

const MainPageHelp = () => {
    const getHelpText = () => <p>
      The site is designed for sharing your music releases wantlist with others.
      To get started, you&apos;ll need the username of a <a href='https://www.discogs.com' target='_blank'>Discogs.com</a> user whose account is publicly accessible.
    </p>

    const items: CollapseProps['items'] = [
      {
        key: '1',
        label: <p><span style={{marginRight: 4}}><InfoCircleOutlined /></span> How to use this site?</ p>,
        children: getHelpText(),
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
