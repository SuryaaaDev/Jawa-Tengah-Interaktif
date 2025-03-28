import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Artikel from './Artikel.jsx'
import 'boxicons/css/boxicons.min.css';
import React from 'react';
import DetailArtikel from './DetailArtikel.jsx'
import CeritaRakyat from './CeritaRakyat.jsx'
import CeritaRakyatDetail from './CeritaRakyatDetail.jsx'
import Kamus from './Kamus.jsx'
import Tradisi from './Tradisi.jsx'
import DetailTradisi from './DetailTradisi.jsx'


createRoot(document.getElementById('root')).render(
  <Router>
    <Layout>
      <Routes>
        <Route path='/' element={<Artikel></Artikel>} ></Route>
        <Route path='/detail-artikel' element={<DetailArtikel></DetailArtikel>} ></Route>
        <Route path='/cerita-rakyat' element={<CeritaRakyat></CeritaRakyat>} ></Route>
        <Route path='/cerita-rakyat-detail' element={<CeritaRakyatDetail></CeritaRakyatDetail>} ></Route>
        <Route path='/kamus' element={<Kamus></Kamus>} ></Route>
        <Route path='/tradisi' element={<Tradisi></Tradisi>} ></Route>
        <Route path='/tradisi-detail' element={<DetailTradisi></DetailTradisi>} ></Route>

      </Routes>
    </Layout>
  </Router>
)
