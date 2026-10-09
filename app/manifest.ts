import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "A Story Written For Tsitsi",
    short_name: "Tsitsi & forever",
    description: "A little love story, made just for Tsitsi.",
    start_url: "/",
    display: "standalone",
    background_color: "#1e1017",
    theme_color: "#1e1017",
    icons: [],
  };
}
