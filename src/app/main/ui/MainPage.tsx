import { Flex } from 'antd'
import React from 'react'
import { pageStyles } from '../style/pageStyles';
import MainPageTitle from './MainPageTitle';
import RoutedUserSearcher from "@/app/user/ui/components/UserSearcher/RoutedUserSearcher";
import MainPageHelp from './MainPageHelp';
import style from "../style/page.module.css"

const {
    boxStyle,
  } = pageStyles;

const MainPage = () => {
  return (
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
  )
}

export default MainPage;
