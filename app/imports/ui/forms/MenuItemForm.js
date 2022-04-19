import SimpleSchema from 'simpl-schema';
import { item as itemType } from '../../api/menuItem/MenuItem';

const MenuItemFormSchema = new SimpleSchema({
  name: { label: 'Name', type: String },
  vendor: { label: 'Vendor', type: String },
  mealType: {
    label: 'Item Type',
    type: Array,
    allowedValues: itemType.itemType,
    defaultValue: 'Select',
  },
  'mealType.$': { type: String, allowedValues: itemType.itemType },
  // image: { label: 'URL', type: String },
  ingredients: {
    label: 'Ingredients',
    type: Array,
    defaultValue: 'Add',
  },
  'ingredients.$': {
    type: String,
    defaultValue: '',
  },
});

export { MenuItemFormSchema };
