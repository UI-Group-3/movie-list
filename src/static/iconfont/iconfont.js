import { createGlobalStyle } from 'styled-components';

export const Headericon = createGlobalStyle`

@font-face {
  font-family: 'iconfont';  /* project id 2245224 */
  src: url('//at.alicdn.com/t/font_2245224_orx8k1so0tb.eot');
  src: url('//at.alicdn.com/t/font_2245224_orx8k1so0tb.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2245224_orx8k1so0tb.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2245224_orx8k1so0tb.woff') format('woff'),
  url('//at.alicdn.com/t/font_2245224_orx8k1so0tb.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2245224_orx8k1so0tb.svg#iconfont') format('svg');
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

  .up {
    color:#2278b5;
    font-size:16px;
    margin:0 5px
  }
`;