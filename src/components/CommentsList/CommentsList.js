import './CommentsList.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

//Add props to populate comments relative to state (active video)

function commentsList (props) {
    return (
        <section className="comment__list">
            {props.videoActive.comments.map((vidData) => {
                return (
                    <div className="comment__item" key={vidData.timestamp + "c"}>
                        <div className="avatar__user">
                            <img className="avatar__img" src={avatar} alt="User Avatar" />
                        </div>
                        <div className="comment__info">
                            <span className="comment__name">
                                {vidData.name}
                            </span>
                            <span className="comment__timestamp">
                                {vidData.timestamp}
                            </span>
                            <p className="comment__detail">
                                {vidData.comment}
                            </p>
                        </div>
                    </div>
                );
            })}
        </section>
    )
}

export default commentsList