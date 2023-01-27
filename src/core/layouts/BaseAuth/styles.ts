import styled, { css } from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.light};
  background-position: center;
  background-repeat: no-repeat;
`

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: baseline;
  margin: auto;
`

export const ContainerCardAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 3rem auto auto;
  padding: 3.5rem;
  border-radius: 10px;
  width: 550px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};

    @media ${theme.device.laptop} {
      margin: auto auto auto auto;
    }

    @media ${theme.device.tablet} {
      width: 450px;
      padding: 2rem;
    }
  `}
`
