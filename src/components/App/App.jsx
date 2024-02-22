import userData from '../../userData.json';
import friends from '../../friends.json';
// import transactions from '../../transactions.json';

import { Profile } from '../Profile/Profile.jsx';
import { FriendList } from '../FriendList/FriendList.jsx';
// import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <div>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
    </>
  );
};
