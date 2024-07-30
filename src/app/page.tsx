import { Flex } from "antd";
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
        </div>
      </Flex>
    </main>
  );
}
