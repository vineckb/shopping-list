import { tableSchema } from '@nozbe/watermelondb';

export const listSchema = tableSchema({
  name: 'lists',
  columns: [
    { name: 'title', type: 'string' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});
