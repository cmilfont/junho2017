import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'api/actions/beer';
import List from 'components/beer/list';

export default connect(mapStateToProps, mapDispatchToProps)(List);
