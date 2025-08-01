import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

const App = () => (
  <div>
    <Profile {...user} />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);
export default App;
