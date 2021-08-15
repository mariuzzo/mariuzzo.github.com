import { shorted } from 'shorted-theme'

const unit = 16
const px2rem = (px: number) => {
  return px / unit
}

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
    base: px2rem(unit),
    l1: px2rem(48),
    l2: px2rem(36),
    l3: px2rem(24),
    copy1: px2rem(20),
    copy2: px2rem(16)
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
