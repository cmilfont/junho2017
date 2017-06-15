import { push } from 'react-router-redux';
import ActionTypes from '../constants/action_types';

export const mapStateToProps = ({ user }) => ({ user });

export const mapDispatchToProps = (dispatch) => {
  return {
    redirectToHome: (uid) => {
      if (uid) {
        dispatch(push('/'));
      }
    },
    redirectToLogin: (uid) => {
      if (!uid) {
        dispatch(push('/login'));
      }
    },
    onLogin: () => dispatch({ type: ActionTypes.login }),
    onLogout: () => dispatch({ type: ActionTypes.logout })
  };
};

export default {};
