import Post from '@models/Post';
import json from './assets/json';
import WebpackLogo from './assets/webpack-logo.png';
import xml from './assets/data.xml';
import csv from './assets/people-100.csv';
import './babel';
import './styles/style.css';
import './main.scss';
import Lake from './assets/images/hero/lake-desktop.png';
import Arrow from './assets/images/top-rated/arrow@2x-desktop.png';
import Clouds from './assets/images/hero/clouds-desktop.png';
import Call from './assets/images/menu/button-call-me-desktop.png';

const post = new Post('Webpack Post Title', WebpackLogo);
console.log('Post to String', post.toString());
console.log('JSON: ', json);
console.log('XML: ', xml);
console.log('CSV: ', csv);
