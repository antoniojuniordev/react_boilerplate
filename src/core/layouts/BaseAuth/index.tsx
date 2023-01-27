import { Outlet } from 'react-router-dom'
import { logos } from 'core/assets'
import * as Styled from './styles'

export function BaseAuthLayout() {
  return (
    <Styled.Container>
      <Styled.ContainerLogo>
        <p className='text-white text-xsmall'>
          Branding tools designed for your business
        </p>
      </Styled.ContainerLogo>
      <Styled.ContainerCardAuth>
        <Outlet />
      </Styled.ContainerCardAuth>
    </Styled.Container>
  )
}
