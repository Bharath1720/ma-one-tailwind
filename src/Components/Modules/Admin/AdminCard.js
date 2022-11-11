import React from "react";

const AdminCard = (props) => {
  const { eachTeam } = props;

  const { heading, description, icon } = eachTeam;

  return (
    <div className="">
      <div className="flex items-center">
        <span className="text-5xl mr-4">{icon}</span>
        <div>
          <h4 className="text-gray-600">{heading}</h4>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
// customized-width
