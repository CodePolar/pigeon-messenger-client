import {io} from "socket.io-client"
import {api} from "../config";

const socket = io(api);

export default socket;