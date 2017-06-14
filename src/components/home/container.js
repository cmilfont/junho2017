import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'api/actions/auth';
import Home from 'components/home/home';

class Container extends React.Component{

	componentWillMount(){
		const { user, redirectToLogin } = this.props;
		redirectToLogin(user.uid);
	}

	render(){
		const { user, onLogout } = this.props;
		return <Home onLogout={onLogout} />
	}
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Container)
);
