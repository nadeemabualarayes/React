
import { useContext } from "react";
import { AppContext } from "../App";


const PointComp = () => {
    const { points } = useContext(AppContext);
    return (
        <div>
            <ul>
                {points && points.length > 0 && points.map(item => <li> {item}</li>)}
            </ul>
        </div>
    )
}
export default PointComp;
