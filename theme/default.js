import color from 'color';

const colors = {
    primary: '#F8D459',
    primaryDark: '#C9AF41',
    secondary: '#2D2D2D',
    background: '#f8f9fb',
    foreground: 'white',
    backgroundInvert: '#2D2D2D',
    buttonEdit : '#fff700',
    elementBorder: color('#6f6f6f').alpha(0.2).string(),
    elementHighlightBlue: color('#78baf9').alpha(0.3).string(),
    elementHighlightGray: '#e6e7e9',
    elementIcon: '#b7b7b7',
    sidebar: '#2D2D2D',
    sidebarActive: color('#2D2D2D').lighten(0.4).string(),
    hover: '#d6eafd',
    success: '#d6eafd',
    warning: '#e19c2b',
    danger: '#ed6363',
    error: '#D50000',
    border: '#f0dadd',
    borderAccent: '#C9AF41',
    textPrimary: '#2D2D2D',
    textPrimaryInvert: '#992d2d2d',
    textPlaceholder: '#bfbfbf',
    dropArea: '#c6fcff',


    ping: '#ff84a1',
    fontBlack : '#000000',
    textTitle: '#464646',
    gray: '#a2a2a2',
    elementBackground: '#ffffff',
    boxShadow : '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    orange: '#ee3900',
    Boxgray: '#e9e9e9',
    orangePosonal: '#ff5722',
    textGray: '#363636',
}

const dimens = {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    xxl: '36px',
    xxxl: '48px',

}

export default {
    colors,
    dimens,
}