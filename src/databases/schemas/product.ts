import { tableSchema } from '@nozbe/watermelondb';

export const productSchema = tableSchema({
  name: 'products',
  columns: [
    { name: 'name', type: 'string' },
    { name: 'unitPrice', type: 'number', isOptional: true },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});
