// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SectionsWrapper } from './style'
import type { ISearchInfo } from '../../type/index'

interface IProps {
  children?: ReactNode
  searchInfos: ISearchInfo
}

const SearchSections: FC<IProps> = (props) => {
  const { searchInfos } = props

  return (
    <SectionsWrapper>
      {searchInfos.map((item, index) => {
        return (
          <div className="item" key={index}>
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
            {index !== searchInfos.length - 1 && (
              <div className="divider"></div>
            )}
          </div>
        )
      })}
    </SectionsWrapper>
  )
}

// SearchSections.propTypes = {
//   searchInfos: PropTypes.array
// }

export default memo(SearchSections)
