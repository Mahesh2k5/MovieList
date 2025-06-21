import { useState } from 'react'
import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Content from './Components/Content'

function App() {
  const [searchTerm , setSearchTerm] = React.useState("batman");

  return (
    <div className="app">
      <NavBar setSearchTerm={setSearchTerm} />
      <hr />
      <Content searchTerm = {searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  )
}

export default App;
