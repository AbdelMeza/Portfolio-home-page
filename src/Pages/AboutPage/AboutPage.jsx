import { useEffect, useState } from 'react'
import './AboutPage.css'
import PathButton from '../../Components/HomeButton/PathButton'

export default function AboutPage({ ...Datas }) {
    return <>
        <div className="about-section">
            <PathButton path={'/'} setLoadingState={Datas.setLoadingState} loadingState={Datas.loadingState} />
            <LeftContent localTime={Datas.localTime} />
            <RightContent />
        </div>
    </>
}

function LeftContent({ localTime }) {
    const [availability, setAvailability] = useState(false)


    useEffect(() => {
        localStorage.setItem('availability', JSON.stringify(true))
        let getAvailability = localStorage.getItem('availability')
        getAvailability = JSON.parse(getAvailability)
        setAvailability(getAvailability)

    }, [])

    return <>
        <div className="left-content -mt-ff-b">
            <div className="upper-content">
                <div className="indicator-container -mt-ltc">
                    <span className="indicator -st-ltc -s-fs">Introduction</span>
                    <span className="indicator -st-ltc -s-fs">Informations</span>
                    <span className="indicator -st-ltc -s-fs">Socials</span>
                    <span className="indicator -st-ltc -s-fs">Contact</span>
                    <span className="indicator -st-ltc -s-fs">Credits</span>
                </div>
            </div>
            <div className="lower-content">
                <div className="informations-container -s-fs">
                    <div className="availability-container">
                        <span className="header-text -st-ltc">State</span>
                        <span className='state-container -mt-ltc'>
                            {availability ?
                                <span className="state"> <span style={{ backgroundColor: '#1BFF5F' }}></span> Available</span> :
                                <span className="state"> <span style={{ backgroundColor: '#FF2E1B' }}></span> Unvailable</span>
                            }
                        </span>
                    </div>
                    <div className="local-informations">
                        <span className="location -st-ltc">Algeria, Algier</span>
                        <span className="local-time -mt-ltc">{localTime}</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}

function RightContent() {
    useEffect(() => {
        const indicators = document.querySelectorAll('.indicator')
        const contents = document.querySelectorAll('.about-content')

        const handleIndicators = () => {
            let activeIndex = -1
            const triggerPoint = window.innerHeight / 2

            contents.forEach((content, index) => {
                const rect = content.getBoundingClientRect()
                const distance = Math.abs(rect.top - triggerPoint)

                if (activeIndex === -1 || distance < Math.abs(contents[activeIndex].getBoundingClientRect().top - triggerPoint)) {
                    activeIndex = index
                }
            })

            indicators.forEach(ind => ind.classList.remove('active'))
            if (indicators[activeIndex]) indicators[activeIndex].classList.add('active')
        }

        const onScroll = () => handleIndicators()
        window.addEventListener('scroll', onScroll)
        handleIndicators()

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                contents[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                })
            })
        })

        return () => {
            window.removeEventListener('scroll', onScroll)
            indicators.forEach((indicator, index) => {
                indicator.removeEventListener('click', () => {
                    contents[index].scrollIntoView({ behavior: 'smooth', block: 'center' })
                })
            })
        }
    }, [])

    return <>
        <div className="right-content -mt-ff-r -xl-fs">
            <div className="about-content introduction-content">
                <div className="content-indicator-container">
                    <span className="content-indicator -st-ltc">Introduction</span>
                </div>
                <div className="content">
                    <span className="introduction-text -mt-ltc">I’m a Web Developer and Designer with a strong passion for front-end development and creating unique digital experiences.</span>
                    <span className="introduction-text -m-fs -st-ltc">I take pride in writing clean, high-quality code, optimizing performance, and designing responsive, visually appealing interfaces that deliver exceptional user experiences.</span>
                </div>
            </div>
            <div className="about-content informations-content">
                <div className="content-indicator-container">
                    <span className="content-indicator -st-ltc">informations</span>
                </div>
                <div className="content">
                    <div className="row-content">
                        <span className="informations-title -mt-ltc">Full name</span>
                        <span className="information -st-ltc">Abdelhak Mezaguer</span>
                    </div>
                    <div className="row-content">
                        <span className="informations-title -mt-ltc">Age</span>
                        <span className="information -st-ltc">20 years old</span>
                    </div>
                    <div className="row-content">
                        <span className="informations-title -mt-ltc">Location</span>
                        <span className="information -st-ltc">Algieria, Algier</span>
                    </div>
                    <div className="row-content">
                        <span className="informations-title -mt-ltc">Services</span>
                        <span className="information services">
                            <div className="service-container">
                                <span className="icon -st-ff -t-mtc">{">"}</span>
                                <span className="service -st-ltc">Web developement</span>
                            </div>
                            <div className="service-container">
                                <span className="icon -st-ff -t-mtc">{">"}</span>
                                <span className="service -st-ltc">Web design</span>
                            </div>
                            <div className="service-container">
                                <span className="icon -st-ff -t-mtc">{">"}</span>
                                <span className="service -st-ltc">Web interaction</span>
                            </div>
                        </span>
                    </div>
                    <div className="row-content">
                        <span className="informations-title -mt-ltc">Years of experience</span>
                        <span className="information -st-ltc">2024-Now</span>
                    </div>
                </div>
            </div>
            <div className="about-content socials-content">
                <div className="content-indicator-container">
                    <span className="content-indicator -st-ltc">socials</span>
                </div>
                <div className="content -mt-ltc">
                    <a href="https://github.com/AbdelMeza" target="blank_">Github</a>
                    <a href="#">Codepen</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
            <div className="about-content contact-content">
                <div className="content-indicator-container">
                    <span className="content-indicator -st-ltc">Contact</span>
                </div>
                <div className="content -mt-ltc">
                    <a href="#">Abdelhakdev.contact<span className="-st-ff">@</span>gmail.com</a>
                </div>
            </div>
            <div className="about-content credits-content">
                <div className="content-indicator-container">
                    <span className="content-indicator -st-ltc">Credits</span>
                </div>
                <div className="content  -mt-ltc">
                    <span>All rights reserve <span className="-st-ff -t-mtc">©</span> Abdelhak mezaguer</span>
                </div>
            </div>
        </div>
    </>
}