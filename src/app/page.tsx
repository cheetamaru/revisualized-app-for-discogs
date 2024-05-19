import { Flex, Layout } from "antd";
import UsernameInput from "./components/user/UsernameInput";
import style from "./page.module.css"

const boxStyle: React.CSSProperties = {
  width: '100%',
  height: '100vh',
  borderRadius: 6,
};

export default function Home() {
  return (
    <main>
      <Flex style={boxStyle} justify="center" align="center">
        <div>
          <div className={style.username_input}>
            <UsernameInput />
          </div>
        </div>
      </Flex>
    </main>
  );
}
