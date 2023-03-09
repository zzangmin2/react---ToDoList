import { useRef, useState } from "react";
import List from "./List";
import Item from "./Item";

const Page = ({ onCreate, data }) => {
  const contentRef = useRef();
  const [state, setState] = useState([]);

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitState = (e) => {
    if (state.length < 1) {
      contentRef.current.focus();
      return;
    }

    onCreate(state);
    alert("저장 성공");
    setState("");
  };

  return (
    <div className="Page">
      <div className="header">오늘 할 일</div>
      <div className="inputWrap">
        <input
          ref={contentRef}
          //value={state}
          className="input"
          type="text"
          placeholder="오늘 할 일을 입력하세요"
          onClick={handleChangeState}
        ></input>
        <button className="button" onClick={handleSubmitState}>
          추가
        </button>
      </div>
      <List data={data} />
    </div>
  );
};

export default Page;
