import "./App.scss";
import Profile from "./camponents/profile";
import user from "./user.json";
import Statistics from "./camponents/statistics";
import data from "./data.json";
import friends from "./friends.json";
// import FriendListItem from "./camponents/FriendListItem";
import FriendList from "./camponents/FriendList";
import transactions from "./transactions.json";
import TransactionHistory from "./camponents/transactionHistory";

function App() {
  return (
    // <ul>
    //   {friends.map((item) => {
    //     {
    //       /* console.log(item.avatar); */
    //     }
    //     <li key={item.id}>
    //       <FriendListItem
    //         avatar={item.avatar}
    //         name={item.name}
    //         isOnline={item.isOnline}
    //       />
    //       ;
    //     </li>;
    //   })}
    // </ul>
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList users={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}
export default App;
