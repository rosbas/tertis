import { useEffect,useState } from "react";
import Image from 'next/image'
import bgImage from '../../img/bg2.png'

const getWindowDimensions = () => {
    const {innerWidth:width,innerHeight:height} = window
    return {
        width,height
    }
}

const BGImage = () => {
    const [width,setWidth] = useState(0)
    const [height,setHeight] = useState(0)

    useEffect(() => {
        const {width,height} = getWindowDimensions()
        setWidth(width)
        setHeight(height)
    },[])

    useEffect(() => {
        const handleResize = () => {
            const {width,height} = getWindowDimensions()
            setWidth(width)
            setHeight(height)
        }
        window.addEventListener("resize",handleResize)
        return () => window.removeEventListener("resize",handleResize)
    },[])

    if(width&&height){
        return <Image
        src={bgImage}
        width={width}
        height={height}
        />
    }
    return null
}

export default BGImage