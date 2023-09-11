import { FC } from 'react'

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  )
}
