import React, { useEffect, useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import getUserById from "./getUserById";

const UserFullCard = ({ users }) => {
  const { usuarioId } = useParams();

  const navigate = useNavigate();

  const user = useMemo(() => getUserById(users, usuarioId), [users, usuarioId]);

  console.log("userID", usuarioId);
  console.log("usuarios", users);
  console.log("usuario", user);

  if(!user){
    return <Navigate to="/" />;
  }

  const backButton = () => {
    navigate(-1);
  };
  const {name, username, email, phone, address, company, website} = user
  return (
    <div className="m-5 ">
      <div className="">
        <button style={{backgroundColor: '#002333', color: '#FFFFFF'}} className="btn btn-outline-info" onClick={backButton}>
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </button>
      </div>
  
      <div className="row mt-5 animate__animated animate__lightSpeedInRight">
        <div className="col-5" style={style.containerInfo}>
          <h3>
            <b style={style.letterInfo}>{name}</b>
          </h3>
          <p style={style.letterInfo}><b>Empresa:</b> {company.name}</p>
          <p style={style.letterInfo}><b>Email:</b> {email}</p>
          <p style={style.letterInfo}><b>Nickname:</b> {username}</p>
          <p style={style.letterInfo}><b>Ciudad:</b> {address.city}</p>
          <p style={style.letterInfo}><b>Zipcode:</b> {address.zipcode}</p>
          <p style={style.letterInfo}><b>Suite:</b> {address.suite}</p>
          <p style={style.letterInfo}><b>Teléfono:</b> {phone}</p>
          <p style={style.letterInfo}><b>Website:</b> {website}</p>
        </div>
      </div>
    </div>
  );
};

export default UserFullCard;
const style = {
  letterInfo: {
    color: '#002333'
  },
  containerInfo: {
    backgroundColor: '#DEEFE7'
  }
}