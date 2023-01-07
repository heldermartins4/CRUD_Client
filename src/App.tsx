import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { address } from "./api"; // it's adress API

import SocketContext from "./contexts/socketIO";

const App = () => {

  const socket = useContext(SocketContext) // use a context for a socket
  const [message, setMessage] = useState([])

  useEffect(() => {
    socket.on('messages', (data) => {
      // console.log(`Data: ${data["name"]}`)
    })
  })

  const myFunction = () => {
    // axios
    //     .post(address.concat("/createUsers"), {data:data})
    //     .then((response) => {
    //       console.log(response)
    //     })

    socket.emit('message', {message:"Olá Helder"})
  }

  return (
    <>
    <button onClick={myFunction}>Clique aqui</button>
    </>
  );
}

export default App;
