import "./App.scss";
import Profile from "./camponents/Profile/profile";
import user from "./data/user.json";
import Statistics from "./camponents/Statistics/statistics";
import data from "./data/data.json";
import friends from "./data/friends.json";
import FriendList from "./camponents/FriendList/FriendList";
import transactions from "./data/transactions.json";
import TransactionHistory from "./camponents/TransactionHistory/transactionHistory";

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList users={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}
export default App;
