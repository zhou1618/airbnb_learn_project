import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SectionV1Wrapper } from './style'

interface IProps {
  children?: ReactNode
  infoData: any
}

const HomeSectionV1: FC<IProps> = (props) => {
  const { infoData } = props
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.list} itemWidth="25%" />
      <SectionFooter />
    </SectionV1Wrapper>
  )
}

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default memo(HomeSectionV1)
