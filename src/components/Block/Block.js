import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
import styles from './Block.scss';

const Block = ({ data }) => (
  <Link className="block" to={`/block/${data.number}`}>
    {data.hash.substring(0, 7)}
  </Link>
);

export default Block;
