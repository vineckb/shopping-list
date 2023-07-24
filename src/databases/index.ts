import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { List } from './models/list';
import { ListProduct } from './models/listProduct';
import { Product } from './models/product';
import { schema } from './schemas';

const adapter = new SQLiteAdapter({
  schema,
  onSetUpError: (error) => console.log(error),
});

export const database = new Database({
  adapter,
  modelClasses: [List, Product, ListProduct],
});
