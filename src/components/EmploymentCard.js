import "./EmploymentCard.css";

const EmploymentCard = ({ experience }) => {

    return (
        <div className='employment-card'>
            <h3>{experience.company}</h3>
            <h4>{experience.position}</h4>
            <div>
                <div className='item-block'>
                    {
                        experience.skills.map((skill) => {
                            return (
                                <span>{skill}</span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default EmploymentCard;