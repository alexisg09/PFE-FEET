import React from 'react'
import ImageBox from '../global/ImageBox'

type AdvicePreviewProps = {
    title: string,
    subtext: string,
    backgroundImg: string
    img: string
}

const AdvicePreview = ({ title, subtext, backgroundImg, img } : AdvicePreviewProps) => {

    // todo : add in cms img and darkened img
    return (
        <div className="flex flex-row gap-2 justify-center items-center w-full h-20 rounded-lg bg-cover" style={{ backgroundImage: `url(${backgroundImg})`}}>
                <ImageBox bgImg={img} />
                <div className="flex flex-col">
                    <p className="text-white text-lg font-semibold">{title}</p>
                  <p className="text-gray-400 italic text-sm font-semibold">{subtext}</p>
            </div>
        </div>
    )
}

export default AdvicePreview