import React from "react";
import useTabState from "../../hooks/useTabState";


const TabNavigation = () => {
    const {activeTab, setActiveTab} = useTabState()

    const tabs = [
        {
            id: 'one-way',
            title: 'One Way'
        },
        {
            id: 'round-trip',
            title: 'Round Trip'
        }
    ]

    return (
       <div className="flex space-x-4 border-b pb-2 md:justify-center">
        {
            tabs.map((tab) => 
                <button 
                key={tab.id}
                className={`px-4 py-2 ${activeTab === tab.id
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab(tab.id)}
                >
                    <p>{tab.title}</p>
                </button>
            )
        }
       </div> 
    )
}

export default TabNavigation;