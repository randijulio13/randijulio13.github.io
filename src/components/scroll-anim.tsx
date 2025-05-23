import Lottie from 'lottie-react'
import LottieScroll from '../assets/lottie-scroll.json'

const ScrollAnimation = () => {
    return (
        <Lottie animationData={LottieScroll} loop={true} className='absolute z-10' />
    )
}

export default ScrollAnimation