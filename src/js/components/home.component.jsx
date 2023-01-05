import React, { useState, useRef, useEffect } from "react";

//import services
import { deleteAllTasks, getTask, postTask } from "../services/tasks.services.js";

//import components
import TodoList from "./todoList.component.jsx";
import Button from 'react-bootstrap/Button';


const Home = () => {
	const [data, setData] = useState([])
	const ref = useRef(null);
	const deleteTasks = ()=>{
		setData([{"label":" ","done":false}])
	}
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
		<Button variant="danger" onClick={deleteTasks}>Delete all</Button>
	</div>
  );
};

export default Home;
