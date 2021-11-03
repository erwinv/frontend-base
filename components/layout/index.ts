import React from 'react'

interface LayoutProps {
  themeSwitch: React.ReactElement
}

export type LayoutType = React.FC<LayoutProps>

export { default as HomeLayout } from './home'
export { default as DocsLayout } from './docs'
