import React from 'react';
import { Link } from 'react-router-dom';

import styles from './List.scss';

export default list => (
  <ul className="list">
    {list.map(item => (
      <li className="list__item">
        <Link to={item.route}>{item.text}</Link>
      </li>
    ))}
  </ul>
);
