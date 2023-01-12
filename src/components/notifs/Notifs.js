import { useSelector } from "react-redux";
import { selectnotifs } from "../../../store/slices/notifs";
import Notif from "../notif/Notif";

export default function () {
  const notifs = useSelector(selectnotifs)

  return (            
    <div className="notifs">
      {
        notifs.map(notif => <Notif key={notif.date} message={notif.msg} type={notif.type} />)
      }
    </div>
  )
}
  