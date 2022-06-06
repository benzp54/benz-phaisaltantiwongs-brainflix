import './Suggestions.scss';
import videos from '../../data/videos.json';

function videoList (props) {
    let vidArr = {};

    //Suggested videos excluding the active video
    const vidsList = () => {
        let vidTarget = props.videoActive.title;
        let vidFilter = videos.filter((video) => {
            return video.title !== vidTarget;
        });
    
        return (
            vidArr = vidFilter
        );
    }
    
    vidsList();

    return (
        <section className="vidList">
            <p className="vidList__heading">
                NEXT VIDEOS
            </p>

            {vidArr.map((vid) => { 
                return (
                    <div className="vidList__item" key={vid.id} 
                    onClick={props.handleClick}
                    >
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
