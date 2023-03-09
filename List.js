import { useState } from "react";

const List = ({ data }) => {
  const [important, setImportant] = useState(false);

  const handleImportant = () => {};

  return (
    <div className="List">
      <h4>할 일 {data.length}개 남음</h4>

      {data.map((it) => (
        <div className="Item" key={it.id}>
          <div className="listWrap">
            <input className="listCheck" type="checkbox" />
            <div className="listText">{it.content}</div>
            <div className="buttonWrap">
              <button className="importantButton" onClick={handleImportant}>
                중요
              </button>
              <button className="removeButton">삭제</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
