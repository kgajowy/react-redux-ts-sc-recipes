import {css} from 'styled-components'

export const BREAKPOINT = 550

export const media = {
    small: (...args: any) => css`
        @media (max-width: ${BREAKPOINT}px) {
          ${
        // @ts-ignore
        css(...args)
        }
        }
      `,
    medium: (...args: any) => css`
        @media (max-width: ${2 * BREAKPOINT}px) and (min-width: ${BREAKPOINT + 1}px) {
          ${
        // @ts-ignore
        css(...args)
        }
        }
    `,
    large: (...args: any) => css`
        @media (min-width: ${2 * BREAKPOINT + 1}px) {
          ${
        // @ts-ignore
        css(...args)
        }
        }
      `,
}
