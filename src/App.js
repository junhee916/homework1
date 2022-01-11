/* eslint-disable*/
import React, {useState} from 'react';
import './App.css';

function App() {
  let [title, changeTitle] = useState(['test1', 'test2', 'test3']);
  let [like, changeLike] = useState(0);
  function resultTitle(){
    var newArray = [...title]
    newArray[0] = '여자코트 추천'
    changeTitle(newArray)
  }
  return (
    <div className="App">
      <div>
        <button onClick={resultTitle}>버튼</button>
        <div>
          <h1>{title[0]}<span onClick={() => {changeLike(like+1)}}>👍</span>{like}</h1>
          <div>2022-01-01</div>
        </div>
        <div>
          <h1>{title[1]}</h1>
          <div>2022-01-02</div>
        </div>
        <div>
          <h1>{title[2]}</h1>
          <div>2022-01-03</div>
        </div>

        <Modal/>
      </div>
    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
  </div>
  )
}
export default App;
