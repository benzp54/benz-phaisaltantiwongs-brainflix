import './Comments.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

function AddComment () {
    return (
        <section className='Comments'>
            <div className="addComment">
                <div className="avatar__user">
                    <img className="avatar__img" src={avatar} alt="User Avatar" />
                </div>
                <div className="newComment">
                    <form id="newComment__form">
                        <label htmlFor="newComment__input" className="newComment__title">JOIN THE CONVERSATION</label>
                        <textarea id="newComment__input" name="User Comment" placeholder="Add a new comment"></textarea>
                        <button className="btn" id="btn__submit">COMMENT</button>
                    </form>
                </div>
            </div>
        <div className="viewComments">

        </div>
    </section>
    )
};

export default AddComment