import { JLPT_LEVELS } from "../../constants"
import { Link } from "react-router-dom";

export const LevelSelect = () => {


    return (
        <>
            <h2>Select your level to start</h2>

            <ul>
                {JLPT_LEVELS.map(level => (
                    <li key={level.code}>
                        <Link to={`/level/${level.code}`}>
                            {level.name} - {level.caption}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}