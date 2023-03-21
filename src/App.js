import React, { Component } from 'react'
import NewsMainWindow from './Component/NewsMainWindow'
import NavBar from './Component/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <>
        <div>
          <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<NewsMainWindow key= "general" pageSize={10} category="general" />}/>
              <Route path="/business" element={<NewsMainWindow key= "business" pageSize={10} category="business" />}/>
              <Route path="/science" element={<NewsMainWindow key= "science" pageSize={10} category="science" />}/>
              <Route path="/health" element={<NewsMainWindow key= "health" pageSize={10} category="health" />}/>
              <Route path="/sports" element={<NewsMainWindow key= "sports" pageSize={10} category="sports" />}/>
              <Route path="/technology" element={<NewsMainWindow key= "technology" pageSize={10} category="technology" />}/>
            </Routes>
          </BrowserRouter>
        </div>
      </>
    )
  }
}
