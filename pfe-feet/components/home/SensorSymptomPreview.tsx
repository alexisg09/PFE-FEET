import Image from "next/image";

type SensorSymptomPreviewProps = {
    bgImg: string;
    borderColor: string;
    onClick: () => void;
}


const SensorSymptomPreview = ({ bgImg, borderColor, onClick }: SensorSymptomPreviewProps ) => {
    // This should be a <Link> to current day symptom page
        return (
            <button className={`w-16 h-16 rounded-md border-2 ${borderColor} bg-fixed bg-cover bg-center shrink-0`} onClick={() => onClick}>
                <Image alt="bgimg" src={bgImg} className="min-w-full min-h-full object-cover rounded-md"/>
            </button>
    )
}

export default SensorSymptomPreview;


