import { connect } from 'react-redux';
import Mask from './Mask.jsx';
import { setIsShowMask } from "../../redux/actions/app.action";

const mapStateToProps = state => {
    return {
        ...state.app,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        setIsShowMask: (isShowMask) => {
            dispatch(setIsShowMask(isShowMask));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Mask);