import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import AppContext from './src/utils/AppContext';

Amplify.configure(config);

export default function App() {

  const [userId, setUserId] = useState(null)
  
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider value={{userId, setUserId}}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar /></AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
