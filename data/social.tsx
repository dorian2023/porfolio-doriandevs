import { Linkedin, Youtube, Github } from "lucide-react";
import type { SocialNetwork } from "@/types";

export const socialNetworks: SocialNetwork[] = [
    {
        id: 1,
        logo: <Youtube size={ 30} strokeWidth = { 1} />,
    src: "https://www.youtube.com/channel/UCE31lq0gsiiHjXX3F-2n_lw",
  },
{
    id: 2,
        logo: <Linkedin size={ 30 } strokeWidth = { 1} />,
            src: "#!",
  },
{
    id: 6,
        logo: <Github size={ 30 } strokeWidth = { 1} />,
            src: "https://github.com/dorian2023?tab=repositories",
  },
];
