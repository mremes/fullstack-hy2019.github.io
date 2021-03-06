import './Footer.scss';

import { Link } from 'gatsby';
import React from 'react';

import yliopisto from '../../images/hgin_yliopisto.png';
import houston from '../../images/houston_logo.png';
import Element from '../Element/Element';
import { Image } from '../Image/Image';
import { navigation } from '../Navigation/Navigation';

const images = [
  {
    src: yliopisto,
    alt: 'Helsingin yliopiston logo',
    href: 'https://www.helsinki.fi/',
  },
  {
    src: houston,
    alt: 'Houston inc. logo',
    href: 'https://www.houston-inc.com/',
  },
];

const Footer = () => (
  <Element
    id="footer"
    className="container spacing--after-small spacing--mobile"
    flex
  >
    <Element
      className="col-5 col-10--mobile order-2--mobile footer__links"
      flex
      spaceBetween
    >
      {images.map(image => (
        <a
          key={image.alt}
          href={image.href}
          className="col-5 col-4--mobile spacing--mobile"
        >
          <Image contain src={image.src} alt={image.alt} className="col-6" />
        </a>
      ))}
    </Element>

    <Element
      flex
      className="col-5 col-5--mobile order-1--mobile footer__navigation"
    >
      {navigation.map(item => (
        <Link
          key={item.path}
          to={item.path}
          className="footer__navigation-link nav-item-hover col-10--mobile"
          style={{ marginLeft: '4.5rem' }}
        >
          {item.text}
        </Link>
      ))}
    </Element>
  </Element>
);

export default Footer;
