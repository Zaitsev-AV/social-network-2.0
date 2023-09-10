import { FC } from 'react'

import { clsx } from 'clsx'

import s from './header.module.scss'

export const Header: FC = () => {
  const cn = {
    header: clsx(s.header),
  }

  return <header className={cn.header}>Social network</header>
}
