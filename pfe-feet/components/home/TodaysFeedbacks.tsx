'use client';
import Link from "next/link";
import Button from "../input/Button";

type TodaysFeedbacksProps = {
    feebackCount: number;
}

const TodaysFeedbacks = ({feebackCount}: TodaysFeedbacksProps) => {
    return (
        <div className="flex flex-col items-center justify-center w-80 h-40 bg-[#508C97] rounded-xl ">
        <span className="text-white text-7xl font-bold">{feebackCount}</span>
        <h1 className="uppercase text-white pb-2 font-sans">Ajoutés aujourd&apos;hui</h1>
        <Link href={'/calendar'}> {/* TODO Change route redirection to symptoms */}
            <Button bgColor="bg-slate-50" textColor="[#1F2937]" text="Ajouter"/>
        </Link>
        </div>
    )
}

export default TodaysFeedbacks;
