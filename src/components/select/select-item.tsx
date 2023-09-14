import { FC } from 'react'

import * as Select from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectItemPropsType = {
  className?: string
  value: string
}

export const SelectItem: FC<SelectItemPropsType> = ({ value, ...props }) => {
  return (
    <Select.Item className={s.item} value={value} {...props}>
      <Select.ItemText>
        <span>{value}</span>
      </Select.ItemText>
    </Select.Item>
  )
}
