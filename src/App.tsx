import React from 'react';
import { createUseStyles } from 'react-jss';

import {
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import logo from './logo.svg';

const useStyles = createUseStyles({
  code: {
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  appHeader: {
    backgroundColor: '#282c34',
    height: '5%',
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

  const links = [
    { href: 'http://192.168.0.10:8000/', path: '/nas', name: 'NAS' },
    { href: 'http://192.168.0.10:32400/', path: '/plex', name: 'PLEX' },
    { href: 'http://192.168.0.10:50080/', path: '/moviematch', name: 'Moviematch (Tinder for Plex)' },
    { href: 'http://192.168.0.10:8112/', path: '/deluge', name: 'Deluge' },
    { href: 'https://my.jdownloader.org/', path: '/myjd', name: 'MyJD' },
    { href: 'http://192.168.0.10:50050/', path: '/jdownloader', name: 'JDownloader' },
    { href: 'http://192.168.0.10:50040/', path: '/mkvtoolnix', name: 'MKVToolnix' },
    { href: 'http://192.168.0.10:50041/', path: '/makemkv', name: 'MakeMKV' },
    { href: 'http://192.168.0.22:1880/', path: '/nodered', name: 'Nodered' },
    { href: 'http://192.168.0.22:50060/', path: '/homebridge', name: 'Homebridge' },
    { href: 'http://192.168.0.20:8080/', path: '/pihole', name: 'Pi-hole' },
    { href: 'http://192.168.0.10:7878/', path: '/radarr', name: 'Radarr' },
    { href: 'http://192.168.0.10:6767/', path: '/bazarr', name: 'Bazarr' },
    { href: 'http://192.168.0.22:8080/', path: '/zigbee2mqtt', name: 'Zigbee2MQTT' },
  ]

  return (
    <div>
      <header className={classes.appHeader}>
        <img src={logo} className={`App-logo ${classes.appLogo}`} alt="logo" />
      </header>

      <div>
        <ul>
          {links.map(({ path, name }) => (
            <li>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>

        <Switch>
          {links.map(({ path, href }) => (
            <Route path={path} render={() => (
              <>
                {window.location.href = href}
                <Redirect to='/' />
              </>
            )} />
          ))}
        </Switch>
      </div>
    </div>
  )
};

export default App;
