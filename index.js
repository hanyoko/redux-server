//express 서버 만들기
const express = require("express");     //import = require
const cors = require("cors");

//서버 생성
const app = express();

//포트번호 지정
const port = 3005;

//json 형식 데이터를 처리하도록 설정
app.use(express.json());

//cors 이슈를 막기 위해 사용
app.use(cors());

//get 요청
const posts = [
    {
        id: 1,
        title: "리덕스를 배워봅시다.",
        desc: "리덕스에 대해서 배워봅시다."
    },
    {
        id: 2,
        title: "리덕스 미들웨어를 배워봅시다.",
        desc: "리덕스 미들웨어에 대해서 배워봅시다."
    },
    {
        id: 3,
        title: "redux-thunk를 배워봅시다.",
        desc: "redux-thunk에 대해서 배워봅시다."
    }
]

app.get("/posts", (req, res)=>{
    res.send(posts)
})
app.get("/posts/:id", (req, res)=>{
    const { id } = req.params; //{ id: 1 }
    res.send(posts.find(po=>po.id === Number(id)))
})
app.listen(port, ()=>{
    console.log('서버가 돌고 있습니다.');
})
