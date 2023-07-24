import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { AppBar } from './components/AppBar';
import { database } from './databases';
import { List } from './databases/models/list';

export function App() {
  async function load() {
    const response = await database.get<List>('lists').find('dasdasda');

    console.log('response', response);
  }

  React.useEffect(() => {
    load();
  }, []);

  return (
    <PaperProvider>
      <AppBar />
    </PaperProvider>
  );
}
