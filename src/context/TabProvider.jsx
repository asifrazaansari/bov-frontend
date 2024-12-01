import React, { useState } from 'react';
import TabContext from './TabContext.js';


const TabProvider = ({children}) => {

    const [activeTab, setActiveTab] = useState('one-way')

    return (
        <TabContext.Provider value={{activeTab, setActiveTab}}>
            {children}
        </TabContext.Provider>
    )
    
}

export default TabProvider;