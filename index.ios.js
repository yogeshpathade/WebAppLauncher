/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  WebView
} from 'react-native';

export default class WebAppLauncher extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://elearning.tameen.ae/'}}
        style={{marginTop: 20}}/>
    );
  }
}


AppRegistry.registerComponent('WebAppLauncher', () => WebAppLauncher);
