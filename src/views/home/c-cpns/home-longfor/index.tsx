import ScrollView from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LongforWrapper } from './style'

interface IProps {
  children?: ReactNode
  infoData: any
}

const HomeLongfor: FC<IProps> = (props) => {
  const { infoData } = props

  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item: any) => {
            return <LongforItem itemData={item} key={item.city} />
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  )
}

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default memo(HomeLongfor)
