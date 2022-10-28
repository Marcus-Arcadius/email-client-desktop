/* eslint-disable promise/no-nesting */
import { Domain } from 'domain';
import { Dispatch, GetState } from '../reducers/types';
import DomainService from '../../../services/domain.service';

/*
 * Description
 */
export const ADD_DOMAIN_REQUEST = 'DOMAIN::ADD_DOMAIN_REQUEST';
export const addDomainRequest = () => {
  return {
    type: ADD_DOMAIN_REQUEST
  };
};

export const ADD_DOMAIN_SUCCESS = 'DOMAIN::ADD_DOMAIN_SUCCESS';
export const addDomainSuccess = payload => {
  return {
    type: ADD_DOMAIN_SUCCESS,
    payload
  };
};

export const ADD_DOMAIN_FAILURE = 'DOMAIN::ADD_DOMAIN_FAILURE';
export const addDomainFailure = (error: Error) => {
  return {
    type: ADD_DOMAIN_FAILURE,
    error
  };
};

export const addCustomDomain = (domain: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(addDomainRequest());
    let result;
    try {
      console.log(domain);
      result = await DomainService.register(domain);
      console.log(result);
    } catch (error) {
      dispatch(addDomainFailure(error));
      return error;
    }

    // dispatch(addDomainSuccess(result));

    return result;
  };
};

/*
 * Retrieve all the domains from the store
 */
export const FETCH_ALL_REQUEST = 'DOMAIN::FETCH_ALL_REQUEST';
export const fetchAllRequest = () => {
  return {
    type: FETCH_ALL_REQUEST
  };
};

export const FETCH_ALL_SUCCESS = 'DOMAIN::FETCH_ALL_SUCCESS';
export const fetchAllSuccess = payload => {
  return {
    type: FETCH_ALL_SUCCESS,
    payload
  };
};

export const FETCH_ALL_FAILURE = 'DOMAIN::FETCH_ALL_FAILURE';
export const fetchAllFailure = (error: Error) => {
  return {
    type: FETCH_ALL_FAILURE,
    error
  };
};

export const fetchAllDomains = () => {
  return async (dispatch: Dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(fetchAllRequest());
      DomainService.getAll()
        .then(result => {
          dispatch(fetchAllSuccess(result));
          return resolve(result);
        })
        .catch(err => {
          dispatch(fetchAllFailure(err));
        });
    });
  };
};

/*
 * Deleting a domain
 */
export const DELETE_REQUEST = 'DOMAIN::DELETE_REQUEST';
export const deleteRequest = () => {
  return {
    type: DELETE_REQUEST
  };
};

export const DELETE_SUCCESS = 'DOMAIN::DELETE_SUCCESS';
export const deleteSuccess = payload => {
  return {
    type: DELETE_SUCCESS,
    payload
  };
};

export const DELETE_FAILURE = 'DOMAIN::DELETE_FAILURE';
export const deleteFailure = (error: Error) => {
  return {
    type: DELETE_FAILURE,
    error
  };
};

export const deleteDomain = domain => {
  return async (dispatch: Dispatch) => {
    dispatch(deleteRequest());
    let result;

    try {
      result = await DomainService.delete(domain);
      console.log(result);
    } catch (error) {
      dispatch(deleteFailure(error));
      return error;
    }

    dispatch(deleteSuccess({ id: domain }));

    return result;
  };
};