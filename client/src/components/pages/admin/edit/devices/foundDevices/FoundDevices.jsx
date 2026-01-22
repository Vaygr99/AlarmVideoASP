import Device from "../device/Device.jsx";

// Filter devices by current name
function FoundDevices({ data = {}, inputDeviceName = "", icon, ...props }) {
  // data - loaded data from server
  console.log(inputDeviceName, data.devices);
  // filter devices by current device name
  const list =
    inputDeviceName && data.devices
      ? data.devices.filter((elem) =>
          elem.name.toLowerCase().includes(inputDeviceName.toLowerCase())
        )
      : [];

  // if not found
  if (!list.length) {
    return <h2>- Не знайдено -</h2>;
  }

  return (
    <div>
      <h2>Знайдено: {list.length}</h2>
      {list.map((elem) => (
        <Device
          key={elem._id}
          {...props}
          modelsArray={elem.models}
          data={data}
          device={elem}
          icon={icon}
        />
      ))}
    </div>
  );
}

export default FoundDevices;
