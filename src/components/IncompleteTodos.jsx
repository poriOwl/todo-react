import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            // 繰り返し処理するものは仮想DOMが見分けを付けられるように
            // 最上位要素にkeyを付与する
            // 関数に引数を渡したい時はアロー関数で新たに定義する
            <li key={todo}>
              <div className="list-row">
                <p className="taskname">{todo}</p>
                <button
                  className="taskcomp"
                  onClick={() => onClickComplete(index)}
                >
                  完了
                </button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
