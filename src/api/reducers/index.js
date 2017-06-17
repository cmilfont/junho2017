import { fromJS } from 'immutable';
import { actions } from 'api/actions/brewery';

function listReducer(list = fromJS({}), action) {
  if (action.type === actions.requestSuccess) {
    return fromJS(action.payload);
  }
  return list;
}

function userReducer(user = {}, action) {
  if (action.type === 'logged') {
    return action.payload;
  }
  return user;
}

function beerEdit(beer = fromJS({}), action) {
  if (action.type === actions.edit) {
    return action.payload;
  }
  return beer;
}

export default {
  user: userReducer,
  list: listReducer,
  beerEdit: beerEdit,
};
