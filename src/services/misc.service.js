import httpStatus from 'http-status';
import Misc from '../models/misc.model';
import ApiError from '../utils/ApiError';

/**
 * Set a misc data
 * @param {String} type
 * @param {Object} data
 * @returns {Promise<Misc>}
 */
export const setData = async (type, data) => {
  let misc = await Misc.findOne({ type });
  if (misc) return updateMiscDataByType(type, data);
  misc = await Misc.create({ type, data });
  return misc;
};

/**
 * Get a misc by type
 * @param {String} type
 * @returns {Promise<Misc>}
 */
const getMiscByType = async (type) => {
  const misc = await Misc.findOne({ type });
  if (!misc) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      httpStatus.NOT_FOUND,
      'No misc with this type has been found',
    );
  }
  return misc;
};

/**
 * Get misc data by type
 * @param {String} type
 * @returns {Promise<Misc>}
 */
export const getMiscDataByType = async (type) => {
  const misc = await getMiscByType(type);
  return misc.data;
};

/**
 * Update a misc data by type
 * @param {String} type
 * @param {Object} newData
 * @returns {Promise<Misc>}
 */
export const updateMiscDataByType = async (type, newData) => {
  const misc = await getMiscByType(type);
  misc.data = newData;
  await misc.save();
  return misc;
};

/**
 * Delete a misc by type
 * @param {String} type
 * @returns {Promise<Misc>}
 */
export const deleteMiscByType = async (type) => {
  const misc = await getMiscByType(type);
  await misc.remove();
  return misc;
};
