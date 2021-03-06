import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Homework = new Mongo.Collection('Homework');

/** Define a schema to specify the structure of each document in the collection. */
const HomeworkSchema = new SimpleSchema({
  assignmentName: String,
  originClass: String,
  dueDate: String,
  description: String,
  subject: {
    type: String,
    allowedValues: ['ICS', 'Math', 'Biology', 'Chemistry', 'Physics', 'Art/Design', 'Performing Arts', 'Other'],
    defaultValue: 'Other',
  },
  meToo: [String],
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Homework.attachSchema(HomeworkSchema);

/** Make the collection and schema available to other code. */
export { Homework, HomeworkSchema };
