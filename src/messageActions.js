//simple messenger react app sendMessage.js
//path: copilot_test\src\actions\messageActions.js
import { SEND_MESSAGE } from "./types";

export const sendMessage = (message) => {
  return {
    type: SEND_MESSAGE,
    payload: message,
  };
};
