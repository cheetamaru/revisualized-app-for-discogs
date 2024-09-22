import { Collapse, CollapseProps, Flex } from "antd";
import style from "./main/style/page.module.css"
import Title from "antd/es/typography/Title";
import RoutedUserSearcher from "@/app/user/ui/components/UserSearcher/RoutedUserSearcher";
import { pageStyles } from "./main/style/pageStyles";

const {
  boxStyle,
  titleContainerStyle,
  titleStyle
} = pageStyles;

export default function Home() {
  const text = `The purpose of the site is to show other people you wantlist of music mediums.
  To use this site you should have the username of a Discogs.com user with an open account`

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'How to use this site?',
      children: <p>{text}</p>,
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
          <div>
            <Collapse items={items} ghost />
          </div>
        </div>
      </Flex>
    </main>
  );
}
