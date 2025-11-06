import { useFetcher, useNavigate } from "react-router-dom"
import { useRef, useEffect } from "react"
import "./PathButton.css"

export default function PathButton({ path, setLoadingState }) {
    const navigate = useNavigate()
    const navigateRef = useRef(navigate)

    useEffect(() => {
        navigateRef.current = navigate
    }, [navigate])

    const handleClick = () => {
        setLoadingState(true)

        setTimeout(() => {
            navigateRef.current(path)
        }, 800)
    }

    useEffect(() => {
        const btnArea = document.querySelector('.button-area')
        const magneticElements = document.querySelectorAll('.magnetic-element')

        btnArea.addEventListener('mousemove', function (e) {
            let elementWidth = this.clientWidth
            let elementHeight = this.clientHeight
            let posX = e.clientX - this.getBoundingClientRect().left
            let posY = e.clientY - this.getBoundingClientRect().top

            posX = ((posX * 50) / (elementWidth / 2)) - 50
            posY = ((posY * 50) / (elementHeight / 2)) - 50

            magneticElements.forEach(element => {
                const magneticValue = element.getAttribute('data-magnetic-value')

                const xDirection = posX * magneticValue
                const yDirection = posY * magneticValue

                element.animate({ transform: `translate(${xDirection}%, ${yDirection}%)`, }, { duration: 800, fill: 'forwards', easing: 'cubic-bezier(.25,1.75,.4,1.66)' })

            })
        })

        btnArea.addEventListener('mouseleave', function () {
            magneticElements.forEach((element) => {
                element.animate({transform: `translate(0, 0)`},{duration: 300, fill: 'forwards', easing: 'cubic-bezier(.25,1.75,.4,1.66)', })
            })
        })

    }, [])


    return <>
        <div className="path-button-container">
            <div className="button-area">
                <button className="path-button magnetic-element" onClick={handleClick} data-magnetic-value={0.7}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                        className="size-6 magnetic-element" data-magnetic-value={0.9}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </>
}
