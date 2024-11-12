import React, { useEffect, useState } from "react";
import ibuki from "./ibuki.png";
import "./App.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [inputData, setInputData]=useState([{

  }])
  const makedbreadable = async() => {
    fetch(`${process.env.REACT_APP_API}api/users/read`,{method: "GET"})
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(data[0].name);
      console.log('success');
const _inputData = data.map((rowData)=> ({
  name: rowData.name,
  title: rowData.title,
  content: rowData.content
}))
const revinputdata=[..._inputData].reverse()
      console.log(_inputData);
      console.log('inputdata')
setInputData(inputData.concat(revinputdata))
})
.catch(rejected => {
  console.log(rejected);
})
}
useEffect(() =>{
makedbreadable();
},[])
console.log("inputdata");
console.log(inputData);
  let [good, changegood] = useState(0);
  let [page, changepage] = useState(1);
const post_title = inputData.map(function (value, index, array) {
  return value.title;
}).slice(20*(page-1),20*page);
console.log(post_title);
  return (
    <div className="App">
      <div className="op-title">
      <div><Link className={"link-style1"} to={"/"}>이부키 팬클럽</Link></div>
      </div>
      <Link to="/write">
      <img src={ibuki} className="op-title-img" />
      <h1>글 쓰기</h1>
      </Link>
      <div>
        {post_title && post_title.map((a, b) => {
          return (
            <h4>
              <Link className={"link-style2"} to={"/post?" + parseFloat(parseInt(post_title.length-b-1))}>{post_title[b]}</Link>
              <span
                onClick={() => {
                  changegood(good + 1);
                }}
              >
                ❤
              </span>
              {good}
            </h4>
          );
        })}
      </div>
          <button onClick={()=>{if (page>1){ changepage(page + -1);}}}>left</button>{page}<button onClick={()=>{if (page<100){ changepage(page + 1);}}}>right</button>
    </div>
  );
}
