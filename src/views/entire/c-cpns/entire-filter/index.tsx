import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
}

const EntireFilter: FC<IProps> = () => {
  // 明确指定selectItems的类型是 string[]，默认不传推导的是 never[]
  const [selectItems, setSelectItems] = useState<string[]>([])

  function itemClickHandle(item: string) {
    const newItems: string[] = [...selectItems]
    if (newItems.includes(item)) {
      // 移除
      const itemIndex = newItems.findIndex((filterItem) => filterItem === item)
      newItems.splice(itemIndex, 1)
    } else {
      // 添加
      newItems.push(item)
    }
    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames('item', {
                active: selectItems.includes(item)
              })}
              key={item}
              onClick={() => itemClickHandle(item)}
            >
              {item}
            </div>
          )
        })}
      </div>
    </FilterWrapper>
  )
}

export default memo(EntireFilter)
