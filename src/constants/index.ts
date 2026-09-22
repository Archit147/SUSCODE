import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { assetUrl } from "@/lib/assets";

export const NAV_ITEMS = [
  { label: "TRAILER", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Nexus", href: "#nexus" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/game-website",
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://discord.com",
    icon: FaDiscord,
  },
  {
    href: "https://x.com/_sanidhyy",
    icon: FaXTwitter,
  },
  {
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    href: "https://twitch.com",
    icon: FaTwitch,
  },
] as const;

export const VIDEO_LINKS = {
  feature1: assetUrl("videos/feature-1.mp4"),
  feature2: assetUrl("videos/feature-2.mp4"),
  feature3: assetUrl("videos/feature-3.mp4"),
  feature4: assetUrl("videos/feature-4.mp4"),
  feature5: assetUrl("videos/feature-5.mp4"),
  hero1: assetUrl("videos/hero-1.mp4"),
  hero2: assetUrl("videos/hero-2.mp4"),
  hero3: assetUrl("videos/hero-3.mp4"),
  hero4: assetUrl("videos/hero-4.mp4"),
};
