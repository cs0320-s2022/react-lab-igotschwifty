import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Horoscope'

function TextBox(props : { label: string, change: React.Dispatch<string> }) {
    return (
        <div className="TextBox">
            <form>
                {props.label}
                <input type={'text'} id={props.label} onChange={event => props.change(event.target.value)}/>
            </form>
        </div>
    );
}

export default TextBox;