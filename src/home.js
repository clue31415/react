import React, { useEffect, useState } from "react";
import okpogorect from "./okpogorect.png";
import "./App.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [inputData, setInputData]=useState([{
    name:'관리자',
    title:'첫글',
    content:'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
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
  let [page, changepage] = useState(1);
const post_title = inputData.map(function (value, index, array) {
  return value.title;
}).slice(10*(page-1)+1,10*page+1);
console.log(post_title);
  return (
    <div className="App">
      <div className="op-title">
      <div><Link className={"link-style1"} to={"/"}>거제옥포고등학교</Link></div>
      </div>
      <Link to="/write">
      <img src={okpogorect} className="op-title-img" />
      <h1>글 쓰기</h1>
      </Link>
      <div>
        {post_title && post_title.map((a, b) => {
          return (
            <h4>
              <Link className={"link-style2"} to={"/post?" + parseFloat(parseInt(inputData.length-10*page-b+9))}>{post_title[b]}</Link>
            </h4>
          );
        })}
      </div>
          <button onClick={()=>{if (page>1){ changepage(page + -1);}}}>&lt;</button>{page}<button onClick={()=>{if (page<100){ changepage(page + 1);}}}>&gt;</button>
      <div>&nbsp</div>
    </div>
  );
}
