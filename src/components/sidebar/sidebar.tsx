import { FC, useState } from 'react'

import { clsx } from 'clsx'
import { useNavigate } from 'react-router-dom'

import {
  BurgerIcon,
  CloseIcon,
  HomeIcon,
  LogoutIcon,
  NewsIcon,
  SettingsIcon,
} from '../../app/assets/icons'

import s from './sidebar.module.scss'

const navItems = [
  { title: 'home', icon: <HomeIcon /> },
  { title: 'news', icon: <NewsIcon /> },
  { title: 'settings', icon: <SettingsIcon /> },
  { title: 'audio', icon: <HomeIcon /> },
  { title: 'logout', icon: <LogoutIcon /> },
]

export const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const cn = {
    sidebar: clsx(s.sidebar, isOpen ? s.open : ''),
    sb_liner: clsx(s.sidebar_liner),
    sb_header: clsx(s.sidebar_header),
    burger: clsx(s.burger),
    logo: clsx(s.logo),
    menu: clsx(s.menu),
    sb_button: clsx(s.button),
  }
  const navigate = useNavigate()

  return (
    <aside className={cn.sidebar}>
      <div className={cn.sb_liner}>
        <header className={cn.sb_header}>
          <button type="button" className={cn.burger} onClick={() => setIsOpen(!isOpen)}>
            <span>{isOpen ? <CloseIcon /> : <BurgerIcon />}</span>
          </button>
          <span className={cn.logo}>Social Network</span>
          {/*<img src="'''" alt="'''" className={cn.logo} />*/}
        </header>
        <nav className={cn.menu}>
          {navItems.map((item, index) => {
            const navigateTo = () => {
              navigate(`/${item.title}`)
            }

            return (
              <button key={index} onClick={navigateTo} className={cn.sb_button}>
                <span>{item.icon}</span>
                <p>{item.title}</p>
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
