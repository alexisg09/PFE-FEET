import AdvicePreview from '@/components/advice/AdvicePreview';
import Subtitle from '@/components/global/Subtitle';
import Title from '@/components/global/Title';
import Calendar from '@/components/home/Calendar';
import Hello from '@/components/home/Hello';
import SensorSymptomPreview from '@/components/home/SensorSymptomPreview';
import TodaysFeedbacks from '@/components/home/TodaysFeedbacks';
import { getAdvicesData } from '@/data/advicesUtils';
import { getSymptomsData } from '@/data/symptomsUtils';
import { getSymptomHexCode } from '@/types/types';

const Home = () => {
  const symptomes = getSymptomsData();
  const advices = getAdvicesData();

  const symptomsFromSensors = symptomes.filter(
    (sym: any) => sym.isFromSensors === true
  );

  return (
    <main className="flex min-h-screen min-w-screen flex-col p-4">
      <div className="ml-2 mb-3">
        <Hello name="Alexis" />
      </div>
      <div>
        <Calendar />
      </div>
      <div className="flex justify-center mt-6">
        <TodaysFeedbacks
          feebackCount={
            symptomes.filter((sym: any) => sym.isFromSensors === false).length
          }
        />
      </div>
      <div className="flex flex-col justify-center mt-6 w-[90%]">
        <Title title="Ce que les chaussettes ont remarqué" />
        <Subtitle subtitle="Voici ce que les chaussettes ont détecté pendant l'utilisation." />
      </div>
      <div className="flex flex-col justify-center mt-2">
        <div className="flex flex-row  flex-wrap justify-start mt-2 gap-2">
          {symptomsFromSensors.map((sym: any, index: number) => (
            <SensorSymptomPreview
              bgImg={sym.bgImg}
              href={'/symptoms/'}
              symptoms={symptomsFromSensors}
              key={+index}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center mt-6 ">
          <Title title="Conseils" />
          <Subtitle subtitle="Voici quelques conseils pour vous aider à mieux vivre avec votre maladie." />
          <div className="flex flex-col mt-2 gap-2">
            {advices.map((advice: any, index: number) => (
              <AdvicePreview {...advice} key={+index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
