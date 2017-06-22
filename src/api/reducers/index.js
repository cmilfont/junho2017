import { fromJS } from 'immutable';
import { actions as breweryActions } from 'api/actions/brewery';
import { actions as beerActions } from 'api/actions/beer';
import { actions as authActions } from 'api/actions/auth';

//User related
function userReducer(user = {}, action){
  if(action.type === authActions.logged){
    return action.payload || {};
  }
  return user;
}
//User related


//Brewery related
function listReducer(list = fromJS({}), action){
  if(action.type === breweryActions.requestSuccess){
    return fromJS(action.payload);
  }
  return list;
}
function breweryEdit(brewery = fromJS({}), action) {
  if (action.type === breweryActions.edit) {
    return action.payload;
  }
  return brewery;
}
//Brewery related


//Beer related
function beerListReducer(beerList = fromJS({}), action){
  if(action.type === beerActions.requestSuccess){
    return fromJS(action.payload) || fromJS({});
  }
  return beerList;
}
function beerEdit(beer = fromJS({}), action) {
  if (action.type === beerActions.edit) {
    return action.payload;
  }
  return beer;
}
//Beer related


export default{
  user: userReducer,
  list: listReducer,
  beerList: beerListReducer,
  breweryEdit: breweryEdit,
  beerEdit: beerEdit,
}
