import { useEffect } from "react";
import Pill from "../components/Pill";
import "./EyeGuide.css";
import { useNavigate } from "react-router-dom";

const logo = require('../assets/eye-guide-image.png');

const EyeGuide = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let routeChange = (path) => {
        window.open(path, "_blank")
    }

    const navigate = useNavigate();

    return (
        <div className="eyeguide">
            <section id="home" className='home-section home-container'>
                <div className="title-container">
                    <h1>Eye Guide</h1>
                    <h3>Indoor Navigation for the Visually Impaired</h3>
                    <div className="skills-container">
                        <h4>Languages</h4>
                        <div className="pills-container">
                            <Pill name={"JavaScript"} />
                            <Pill name={"TypeScript"} />
                            <Pill name={"Python"} />
                            <Pill name={"SQL"} />
                        </div>
                    </div>
                    <div className="skills-container">
                        <h4>Frameworks & Databases</h4>
                        <div className="pills-container">
                            <Pill name={"React Native"} />
                            <Pill name={"Django"} />
                            <Pill name={"PostgresSQL"} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-overview-section">
                <div className="project-overview-container">
                    <h2 className='section-header'>PROJECT OVERVIEW</h2>
                    <img className='eye-guide-image' alt="Android phone screen with app homescreen" src={logo}></img>
                    <div className="summary-container">
                        <p>
                            This project is an indoor navigation Android application
                            for the visually impaired. The Android application is
                            paired with a physical device that mounts onto the user's
                            phone.
                        </p>
                        <p>
                            The frontend of the Android application was developed
                            using <span>React Native</span> with <span>JavaScript</span> and the
                            backend was developed in <span>Django</span> with <span>Python</span>. The
                            physical device is a <span>Bluetooth Mirco Arduino Nano</span> connected
                            with a <span>ultrasonic sensor</span> to measure distance and is all
                            contained in a 3D printed capsule.
                        </p>

                        <h4>Frontend Design</h4>
                        <p>
                            The frontend is designed to meet <span>accessibility standards</span>, such as color selection,
                            font size, and layout of buttons and fields. The application uses the <span>OS Accessibility
                                Talk Back</span> feature to allow user's to interact with the application as they would with their
                            overall device.
                        </p>

                        <h4>Backend Design</h4>
                        <p>
                            The backend is designed to add, delete, and modify mapping information for buildings
                            that have been mapped out. The data is stored in a <span>PostgresSQL database</span> and
                            uses <span>SQL commands</span> to interact with it. Additionally, the backend performs the route processing
                            using an <span>A* algorithm</span> to find the shortest route to a location. It also performs any
                            calculations and processing to prevent a user's device from taking the load.
                        </p>

                        <h4>Links</h4>
                        <div className='resource-buttons-container'>
                            <button className='resource-button' onClick={() => routeChange("https://github.com/Girujan1998/EyeGuide")}>
                                Frontend Repo
                            </button>
                            <button className='resource-button' onClick={() => routeChange("https://github.com/Girujan1998/EyeGuide-backend")}>
                                Backend Repo
                            </button>
                            <button className='back-button' onClick={() => navigate(-1)}>
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EyeGuide;