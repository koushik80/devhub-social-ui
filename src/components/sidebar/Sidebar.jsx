import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  DeveloperMode,
  Code,
  GitHub
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" htmlColor="#800080" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" htmlColor="#000080" />
            <span className="sidebarListItemText">Courses</span>
          </li>
          <li className="sidebarListItem">
            <DeveloperMode className="sidebarIcon" htmlColor="#FF1966" />
            <span className="sidebarListItemText">devHuß Forum</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" htmlColor="#008080" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Code className="sidebarIcon" htmlColor="#CD5C5C" />
            <span className="sidebarListItemText">Code Clinic</span>
          </li>
          <li className="sidebarListItem">
            <GitHub className="sidebarIcon" htmlColor="#8066FF" />
            <span className="sidebarListItemText">Gitpedia</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" htmlColor="#00E64D" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" htmlColor="red" />
            <span className="sidebarListItemText">V-lessons</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" htmlColor="#00AACC" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" htmlColor="#2980B9" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" htmlColor="#AF7AC5" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" htmlColor="#FF6666" />
            <span className="sidebarListItemText">Events</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}