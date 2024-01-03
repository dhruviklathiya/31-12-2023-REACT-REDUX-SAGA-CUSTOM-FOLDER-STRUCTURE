import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { DELETE_USER_PROCESS, GET_USER_PROCESS, POST_USER_PROCESS } from "./REDUX-SAGA/ACTIONS/user_action";


function App() {
  const title = useRef()
  const author = useRef()
  const abc = useSelector((state) => state.user_reducer)
  // const abc = useSelector((state) => state.product_reducer)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({type: GET_USER_PROCESS})
  },[])

  const submit_handler = () => {
    const input = {
      title: title.current.value,
      author: author.current.value
    }
    dispatch({type:POST_USER_PROCESS,payload:input})
  }

  const delete_handler = (index) => {
    const data = abc.user_data[index]
    dispatch({type:DELETE_USER_PROCESS,payload:data,index})
  }

  return (
    <>
    <input name="title" ref={title}/>
    <input name="author" ref={author}/>
    <button onClick={submit_handler}>Submit</button>
    {
      abc.user_data?.map((val,ind_)=>{
        return(
          <>
          <h1>Usernamee:{val.title}</h1>
          <h1>password:{val.author}</h1>
        <button onClick={()=>delete_handler(ind_)}>DELETE</button>
          </>
        )
      })
    }
    </>
  )
}

export default App;
