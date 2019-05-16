const size = {
    mobileSm: '400px',
    mobileMd: '540px',
    mobileLg: '767px',
    tabletSm: '840px',
    tabletMd: '991px',
    laptop: '1024px',
    laptopLSm: '1200px',
    laptopL: '1440px',
    desktop: '2560px'
  }

const device = {
    mobileSm: `(max-width: ${size.mobileSm})`,
    mobileMd: `(max-width: ${size.mobileMd})`,
    mobileLg: `(max-width: ${size.mobileLg})`,
    tabletSm: `(max-width: ${size.tabletSm})`,
    tabletMd: `(max-width: ${size.tabletMd})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopLSm: `(max-width: ${size.laptopLSm})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`
};

export default device;