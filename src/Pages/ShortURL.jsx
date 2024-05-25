import PropTypes from 'prop-types';
import Navigate from "../Components/Navigate";
import { useParams } from 'react-router-dom';

function ShortURL({ShortURL}) {
    const { key } = useParams();
    return (
        <>
            <Navigate />
            <div className="main-container">
                <h1>ShortURL</h1>
                <p> Key: {key}</p>
                <p> URL: {ShortURL}</p>
            </div>
        </>
    )
}

ShortURL.propTypes = {
    ShortURL: PropTypes.string
}
export default ShortURL;