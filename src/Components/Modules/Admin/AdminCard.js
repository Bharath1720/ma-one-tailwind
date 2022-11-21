import React from "react";

const AdminCard = (props) => {
  const { eachTeam } = props;

  const { heading, description, icon } = eachTeam;

  return (
    <div className="text-skin-base">
      <div className="flex items-center">
        <span className="text-4xl mr-3">{icon}</span>
        <div>
          <h4 className="text-skin-base text-[16px] pt-1">{heading}</h4>
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
// customized-width
