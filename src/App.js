

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FlexExample from './coffemakerpage/FlexExample';
import Layout from './notecreation/components/Layout';
import Create from './pages/Create'
import Note from './pages/Note'
import CoffeDisplay from './coffemakerpage/CoffeDisplay'
import GridExcercise from './coffemakerpage/GridExercise';
import LayoutFlex from './notecreation/components/LayoutFlex';
import StartHoistngFlex from './newWebPage/StartHoistngFlex';
import StartHoistngGrid from './newWebPage/StartHoistngGrid';
import LayoutGrid from './notecreation/components/LayoutGrid';
import PracticeMakeStyleFn from './newWebPage/PracticeMakeStyleFn';
import LayoutWithouStyle from './notecreation/components/LayoutWithouStyle';

function App() {
  return (

      <Router>
        <LayoutWithouStyle>
          <Routes>
            {/* <Route exact path="/" element={<Note />} />
            <Route path="/create" element={<Create />} /> */}
            {/* <Route exact path="/" element={<CoffeDisplay />} /> */}
            <Route exact path="/" element={<FlexExample />} />
            <Route exact path="/flex" element={<FlexExample />} />
            <Route exact path="/coffe-list" element={<CoffeDisplay />} />
            <Route exact path="/gridexcercise" element={<GridExcercise />} />
            {/* <Route exact path="/form-flex" element={<StartHoistngFlex />} /> */}
            <Route exact path="/styles" element={<PracticeMakeStyleFn />} />
            <Route exact path="/form-grid" element={<StartHoistngGrid />} />
          </Routes>
        </LayoutWithouStyle>
      </Router>

  );
}

export default App;
