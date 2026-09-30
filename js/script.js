import ScrollSuave from './modules/scroll-suave.js';
import AnimaScroll from './modules/scroll-anima.js';
import MenuMobile from './modules/menu-mobile.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
const animaScroll = new AnimaScroll('[data-anima="show-right"]');
animaScroll.init()

MenuMobile();