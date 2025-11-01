import './Menu.css'

export default function Menu({ menuStatu, statu, localTime }) {
    return <>
        <div className={`menu-container ${statu ? "opened" : "closed"}`}>
            <div className="tile-container">
                <div className="tile" style={{ transitionDelay: `${0.05 * 1}s` }}></div>
                <div className="tile" style={{ transitionDelay: `${0.05 * 3}s` }}></div>
                <div className="tile" style={{ transitionDelay: `${0.05 * 5}s` }}></div>
                <div className="tile" style={{ transitionDelay: `${0.05 * 7}s` }}></div>
            </div>
            <div className="content">
                <div className="upper-content">
                    <div className="navigation-link-wrapper -bt-ff -xl-fs -mt-tc">
                        <div className="navigation-link-container">
                            <a href="/about" style={{ '--delay': `${0.05 * 2}s` }}>About</a>
                        </div>
                        <div className="navigation-link-container">
                            <a href="/work" style={{ '--delay': `${0.05 * 4}s` }}>Work</a>
                        </div>
                        <div className="navigation-link-container">
                            <a href="/services" style={{ '--delay': `${0.05 * 6}s` }}>Services</a>
                        </div>
                        <div className="navigation-link-container">
                            <a href="/contact" style={{ '--delay': `${0.05 * 8}s` }}>Contact</a>
                        </div>

                    </div>
                </div>
                <div className="lower-content">
                    <ul className="infos-list -s-fs">
                        <li className="list-item"><a href="#" className="social-link -mt-ff-r -st-tc -st-hover">github</a></li>
                        <li className="list-item"><a href="#" className="social-link -mt-ff-r -st-tc -st-hover">codepen</a></li>
                        <li className="list-item"><a href="#" className="social-link -mt-ff-r -st-tc -st-hover">instagram</a></li>
                        <li className="list-item"><a href="#" className="social-link -mt-ff-r -st-tc -st-hover">twitter</a></li>
                    </ul>
                    <ul className="infos-list -s-fs">
                        <li className="list-item"><span className="location -mt-ff-r -st-tc">algeria, algier</span></li>
                        <li className="list-item"><span className="local-time -mt-ff-r -st-tc">{localTime}</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <button className={`menu-btn -mt-ff-b -s-fs ${statu ? "opened" : "closed"}`} onClick={() => menuStatu(!statu)}>
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