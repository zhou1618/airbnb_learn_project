import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const DetailInfos: FC<IProps> = () => {
  return <div>DetailInfos</div>
}

export default memo(DetailInfos)
