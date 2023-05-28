import AdvicePreview from "@/components/advice/AdvicePreview";
import BackLink from "@/components/global/BackLink";
import Subtitle from "@/components/global/Subtitle";
import Title from "@/components/global/Title";
import { getAdvicesData } from "@/data/advicesUtils";
import { format } from "date-fns";
import fr from "date-fns/locale/fr";
import Image from "next/image";


const AdvicePage = () => {
    const today = new Date();
    const advices = getAdvicesData().filter((advice: any) => advice.id != 1);
    const formattedDate = format(today, 'd MMMM', { locale: fr });

    return (
        <main className="flex min-h-screen h-full min-w-screen flex-col p-4">
            <BackLink path="/" title={formattedDate} />

            <div className="pt-4">
                <Title title="Evitez les aliments frits" className="text-bold" />
                <Subtitle subtitle="Hier" />
            </div>

            <div className="pt-4">
                <Image
                    src={'https://media.discordapp.net/attachments/1112094396591132772/1112097210969100379/friture_flickr_14403818227_21aa305c00_b.png?width=1014&height=676'}
                    width={500}
                    height={250}
                    alt="Conseil"
                    className="rounded-lg"
                />
            </div>
            <div className="pt-4">
                <p>Une alimentation saine doit inclure une variété de nutriments provenant de sources différentes, mais en général, il est recommandé de limiter sa consommation d'aliments gras.
                    Consommez des graisses saines : Les graisses mono-insaturées et poly-insaturées, telles que celles présentes dans les noix, les graines, l'avocat et les poissons gras, sont considérées comme des graisses saines et peuvent avoir des avantages pour la santé.
                    Augmentez votre consommation de légumes et de fruits : Les légumes et les fruits contiennent des fibres, des vitamines et des minéraux importants pour la santé et peuvent aider à réduire la consommation d'aliments gras</p>
            </div>
            <div className="pt-4">
            {advices.map((advice: any) => (
              <AdvicePreview  {...advice} />
            ))}
            </div>

        </main>
    );
};


export default AdvicePage;