import React from 'react'
import Flex from '../Flex'

const Page = (props) => {
  return (
    <Flex direction="column" width="match-parent" height="match-parent" bgColor="prim" gap="reg">
        { props.children }
    </Flex>
  )
}

export default Page