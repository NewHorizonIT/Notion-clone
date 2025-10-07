import { v4 as uuidv4 } from "uuid";

const getDeviceId = () => {
  const keyDeviceId = 'device-id"';
  const deviceId = localStorage.getItem(keyDeviceId);
  if (!deviceId) {
    const id = uuidv4();
    localStorage.setItem(keyDeviceId, id);
    return id;
  }

  return deviceId;
};

export default getDeviceId;
