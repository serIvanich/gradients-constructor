import React from 'react';
import {Routes, Route} from 'react-router-dom';
import s from './App.module.css';
import {HomePage} from "../features/home/HomePage";
import {NewGradient} from "../features/newItem/NewGradient";
import {EditGradient} from "../features/editItem/EditGradient";

function App() {
    return (
        <div className={s.app}>

            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/new'} element={<NewGradient/>}/>
                <Route path={'/edit/:id'} element={<EditGradient/>}/>
            </Routes>

        </div>
    );
}

export default App;
