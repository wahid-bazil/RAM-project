import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { MouseEventHandler } from 'react';



function Header() {
    const [count, setCount] = useState(0);
    return (
        <header className="p-3">
            <div className="d-flex p-1 ">
                <div className="col-3 bg-dark">
                    logo
                </div>
                <div className="col-6 offset-3 right-header">
                    <ul className="">
                        <li>
                            <a href="#">Surclassement Dernière minute</a>
                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
export default Header