import './CommentsNew.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

//Add form submit functionality

function addComment () {
    return (
        <section className='comments'>
            <div className="comment__new">
                <div className="avatar__user">
                    <img className="avatar__img" src={avatar} alt="User Avatar" />
                </div>
                <div className="comment__add">
                    <form id="comment__form">
                        <label htmlFor="comment__input" className="comment__title">JOIN THE CONVERSATION</label>
                        <textarea id="comment__input" name="User Comment" placeholder="Add a new comment"></textarea>
                        <button className="btn" id="btn__submit">COMMENT</button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default addComment