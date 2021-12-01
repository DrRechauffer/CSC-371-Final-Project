import React, { Fragment } from 'react';
import './style.css';

import Scenary from '../Scenary';

const Drawer = ({ open, children, closeDrawer }) => {
  let className = 'Drawer';
  className += open ? ` Drawer_open` : ` Drawer_closed`;
  return (
    <Fragment>
      <div className={className}>
        <div className="Drawer__Content">{children}</div>
      </div>
      <Scenary show={open} onClick={closeDrawer} />
    </Fragment>
  );
};

export default Drawer;
