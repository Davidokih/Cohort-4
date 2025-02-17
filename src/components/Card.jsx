import PropTypes from "prop-types";

const Card = ({ userName, email, gender, phoneNumber, avatar }) => {
  return (
    <div className="shadow-md flex justify-center items-center flex-col">
      <img
        src={avatar}
        alt="image goes here"
        className="size-[100px] rounded-full border border-blue-400"
      />
      <div className="font-medium text-[clamp(14px,4vw,18px)] mt-3 space-y-1 text-center">
        <div>{userName}</div>
        <div>{email}</div>
        <div>{phoneNumber}</div>
        <div>{gender}</div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  userName: PropTypes.string,
  email: PropTypes.string,
  gender: PropTypes.string,
  phoneNumber: PropTypes.string,
  avatar: PropTypes.string,
};
