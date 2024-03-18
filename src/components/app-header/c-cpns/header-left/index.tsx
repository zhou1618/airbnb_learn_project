import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const HeaderLeft: FC<IProps> = () => {
  const navigate = useNavigate()
  function logoClickHandle() {
    navigate('/home')
  }

  return (
    <LeftWrapper>
      <div className="logo" onClick={logoClickHandle}>
        <IconLogo />
      </div>
    </LeftWrapper>
  )
}

export default memo(HeaderLeft)
