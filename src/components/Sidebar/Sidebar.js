import React from 'react';
import { Link } from 'react-router-dom';

import Spinner from 'components/Spinner';
import IconClose from 'components/IconClose';

// eslint-disable-next-line
import styles from './Sidebar.scss';

export default ({ header, data, isLoading }) => (
  <div className="sidebar">
    <IconClose onClick={() => window.history.back()} />
    {isLoading ? (
      <Spinner />
    ) : (
      <div className="sidebar__content">
        <h3 className="sidebar__header">{header}</h3>
        <hr className="sidebar__divider" />
        {data.map(item => (
          <div className="sidebar__data" key={item.title}>
            <div className="sidebar__label">{item.title}</div>
            <div className="sidebar__value">
              {item.route ? (
                <Link to={item.route}>{item.value}</Link>
              ) : (
                item.value
              )}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
