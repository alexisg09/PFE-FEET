import React from 'react'
import ImageBox from '../global/ImageBox'
import Link from 'next/link'

type AdvicePreviewProps = {
    title: string,
    subtext: string,
    backgroundImg: string,
    img: string,
    slug: string,
}

const AdvicePreview = ({ title, subtext, backgroundImg, img, slug} : AdvicePreviewProps) => {
    return (
        <Link href={`/advice`} >
        {/* <Link href={`/advice/${slug}`} as={`/advice/${slug}`}> */}
        <div className="flex flex-row gap-2 justify-start items-center w-full h-20 rounded-lg bg-cover" style={{ backgroundImage: `url(${backgroundImg})`}}>
                <div className="ml-[0.65rem]">
                <ImageBox bgImg={img} />
            </div>
                <div className="flex flex-col">
                    <p className="text-white text-lg font-semibold">{title}</p>
                  <p className="text-gray-400 italic text-sm font-semibold">{subtext}</p>
            </div>
        </div>
        </Link>
    )
}

export default AdvicePreview