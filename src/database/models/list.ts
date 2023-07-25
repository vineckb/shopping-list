import { Model, Q } from '@nozbe/watermelondb';
import { date, lazy, readonly, text } from '@nozbe/watermelondb/decorators';

export class List extends Model {
  static table = 'lists';

  @text('title') title;

  @lazy
  products = this.collections
    .get<List>('lists')
    .query(Q.where('list_id', this.id))
    .fetch();

  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;
}
