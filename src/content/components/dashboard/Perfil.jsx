import React from "react";
import User from "../../images/user-image.jfif";
import UserButtonResume from "../../images/resume.svg";
import UserButtonSettings from "../../images/settings.svg";
import UserButtonLogout from "../../images/logout.svg";
import "../../styles/dashboard.css";
function Perfil({ admin }) {
  //   const [form, setForm] = useState(false);
  return (
    <div className="caja-perfil">
      <img src={User} alt="" className="imagen-perfil" />
      <h5>@User</h5>
      {admin && <small>Admin</small>}
      <div className="caja-botones-perfil">
        <div className="caja-botones-perfil-item">
          <img src={UserButtonResume} alt="" />
        </div>
        <div className="caja-botones-perfil-item">
          <img src={UserButtonSettings} alt="" />
        </div>
        <div className="caja-botones-perfil-item">
          <img src={UserButtonLogout} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Perfil;
