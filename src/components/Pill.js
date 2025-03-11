import "./Pill.css";

const Pill = ({ name }) => {
    return (
        <span className="pill-container">{name}</span>
    )
}

export default Pill;