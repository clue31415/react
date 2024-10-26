import React, { useEffect, useState } from "react";
import ibuki from "./ibuki.png";
import "./App.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [inputData, setInputData]=useState([{
    idpost:'0',
    name:'관리자',
    title:'첫글',
    content:'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }])
  const makedbreadable = async() => {
    fetch("http://172.30.1.21:3010/read",{method: "POST"})
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log('success')
const _inputData = data.products.map((rowData)=> ({
  idpost: rowData.idpost,
  name: rowData.name,
  title: rowData.title,
  content: rowData.content
}))
setInputData(inputData.concat(_inputData))
})
.catch(rejected => {
  console.log(rejected);
})
}
useEffect(() =>{
makedbreadable();
},[])

const post_title = inputData.map(function (value, index, array) {
  return value.title;
});
console.log(post_title);
  let [good, changegood] = useState(0);
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
        {post_title.map((a, b) => {
          return (
            <h4>
              <Link className={"link-style2"} to={"/post?" + parseFloat(parseInt(b))}>{post_title[b]}</Link>
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
    </div>
  );
}
