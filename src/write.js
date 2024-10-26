import React, { useEffect, useState } from "react";
import ibuki from "./cuteibuki.png";
import "./App.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Write() {
    const [title, changetitle] = useState();
    const [content, changecontent] = useState();
    const [name, changename] = useState();
    const [pw, changepw] = useState();
    return (
        <div className="App">
        <div className="op-title">
        <div><Link className={"link-style1"} to={"/"}>이부키 팬클럽</Link></div>
        </div>
        <div className="op-write">
            <h1>글 작성</h1>
            
            <p>제목</p>
            <input type="text" spellcheck="false" value={title} onChange={(e) =>{
                changetitle(e.target.value);
            }} />
            <p>글</p>
            <div className="write-content">
            <input type="text" spellcheck="false" value={content} onChange={(e) =>{
                changecontent(e.target.value);
            }} />
            </div>
            <p>이름</p>
            <input type="text" spellcheck="false" value={name} onChange={(e) =>{
                changename(e.target.value);
            }} />
            <p>비밀번호</p>
            <input type="text" spellcheck="false" value={pw} onChange={(e) =>{
                changepw(e.target.value);
            }} />
            <br></br>
            <button className="button-design1" onClick={() => {
        const userData = [title, content, name, pw];
        fetch("http://172.30.1.21:3010/upload", { //auth 주소에서 받을 예정
          method: "post", // method :통신방법
          headers: {      // headers: API 응답에 대한 정보를 담음
            "content-type": "application/json",
          },
          body: JSON.stringify(userData), //userData라는 객체를 보냄
        })
          .then((res) => res.json())
          .then((json) => {
          });
            }
            }>완료</button>
            <div className="blank">
                <br></br>
            </div>
        </div>
        </div>
    );
}