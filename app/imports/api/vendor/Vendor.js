import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The VendorsCollection. It encapsulates state and variable values for stuff.
 */
class VendorsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'VendorsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      description: String,
      image: String,
      location: String,
      owner: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.vendorPublicationName = `${this.name}.publication.vendor`;
  }
}

/**
 * The singleton instance of the VendorsCollection.
 * @type {VendorsCollection}
 */
export const Vendors = new VendorsCollection();
