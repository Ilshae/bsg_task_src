import {connect} from 'react-redux';
import SignIn from './signin';
import {addRedirect, addSignedInUser, addToken } from '../../redux/actions';

const mapStateToProps = (state) => {
  return { 
    userInfo: state.userInfo,
    redirect: state.redirect
   }
};

const mapDispatchToProps = dispatch => ({
  addSignedInUser: user => dispatch(addSignedInUser(user)),
  addToken: token => dispatch(addToken(token)),
  addRedirect: redirect => dispatch(addRedirect(redirect))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);