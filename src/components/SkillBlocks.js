import "./SkillBlocks.css";

const SkillBlocks = ({ skills }) => {
    return (
        <div className="skill-blocks">
            {
                skills.map((skill) => {
                    return (
                        <span>{skill}</span>
                    )
                })
            }
        </div>
    )
}

export default SkillBlocks;