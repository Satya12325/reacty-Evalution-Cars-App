import axios from "axios";
import { useEffect, useState } from "react";
import Form from './Form'

const Cards = () => {
  const config = {
    url: " http://localhost:3000/carDetails",
    method: "get"
  };
  return axios(config);
};


function Todos() {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    handleGetTodos();
  }, []);

  const handleGetTodos = () => {
    return Cards()
      .then((res) => {
        setTodos(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [dis,setDis]=useState(false);

  const handelBuy=()=>{
      setDis(true);
  }
  const handleTask=({name,phoneNumber,transiction})=>{
    const payload={
      name: name,
      phoneNumber: phoneNumber,
      transiction: transiction
    }
    const config = {
        url: " http://localhost:3000/orders",
        method: "post",
        data: payload
      };
      return axios(config);
}
const [sort,setSort]=useState("ASC")

  const handleSort=(value)=>{
    // setSort({sortMethod: value}
    if(sort === "ASC"){
        const sorted = [...todos].sort((a,b)=>
        {return a[value] > b[value]? 1: -1})
        setTodos(sorted)
        setSort("DSC")
    }
    if(sort === "ASC"){
        const sorted = [...todos].sort((a,b)=>
        {return a[value] < b[value]? 1: -1})
        setTodos(sorted)
        setSort("ASC")
    }
  }
  
  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
      <div>
          <div>
         <button onClick={()=>handleSort()}>Sort</button>
         
       </div>
       
       
    {todos.map((item) => (
        <div ClassNmae="Cards" key={item.id}>
            <div>
                <img width="250px" src={item.image} alt=""/>
            </div>
          <div>Car Name: {item.name}</div>
          <div>Type: {item.type}</div>
          <div>Manufefcture: {item.year}</div>
          <div>Price: {item.price}₹</div>
          <button onClick={handelBuy}>Buy</button>
         { dis? <div>
                <Form onTask={handleTask}/>
            </div> : ""}
         <hr/>
        </div>
      ))}
      </div>
  );
}

export default Todos;
