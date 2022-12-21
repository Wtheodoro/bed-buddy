import React from 'react'
import Header from '../Header'
import { ComponentWrapper, Layout, HeaderWrapper } from './styles'

const PagehigherOrderComponent = (Component: React.ComponentType) => () => {
  return (
    <Layout>
      <HeaderWrapper>
        <Header userName='Walison' />
      </HeaderWrapper>

      <ComponentWrapper>
        <Component />
      </ComponentWrapper>
    </Layout>
  )
}

export default PagehigherOrderComponent
