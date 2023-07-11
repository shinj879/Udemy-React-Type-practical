import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import axios from "axios";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { User } from "./types/user";
import { UserProfile } from "./UserProfile";

const user: User = {
  name: "じゃけえ"
  //hobbies: ["映画", "読書"]
};

export default function App() {
  const [todos, setTodo] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodo(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

/** stateに型を指定する場合は、「useState<型>()」と書く。
 * axios.getで取得したデータに対する型指定は、「axios.get<型>」と書く。
 * オブジェクトを型指定したい場合は、「type 変数名 = {プロパティ名：プロパティの型 }」。
 * 今回は、axios.getで取得したデータに対して型指定をすることで、オブジェクトを呼び出した際に予測変換ができたりするので間違いを防げる。
 *　state側にも型を指定することで、更新関数に型以外のデータが入った場合にエラーを出してくれる。
 */

/** ライブラリ（特に古い場合）をインポートした際、型もインストールしないと、型定義ができないよ。ライブラリ自体に型が入っている場合もあるから、別でインポートする必要がない場合もある。
 * ライブラリのgit-hubを見ると、分かるよ。
 */
