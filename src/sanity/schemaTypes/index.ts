import { type SchemaTypeDefinition } from 'sanity'
import { product } from './products'
import categories from './categories'
import user from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,categories,user],
}
