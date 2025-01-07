import style from "./FriendListItem.module.css";
                        //props from FriendList
const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <div>
        <img src={avatar} alt="Avatar" width="48" />
            <p>{ name }</p>
            {isOnline ? (
                <p>Online</p>) : (
                <p>Offline</p>
            )}
        </div>

    )
}


export default FriendListItem;