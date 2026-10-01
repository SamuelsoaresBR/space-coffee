import ScrollSuave from './modules/scroll-suave.js';
import Animar from './modules/animar.js';
import MenuMobile from './modules/menu-mobile.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

Animar();
MenuMobile();