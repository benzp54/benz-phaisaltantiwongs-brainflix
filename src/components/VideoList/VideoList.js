import './VideoList.scss';
import { Link } from 'react-router-dom';

//Display suggested videos excluding the active video
function VideoList (props) {

    return (
        <section className="vidList">
            <h3 className="vidList__heading">
                NEXT VIDEOS
            </h3>

            {props.videoData.map((video) => { 
                if (video.id !== props.videoActive.id) {
                    return (
                        <div className="vidList__item" key={video.id}>
                            <Link to={`/${video.id}`} className="vidList__link">
                            <div className="vidList__preview">
                                <img className="vidList__img" src={video.image} alt="Video Preview">
                                </img>
                            </div>
                            <div className="vidList__details">
                                <p className="vidList__title">
                                    {video.title}
                                </p>
                                <span className="vidList__channel">
                                    {video.channel}
                                </span>
                            </div>
                            </Link>
                        </div>
                    )};
            })}
        </section>
    );
};

export default VideoList
