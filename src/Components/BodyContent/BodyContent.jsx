import HomeSection from "../HomeSection/HomeSection";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import "./BodyContent.css"

export default function BodyContainer({ ...datas }) {
    return <>
        <div className="body-content" style={{ transform: `translateY(${datas.statu ? "-40px" : "0"})`, }}>
            <NavBar localTime={datas.localTime} />
            <HomeSection />
        </div>
        <Menu menuStatu={datas.menuStatu} statu={datas.statu} localTime={datas.localTime}/>
    </>
}


