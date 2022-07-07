import './Home.scss';
import Video from '../../components/Video/Video';
import CommentsNew from '../../components/CommentsNew/CommentsNew';
import CommentsList from '../../components/CommentsList/CommentsList';
import VideoList from '../../components/VideoList/VideoList';
import axios from 'axios';
import React from 'react';

//Declare constants: api key & default video id
const apiKey = '6539566b-5c16-4e9c-ac7a-793b042ebce8'
const videoDefaultId = '84e96018-4022-434e-80bf-000ce4cd12b8'

class Home extends React.Component{

  constructor() {
    super();

    //Default values for state are null
    this.state = {
      videoActive: null,
      videoData: null
    }
  };

    //Component lifecycle methods to update state and render videos
  componentDidMount = () => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos/${videoDefaultId}/?api_key=${apiKey}`)
      .then((res) => {
        this.setState({ videoActive: res.data });
      });

      axios
        .get(`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`)
        .then((res) => {
          this.setState({ videoData: res.data })
        })
  };

  componentDidUpdate = () => {
    const activeId = this.props.match.params.id;

    if (activeId !== this.state.videoActive.id) {
        axios
            .get(`https://project-2-api.herokuapp.com/videos/${activeId}/?api_key=${apiKey}`)
            .then((res) => {
                this.setState({ videoActive: res.data })
            })
    } else {
      console.log("componentDidUpdate");
    }
      
  };

  render() {

    return (
      <>
        {/* Ternary if condition:
         -> Do not render the following components until async function componentDidMount resolves
         -> Render only after state has been updated from null*/}
        {this.state.videoActive !== null && this.state.videoData !== null ?
            <>
            <Video 
              videoActive = {this.state.videoActive}
              />
            <CommentsNew />
            <CommentsList 
              videoActive = {this.state.videoActive}
              />
            <VideoList 
              videoActive = {this.state.videoActive}
              videoData = {this.state.videoData} 
            />

            {/* Return if false: */}
            </> :
        null
        }
      </>
    )}
};

export default Home;