import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

import Button from '../Button';
import {
  MdPlayArrow as Play,
  MdPause as Pause,
} from 'react-icons/md';
import Menu from '../Menu';

// Helper function
function isDisabled(action, disabled = false) {
  return action === undefined || disabled;
}

const Control_Visualizer = ({
  // Actions
  onPlay,
  onPause,
  onAdjustSpeed,

  // States
  playing,
  playDisabled,
  pauseDisabled,
  playbackSpeed
}) => {
  return (
    <div className="Control_Visualizer">
      
      {/* Play or Pause button - context dependent */}
      <Button
        icon={playing ? Pause : Play}
        onClick={playing ? onPause : onPlay}
        disabled={
          playing
            ? isDisabled(onPause, pauseDisabled)
            : isDisabled(onPlay, playDisabled)
        }
        raised
        iconClass="Control_Visualizer__Icon"
        className="Control_Visualizer__CenterButton"
      />

      {/* Playback Speed */}
      <Menu
        items={['0.25x', '0.5x', '1x', '2x', '4x']}
        placeholder="Speed"
        selected={`${playbackSpeed}x`}
        onSelect={onAdjustSpeed}
        noDropIcon
        className="Control_Visualizer__SpeedButton"
      />
    </div>
  );
};

Control_Visualizer.propTypes = {
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onAdjustSpeed: PropTypes.func,

  playing: PropTypes.bool,
  playDisabled: PropTypes.bool,
  pauseDisabled: PropTypes.bool,
  playbackSpeed: PropTypes.number
};

export default Control_Visualizer;
