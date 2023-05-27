// Exact same component as ./SensorSymtomPreview.tsx but component is not clickable and does not have a border

import Image from "next/image";

// Path: components\SymptomPreview.tsx

type ImageBoxProps = {
    bgImg: string;
}

const ImageBox = ({ bgImg }: ImageBoxProps) => {
    return (
        <div className="w-14 h-14 rounded-md bg-fixed bg-cover bg-center shrink-0">
            <Image src={bgImg} width={56} height={56} className="min-w-full min-h-full object-cover rounded-md" alt="bgImg"/>
        </div>
    )
}

export default ImageBox;