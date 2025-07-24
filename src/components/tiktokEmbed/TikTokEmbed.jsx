import "./TikTokEmbed.scss";
import { useEffect } from "react";

export default function TikTokEmbed({ videoId }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite={`https://www.tiktok.com/@hyraxoilofficial/video/${videoId}`}
      data-video-id={videoId}
      data-autoplay="false"
    >
      <section>Loading TikTok...</section>
    </blockquote>
  );
}
