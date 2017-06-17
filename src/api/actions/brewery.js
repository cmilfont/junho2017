import { push } from 'react-router-redux';

export const actions = {
  add: 'BREWERY_LIST_ADD',
  edit: 'BREWERY_LIST_EDIT',
  update: 'BREWERY_LIST_UPDATE',
  remove: 'BREWERY_LIST_REMOVE',
  request:'BREWERY_LIST_REQUEST',
  requestSuccess: 'BREWERY_LIST_REQUEST_SUCCESS',
}

export const mapStateToProps = ({ list, beerEdit }) => ({ list, beerEdit });

export const mapDispatchToProps = (dispatch) => {
  return {
    request: () => dispatch({ type: actions.request }),
    requestSuccess: payload => dispatch({
      type: actions.requestSuccess,
      payload
    }),
    add: () => dispatch({ type: actions.add }),
    edit: payload => dispatch({
      type: actions.edit,
      payload
    }),
    update: payload => dispatch({
      type: actions.update,
      payload
    }),
    remove: payload => dispatch({
      type: actions.remove,
      payload,
    }),
  };
};

export default {};
