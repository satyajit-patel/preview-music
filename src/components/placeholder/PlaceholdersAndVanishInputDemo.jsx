import { useState } from "react";
import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";
import { BackgroundGradientDemo } from '../Card.jsx/BackgroundGradientDemo';
import axios from 'axios';

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Jab Koi Baat",
    "Kun Faya Kun",
    "A Thousand Years",
    "Love Dose",
    "Amplifier",
  ];

  const [tracks, setTracks] = useState([]);
  const [keywords, setKewords] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}${keywords}&type=track`);
      setTracks(response.data.tracks.items);
    } catch (err) {
      alert("Sorry, failed to get music data");
    }
  };

  const handleChange = (e) => {
    setKewords(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="relative">
      {/* Search Bar Container */}
      <div className="sticky top-0 bg-white shadow-lg z-50 w-full p-4">
        <PlaceholdersAndVanishInput
          value={keywords}
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>

      {/* Display Tracks */}
      <div className="mt-6 flex flex-wrap justify-around gap-2">
        {tracks.length === 0 ? (
          <div className="h-[40rem] flex flex-col justify-center items-center px-4 bg-slate-600">
            <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
              Discover music in 30 seconds
            </h2>
          </div>
        ) : (
          tracks
            .filter(track => track.preview_url && track.external_urls && track.external_urls.spotify)
            .map((obj) => (
              <BackgroundGradientDemo key={obj.id} it={obj} />
            ))
        )}
      </div>
    </div>
  );
}
