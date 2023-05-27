'use client';

import AdvicePreview from "@/components/advice/AdvicePreview";
import Subtitle from "@/components/global/Subtitle";
import Title from "@/components/global/Title";
import Hello from "@/components/home/Hello";
import LinearCalendar from "@/components/home/LinearCalendar";
import SensorSymptomPreview from "@/components/home/SensorSymptomPreview";
import TodaysFeedbacks from "@/components/home/TodaysFeedbacks";



 const Home = () =>  {


  return (
    <main className="flex min-h-screen min-w-screen flex-col p-2">
      <div className="ml-2 mb-3">
        <Hello name="Alexis"/>
      </div>
      <div>
        <LinearCalendar />
      </div>
      <div className="flex justify-center mt-6">
        {/* TODO changer le nombre de ressentis rentrés en fonction de la date selectionnée depuis les data json */}
        <TodaysFeedbacks feebackCount={9} />
      </div>
      <div className="flex flex-col justify-center mt-6 w-[90%]">
        <Title title="Ce que les chaussettes ont remarqué" />
        <Subtitle subtitle="Voici ce que les chaussettes ont détecté pendant l&apos;utilisation." />
      </div>
      <div className="flex flex-col justify-center mt-2">
        {/* TODO faire un map sur la liste des symptomes en fonction de la date selectionnée depuis les data json */}
        <div className="flex flex-row  flex-wrap justify-start mt-2 gap-2">
          <SensorSymptomPreview 
           bgImg="https://media.discordapp.net/attachments/1112094396591132772/1112094991980974090/migraine-48c6a5197807bded.png?width=1014&height=676"
            borderColor="border-[#528BE1]"
            href={'/symptoms/headache'}
          />
            <SensorSymptomPreview 
            bgImg="https://media.discordapp.net/attachments/1112094396591132772/1112094991980974090/migraine-48c6a5197807bded.png?width=1014&height=676"
            borderColor="border-[#528BE1]"
            href={'/symptoms/headache'}
          />
            <SensorSymptomPreview 
            bgImg="https://media.discordapp.net/attachments/1112094396591132772/1112094991980974090/migraine-48c6a5197807bded.png?width=1014&height=676"
            borderColor="border-[#528BE1]"
            href={'/symptoms/headache'}
          />
            <SensorSymptomPreview 
            bgImg="https://media.discordapp.net/attachments/1112094396591132772/1112094991980974090/migraine-48c6a5197807bded.png?width=1014&height=676"
            borderColor="border-[#528BE1]"
            href={'/symptoms/headache'}
          />
            <SensorSymptomPreview 
            bgImg="https://media.discordapp.net/attachments/1112094396591132772/1112094991980974090/migraine-48c6a5197807bded.png?width=1014&height=676"
            borderColor="border-[#528BE1]"
            href={'/symptoms/headache'}
          />
            <SensorSymptomPreview 
            bgImg="https://media.discordapp.net/attachments/1112094396591132772/1112094991980974090/migraine-48c6a5197807bded.png?width=1014&height=676"
            borderColor="border-[#528BE1]"
            href={'/symptoms/headache'}
          />
            <SensorSymptomPreview 
            bgImg="https://media.discordapp.net/attachments/1112094396591132772/1112094991980974090/migraine-48c6a5197807bded.png?width=1014&height=676"
            borderColor="border-[#528BE1]"
            href={'/symptoms/headache'}
          />
            <SensorSymptomPreview 
            bgImg="https://media.discordapp.net/attachments/1112094396591132772/1112094991980974090/migraine-48c6a5197807bded.png?width=1014&height=676"
            borderColor="border-[#528BE1]"
            href={'/symptoms/headache'}
          />
            <SensorSymptomPreview 
            bgImg="https://media.discordapp.net/attachments/1112094396591132772/1112094991980974090/migraine-48c6a5197807bded.png?width=1014&height=676"
            borderColor="border-[#528BE1]"
            href={'/symptoms/headache'}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        {/* Title, Subtile below like before, then some AdvicePreview. Should be listed in a column full width */}
        <div className="flex flex-col justify-center mt-6 ">
          <Title title="Conseils" />
          <Subtitle subtitle="Voici quelques conseils pour vous aider à mieux vivre avec votre maladie." />
          <div className="flex flex-col mt-2 gap-2">
            {/* TODO faire un map sur la liste des conseils en fonction de la date selectionnée depuis les data json */}
            <AdvicePreview
               backgroundImg="https://cdn.discordapp.com/attachments/1112094396591132772/1112097614142374098/alimentfrist.png"
               img="https://media.discordapp.net/attachments/1112094396591132772/1112097210969100379/friture_flickr_14403818227_21aa305c00_b.png?width=1014&height=676"
               subtext="Hier"
               title="Evitez les aliments gras"
             />
             <AdvicePreview
               backgroundImg="https://cdn.discordapp.com/attachments/1112094396591132772/1112097614142374098/alimentfrist.png"
               img="https://media.discordapp.net/attachments/1112094396591132772/1112097210969100379/friture_flickr_14403818227_21aa305c00_b.png?width=1014&height=676"
               subtext="Hier"
               title="Evitez les aliments gras"
             />
             <AdvicePreview
               backgroundImg="https://cdn.discordapp.com/attachments/1112094396591132772/1112097614142374098/alimentfrist.png"
               img="https://media.discordapp.net/attachments/1112094396591132772/1112097210969100379/friture_flickr_14403818227_21aa305c00_b.png?width=1014&height=676"
               subtext="Hier"
               title="Evitez les aliments gras"
             />
             <AdvicePreview
               backgroundImg="https://cdn.discordapp.com/attachments/1112094396591132772/1112097614142374098/alimentfrist.png"
               img="https://media.discordapp.net/attachments/1112094396591132772/1112097210969100379/friture_flickr_14403818227_21aa305c00_b.png?width=1014&height=676"
               subtext="Hier"
               title="Evitez les aliments gras"
             />
             <AdvicePreview
               backgroundImg="https://cdn.discordapp.com/attachments/1112094396591132772/1112097614142374098/alimentfrist.png"
               img="https://media.discordapp.net/attachments/1112094396591132772/1112097210969100379/friture_flickr_14403818227_21aa305c00_b.png?width=1014&height=676"
               subtext="Hier"
               title="Evitez les aliments gras"
             />
        </div>
        </div>
          </div>

    </main>
  )
}

export default Home;
