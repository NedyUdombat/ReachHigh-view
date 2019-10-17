import React, { Fragment } from 'react';

import './Title.scss';

const Title = ({ children, className, value, dash }, props) => {
  return (
    <Fragment>
      <h1 className={className ? `title ${className}` : 'title'} {...props}>
        {children || value}
      </h1>
      {dash && <div className="dash" />}
    </Fragment>
  );
};

export default Title;
