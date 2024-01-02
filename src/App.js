import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { GET_USER_PROCESS } from "./REDUX-SAGA/ACTIONS/user";


function App() {
  const title = useRef()
  const author = useRef()
  const abc = useSelector((state) => state.user_reducer)
  // const abc = useSelector((state) => state.product_reducer)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({type: GET_USER_PROCESS})
  },[])

  return (
    <>
    <input name="title" ref={title}/>
    <input name="author" ref={author}/>
    {
      abc.user_data?.map((val)=>{
        return(
          <>
          <h1>Usernamee:{val.title}</h1>
          <h1>password:{val.author}</h1>
          </>
        )
      })
    }
    </>
  )
}

export default App;
