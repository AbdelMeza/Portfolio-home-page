import './ErrorPage.css'
import PathButton from '../../Components/HomeButton/PathButton'

export default function ErrorPage({ ...Datas }) {
    return <>
        <div className="error-container">
            <PathButton path={'/'} setLoadingState={Datas.setLoadingState} loadingState={Datas.loadingState} />
            <div className="content">
                <span className='error-title -bt-ff -mt-dtc'>404<span className='-st-ff -t-mtc'>{'©'}</span></span>
                <span className='-mt-ff-b -m-fs -mt-dtc' style={{ marginBottom: '10px' }}>not found</span>
                <span className='-mt-ff-r -m-fs -st-dtc'>Oops..could not found this page</span>
            </div>
        </div>
    </>


}