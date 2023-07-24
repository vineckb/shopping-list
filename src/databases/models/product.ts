import { Model } from '@nozbe/watermelondb';
import { date, field, readonly, text } from '@nozbe/watermelondb/decorators';

export class Product extends Model {
  static table = 'products';

  @text('name') name;
  @field('unitPrice') unitPrice;

  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;
}
