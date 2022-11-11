import { FaBars } from "react-icons/fa";

// import ReactTooltip from "react-tooltip";

const AssetCard = (props) => {
  const { eachUser } = props;

  const { id, pics, pname, uid, uname } = eachUser;

  return (
    <div className="flex h-fit drop-shadow-2xl  border-gray-100 shadow-lg rounded-xl ">
      <div className="">
        <img className="h-40 w-40" src={pics} alt={pname} />
        <div className="flex bg-gray-300 h-14 w-40 items-center ">
          <p className="bg-slate-500 text-white font-semibold p-2 pt-[17px] h-14  ">
            {uid}
          </p>
          <div className="flex flex-col  mx-2">
            <span>{pname}</span>
            <span data-tip data-for={id} className="truncate w-20">
              {uname}
            </span>
            {/* <ReactTooltip id={id} place="bottom" effect="float">
              {uname}
            </ReactTooltip> */}
          </div>
          <FaBars className="fa-bars" />
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
