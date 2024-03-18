import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'
// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { TabsWrapper } from './style'

interface IProps {
  children?: ReactNode
  tabNames: string[]
  tabClick: (index: number, item: string) => void
}

const SectionTabs: FC<IProps> = (props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index: number, item: string) {
    setCurrentIndex(index)
    tabClick(index, item)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames('item', { active: index === currentIndex })}
              onClick={() => itemClickHandle(index, item)}
            >
              {item}
            </div>
          )
        })}
      </ScrollView>
    </TabsWrapper>
  )
}

// SectionTabs.propTypes = {
//   tabNames: PropTypes.array
// }

export default memo(SectionTabs)
