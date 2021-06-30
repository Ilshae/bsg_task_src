import {connect} from 'react-redux';
import Splash from './splash';
import {addRedirect, addToken} from '../../redux/actions';

const mapStateToProps = (state) => {
  return { 
    userInfo: state.userInfo,
    redirect: state.redirect
   }
};

const mapDispatchToProps = dispatch => ({
  addToken: token => dispatch(addToken(token)),
  addRedirect: redirect => dispatch(addRedirect(redirect))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);