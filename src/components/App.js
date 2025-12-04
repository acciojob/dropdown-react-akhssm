import React, { useState } from "react";
import "./../styles/App.css";

const states = [{
    name: "Madhya Pradesh",
    description: "Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
    city: [{
        name: "Indore",
        description: "Indore is a city in west-central India. It\'s known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore\'s 19th-century Holkar dynasty.",
        landmarks: [{
            name: "Mhow",
            description: "Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India. It is located 23 kilometres south-west of Indore city, towards Mumbai on the old Mumbai-Agra Road."
        }, {
            name: "Dewas",
            description: "Dewas is a city in the Malwa region..."
        }]
    }, {
        name: "Bhopal",
        description: "Bhopal is a city in the central Indian state of Madhya Pradesh...",
        landmarks: [{
            name: "MANIT",
            description: "Maulana Azad National Institute of Technology Bhopal..."
        }, {
            name: "Berasia",
            description: "Berasia is a landmark and a nagar palika..."
        }]
    }, {
        name: "Gwalior",
        description: "Gwalior is a city in the central Indian state...",
        landmarks: [{
            name: "Ajaypur",
            description: "Little less known city Ajaypur."
        }]
    }]
}, {
    name: "Jharkhand",
    description: "Jharkhand is a state in eastern India...",
    city: [{
        name: "Dhanbad",
        description: "Dhanbad is the second-most populated city...",
        landmarks: [{
            name: "IIT(ISM) Dhanbad",
            description: "Indian Institute of Technology Dhanbad..."
        }, {
            name: "Hirapur",
            description: "Hirapur is a census landmark..."
        }]
    }, {
        name: "Wasseypur",
        description: "Wasseypur is a neighbourhood in Dhanbad...",
        landmarks: [{
            name: "Pandey muhalla",
            description: "Located behind the dhanbad junction..."
        }, {
            name: "MPI Hall",
            description: "Space for everyone"
        }]
    }, {
        name: "Hazaribagh",
        description: "Hazaribagh is a city and a municipal corporation...",
        landmarks: [{
            name: "Shaheed Nirmal Mahto Park",
            description: "Famous for its giant dinosaur structure"
        }, {
            name: "Gandhi Maidan",
            description: "Ideal for conduction major events"
        }]
    }]
}, {
    name: "Assam",
    description: "Assam is a state in northeastern India known for wildlife...",
    city: [{
        name: "Guwhati",
        description: "Guwahati is a sprawling city beside the Brahmaputra River...",
        landmarks: [{
            name: "Ganesh Guri",
            description: "Famous because of PVR city center."
        }, {
            name: "Kalyani Nagar",
            description: "Located near famous Lakshmi Nagar"
        }]
    }, {
        name: "dimapur",
        description: "Dimapur is a city in Nagaland, India...",
        landmarks: [{
            name: "City Tower",
            description: "Giant Tower standing by the road..."
        }, {
            name: "Sunday Market",
            description: "Famous for its weekend sale..."
        }]
    }, {
        name: "Tezpur",
        description: "Tezpur is a landmark and urban agglomeration...",
        landmarks: [{
            name: "Bamuni Hills",
            description: "Best location for photoshoots"
        }, {
            name: "Bhujkhowa Bazar",
            description: "Central Market for Tezpur"
        }]
    }]
}, {
    name: "Bihar",
    description: "Bihar is a state in East India...",
    city: [{
        name: "Patna",
        description: "Patna is an ancient city along the Ganges...",
        landmarks: [{
            name: "Sonpur",
            description: "Sonpur is a city and sub-division..."
        }, {
            name: "Maner",
            description: "Maner also spelled Maner Sharif..."
        }]
    }, {
        name: "Gaya",
        description: "Gaya is a holy city beside the Falgu River...",
        landmarks: [{
            name: "Bakraur",
            description: "Bakraur is a village located near Bodh Gaya..."
        }, {
            name: "Barachatti",
            description: "Barachatti is a block in Gaya district..."
        }]
    }, {
        name: "Darbhanga",
        description: "Darbhanga is a city and municipal corporation...",
        landmarks: [{
            name: "Singhwara",
            description: "Famous for its Groundnut Market"
        }, {
            name: "Jale",
            description: "Famous for its roasted seeds market."
        }]
    }]
}];

function App() {
    const [stateIndex, setStateIndex] = useState(0);
    const [cityIndex, setCityIndex] = useState(0);
    const [landmarkIndex, setLandmarkIndex] = useState(0);

    const handleStateChange = (e) => {
        const idx = Number(e.target.value);
        setStateIndex(idx);
        setCityIndex(0);
        setLandmarkIndex(0);
    };

    const handleCityChange = (e) => {
        const idx = Number(e.target.value);
        setCityIndex(idx);
        setLandmarkIndex(0);
    };

    return (
        <div id="main" style={{ padding: "20px" }}>

            <select id="state" value={stateIndex} onChange={handleStateChange}>
                {states.map((st, i) => (
                    <option key={i} value={i}>{st.name}</option>
                ))}
            </select>

            <select id="city" value={cityIndex} onChange={handleCityChange}>
                {states[stateIndex].city.map((ct, i) => (
                    <option key={i} value={i}>{ct.name}</option>
                ))}
            </select>

            <select
                id="landmark"
                value={landmarkIndex}
                onChange={(e) => setLandmarkIndex(Number(e.target.value))}
            >
                {states[stateIndex].city[cityIndex].landmarks.map((lm, i) => (
                    <option key={i} value={i}>{lm.name}</option>
                ))}
            </select>

            <h3 id="state-title">{states[stateIndex].name}</h3>
            <p id="state-description">{states[stateIndex].description}</p>

            <h3 id="city-title">{states[stateIndex].city[cityIndex].name}</h3>
            <p id="city-description">{states[stateIndex].city[cityIndex].description}</p>

            <h3 id="landmark-title">
                {states[stateIndex].city[cityIndex].landmarks[landmarkIndex].name}
            </h3>
            <p id="landmark-description">
                {states[stateIndex].city[cityIndex].landmarks[landmarkIndex].description}
            </p>

        </div>
    );
}

export default App;
