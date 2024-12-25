import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import HomePage from './pages/HomePage/HomePage.jsx';
import AdminPage from './pages/AdminPage/AdminPage.jsx';
import Login from './pages/Login/Login.jsx';
import { store } from './app/store.js';
import { Provider } from 'react-redux';
import ListOfCoins from './pages/ListOfCoins/ListOfCoins.jsx';
import HomePageCoinList from './pages/HomePageCoinList/HomePageCoinList.jsx';
import ProtectedRoute from './utils/ProtectedRoute.jsx';
createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute/>}>
            <Route path="/admin" element={<AdminPage />} />

        </Route>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:id" element={<HomePageCoinList />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
