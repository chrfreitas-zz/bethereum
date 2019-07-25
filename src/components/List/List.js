import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
import styles from './List.scss';

export default ({ data }) => (
  <ul className="list">
    {data.map(item => (
      <li className="list__item" key={item.text}>
        <Link to={item.route}>{item.text}</Link>
      </li>
    ))}
  </ul>
);
