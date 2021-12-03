var initialState = {
	video_vis: true,
}

const BHomeReducer = (state=initialState, action)=> {

  switch (action.type) {
    case 'SET_VIDEO_ViS':
      return {
        ...state,
        video_vis: false
      };
    default:
      return state;
  }
}
export default BHomeReducer;