import './NavBar.css'

export default function NavBar({ localTime }) {
    return (
        <nav className="navbar -pad-container -mt-ff-r -s-fs">
            <div className="content">
                <a href="" className="main-link -mt-ff-b -mt-tc">Abdelhak</a>
                <img src="./src/assets/icons/icon/abdelhak-icon.png" alt="" width={20}/>
            </div>
            <div className="content">
                <div className="infos">
                    <span className="infos-indicator -mt-ff-b -mt-tc">socials</span>
                    <ul className="infos-list">
                        <a href="#" className="social-link -st-tc -st-hover">github</a>
                        <a href="#" className="social-link -st-tc -st-hover">codepen</a>
                        <a href="#" className="social-link -st-tc -st-hover">instagram</a>
                        <a href="#" className="social-link -st-tc -st-hover">twitter</a>
                    </ul>
                </div>
                <div className="infos">
                    <span className="infos-indicator -mt-ff-b -mt-tc">location/time</span>
                    <ul className="infos-list">
                        <span className="location -st-tc">algeria, algier</span>
                        <span className="local-time -st-tc">{localTime}</span>
                    </ul>
                </div>
            </div>
        </nav>
    )
}