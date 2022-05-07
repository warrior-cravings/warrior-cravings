import SimpleSchema from 'simpl-schema';
import { itemValues as itemType } from '../../api/menuItem/MenuItem';

const MenuItemFormSchema = new SimpleSchema({
  name: { label: 'Name', type: String },
  mealType: {
    label: 'Item Type',
    type: Array,
  },
  'mealType.$': { type: String, allowedValues: itemType.itemType },
  // image: { label: 'URL', type: String },
  ingredients: {
    label: 'Ingredients',
    type: String,
  },
});

export { MenuItemFormSchema };
