import { type SchemaTypeDefinition } from 'sanity'
import { product } from './products'
import categories from './categories'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,categories],
}
