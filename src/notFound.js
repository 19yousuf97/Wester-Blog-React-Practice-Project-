import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>Error!</h2>
            <p>The Section You Are Looking For Does Not Yet Exist</p>
            <Link to="/">Back to The Network</Link>
        </div>
     );
}
 
export default NotFound;