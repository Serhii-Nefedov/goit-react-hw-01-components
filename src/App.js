import React from "react";
import Profile from "./components/Profile/Profile.jsx";
import UserData from "./data/user.json";
import Statistics from "./components/Statistics/Statistics.jsx";
import StatisticsData from "./data/statistic.json";
import FriendList from "./components/FriendList/FriendList.jsx";
import FriendsData from "./data/friends.json";
import Transaction from "./components/TransactionHistory/TransactionHistory.jsx";
import TransactionData from "./data/transactions.json";

function App() {
  return (
    <div>
      <Profile
        name={UserData.name}
        tag={UserData.tag}
        location={UserData.location}
        avatar={UserData.avatar}
        stats={UserData.stats}
      />

      <Statistics title="Upload stats" stats={StatisticsData} />

      <FriendList friends={FriendsData} />

      <Transaction items={TransactionData} />
    </div>
  );
}

export default App;
