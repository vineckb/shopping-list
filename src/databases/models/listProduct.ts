import { Model } from '@nozbe/watermelondb';
import { Associations } from '@nozbe/watermelondb/Model';
import {
  date,
  field,
  readonly,
  relation,
} from '@nozbe/watermelondb/decorators';

export class ListProduct extends Model {
  static table = 'list_products';
  @field('checked') checked!: boolean;
  @field('unitPrice') unitPrice?: number;
  @field('list_id') listId!: string;
  @field('product_id') productId!: string;
  @field('quantity') quantity!: number;

  static associations: Associations = {
    lists: { type: 'belongs_to', key: 'id' },
  };

  @relation('products', 'product_id') product;

  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;
}
