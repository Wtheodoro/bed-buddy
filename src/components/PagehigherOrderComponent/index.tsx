import React from 'react'
import { ComponentWrapper, Layout, NavWrapper, HeaderWrapper } from './styles'

const PagehigherOrderComponent = (Component: React.ComponentType) => () => {
  return (
    <Layout>
      <HeaderWrapper></HeaderWrapper>

      <ComponentWrapper>
        <Component />
      </ComponentWrapper>

      <NavWrapper></NavWrapper>
    </Layout>
  )
}

export default PagehigherOrderComponent
