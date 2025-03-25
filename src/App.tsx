import React, { lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { routes } from './routesConfig';
import './styles/App.css';

const App: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  // This function will be passed to the child to update the parent's state
  const handleToggleChange = (value: boolean) => {
    console.log('Boolean value from child:', value);
    setIsToggled(value); // Update the state in the parent based on the child's value
  };
  return (
    <Router>
    <div className="App">
      <div id="mainwrapper" className='toggled-2'>
        <Sidebar isHovered={isToggled} onToggleChange={handleToggleChange} />
        <Routes>
        { routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
      </div>
    </div>
  </Router>
  );
};

export default App;