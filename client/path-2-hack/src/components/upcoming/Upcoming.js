import React from "react";
// import css for upcoming.css
import "./upcoming.css";
import Image from "next/image";

// import sample image

const _arrowSize = 30;

// demo events data
const _events = [
  {
    id: 1,
    title: "Google Chrome Built-In AI Challenge",
    desc: "This is a description of the event. It can be as long as you want it to be. It will be truncated if it is too long.",
    // date: "2024-12-25",
    date: "24 Dec 2024",
    participants: 0,
    mode: "Offline",
    duration: "2 days",
    prize: "1,000,000 INR",
    address: "123 Main St, City, State",
  },
  {
    id: 2,
    title: "Microsoft Azure AI Challenge",
    desc: "This is a description of the event. It can be as long as you want it to be. It will be truncated if it is too long.",
    // date: "2023-08-05",
    date: "5 Aug 2023",
    participants: 0,
    duration: "3 days",
    mode: "Offline",
    prize: "2,000,000 $",
    address: "456 Elm St, City, State",
  },
  {
    id: 3,
    title: "Codegeist 2024",
    // date: "2025-11-10",
    date: "10 Nov 2025",
    participants: 0,
    mode: "Online",
    prize: "500,000 INR",
    duration: "1 day",

    // address: "link to online event",
    address: "link.to/online.event",
  },
];

const Card = ({ event }) => {
  const truncateDesc = (desc, limit) => {
    if (typeof desc === "string" && desc.length > limit) {
      return desc.substring(0, limit) + "...";
    }
    return desc;
  };

  const _srcAddressIcon =
    event.mode === "Online" ? (
      <svg viewBox="0 0 24 24" fill="none">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </g>
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" fill="none">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z"
            fill="#080341"
          ></path>
        </g>
      </svg>
    );

  const _daysLeft = (date) => {
    const left = Math.floor(
      (new Date(date) - new Date()) / (1000 * 60 * 60 * 24)
    );
    if (left < 0) return <p className="line-through">Event ended</p>;
    return left + " days left";
  };

  return (
    <div className="card">
      <div className="flex flex-row">
        <div className="flex flex-[1] object-contain h-[100%] items-center justify-center">
          <svg
            src="https://via.placeholder.com/100x100"
            alt="event image"
            width={100}
            height={100}
            className="rounded-lg"
          />
        </div>

        <div className=" flex flex-[2] bg-red-200 flex-col p-0 m-0 justify-between">
          <h2 className="title">{event.title}</h2>
          <p className="daysLeft">{_daysLeft(event.date)}</p>
          <p className="participants">{event.participants} participants</p>
        </div>
      </div>
      <div className="detailSection">
        <p className="prize">{event.prize}</p>

        <p className="date">{event.date}</p>

        <p className="duration">{event.duration}</p>
      </div>

      <div className="addressContainer">
        <p className="address">{event.address}</p>
        {/* <img src={src} className="object-contain icon" /> */}
        <div className="icon rounded-full">{_srcAddressIcon}</div>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  return (
    <div className="p-2 m-8 rounded-lg">
      <h1 className="">Kickstart Your Journey Through...</h1>
      <div className="flex flex-row">
        {/* {_arrowLeft()} */}

        {/* container */}
        <ul className="slider">
          {_events.map((_event) => (
            <li key={_event.id}>
              <Card event={_event} />
            </li>
          ))}
        </ul>

        {/* {_arrowRight()} */}
      </div>
    </div>
  );
};

const _arrowLeft = () => {
  return (
    <div className=" flex items-center justify-center">
      <button
        className="group text-white rounded-full pr-2 z-10"
        //   onClick={() => prevSlide()}
      >
        {_svgArrow({ _arrowSize })}
      </button>
    </div>
  );
};

const _arrowRight = () => {
  return (
    <div className="flex items-center justify-center ">
      <button
        className="group text-white rounded-full pl-2 z-10"
        //   onClick={() => nextSlide()}
      >
        {_svgArrow({ _arrowSize, rotation: 0 })}
      </button>
    </div>
  );
};

const _svgArrow = ({ _arrowSize, rotation = 180 }) => {
  return (
    <svg
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      height={_arrowSize}
      width={_arrowSize}
      viewBox="0 0 511.999 511.999"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <path
        className="group-hover:fill-current group-hover:text-gray-500"
        fill="#fff"
        fillRule="nonzero"
        d="M0 256c0-70.685 28.658-134.695 74.981-181.019C121.305 28.658 185.308 0 256 0c70.691 0 134.694 28.658 181.018 74.981 46.323 46.324 74.981 110.327 74.981 181.019 0 70.691-28.658 134.694-74.981 181.018-46.324 46.323-110.327 74.981-181.018 74.981-70.692 0-134.695-28.658-181.019-74.981C28.658 390.694 0 326.691 0 256zm200.641 79.002c-17.862 30.984 6.963 46.316 25.063 29.013l101.045-88.741c16.137-16.13 16.137-22.426 0-38.563L225.704 147.97c-18.187-17.181-42.867-2.203-25.063 29.02l46.931 79.002-46.931 79.01z"
      />
    </svg>
  );
};

export default UpcomingEvents;
