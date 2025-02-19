import React from "react";
import { levels } from "../../utils";
import Level from "./Level";
import { useShared } from "../../Context/SharedContext";

const Levels = () => {
 const { handleLevel } = useShared();

    return (
        <div className="flex items-center justify-center gap-[5%] w-full m-[2%] mb-[5%]">
            {levels?.map((lev, index) => (
                <Level lev={lev} key={index} handleLevel={handleLevel}/>
            ))}
        </div>
    );
}

export default Levels;