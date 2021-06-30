import {connect} from 'react-redux';
import Media from './media';
import { addVideo } from '../../redux/actions'
import { createSelector } from 'reselect';

const selectMedia = state => state.media.mediaList;

export const selectMediaList = createSelector(
  [selectMedia],
  mediaList => mediaList.movies
);


const mapStateToProps = (state) => {
  return { 
    token: state.userInfo.user,
    mediaList: selectMediaList,
    video: state.currentVideo
   }
};

const mapDispatchToProps = dispatch => ({
  addVideo: video => dispatch(addVideo(video)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Media);