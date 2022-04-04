import Main from './Features/Main-Splash/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
