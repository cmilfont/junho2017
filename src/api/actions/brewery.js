import { push } from 'react-router-redux';
import ActionTypes from '../constants/action_types';

export const mapStateToProps = ({ list }) => ({ list });

export const mapDispatchToProps = (dispatch) => {
  return {
    request: () => dispatch({ type: ActionTypes.request }),
    requestSuccess: payload => dispatch({
      type: ActionTypes.requestSuccess,
      payload
    }),
    add: () => dispatch({ type: ActionTypes.add }),
    edit: payload => dispatch({
      type: ActionTypes.edit,
      payload
    }),
    remove: payload => dispatch({ type: ActionTypes.remove, payload })
  };
};

export default {};
