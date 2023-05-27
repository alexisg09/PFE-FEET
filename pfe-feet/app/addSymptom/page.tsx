import BackLink from "@/components/global/BackLink";
import Title from "@/components/global/Title";
import { useState } from "react";



const addSymptom = () => {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

return (
    <main className="flex min-h-screen min-w-screen flex-col items-center p-2">
      <div>
        <BackLink path="/" title="14 avril"/>
      </div>
    </main>
)


}

export default addSymptom;