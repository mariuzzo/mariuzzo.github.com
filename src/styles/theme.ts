import { shorted } from 'shorted-theme'

const unit = 16
const toFontSizeUnits = (px: number) => ({ px, rem: px / unit })

export const theme = {
  color: {
    copy: '#202020',
    background: '#f9f8f8',
    primary: '#022050',
    secondary: '#0075a2',
    warning: '#e3b23c',
    error: '#9c3848'
  },
  fontSize: {
    base: toFontSizeUnits(unit),
    l1: toFontSizeUnits(48),
    l2: toFontSizeUnits(36),
    l3: toFontSizeUnits(24),
    copy: toFontSizeUnits(20)
  },
  transition: {
    default: 'ease-in-out .3s all'
  }
}

export const $theme = shorted(theme)
