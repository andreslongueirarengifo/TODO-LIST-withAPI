import React, { useState, useRef, useEffect } from "react";

//include images into your bundle
import TodoList from "./todoList.jsx";

//create your first component
const Home = () => {

	const [data, setData] = useState([])
	const ref = useRef(null);

	const HandleTasks = (ev)=>{
		if (ev.key === "Enter"){	
			setData(data.concat([{"label":ev.target.value,"done":false}]))
			ref.current.value = '';
		}
	}

	//get data
	useEffect(() => {
		fetch(`https://assets.breatheco.de/apis/fake/todos/user/l_test`)
		  .then((response) => {
			if (!response.ok) {
			  throw new Error(
				`This is an HTTP error: The status is ${response.status}`
			  );
			}
			return response.json();
		  })
		  .then((actualData) => setData(actualData))
		  .catch((err) => {
			console.log(err.message);
		  });
	  }, []);


	//post data
	fetch('https://assets.breatheco.de/apis/fake/todos/user/l_test', {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
		  "Content-Type": "application/json"
		}
	  })
	  .then(resp => {
		  console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
		  console.log(resp.status); // el código de estado = 200 o código = 400 etc.
		  console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
		  return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
	  })
	  .then(actualData => {
		  //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
		  console.log(actualData); //esto imprimirá en la consola el objeto exacto recibido del servidor
	  })
	  .catch(error => {
		  //manejo de errores
		  console.log(error);
	  });

	  
	  return (
		  <div className="d-flex justify-content-center flex-column aling-items-center">
		  <h1>TODO LIST</h1>
		  <input ref={ref} type="text" onKeyUp={HandleTasks} name="" id="" className="w-25" />
		  <TodoList data={data} setter={setData}/>
		  </div>
  
	  );
};

export default Home;
