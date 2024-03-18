import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { BannerWrapper } from './style'
// import coverImg from "@/assets/img/cover_01.jpeg"

interface IProps {
  children?: ReactNode
}

const HomeBanner: FC<IProps> = () => {
  return <BannerWrapper>{/* <img src={coverImg} alt="" /> */}</BannerWrapper>
}

export default memo(HomeBanner)
