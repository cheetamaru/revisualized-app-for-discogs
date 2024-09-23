import { Collapse, CollapseProps, ConfigProvider, Flex } from "antd";
import style from "./main/style/page.module.css"
import Title from "antd/es/typography/Title";
import RoutedUserSearcher from "@/app/user/ui/components/UserSearcher/RoutedUserSearcher";
import { pageStyles } from "./main/style/pageStyles";
import { InfoCircleOutlined } from "@ant-design/icons";

const {
  boxStyle,
  titleContainerStyle,
  titleStyle
} = pageStyles;

export default function Home() {
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
    <main>
      <Flex style={boxStyle} justify="center" align="center">
        <div>
          <div style={titleContainerStyle}>
            <Title
              style={titleStyle}
            >
              Revisualized App<br />for Discogs
            </Title>
          </div>
          
          <div className={style.username_input}>
            <RoutedUserSearcher routerPathBeforeUsername="/wantlist/" />
          </div>
          <div className={style.help}>
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
            
          </div>
        </div>
      </Flex>
    </main>
  );
}
