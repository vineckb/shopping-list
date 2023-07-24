import { tableSchema } from '@nozbe/watermelondb';

export const listProductSchema = tableSchema({
  name: 'list_products',
  columns: [
    { name: 'checked', type: 'boolean' },
    { name: 'list_id', type: 'string' },
    { name: 'product_id', type: 'string' },
    { name: 'quantity', type: 'number' },
    { name: 'unitPrice', type: 'number', isOptional: true },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
});
