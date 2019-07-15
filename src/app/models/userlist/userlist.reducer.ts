import { Action } from '@ngrx/store';
import {UserListActions, UserListActionTypes} from './userlist.actions';
import { User, UserList } from '../';

export interface UserListState {
  userlist: UserList;
  loading: boolean;
  loaded: boolean;
  extended: boolean;
  pattern: string;
}

export const emptyUserList: UserList = {
  total: 0,
  users: []
};

export const initialState: UserListState = {
  userlist: emptyUserList,
  loading: false,
  loaded: false,
  extended: false,
  pattern: ''
};

export function userlistReducer(state = initialState, action: UserListActions): UserListState {
  switch (action.type) {
    case UserListActionTypes.Search: {
      console.log({
        ...state,
        loading: true,
        // userlist: emptyUserList // action.payload
      });
      return {
        ...state,
        loading: true,
        // userlist: emptyUserList // action.payload
      };
    }
    case UserListActionTypes.Set: {
      return {
        ...state,
        loading: false,
        loaded: true,
        extended: false,
        pattern: action.pattern,
        userlist: action.payload
      };
    }
    // case UserListActionTypes.Extend: {
    //   return {
    //     ...state,
    //     // extended: false,
    //     userlist: action.payload
    //   };
    // }
    case UserListActionTypes.ExtendSuccess: {
      return {
        ...state,
        extended: true,
        userlist: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

// #region Getters for Selectors
export const getExtended = (state: UserListState) => state.extended;
export const getLoaded = (state: UserListState) => state.loaded;
export const getLoading = (state: UserListState) => state.loading;
export const getUsers = (state: UserListState) => { return state.userlist; };
// #endregion


