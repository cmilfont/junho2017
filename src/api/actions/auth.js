import { push } from 'react-router-redux';

export const actions = {
  login: 'BREWERY_AUTH_LOGIN',
  logged: 'BREWERY_AUTH_LOGGED',
}

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
    onLogin: () => dispatch({ type: 'login' })
  };
};

export default {};
