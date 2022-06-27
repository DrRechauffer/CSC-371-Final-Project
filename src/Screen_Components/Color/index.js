import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Color = ({ groupA, groupB, groupC, groupD }) => {
  const keySorted =
    groupA || groupB || groupC || groupD ? (
      <div className="Color__Item">
        <div className="Color__Box Color__Sorted"></div>
        <span>Sorted</span>
      </div>
    ) : (
      <div className="Color__Item">
        <div className="Color__Box Color__Unsorted"></div>
        <span>Unsorted</span>
      </div>
    );

  const keyA = groupA ? (
    <div className="Color__Item">
      <div className="Color__Box Color__GroupA"></div>
      <span>{groupA}</span>
    </div>
  ) : null;

  const keyB = groupB ? (
    <div className="Color__Item">
      <div className="Color__Box Color__GroupB"></div>
      <span>{groupB}</span>
    </div>
  ) : null;

  const keyC = groupC ? (
    <div className="Color__Item">
      <div className="Color__Box Color__GroupC"></div>
      <span>{groupC}</span>
    </div>
  ) : null;

  const keyD = groupD ? (
    <div className="Color__Item">
      <div className="Color__Box Color__GroupD"></div>
      <span>{groupD}</span>
    </div>
  ) : null;

  return (
    <div className="Color">
      {keySorted}
      {keyA}
      {keyB}
      {keyC}
      {keyD}
    </div>
  );
};

Color.propTypes = {
  groupA: PropTypes.string,
  groupB: PropTypes.string,
  groupC: PropTypes.string,
  groupD: PropTypes.string
};

export default Color;
