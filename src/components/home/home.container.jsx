import {connect} from 'react-redux';
import Home from './home';
import { addRedirect, addMediaList } from '../../redux/actions';

const mapStateToProps = (state) => {
  return { 
    token: state.userInfo.user.AuthorizationToken.Token,
    redirect: state.redirect,
    mediaList: state.media.mediaList
   }
};

const mapDispatchToProps = dispatch => ({
  addMediaList: mediaList => dispatch(addMediaList(mediaList)),
  addRedirect: redirect => dispatch(addRedirect(redirect))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);