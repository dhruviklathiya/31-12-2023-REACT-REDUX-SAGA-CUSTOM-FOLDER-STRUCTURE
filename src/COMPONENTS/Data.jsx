import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ADMIN_PROCESS } from '../REDUX-SAGA/ACTIONS/admin_action'

const Data = () => {
    const result = useSelector((state)=> state.admin_reducer)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:GET_ADMIN_PROCESS})
    },[])
    return (
    <>
        {
        result.admin?.map((val_,ind_)=>{
            return(
                <>
                <h1>{ind_}</h1>
                <h1>{val_.title}</h1>
                <h1>{val_.author}</h1>
                </>
            )
        })
    }
    </>
  )
}

export default Data