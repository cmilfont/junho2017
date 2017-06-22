export const actions = {
  add: 'BEER_LIST_ADD',
  edit: 'BEER_LIST_EDIT',
  update: 'BEER_LIST_UPDATE',
  remove: 'BEER_LIST_REMOVE',
  request: 'BEER_LIST_REQUEST',
  requestSuccess: 'BEER_LIST_REQUEST_SUCCESS',
};

export const mapStateToProps = ({ beerList, beerEdit }) => ({ beerList, beerEdit });

export const mapDispatchToProps = dispatch => {
  return {

    request: (payload1, payload2) => dispatch({
      type: actions.request,
      payload1,
      payload2,
    }),

    requestSuccess: payload => dispatch({
      type: actions.requestSuccess,
      payload,
    }),

    add: (payload1, payload2) => dispatch({
      type: actions.add,
      payload1,
      payload2,
    }),

    remove: (payload, payload1, payload2) => dispatch({
      type: actions.remove,
      payload,
      payload1,
      payload2,
    }),

    update: (payload, payload1, payload2) => dispatch({
      type: actions.update,
      payload,
      payload1,
      payload2,
    }),

    edit: (payload, payload1, payload2) => dispatch({
      type: actions.edit,
      payload,
      payload1,
      payload2,
    }),
  };
};

export default {};
