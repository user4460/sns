/*"・IDパスワードログイン・Googleログイン"	
"・ユーザーID（半角英数4文字以上ユニーク）・パスワード（半角英数8文字以上）"	
・非ログインユーザー */

import Link from 'next/link';

const signin = () => {
   return (
      <div>
         <Link href="/signup">
            <a>signup here</a>
         </Link>
         {/*"・サービス名／ロゴ・ログインフォーム・ID入力欄・パスワード入力欄・Googleログインボタン・新規ユーザー登録ボタン・ローダー"	*/}
         <h1>サービス名／ロゴ</h1>
         <h1>ログインフォーム</h1>
         <h1>ID入力欄</h1>
         <h1>パスワード入力欄</h1>
         <h1>Googleログインボタン</h1>
         <h1>新規ユーザー登録ボタン</h1>
         <h1>ローダー</h1>
      </div>
   );
}
   
export default signin;