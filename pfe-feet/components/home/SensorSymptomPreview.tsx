import Image from "next/image";
import Link from "next/link";

type SensorSymptomPreviewProps = {
    bgImg: string;
    borderColor?: string;
    href: string;
    symptoms: any;
}


const SensorSymptomPreview = ({ bgImg, borderColor, href, symptoms }: SensorSymptomPreviewProps ) => {
    // This should be a <Link> to current day symptom page
        return (
            <Link className={`w-16 h-16 rounded-md border-2 ${borderColor} bg-fixed bg-cover bg-center shrink-0`} href={{pathname: href, query: symptoms }} as={href}>
                <Image alt="bgimg" width={64} height={64} src={bgImg} className="min-w-full min-h-full object-cover rounded-md"/>
            </Link>
    )
}

export default SensorSymptomPreview;


