import { FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </>
  )
}
