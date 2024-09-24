import { Flex } from "antd";
import style from "./main/style/page.module.css"
import RoutedUserSearcher from "@/app/user/ui/components/UserSearcher/RoutedUserSearcher";
import { pageStyles } from "./main/style/pageStyles";
import MainPageTitle from "./main/ui/MainPageTitle";
import MainPageHelp from "./main/ui/MainPageHelp";

const {
  boxStyle,
} = pageStyles;

export default function Home() {
  return (
    <main>
      <Flex style={boxStyle} justify="center" align="center">
        <div>
          <MainPageTitle />

          <div className={style.username_input}>
            <RoutedUserSearcher routerPathBeforeUsername="/wantlist/" />
          </div>

          <div className={style.help}>
            <MainPageHelp />
          </div>
        </div>
      </Flex>
    </main>
  );
}
