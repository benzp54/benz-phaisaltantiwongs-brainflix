import './Video.scss';
import videoData from '../../data/video-details.json';

//Add props to show active video relative to state

const mediaPlayer = () => {
    return (
    <section className="video">
    <video className="video__media" poster={videoData[0].image} controls>
        <source src={videoData[0]}
            type="video" />
    </video>
    <div className="video__info">
        <h1 className="video__title">
            {videoData[0].title}
        </h1>
        <div className="video__details">
            <span className="video__channel">
                By: {videoData[0].channel}
            </span>
            <span className="video__date">
                {videoData[0].timestamp}
            </span>
            <span className="video__views">
                {videoData[0].views}
            </span>
            <span className="video__likes">
                {videoData[0].likes}
            </span>
        </div>
        <div className="video__desc">
            <p>
                {videoData[0].description}
            </p>
        </div>
        <p className="video__comments">
            {videoData[0].comments.length} Comments
        </p>
    </div>
    </section>
    );
};

export default mediaPlayer