import style from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

                    //props from App
const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map(({ avatar, user, name, id }) => (
                //id is must been!!!!
                <li key={id}>
                    <FriendListItem avatar={avatar} name = {name} IsOnline />
                </li>
            ))}
        </ul>
    )
};



export default FriendList;