import './Video.scss';

//Display active video on page load using props
function Video(props) {

    return (
        <section className="video">
            <video className="video__media" poster={props.videoActive.image} controls>
                <source src={props.videoActive.video} type="video" />
            </video>

            <div className="video__info">
                <h1 className="video__title">
                    {props.videoActive.title}
                </h1>
                <div className="video__details">
                    <span className="video__channel">
                        By {props.videoActive.channel}
                    </span>
                    <span className="video__date">
                        {props.videoActive.timestamp}
                    </span>
                    <span className="video__views">
                        {props.videoActive.views}
                    </span>
                    <span className="video__likes">
                        {props.videoActive.likes}
                    </span>
                </div>

                <div className="video__desc">
                    <p>
                        {props.videoActive.description}
                    </p>
                </div>

                <p className="video__comments">
                    {props.videoActive.comments.length} Comments
                </p>

            </div>
        </section>
    )
};

export default Video