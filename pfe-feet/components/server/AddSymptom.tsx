import { addSymptomData } from "@/data/symptomsUtils"
import { addFeelingFormType } from "@/types/types"
import { useEffect } from "react"


type AddSymptomProps = {
    data: addFeelingFormType
    shouldDoAction: boolean
}

const AddSymptom = ({data, shouldDoAction }: AddSymptomProps) => {
        useEffect(() => {
            addSymptomData(data)
          }, [shouldDoAction]);

    return (<div className="hidden"></div>)
}

export default AddSymptom;