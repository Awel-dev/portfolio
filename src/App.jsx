import React from 'react';
import Header from './Header/header';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Project from './Components/Projects/project';
import Stacks from './Components/stacks/stacks';
import Approach from './Components/approach/approach';
import Contact from './Components/Contact/contact';

function App() {
  return (
    <div className="min-h-screen text-white flex flex-col bg-[#0b0f12] min-w-full overflow-x-hidden">
      <Header />
      <Home />
      <About />
      <Project/>
      <Stacks/>
      <Approach/>
      <Contact/>
    </div>
  );
}

export default App;