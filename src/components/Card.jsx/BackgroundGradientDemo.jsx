import React from "react";
import { BackgroundGradient } from "./background-gradient";

export function BackgroundGradientDemo({it}) {
  return (
    (<div key={it.id}>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img
          src={it.album.images[0].url}
          alt="it.name"
          height="400"
          width="400"
          className="object-contain" />
        <p
          className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {it.name} - {it.artists[0].name} - {it.album.release_date}
          
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        <button className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
            <a href={it.external_urls.spotify} target="_blank">Spotify</a>
          </button>
        </p>
        <button
          className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          {/* <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span> */}
          <audio src={it.preview_url} controls/>
        </button>
      </BackgroundGradient>
    </div>)
  );
}
