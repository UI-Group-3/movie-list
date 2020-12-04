import { createGlobalStyle } from 'styled-components';

export const Headericon = createGlobalStyle`

  @font-face {
    font-family: 'iconfont';  /* project id 2245224 */
    src: url('//at.alicdn.com/t/font_2245224_iya9bqatc0l.eot');
    src: url('//at.alicdn.com/t/font_2245224_iya9bqatc0l.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_2245224_iya9bqatc0l.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_2245224_iya9bqatc0l.woff') format('woff'),
    url('//at.alicdn.com/t/font_2245224_iya9bqatc0l.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_2245224_iya9bqatc0l.svg#iconfont') format('svg');
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
    color:#666;
    font-size:10px;
    margin:0 5px
  }
`;