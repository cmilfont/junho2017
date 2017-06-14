import { fromJS } from 'immutable';

function listReducer(list = fromJS({}), action){
  if(action.type === 'BREWERY_LIST_REQUEST_SUCCESS'){
    return fromJS(action.payload);
  }
  return list;
}

function userReducer(user = {}, action){
  if(action.type === 'logged'){ //PERGUNTAR SOBRE ESSE 'logged' ??????
    return action.payload;
  }
  if(action.type === 'BREWERY_AUTH_LOGOUT_SUCCESS'){
    return action.payload;
  }
  return user;
}

export default{
    user: userReducer,
    list: listReducer,
}
