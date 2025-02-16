import { useSelector } from "react-redux";

function UserName() {
  const { username } = useSelector(store => store.user);
  console.log(username);

  return (
    <div className="hidden text-sm font-semibold sm:block">{username}</div>
  );
}

export default UserName;
