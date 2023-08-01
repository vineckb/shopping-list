import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { database } from '../database';
import { List } from '../database/models/list';
import { useQuery } from '@tanstack/react-query';

export default function Page() {

  const {data, isLoading} = useQuery({
    queryFn: () => database.get<List>('lists').query()
  });

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: 'Listas de Compras',
        }}
      />
      {isLoading && <FlatList data={data} />}
    </View>
  );
}
