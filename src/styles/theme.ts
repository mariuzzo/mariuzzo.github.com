import { shorted } from 'shorted-theme'

const unit = 16
const toFontSizeUnits = (px: number) => ({ px, rem: px / unit })

export const theme = {
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1000px'
  },
  color: {
    copy: '#3D3D3D',
    copyLight: '#707070',
    background: '#F6F4F4',
    link: '#695CFF',
    primary: '#695CFF',
    secondary: '#C7C2FF'
  },
  fontSize: {
    base: toFontSizeUnits(unit),
    l1: toFontSizeUnits(48),
    l2: toFontSizeUnits(36),
    l3: toFontSizeUnits(24),
    copy1: toFontSizeUnits(20),
    copy2: toFontSizeUnits(16)
  },
  fontWeight: {
    light: 300,
    regular: 400,
    semiBold: 600,
    black: 900
  },
  transition: {
    default: 'ease-in-out .3s all'
  }
}

export const $theme = shorted(theme)
