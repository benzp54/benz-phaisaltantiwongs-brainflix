import './Suggestions.scss';
import videoData from '../../data/video-details.json';

function videoList () {
    return (
        <section className="vidList">
            <p className="vidList__heading">
                NEXT VIDEOS
            </p>
            <div className="vidList__item">
                <div className="vidList__preview">
                    <img className="vidList__img" src={videoData[1].image} alt="Video Preview"></img>
                </div>
                <div className="vidList__details">
                    <p className="vidList__title">
                        {videoData[1].title}
                    </p>
                    <span className="vidList__channel">
                        {videoData[1].channel}
                    </span>
                </div>
            </div>
        </section>
    )
};

export default videoList
