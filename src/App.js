import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen/MainScreen";
import useGetUsers from "./hooks/useGetUsers";
import UserFullCard from "./components/UserCard/UserCard/UserdFullCard/UserFullCard";
import { useState } from "react";

function App() {
  const { users } = useGetUsers();
  const [newUsers, setNewUsers] = useState(users)
  return (
    <Routes>
      <Route
        path="/"
        element={<MainScreen users={users} newUsers ={newUsers} setNewUsers={setNewUsers} />}
      />
      <Route path="/usuario/:usuarioId" element={<UserFullCard users={users} />} />
    </Routes>
  );
}

export default App;
