import { appSchema } from '@nozbe/watermelondb';
import { listSchema } from './list';
import { productSchema } from './product';

export const schema = appSchema({
  version: 2,
  tables: [listSchema, productSchema],
});
