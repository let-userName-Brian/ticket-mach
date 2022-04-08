import Main from './Features/Main-Splash/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

