import './App.css';
import React, { useState, useEffect } from 'react'

import AddContect from './Components/AddContect';
import ContectsList from './Components/ContectsList';
import Headers from './Components/Headers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContectDetail from './Components/ContectDetail';
import DeleteContect from './Components/DeleteContect';


function App() {
  const LOCAL_STORAGE_KEY = 'contects'
  const [contects, setcontects] = useState([])
  const addContectHandeler = (contect) => {
    setcontects([...contects, { id: new Date().getTime().toString(), ...contect }])
  }
  const removeContectHandeler = (id) => {
    const newContectList = contects.filter((contect) => {
      return contect.id !== id
    })
    setcontects(newContectList)
  }
  useEffect(() => {
    const retrive = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrive) {
      setcontects(retrive)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contects))
  }, [contects])

  return (
    <div className="App">
      <Headers />
      <Router>
        <Switch>

          <Route exact path='/add' render={(props) => (<AddContect {...props} addContectHandeler={addContectHandeler} />)}></Route>
          <Route exact path='/' render={(props) => (<ContectsList {...props} contects={contects} removeContectHandeler={removeContectHandeler} />)}></Route>
          <Route path='/contact/:id' component={ContectDetail} />
          <Route path='/delete/:id' render={(props) => (<DeleteContect {...props} removeContectHandeler={removeContectHandeler} />)}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
