import React from "react";
import ToggleButton from "./ThemeButton";
import StopButton from "./StopButton";
import { useShared } from "../../Context/SharedContext";

const Header = () => {
    const { showPopup } = useShared();
    return (
        <div className="flex justify-between items-center p-[2.5%]">
            <ToggleButton/>
            {!showPopup && <StopButton/>}
        </div>
    )
}

export default Header;