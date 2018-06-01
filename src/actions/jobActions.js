import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import { FETCH_JOBS, JOB_ADDED, START_ADD_JOB, LIKE_JOB, CLEAR_LIKED_JOB } from './types';
import { URL } from './config';

const JOB_ROOT_URL = URL;

const JOB_QUERY_PARAMS = {
  publisher: '7806755316967714',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript'
};

const buildJobsUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`
};

export const startAddJob = () => {
  return {
    type: START_ADD_JOB
  };
};

export const fetchJobs = (region) => async (dispatch) => {
  try {
    let zip = await reverseGeocode(region);
    const url = buildJobsUrl(zip);
    let { data } = await axios.get(url);
    dispatch({
      type: FETCH_JOBS,
      payload: data
    });
    dispatch(jobAdded());
  } catch(e) {
    console.error(e);
  }
};

export const jobAdded = () => {
  return {
    type: JOB_ADDED
  };
};

export const likeJob = (job) => {
  return {
    type: LIKE_JOB,
    payload: job
  };
};

export const clearLikedJobs = () => {
  return {
    type: CLEAR_LIKED_JOB
  }
}
