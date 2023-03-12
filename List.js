import { useState } from "react";

const List = ({ data }) => {
  const [items, setItems] = useState(data);

  const handleRemove = () => {
    {
      const onRemove = () => {
        items.filter((it) => it.id !== setItems.targetId);
      };

      if (window.confirm(id + "번째 일기를 정말 삭제하시겠습니까")) {
        onRemove(id);
      }
    }
  };
  return (
    <div className="List">
      <h4>할 일 {data.length}개 남음</h4>

      {data.map((it) => (
        <div className="Item" key={it.id}>
          <div className="listWrap">
            <input className="listCheck" type="checkbox" />
            <div className="listText">{it.content}</div>
            <div className="buttonWrap">
              <button className="importantButton">중요</button>
              <button className="removeButton" onClick={handleRemove}>
                삭제
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
