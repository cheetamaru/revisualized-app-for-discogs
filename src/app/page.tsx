import { Flex, Layout } from "antd";
import UsernameInput from "./components/user/UsernameInput";
import style from "./page.module.css"
import Title from "antd/es/typography/Title";

const boxStyle: React.CSSProperties = {
  width: '100%',
  height: '100vh',
};

export default function Home() {
  return (
    <main>
      <Flex style={boxStyle} justify="center" align="center">
        <div>
          <div style={{display: 'flex', justifyContent: "center"}}>
            <Title style={{color: "white"}}>Discogs Revitalized</Title>
          </div>
          
          <div className={style.username_input}>
            <UsernameInput />
          </div>
        </div>
      </Flex>
    </main>
  );
}
