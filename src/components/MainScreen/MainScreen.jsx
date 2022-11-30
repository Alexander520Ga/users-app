import React, { useEffect, useState } from "react";
import UsersList from "../UserCard/UserCard/UsersList";
import NotFound from "./NotFound";
import "./styles.css";

const MainScreen = ({ users, newUsers, setNewUsers }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setNewUsers(() => users);
  }, [users, setNewUsers]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const filterForText = (e) => {
    e.preventDefault();
    e.target.value.trim()
    const valor = e.target.value.toLowerCase();
    if(valor.length > 1){
      const filtro = users.filter(user => {
        console.log(user);
        const nameUser = user.name.toLowerCase();
        if (nameUser.indexOf(valor) !== -1) {
          return user;
        }
      });

    setNewUsers(filtro);
    }else{
      return; 
    }
   
  };

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const ReturnListUsersView = () => {
    return (
      <div>
      {newUsers?.length === 0 ? <NotFound /> : <UsersList users={newUsers} />}
      </div>
    )
  }
  
  return (
    <div className="container filter-content my-2 mt-4">
      <div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center', width: '100%'}}>
      <div className="input-group" style={{ width: '70%'}}>
        <form className="form-search" style={{marginLeft: '16%'}} onSubmit={onSubmit}>
          <input
            id="search"
            type="search"
            placeholder="searche user"
            autoComplete="off"
            onChange={handleInputChange}
            value={value}
            onKeyUp={filterForText}
          />
        </form>
      </div>

        {/* <Switch isActive={isActive} setIsActive={setIsActive} /> WITCH PARA VERSION 2 */ }

      </div>

        {value.length ? <ReturnListUsersView /> : <p></p>}
      
    </div>
  );
};

export default MainScreen;
