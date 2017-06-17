import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'api/actions/brewery';
import List from 'components/brewery/list';

export default connect(mapStateToProps, mapDispatchToProps)(List);
