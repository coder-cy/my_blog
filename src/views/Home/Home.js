import { connect } from 'react-redux';
import Home from './Home.jsx';
import { asyncFetchSliderImg } from "../../redux/actions/home.action";

const mapStateToProps = state => {
    return {
        ...state.home,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        fetchSliderImg: () => {
            dispatch(asyncFetchSliderImg())
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);