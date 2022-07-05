import './Header.scss';
// import { Link } from 'react-router-dom';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

function Header() {
    return (
            <header className="header">
                <div className="header__logo">
                    <img className="header__icon" src={logo} alt="BrainFlix Logo" />
                </div>
                    <input type="text" className="header__search" placeholder="Search"></input>
                    <div className="avatar__user">
                        <img className="avatar__img" src={avatar} alt="User Avatar" />
                    </div>
                    <button className="btn" id="btn__upload">
                        {/* <Link to="/upload"> */}
                        UPLOAD
                        {/* </Link> */}
                    </button>
            </header>
    )
};

export default Header 