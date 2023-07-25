import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { AppBar } from './components/AppBar';
import { database } from './database';
import { List } from './database/models/list';

export function App() {
  async function load() {
    const lists = await database.get<List>('lists').query();

    console.log('lists', lists);
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
