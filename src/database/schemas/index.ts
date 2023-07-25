import { appSchema } from '@nozbe/watermelondb';
import { listSchema } from './list';
import { listProductSchema } from './listProduct';
import { productSchema } from './product';

export const schema = appSchema({
  version: 2,
  tables: [listSchema, productSchema, listProductSchema],
});
