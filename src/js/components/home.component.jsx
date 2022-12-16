import React, { useState, useRef, useEffect } from "react";

//import services
import { getTask, postTask } from "../services/tasks.services.js";

//import components
import TodoList from "./todoList.component.jsx";


const Home = () => {
	const [data, setData] = useState([])
	const ref = useRef(null);

	//get data
	useEffect(() => {
		getTask().then((data)=> setData(data))
	}, []);


	//post data
	useEffect(()=>{
		postTask(data) 
	},[data])

	const HandleTasks = (ev)=>{
		if (ev.key === "Enter"){	
			setData(data.concat([{"label":ev.target.value,"done":false}]))
			ref.current.value = '';
		}
	} 
	 
	return (
	<div className="d-flex justify-content-center flex-column aling-items-center">
		<h1>TODO LIST</h1>
		<input ref={ref} type="text" onKeyUp={HandleTasks} name="" id="" className="w-25" />
		<TodoList data={data} setter={setData}/>
	</div>
  );
};

export default Home;
