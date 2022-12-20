import React from 'react'
import { ComponentWrapper, Layout, NavWrapper, HeaderWrapper } from './styles'

const PagehigherOrderComponent = (Component: React.ComponentType) => () => {
  return (
    <Layout>
      <HeaderWrapper>HEADER</HeaderWrapper>

      <ComponentWrapper>
        <Component />
      </ComponentWrapper>

      <NavWrapper>NAVBAR</NavWrapper>
    </Layout>
  )
}

export default PagehigherOrderComponent
