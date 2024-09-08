'use client'
 
import style from "./main/style/error.module.css"
import { Flex } from 'antd'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'
import { CloseCircleFilled } from '@ant-design/icons'
import { usePathname } from 'next/navigation'
import RoutedUserSearcher from '@/app/user/ui/components/UserSearcher/RoutedUserSearcher'
import { globalErrorStyle } from "@/shared/ui/components/styles/globalErrorStyle"
 
const getUsername = (pathname: string) => {
  const str = pathname;
  const indexOfSeparator = str.lastIndexOf('/');
  return str.substring(indexOfSeparator + 1);
}

const {
  containerStyle,
  iconStyle,
  titleStyle,
  textStyle
} = globalErrorStyle;

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void,
}) {
  const pathname = usePathname();

  const initialValue = getUsername(pathname);

  return (
    <div className={style.error_page}>
      <Flex justify='center' align='center' vertical style={containerStyle}>
        <CloseCircleFilled style={iconStyle} />
        <Title level={3} style={titleStyle}>{error.message}</Title>
        <div>
          <Text style={textStyle}>You can try again with a different search</Text>
        </div>
        <div className={style.username_input}>
          <RoutedUserSearcher
            initialValue={initialValue}
            routerPathBeforeUsername="/wantlist/"
          />
        </div>
      </Flex>
    </div>
  )
}