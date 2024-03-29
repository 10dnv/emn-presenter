import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Content from './components/Homepage';
import Monitor from './components/Monitor';
import Settings from './components/Settings';
import Account from './components/Account';
import Search from './components/Search';
import Bible from './components/Bible';
import AddItem from './components/AddItem';
import Homepage from './components/Homepage';
import AddItemLyrics from './components/AddItemLyrics';
import ViewItem from './components/ViewItem';
import CreateSong from './components/CreateSong';

function App() {



  return (
    
      <BrowserRouter>
          <Layout>
              <Routes>
                <Route path="/" element={<Homepage />}> </Route>
                <Route path="/monitor" element={<Monitor />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
                <Route path="/account" element={<Account />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/bible" element={<Bible />}></Route>
                <Route path="/add-item" element={<AddItem />}></Route>
                <Route path="/add-item/lyrics" element={<AddItemLyrics/>}></Route>
                <Route path="/view-item" element={<ViewItem/>}></Route>
                <Route path="/create-song" element={<CreateSong/>}></Route>
                
                
              </Routes>
          </Layout>
    </BrowserRouter>
  );
}

export default App;
