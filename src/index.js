import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/style.scss';

import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack34'], ' ');
  element.classList.add('h3');

  return element;
}

document.body.appendChild(component());