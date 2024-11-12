import React, { useEffect, useState } from "react";
import okpogocircle from "./okpogocircle.png";
import "./App.css";
import { Link, useLocation } from "react-router-dom";

export default function Post() {
    let [good, changegood] = useState(0);
    let location = useLocation();
    let search = Number(location.search.substr(1));
    const [inputData, setInputData]=useState([{
      name:'',
      title:'',
      content:''
    }])
    const makedbreadable = async() => {
      fetch(`${process.env.REACT_APP_API}api/users/read`,{method: "GET"})
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log('success')
  const _inputData = data.map((rowData)=> ({
    name: rowData.name,
    title: rowData.title,
    content: rowData.content
  }))
  console.log("_inputdata is",_inputData[0].name);
  setInputData(inputData.concat(_inputData))
  console.log('givedata',inputData);
})
.catch(rejected => {
    console.log(rejected);
})
}
useEffect(() =>{
  makedbreadable();
},[])

console.log("b4start",inputData);
    return (
      <div className="App">
        <div className="op-title">
          <div><Link className={"link-style1"} to={"/"}>옥포고등학교</Link></div>
        </div>
        <h1>{inputData[search]?.title}</h1>
        <h4>{inputData[search]?.name}</h4>
        <img src={okpogocircle} className="op-post-img" />
        <h4>{inputData[search]?.content}</h4>
      </div>
    );
  }
