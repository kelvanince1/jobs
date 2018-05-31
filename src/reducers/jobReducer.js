import { FETCH_JOBS, JOB_ADDED, START_ADD_JOB } from '../actions/types';

const INITIAL_STATE = {
  results: [],
  jobAdded: false
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_JOBS:
      return action.payload;
    case START_ADD_JOB:
      return {
        ...state,
        jobAdded: false
      }
    case JOB_ADDED:
      return {
        ...state,
        jobAdded: true
      }
    default:
      return state;
  }
}
