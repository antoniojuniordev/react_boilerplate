import { css } from 'styled-components'

export default css`
  .text-white {
    color: ${({ theme }) => theme.colors.white};
  }

  .text-light {
    color: ${({ theme }) => theme.colors.light};
  }

  .text-dark {
    color: ${({ theme }) => theme.colors.dark};
  }

  .text-xsmall {
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
  }

  .text-small {
    font-size: ${({ theme }) => theme.font.sizes.small};
  }

  .text-medium {
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }

  .text-large {
    font-size: ${({ theme }) => theme.font.sizes.large};
  }

  .text-xlarge {
    font-size: ${({ theme }) => theme.font.sizes.xlarge};
  }

  .text-xxlarge {
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  }

  .text-huge {
    font-size: ${({ theme }) => theme.font.sizes.huge};
  }
`
