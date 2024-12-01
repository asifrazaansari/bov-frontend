import React from 'react';
import TabProvider from "./context/TabProvider"
import './App.css';
import Navbar from './components/navbar/NavBar';
import TabNavigation from './components/tabs/TabNavigation';
import TabContent from './components/tabs/TabContent';

function App() {
  return (
   <TabProvider>
      <Navbar />
      <TabNavigation />
      <TabContent />
   </TabProvider>
  )
}

export default App
