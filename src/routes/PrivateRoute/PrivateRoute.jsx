import { useContext } from 'react';
import PropTypes from "prop-types";
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import LoaderSpinner from '../../components/LoaderSpinner/LoaderSpinner';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return (
        <div className='min-h-screen grid justify-center mt-5'>
            <LoaderSpinner/>
        </div>
        )
    }
    if(user && user.uid){
       return children
    }
    return <Navigate to='/login'></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;