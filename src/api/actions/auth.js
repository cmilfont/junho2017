import { push } from 'react-router-redux';

export const actions = {
  login: 'BREWERY_AUTH_LOGIN',
  logged: 'BREWERY_AUTH_LOGGED',
  logout: 'BREWERY_AUTH_LOGOUT',
};

export const mapStateToProps = ({ user }) => ({ user });

export const mapDispatchToProps = dispatch => {
  return {
    redirectToHome: uid => {
      if (uid) {
        dispatch(push('/'));
      }
    },
    redirectToLogin: uid => {
      if (!uid) {
        dispatch(push('/login'));
      }
    },

    onLogin: () => dispatch({ type: actions.login }),
    onLogout: () => dispatch({ type: actions.logout }),
  };
};

export default {};
