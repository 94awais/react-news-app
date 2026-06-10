import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "calc(100vh - 160.39px)" }}
    >
      <ScaleLoader color="#A78BFA" />
    </div>
  );
};

export default Loader;