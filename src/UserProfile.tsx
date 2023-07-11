import { User } from "./types/user";
import { VFC } from "react";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};

/**　「配列.join」とは。→配列を、カッコ内で指定した文字列（記号とか）で区切って、一つの文字列にするという関数 */

/** 「user.hobiies?」について、別ファイル（user.ts）のUserで型指定した際、hobbiesには？をつけた。これは、
 * hobbiesがない場合もあるよってこと。だけど、UserProfileの<dd>タグ内で、もしもhobbiesの値が入っていない場合、エラーになる。
 * それをふせぐために、「user.hobiies?」のように？を付けることで、値がない場合はundifinedを返すようにして、空文字が出るようにしている。
 * これをオプショナルチューニングと呼ぶ。
 */
