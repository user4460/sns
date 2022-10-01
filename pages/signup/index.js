/* ・ユーザー登録	 "・メールアドレス・パスワード（半角英数8文字以上）・Googleアカウント"	
・非ログインユーザー */
/*
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
   })
   .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
   });
*/
const signup = () => {
   return (
      <div>
        {/*・ID入力欄・パスワード入力欄・ユーザー名入力欄・新規登録ボタン・ログインはこちら"	*/}
         <h1>iD入力欄</h1>
         <h1>パスワード入力欄</h1>
         <h1>ユーザー名入力欄</h1>
         <h1>新規登録ボタン</h1>
         <h1>ログインはこちら</h1>
      </div>
   );
}

export default signup;