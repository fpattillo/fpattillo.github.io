import SpotifyLogo from "../../assets/Spotify_logo.png";
import OPGGLogo from "../../assets/opgg_logo.png";
import FutbinLogo from "../../assets/futbin-logo.png";
import { ListSection } from "../listSection";
import { IoArrowDown } from "react-icons/io5";
import { useState } from "react";
import Emirates from "../../assets/emirates.jpeg";

export const Hobbies = () => {
  const [fullyScrolledDown, setFullyScrolledDown] = useState(false);
  const [openPictureModal, setOpenPictureModal] = useState(false);

  const handleRedirectToSpotify = () => {
    window.open(
      "https://open.spotify.com/user/patopattillo?si=ddd8929642944ae2",
      "_blank"
    );
  };

  const handleRedirectToOPGG = () => {
    window.open(
      "https://www.op.gg/summoners/las/molusco%20mongol-LAS",
      "_blank"
    );
  };

  const handleRedirectToFutbin = () => {
    window.open("https://www.futbin.com/24/squad/2053594", "_blank");
  };

  const handleCheckScroll = (event) => {
    const bottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight;
    if (bottom) setFullyScrolledDown(true);
    else setFullyScrolledDown(false);
  };

  const musicButtons = [
    {
      text: "Check out my Spotify!",
      startIcon: SpotifyLogo,
      onClick: handleRedirectToSpotify,
    },
  ];

  const videoGamesButtons = [
    {
      text: "Let's compare OPGGs!",
      startIcon: OPGGLogo,
      onClick: handleRedirectToOPGG,
    },
    {
      text: "Current FIFA team",
      startIcon: FutbinLogo,
      onClick: handleRedirectToFutbin,
    },
  ];

  const footballDescription = (
    <span>
      I've supported Arsenal since I can remember (
      <span
        className="underline text-sky-700 hover:cursor-pointer"
        onClick={() => setOpenPictureModal(true)}
      >
        here's a picture of me at the Emirates
      </span>
      ). I also play football every week. I either play as a defensive
      midfielder or a center back.
    </span>
  );

  const hobbySections = [
    {
      title: "Music",
      description:
        "I'm really passionate about music. I love discovering new bands, finding joy in multiple genres and making playlists to suit every mood and style. Also, I play the guitar (very casually).",
      buttons: musicButtons,
    },
    {
      title: "Video Games",
      description:
        "I've loved video games all my life. My favorite game of all time is Ocarina of Time. Right now I mainly play League of Legends and FIFA.",
      buttons: videoGamesButtons,
    },
    {
      title: "Football",
      description: footballDescription,
      buttons: [],
    },
    {
      title: "Gym",
      description:
        "I try to go to the gym at least 3 times a week, and I mostly do weightlifting. I really enjoy seeing progress and feeling stronger. Also, it really helps reduce stress.",
      buttons: [],
    },
  ];

  return (
    <>
      <div className="bg-[#F4D35E] relative flex flex-col justify-center items-center rounded-xl w-[650px] max-lg:w-full max-lg:p-[20px]">
        <div
          id="hobby-list"
          className="p-5 flex flex-col gap-y-7 max-h-[400px] overflow-y-scroll"
          onScroll={handleCheckScroll}
        >
          {hobbySections.map((section, index) => (
            <ListSection
              key={`hobby-section-${index}`}
              title={section.title}
              description={section.description}
              buttons={section.buttons}
            />
          ))}
        </div>
        {!fullyScrolledDown && (
          <div
            className="bg-white p-2 rounded-3xl absolute bottom-2"
            onClick={() =>
              document
                .getElementById("hobby-list")
                .scrollTo({ top: 1000, behavior: "smooth" })
            }
          >
            <IoArrowDown size={24} />
          </div>
        )}
      </div>
      {openPictureModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setOpenPictureModal(false)}
        >
          <img
            src={Emirates}
            alt="Me at the Emirates"
            className="max-h-[80%] max-w-[80%] rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
