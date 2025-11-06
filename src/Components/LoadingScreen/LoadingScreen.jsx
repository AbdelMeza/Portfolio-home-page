import './LoadingScreen.css'

export default function LoadingScreen( { setLoadingState, loadingState } ) {
    if(loadingState){
        setTimeout(() => setLoadingState(false), 1000)
    }

    return (
        <div className={`loading-screen ${loadingState ? "state-loading" : "state-loaded"}`}>
            <div className="tile" style={{ transitionDelay: `${0.05 * 1}s` }}></div>
            <div className="tile" style={{ transitionDelay: `${0.05 * 3}s` }}></div>
            <div className="tile" style={{ transitionDelay: `${0.05 * 5}s` }}></div>
            <div className="tile" style={{ transitionDelay: `${0.05 * 7}s` }}></div>
        </div>
    )
}