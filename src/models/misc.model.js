import mongoose from 'mongoose';
import toJSON from './plugins/toJSON.plugin';
import { miscTypesArray } from '../config/consts';

const miscSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: true,
    enum: miscTypesArray,
  },
  data: {
    type: mongoose.SchemaTypes.Mixed,
    required: true,
  },
});

// add plugin that converts mongoose to json
miscSchema.plugin(toJSON);

/**
 * @typedef misc
 */
const Misc = mongoose.model('Misc', miscSchema);

export default Misc;
