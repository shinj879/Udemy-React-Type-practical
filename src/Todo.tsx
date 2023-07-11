import { TodoType } from "./types/todo";
import { VFC } from "react";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "「完了」" : "「未完了」";
  return <p>{`${completeMark}${title}(ユーザー：${userId})`}</p>;
};

// propsを使うのに親コンポーネントから渡っていない場合、エラー表示が出ない。それはリスキーだよ。だから、propsにも型を指定する。
/**propsに型を指定しておけば、親コンポーネントでpropsを渡し忘れていても、エラーで出してくれるよ。
 * ただ、必須ではないpropsは、:の前に？を付けてあげる。この場合、propsを分割代入で抜き出す際に　=　でデフォルトの値を指定しておく。
 */

/**Pick<型が入っている変数名,"その中の適用したいプロパティ名" | "同" |"同">"とすることで、使いたいやつだけ抜き出せる。
 * Omitは逆で、Omit<型が入っている変数名,"その中から除外したいプロパティ名">とすることで、指定したプロパティを除外して型指定できる。
 */
