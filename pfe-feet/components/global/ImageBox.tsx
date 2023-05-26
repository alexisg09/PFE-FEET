// Exact same component as ./SensorSymtomPreview.tsx but component is not clickable and does not have a border

import Image from "next/image";

// Path: components\SymptomPreview.tsx

type ImageBoxProps = {
    bgImg: string;
}

const ImageBox = ({ bgImg }: ImageBoxProps) => {
    return (
        <div className="w-16 h-16 rounded-md bg-fixed bg-cover bg-center shrink-0">
            <Image src={bgImg} className="min-w-full min-h-full object-cover rounded-md" alt="bgImg"/>
        </div>
    )
}

export default ImageBox;