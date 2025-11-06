import NavBar from '../../Components/NavBar/NavBar'
import './HomePage.css'

export default function HomePage({ ...Datas }) {
    return <>
        <div className="home-section">
            <NavBar localTime={Datas.localTime} />
            <HomeSection />
        </div>
    </>
}

function HomeSection() {
    return <>
        <span className="bg-block horizental"></span>
        <span className="bg-block vertical"></span>
        <div className="home-content">
            <div className="title-slider">
                <div className="slider">
                    <span className="sliding-title -bt-ff -xxl-fs -mt-dtc">Abdelhak<span className="-st-ff" style={{ color: 'var(--main-color)' }}>©</span>2025</span>
                    <span className="sliding-title -bt-ff -xxl-fs -mt-dtc">Abdelhak<span className="-st-ff" style={{ color: 'var(--main-color)' }}>©</span>2025</span>
                </div>
                <div className="slider">
                    <span className="sliding-title -bt-ff -xxl-fs -mt-dtc">Abdelhak<span className="-st-ff" style={{ color: 'var(--main-color)' }}>©</span>2025</span>
                    <span className="sliding-title -bt-ff -xxl-fs -mt-dtc">Abdelhak<span className="-st-ff" style={{ color: 'var(--main-color)' }}>©</span>2025</span>
                </div>
                <div className="slider">
                    <span className="sliding-title -bt-ff -xxl-fs -mt-dtc">Abdelhak<span className="-st-ff" style={{ color: 'var(--main-color)' }}>©</span>2025</span>
                    <span className="sliding-title -bt-ff -xxl-fs -mt-dtc">Abdelhak<span className="-st-ff" style={{ color: 'var(--main-color)' }}>©</span>2025</span>
                </div>
            </div>
            <span className="section-title -bt-ff -xxl-fs -mt-dtc">Abdelhak<span className="-st-ff" style={{ color: 'var(--main-color)' }}>©</span>2025</span>
        </div>
    </>
}