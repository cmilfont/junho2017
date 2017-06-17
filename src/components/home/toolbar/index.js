import { connect } from 'react-redux';
import Toolbar from 'components/home/toolbar/dummy';

export default connect(state => {
  return {
    count: state.list.reduce(
      (count, beer) => {
        if (beer.get('premium')) {
          return count + 1;
        }
        return count;
      },
      0
    ),
    user: state.user,
  }
}, (dispatch) => {

  return {
    logout: () => dispatch({ type: 'logout' })
  }

})(Toolbar);
