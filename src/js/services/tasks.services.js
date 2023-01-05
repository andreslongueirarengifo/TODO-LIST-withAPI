const API_URI = "https://assets.breatheco.de/apis/fake/todos/user/l_test"

export const getTask = async ()=>{
   try {
    const response = await fetch(API_URI);
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }
    const actualData = await response.json();
    return actualData;
  } catch (err) {
    console.log(err.message);
  }
}

export const postTask = async (data) =>{
   try {
    const resp = await fetch(API_URI, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(resp.ok);
    console.log(resp.status);
  } catch (error) {
    console.log(error);
  }
}


export const deleteAllTasks = async () =>{
  try {
    const resp = await fetch(API_URI, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(resp.ok);
    console.log(resp.status);
  } catch (error) {
    console.log(error)
  }
}


export const createUser = async () =>{
  try {
    const resp = await fetch(API_URI,{
      method: "POST",
      body: [],
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(resp.ok);
    console.log(resp.status);
  } catch (error) {
    console.log(error)
  }
}