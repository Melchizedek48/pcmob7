import React from 'react';
import Amplify from 'aws-amplify'
import config from './aws-exports'
import AppNavigation from './src/AppNavigation';
Amplify.configure(config)

export default function App() {
  return <AppNavigation />;
}
