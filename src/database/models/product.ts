import { Model } from '@nozbe/watermelondb';
import { Associations } from '@nozbe/watermelondb/Model';
import { date, field, readonly } from '@nozbe/watermelondb/decorators';

export class Product extends Model {
  static table = 'products';

  @field('checked') checked!: boolean;
  @field('unitPrice') unitPrice?: number;
  @field('list_id') listId!: string;
  @field('product_id') productId!: string;
  @field('quantity') quantity!: number;

  static associations: Associations = {
    lists: { type: 'belongs_to', key: 'id' },
  };

  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;
}
