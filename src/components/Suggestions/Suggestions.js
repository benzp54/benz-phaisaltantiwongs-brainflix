import './Suggestions.scss';
import videos from '../../data/videos.json';

function videoList (props) {
    return (
        <section className="vidList">
            <p className="vidList__heading">
                NEXT VIDEOS
            </p>

            {videos.map((vid) => { 
                return (
                    <div className="vidList__item" key={vid.id}>
                        <div className="vidList__preview">
                            <img className="vidList__img" src={vid.image} alt="Video Preview"></img>
                        </div>
                        <div className="vidList__details">
                            <p className="vidList__title">
                                {vid.title}
                            </p>
                            <span className="vidList__channel">
                                {vid.channel}
                            </span>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default videoList
