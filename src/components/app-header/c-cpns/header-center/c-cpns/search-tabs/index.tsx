import classNames from 'classnames'
// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { TabsWrapper } from './style'

interface IProps {
  children?: ReactNode
  titles: string[]
  tabClick: React.Dispatch<React.SetStateAction<number>>
}

const SearchTabs: FC<IProps> = (props) => {
  const { titles, tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index: number) {
    setCurrentIndex(index)
    if (tabClick) tabClick(index)
  }

  return (
    <TabsWrapper>
      {titles.map((item, index) => {
        return (
          <div
            className={classNames('item', { active: currentIndex === index })}
            key={item}
            onClick={() => itemClickHandle(index)}
          >
            <span className="text">{item}</span>
            <span className="bottom"></span>
          </div>
        )
      })}
    </TabsWrapper>
  )
}

// SearchTabs.propTypes = {
//   titles: PropTypes.array
// }

export default memo(SearchTabs)
