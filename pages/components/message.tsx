/*
メッセージルーム
https://firebase.google.com/docs/firestore/query-data/queries?hl=ja

*/
import * as React from "react";

/*
exports.createUser = functions.firestore
    .document('users/{userId}')
    .onCreate((snap, context) => {
      firebase.firestore().collection('chatrooms').add({
      })
});
*/

//トークルームを作成する

const message = () => {
   return (
      <div>
         {/*"・フッターメニュー・ユーザー・"*/}
         <h1>フッターメニュー</h1>
         <h1>ユーザー・</h1>
      </div>
   );
}

export default message;