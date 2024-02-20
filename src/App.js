import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Content from './components/Content';
import Monitor from './components/Monitor';

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
              <Route path="/" element={<Content />}> </Route>
              <Route path="/monitor" element={<Monitor />}></Route>
              
            </Routes>
        </Layout>
  </BrowserRouter>
  );
}

export default App;
