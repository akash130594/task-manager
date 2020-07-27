import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../actions/auth'



const LoginPage = ({startLogin}) => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify</h1>
                <p>Its time to get your expenses under control</p>
                <button className="button" onClick={startLogin}>Login With Google</button>
            </div>
        </div>
    )
}


const mapDispatchProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined,mapDispatchProps)(LoginPage);