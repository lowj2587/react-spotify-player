
import React from 'react';
import ReactDOM from 'react-dom';
import SpotifyPlayer from '../dist/SpotifyPlayer.js';

ReactDOM.render(
  <SpotifyPlayer uri="spotify:playlist:23PI1CSy11a11vbBy1pwvg" size={{width: 800, height: 500}} theme="white" view="list" />,
  document.querySelector('.player')
);
