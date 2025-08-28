import { useState } from "react";

export default function LiteYouTube({ id, title }) {
  const [play, setPlay] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-black">
      {!play ? (
       <button
  onClick={() => setPlay(true)}
  className="absolute inset-0 w-full h-full"
  aria-label={`Play ${title}`}
  title={title}
>
  <img
    src={thumb}
    alt={title}
    className="w-full h-full object-cover"
    loading="lazy"
    decoding="async"
  />
  <span className="absolute inset-0 grid place-items-center">
    <span className="rounded-full px-6 py-3 bg-gradient-to-r from-pink-500/60 to-red-600/20 text-white font-bold shadow-lg transition-transform hover:scale-105">
      ▶ Play
    </span>
  </span>
</button>

      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
}
