import Title from 'antd/es/typography/Title'
import React from 'react'
import { pageStyles } from '../style/pageStyles';

const {
    titleContainerStyle,
    titleStyle
  } = pageStyles;

const MainPageTitle = () => {
  return (
    <div style={titleContainerStyle}>
        <Title
            style={titleStyle}
        >
            Revisualized App<br />for Discogs
        </Title>
    </div>
  )
}

export default MainPageTitle;
