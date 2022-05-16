import './CommentsList.scss';
import videoData from '../../data/video-details.json';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

//Add props to populate comments relative to state (active video)

function commentsList () {
    return (
        <section className="comment__list">
            <div className="comment__item">
                <div className="avatar__user">
                    <img className="avatar__img" src={avatar} alt="User Avatar" />
                </div>
                <div className="comment__info">
                    <span className="comment__name">
                        {videoData[0].comments[0].name}
                    </span>
                    <span className="comment__timestamp">
                        {videoData[0].comments[0].timestamp}
                    </span>
                    <p className="comment__detail">
                        {videoData[0].comments[0].comment}
                    </p>
                </div>
            </div>
    </section>
    )
}

export default commentsList