import { connect } from 'react-redux';
import Head from './Head.jsx';
import { setIsShowMask } from "../../redux/actions/app.action";

const mapStateToProps = state => {
    return {
        ...state.app,
    }
};


const mapDispatchToProps = dispatch => {
    return {
        setIsShowMask: (isShowMask) => {
            dispatch(setIsShowMask(isShowMask))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Head);