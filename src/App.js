import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import SingleTest from './components/SingleTest';
import MainPage from './pages/MainPage';
import SubmittedTests from './pages/SubmittedTests';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<MainPage />} />
        <Route path="/tests" element={<SubmittedTests />} />
        <Route path="/tests/:id" element={<SingleTest />} />
      </Route>
    </Routes>
  );
}

export default App;
