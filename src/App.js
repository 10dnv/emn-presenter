import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Content from './components/Content';
import Monitor from './components/Monitor';
import Settings from './components/Settings';
import Account from './components/Account';
import Search from './components/Search';
import Bible from './components/Bible';

function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
              <Route path="/" element={<Content />}> </Route>
              <Route path="/monitor" element={<Monitor />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
              <Route path="/account" element={<Account />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/bible" element={<Bible />}></Route>
              
            </Routes>
        </Layout>
  </BrowserRouter>
  );
}

export default App;
