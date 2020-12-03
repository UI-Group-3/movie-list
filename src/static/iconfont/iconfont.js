import { createGlobalStyle } from 'styled-components';

export const Headericon = createGlobalStyle`
@font-face {
    font-family: 'iconfont';  /* project id 2245282 */
    src: url('//at.alicdn.com/t/font_2245282_o2sqh4v7b58.eot');
    src: url('//at.alicdn.com/t/font_2245282_o2sqh4v7b58.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_2245282_o2sqh4v7b58.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_2245282_o2sqh4v7b58.woff') format('woff'),
    url('//at.alicdn.com/t/font_2245282_o2sqh4v7b58.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_2245282_o2sqh4v7b58.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:30px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .liked {
    color:red;
  }
`;