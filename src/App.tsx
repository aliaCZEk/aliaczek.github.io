import React from 'react';
import { createUseStyles } from 'react-jss';

import logo from './logo.svg';

const useStyles = createUseStyles({
  app: {
    textAlign: 'center',
  },
  appHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  appLogo: {
    height: '40vmin',
    pointerEvents: 'none',
  },
  appLink: {
    color: '#61dafb',
  },
  '@keyframes appLogoSpin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    }
  },
  '@media (prefers-reduced-motion: no-preference)': {
    appLogo: {
      animation: '$appLogoSpin infinite 20s linear',
    }
  },
})

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img src={logo} className={`App-logo ${classes.appLogo}`} alt="logo" />
      </header>
    </div>
  )
};

export default App;
