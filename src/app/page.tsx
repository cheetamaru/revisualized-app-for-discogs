import { Flex } from "antd";
import style from "./page.module.css"
import Title from "antd/es/typography/Title";
import RoutedUserSearcher from "@/app/user/ui/components/UserSearcher/RoutedUserSearcher";

const boxStyle: React.CSSProperties = {
  width: '100%',
  height: '100vh',
};

const titleContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: "center"
}

const titleStyle: React.CSSProperties = {
  color: "white",
  textAlign: "center",
  fontSize: 44
}

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
