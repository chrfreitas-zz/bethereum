import React from 'react';

// eslint-disable-next-line
import styles from './Sidebar.scss';

export default ({ header, data }) => (
  <div className="sidebar">
    <h3 className="sidebar__header">{header}</h3>
    <hr className="sidebar__divider" />
    {data.map(item => (
      <div className="sidebar__data" key={item.value}>
        <div className="sidebar__label">{item.title}</div>
        <div className="sidebar__value">{item.value}</div>
      </div>
    ))}
  </div>
);
