import {decrementCounter,incrementCounter} from "./slice"
import {useDispatch,useSelector} from 'react-redux'

function App(){
    const dispatch =useDispatch()
    const init = useSelector((state)=>{return state})

    return(
        <div>
            <h2>Counter Using Redux</h2>
            <button onClick ={()=> dispatch(incrementCounter())}></button>
             <p></p>
             <button onClick ={()=> dispatch(decrementCounter())}></button>
        </div>
    )
}

export default App