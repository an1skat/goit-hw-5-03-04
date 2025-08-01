import css from "./FriendList.module.css";
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span
      className={clsx(css.status, isOnline ? css.online : css.offline)}
    ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);
