import Indicator from '@/base-ui/indicator'
import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { DemoWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Demo: FC<IProps> = () => {
  const names = ['abc', 'cba', 'nba', 'mba', 'aaa', 'bbb', 'ccc', 'ddd']
  const [selectIndex, setSelectIndex] = useState(0)

  function toggleClickHandle(isNext = true) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = names.length - 1
    if (newIndex > names.length - 1) newIndex = 0
    setSelectIndex(newIndex)
  }

  return (
    <DemoWrapper>
      {/* <div>111</div> */}
      <div className="control">
        <button onClick={() => toggleClickHandle(false)}>上一个</button>
        <button onClick={() => toggleClickHandle(true)}>下一个</button>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {names.map((item) => {
            return <button key={item}>{item}</button>
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  )
}

export default memo(Demo)
