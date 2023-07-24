import * as React from 'react';
import { Appbar as DefaultAppBar } from 'react-native-paper';

export function AppBar() {
  return (
    <DefaultAppBar.Header>
      <DefaultAppBar.BackAction onPress={() => {}} />
      <DefaultAppBar.Content title="Title" />
      <DefaultAppBar.Action icon="calendar" onPress={() => {}} />
      <DefaultAppBar.Action icon="magnify" onPress={() => {}} />
    </DefaultAppBar.Header>
  );
}
