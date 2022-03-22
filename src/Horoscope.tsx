import React from 'react';
// @ts-ignore
import {AwesomeButton} from "react-awesome-button";
import axios from "axios";
import './App.css';
import TextBox from "./TextBox";

//TODO: Fill in the ? with appropriate names/values for a horoscope.
//HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.


function Horoscope() {
    const [sun, setSun] = React.useState("")
    const [moon, setMoon] = React.useState("")
    const [rising, setRising] = React.useState("")
    const [horoscope, setHoroscope] = React.useState([]);
    const requestHoroscope = () => {
        const toSend = {sun: sun, moon: moon, rising: rising};
        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }
        //Install and import axios!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post('http://localhost:4567/horoscope', toSend, config)
            .then(response => setHoroscope(response.data["horoscope"]));
    }

    return (
        <div className="Horoscope">
            <header className="Horoscope-header">
                <h1>Horoscopes :(</h1>
            </header>
            <TextBox label={"Enter Sun Sign: "} change={setSun}/>
            <TextBox label={"Enter Moon Sign: "} change={setMoon}/>
            <TextBox label={"Enter Rising Sign: "} change={setRising}/>
            <AwesomeButton onPress={requestHoroscope} type="primary">Submit</AwesomeButton>
            {horoscope == null ? "" : horoscope.map((field: string) => <p>{field}</p>)}
        </div>
    );
}

export default Horoscope;