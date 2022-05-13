import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import s from './App.module.scss';
import {HomePage} from "../features/home/HomePage";
import {EditGradient} from "../features/editItem/EditGradient";

function App() {
    return (
        <div className={s.app}>
            
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/new'} element={<EditGradient/>}/>
                    <Route path={'/edit/:gradientID'} element={<EditGradient/>}/>
                    <Route path="*" element={<Navigate replace to="/"/>}/>
                </Routes>
           
        </div>
    );
}

export default App;
