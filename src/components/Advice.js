import React, { useState } from "react";
import axios from "axios";

const Advice = () => {

   const [advice, setAdvice] = useState("");
   
   const getAdvice = async () => {
      await axios.get(process.env.REACT_APP_ADVICE_URL)
         .then(response => {
            const { advice } = response.data.slip;
            setAdvice(advice);
         })
         .catch(error => console.log(error))
   }

   return (
      <div className="card">
         <button className="button" onClick={() => getAdvice()}>
            <span>Give Me Advice</span>
         </button>
         <h3 className="content">{advice}</h3>         
      </div>
   )
}

export default Advice;