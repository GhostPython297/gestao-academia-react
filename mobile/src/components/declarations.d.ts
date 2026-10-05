declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module 'expo-router/unstable-native-tabs' {
  import * as React from 'react';
  
  export const Tabs: React.FC<any> & {
    Trigger: React.FC<any> & {
      Label: React.FC<any>;
      Icon: React.FC<any>;
    };
  };
}