import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Info = ({
  title,
  worst,
  average,
  best,
  space
}) => {
  return (
    <div className="Info">
      <hr />
      <h1>{title ? title : 'Select Algorithm'}</h1>

      <div className="Info__Body">
        

        <aside className="Info__Aside">
          <h3>Performance</h3>
          <table>
            <tbody>
              <tr>
                <td>Worst-case time complexity</td>
                <td>
                  <code>{worst}</code>
                </td>
              </tr>

              <tr>
                <td>Average time complexity</td>
                <td>
                  <code>{average}</code>
                </td>
              </tr>

              <tr>
                <td>Best-case time complexity</td>
                <td>
                  <code>{best}</code>
                </td>
              </tr>

              <tr>
                <td>Worst-case space complexity</td>
                <td>
                  <code>{space}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </aside>
      </div>
    </div>
  );
};

Info.propTypes = {
  title: PropTypes.string,
  worst: PropTypes.object,
  average: PropTypes.object,
  best: PropTypes.object,
  space: PropTypes.object
};

export default Info;
