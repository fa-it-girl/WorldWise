
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";

import styles from "./AppLayout.module.css";

function AppLayout({position}) {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map position={position} />
      <User />
    </div>
  );
}

export default AppLayout;
