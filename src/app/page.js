"use client";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/redux/counterSlice"

const Home = ()=>{
  const count = useSelector((state)=>state.value);
  const dispatch = useDispatch();

  return (
    <>
    <h1>Increment-Decrement Counter</h1>
    <div className="counter">
    <button onClick={()=>dispatch(decrement())}>Decrease</button>
    <input type="text" value={count} disabled />
    <button onClick={()=>dispatch(increment(15))}>Increase</button>
    </div>
    </>
  )
};

export default Home;