import React from "react";
import { useShared } from "../../Context/SharedContext";

const Level = ({lev, index, handleLevel}) => {
    const { level } = useShared();

    return (
        <button disabled={level===lev.value} key={index} onClick={() => handleLevel(lev)} className="md:w-[10%] reverse-theme rounded md:text-xl text-center p-[1.5%] cursor-pointer disabled:cursor-not-allowed disabled:opacity-75">
            {lev.name}
        </button>
    );
}

export default Level;