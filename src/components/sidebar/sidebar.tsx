import { FC, useState } from 'react'

import { clsx } from 'clsx'

import s from './sidebar.module.scss'

import { BurgerIcon, CloseIcon, HomeIcon, NewsIcon, SettingsIcon } from '@/assets/icons'

const navItems = [
  { title: 'home', icon: <HomeIcon /> },
  { title: 'news', icon: <NewsIcon /> },
  { title: 'settings', icon: <SettingsIcon /> },
  { title: 'audio', icon: <HomeIcon /> },
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

  return (
    <aside className={cn.sidebar}>
      <div className={cn.sb_liner}>
        <header className={cn.sb_header}>
          <button type="button" className={cn.burger} onClick={() => setIsOpen(!isOpen)}>
            <span>{isOpen ? <CloseIcon /> : <BurgerIcon />}</span>
          </button>
          {/*<img src="'''" alt="'''" className={cn.logo} />*/}
        </header>
        <nav className={cn.menu}>
          {navItems.map((item, index) => {
            return (
              <button key={index} className={cn.sb_button}>
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
