import Post from '@models/Post';

import Logo from './assets/images/menu/logo@2x-desktop.png';
import './babel';
import './styles/style.css';
import './main.scss';
import Lake from './assets/images/hero/lake@2x-desktop.png';
// import Arrow from './assets/images/top-rated/arrow@2x-desktop.png';
// import Clouds from './assets/images/hero/clouds-desktop.png';
// import Call from './assets/images/menu/button-call-me-desktop.png';

const post = new Post('Webpack Post Title', Logo);
console.log('Post to String', post.toString());
