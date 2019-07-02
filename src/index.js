import React from 'react';
import ReactDom from 'react-dom';

import FooterApp from './footer.js';
import HeaderApp from './header.js';
import MainContent from './mainContent.js';
//import * as serviceWorker from './serviceWorker';

ReactDom.render(
  <div>
    <HeaderApp />
    <MainContent />
    <FooterApp />
  </div>,
   document.getElementById('app'));
