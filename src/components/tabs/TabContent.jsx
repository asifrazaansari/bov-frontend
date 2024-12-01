import React from "react";
import useTabState from "../../hooks/useTabState";
import OneWay from "./OneWayForm";
import RoundTrip from "./RoundTripForm";

const TabContent = () => {
    const {activeTab} = useTabState()

    switch(activeTab){
        case "one-way":
            return <OneWay />
        case 'round-trip':
            return <RoundTrip />
        default:
            return <OneWay />
    }
}

export default TabContent