import React from 'react';
import ReactDOM from 'react-dom';
import SpotifyButton from './SpotifyButton';

const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <SpotifyButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
