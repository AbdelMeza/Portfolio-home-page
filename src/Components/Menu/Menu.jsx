import { Link } from 'react-router-dom'
import './Menu.css'

export default function Menu({ menuStatu, menuState, localTime }) {
    return <>
        <div className={`menu-container ${menuState ? "opened" : "closed"}`}>
            <div className="tile-container">
                <div className="tile" style={{ transitionDelay: `${0.05 * 1}s` }}></div>
                <div className="tile" style={{ transitionDelay: `${0.05 * 3}s` }}></div>
                <div className="tile" style={{ transitionDelay: `${0.05 * 5}s` }}></div>
                <div className="tile" style={{ transitionDelay: `${0.05 * 7}s` }}></div>
            </div>
            <div className="content">
                <div className="upper-content">
                    <div className="navigation-link-wrapper -bt-ff -mt-dtc">
                        <div className="navigation-link-container">
                            <Link to="/about" style={{ '--delay': `${0.05 * 6}s` }} onClick={() => menuStatu(!menuState)}>About</Link>
                        </div>
                        <div className="navigation-link-container">
                            <Link to="/work" style={{ '--delay': `${0.05 * 7}s` }} onClick={() => menuStatu(!menuState)}>Work</Link>
                        </div>
                        <div className="navigation-link-container">
                            <Link to="/services" style={{ '--delay': `${0.05 * 8}s` }} onClick={() => menuStatu(!menuState)}>Services</Link>
                        </div>
                        <div className="navigation-link-container">
                            <Link to="/contact" style={{ '--delay': `${0.05 * 9}s` }} onClick={() => menuStatu(!menuState)}>Contact</Link>
                        </div>

                    </div>
                </div>
                <div className="lower-content">
                    <ul className="infos-list -s-fs">
                        <li className="list-item"><a href="#" className="social-link -mt-ff-r -st-dtc -st-hover">github</a></li>
                        <li className="list-item"><a href="#" className="social-link -mt-ff-r -st-dtc -st-hover">codepen</a></li>
                        <li className="list-item"><a href="#" className="social-link -mt-ff-r -st-dtc -st-hover">instagram</a></li>
                        <li className="list-item"><a href="#" className="social-link -mt-ff-r -st-dtc -st-hover">twitter</a></li>
                    </ul>
                    <ul className="infos-list -s-fs">
                        <li className="list-item"><span className="location -mt-ff-r -st-dtc">algeria, algier</span></li>
                        <li className="list-item"><span className="local-time -mt-ff-r -st-dtc">{localTime}</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <button className={`menu-btn -mt-ff-b -s-fs ${menuState ? "opened" : "closed"}`} onClick={() => menuStatu(!menuState)}>
            <span className="bracket left-bracket">[</span>
            <div className="text-slider">
                <span>menu</span>
                <div className="text-slider">
                    <span>open</span>
                    <span>close</span>
                </div>
            </div>
            <span className="bracket right-bracket">]</span>
        </button>
    </>
}