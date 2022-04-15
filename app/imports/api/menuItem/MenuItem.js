import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

class MenuItemsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'MenuItemsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      mealType: Array,
      'mealType.$': {
        type: String,
        allowedValues: ['Dessert', 'Poultry', 'Beef', 'Pork', 'Fish', 'Seafood', 'Sandwich', 'Burgers', 'Salad', 'Drink', 'Healthy', 'Vegan'],
      },
      // description: String,
      // image: String,
      ingredients: Array,
      'ingredients.$': { type: String },
      vendor: String,
      // location: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.vendorPublicationName = `${this.name}.publication.vendor`;
  }
}

export const MenuItems = new MenuItemsCollection();
