import { logoBlack } from "../../assets";
import { Warning } from "@mui/icons-material";
import { Link } from "react-router-dom";

const AlertPage = () => {
  return (
    <div className="z-10 absolute bg-white h-screen w-full px-8">
      <div className="flex flex-col items-center max-w-full">
        <header className="mb-4 ">
          <Link to="/" className="block w-32">
            <img src={logoBlack} alt="logo" />
          </Link>
        </header>
        <div className="flex  flex-col justify-center gap-4 p-4 max-w-full md:w-2/3 md:flex-row md:text-base mdl:w-1/2 lg:w-2/5 ">
          <div className="text-amber-500 text-center ">
            <Warning sx={{ fontSize: "50px" }} />
          </div>
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h2 className="text-amber-700">Email address already in use</h2>
            <p className="text-center md:text-start">
              You indicated you're a new customer, but an account already exists
              with the email address
              <br />
              {/* <span className="font-bold">{email}</span> */}
            </p>
            <Link
              to="/signin"
              className="text-center amazon-shadow w-full rounded-md sm:w-1/2"
            >
              Signin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertPage;
