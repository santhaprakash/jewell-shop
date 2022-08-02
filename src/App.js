import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Main from './Components/Main';
import Temp from './Components/Temp';
import Home from './Pages/Home';
import Nav from './Pages/Nav';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Details from './Pages/Details';

function App() {
  const theme=createTheme({
      palette: {
        primary: {
          main: '#273377',
        },
        secondary: {
          main: '#ff80ab',
        },
      },
  })
  return (
    <ThemeProvider theme={theme}>    
        <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/:id" element={<Details />} />
        </Routes>   
        </BrowserRouter>
        </div>
    </ThemeProvider>
  );
}

export default App;
