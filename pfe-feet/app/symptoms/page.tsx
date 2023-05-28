
"use client";
import BackLink from "@/components/global/BackLink";
import Title from "@/components/global/Title";
import Button from "@/components/input/Button";
import { format } from "date-fns";
import fr from "date-fns/locale/fr";
import Link from "next/link";



const SymptomsPage = () => {
    const today = new Date();

    const formattedDate = format(today, 'd MMMM', { locale: fr });



    return (
        <main className="flex min-h-screen h-full min-w-screen flex-col p-4">
            <div className="flex flex-col items-start flex-wrap">
                <BackLink path="/" title={formattedDate} />
            </div>
            <Title title="Ce que les chaussettes ont remarqué" />
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="flex flex-col justify-start mt-4">
                        <Title title="Douleurs musculaires" className="border-b-2 border-[#ABE152] text-base w-1/2" />
                        <div className="flex flex-col pl-2 mt-4 gap-2">
                            <p className="text-[#1F2937] text-sm">- Tension épaule gauche</p>
                            <p className="text-[#1F2937] text-sm">- Douleurs jambe gauche</p>
                            <p className="text-[#1F2937] text-sm">- Douleurs jambe droite</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start mt-4">
                        <Title title="Problèmes circulatoires" className="border-b-2 border-[#E15252] text-base w-1/2" />
                        <div className="flex flex-col pl-2 mt-4 gap-2">
                            <p className="text-[#1F2937] text-sm">- Fourmillements</p>
                            <p className="text-[#1F2937] text-sm">- Jambes lourdes</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start mt-4">
                        <Title title="Hydratation" className="border-b-2 border-[#528BE1] text-base w-1/2" />
                        <div className="flex flex-col pl-2 mt-4 gap-2">
                            <p className="text-[#1F2937] text-sm">- Maux de têtes</p>
                            <p className="text-[#1F2937] text-sm">- Jambes lourdes</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-end">
                    <Link href={'/addSymptom'}>
                        <Button text="Ajouter d'autres symptômes" bgColor="bg-[#1F2937] mt-12 px-8" textColor="white" />
                    </Link>
                </div>
            </div>
        </main>
    )

}


export default SymptomsPage;