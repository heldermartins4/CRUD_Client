import React from "react";

import { io } from "socket.io-client";
import { address } from "../api";

export const socket = io(address) // connect context with API

const SocketContext = React.createContext(socket) // create a socket context

export const SocketProvider = SocketContext.Provider

export default SocketContext;