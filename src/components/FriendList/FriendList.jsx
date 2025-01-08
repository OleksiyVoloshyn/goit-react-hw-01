import style from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

                    //props from App
const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map(({ avatar, name, isOnline, id }) => (
                //id is must been!!!!
                <li key={id}>
                    <FriendListItem avatar={avatar} name={name} IsOnline={isOnline} />
                </li>
            ))}
        </ul>
    )
};



export default FriendList;