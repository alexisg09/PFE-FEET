import { useState } from "react";
import Calendar from "./Calendar";





const LinearCalendar = () => {
    const [showDetails, setShowDetails] = useState(false);

    const showDetailsHandle = () => {
        setShowDetails(true);
     };

    return (

        <Calendar showDetailsHandle={showDetailsHandle} />
        )


}


export default LinearCalendar;