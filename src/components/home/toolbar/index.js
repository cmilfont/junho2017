import { connect } from 'react-redux';
import Toolbar from 'components/home/toolbar/toolbar';
import { mapDispatchToProps } from 'api/actions/auth';

function mapStateToProps(state){
  return {
    count: state.list.reduce(
      (count, item) => {
        if (item.premium) {
          return count + 1;
        }
        return count;
      },
      0
    ),
    user: state.user,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
