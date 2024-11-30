import React, { useState } from 'react';
import TabContext from './TabContext.js';



const TabContextProvider = ({children}) => {

    const [activeTab, setActiveTab] = useState('one-way')

    return (
        <TabContext.Provider val={{activeTab, setActiveTab}}>
            {children}
        </TabContext.Provider>
    )
    
}

export default TabContextProvider;