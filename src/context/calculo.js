import React, { createContext, useState } from 'react';

export const CalculoContext = createContext({});

function CalculoProvider({ children }) {
    const [resultCalc, setResultCalc] = useState(0);

    function consumptionCalculation(kms, litros){

        if(kms == 0.0001 && litros == 0.0001){
            setResultCalc(0);
            return;
        }

        const result = kms / litros;

        setResultCalc(result.toFixed(2));
    };

    return(
        <CalculoContext.Provider value={{consumptionCalculation, resultCalc}}>
            { children }
        </CalculoContext.Provider>
    )
};

export default CalculoProvider;