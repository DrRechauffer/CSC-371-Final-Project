import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Button from '../Button';
import { MdMenu as Hamburger, MdClose as Close } from 'react-icons/md';

const Bar_Top = ({ drawerOpen, toggleDrawer, children }) => {
  return (
    <header className="Bar_Top">
      <div className="Bar_Top__Row">
        <section className="Bar_Top__Section">
          <Button
            icon={drawerOpen ? Close : Hamburger}
            className="Bar_Top__MenuButton"
            iconClass="Bar_Top__Icon"
            onClick={toggleDrawer}
          />
          &nbsp;
          &nbsp;
          &nbsp;
          {children}
        </section>
      </div>
    </header>
  );
};

export default Bar_Top;
