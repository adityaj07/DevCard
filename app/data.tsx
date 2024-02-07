
interface GradientOption {
  name: string;
  value: string;
}

export const presetGradients: GradientOption[] = [
  { name: "Sunset", value: "from-yellow-400 via-orange-500 to-red-600" },
  { name: "Ocean", value: "from-blue-400 via-teal-500 to-cyan-400" },
  { name: "Forest", value: "from-green-400 via-teal-500 to-lime-400" },
  { name: "Twilight", value: "from-indigo-400 via-purple-500 to-pink-400" },
  { name: "Desert", value: "from-yellow-300 via-orange-400 to-red-500" },
  { name: "Pastel", value: "from-pink-400 via-purple-500 to-indigo-400" },
  { name: "Aurora", value: "from-purple-500 via-pink-400 to-orange-300" },
  { name: "Mystic", value: "from-indigo-400 via-blue-500 to-teal-400" },
  { name: "Dusk", value: "from-blue-400 via-purple-500 to-pink-400" },
  { name: "Crimson", value: "from-red-500 via-pink-400 to-purple-400" },
  { name: "Rainforest", value: "from-green-400 via-lime-500 to-yellow-400" },
  { name: "Coral Reef", value: "from-red-400 via-orange-500 to-yellow-400" },
  { name: "Skyline", value: "from-blue-400 via-cyan-500 to-teal-400" },
  { name: "Sapphire", value: "from-blue-400 via-indigo-500 to-purple-400" },
  { name: "Golden Hour", value: "from-yellow-400 via-orange-500 to-red-500" },
  { name: "Dreamscape", value: "from-purple-400 via-pink-500 to-blue-400" },
  { name: "Emerald Dream", value: "from-green-500 via-teal-400 to-blue-400" },
  { name: "Azure Mist", value: "from-blue-500 via-indigo-400 to-purple-400" },
  { name: "Crimson Sunset", value: "from-red-400 via-pink-500 to-purple-400" },
  { name: "Golden Glow", value: "from-yellow-400 via-orange-400 to-red-800" },
  {
    name: "Tropical Paradise",
    value: "from-green-400 via-lime-400 to-yellow-500",
  },
  { name: "Oceanic Breeze", value: "from-blue-400 via-cyan-400 to-teal-500" },
  { name: "Candy Floss", value: "from-pink-400 via-purple-400 to-blue-500" },
  { name: "Lavender Fields", value: "from-purple-400 via-pink-400 to-red-500" },
  { name: "Desert Sands", value: "from-yellow-400 via-orange-400 to-red-400" },
  { name: "Midnight Sky", value: "from-blue-400 via-purple-400 to-pink-400" },
  {
    name: "Enchanted Forest",
    value: "from-green-400 via-lime-400 to-yellow-400",
  },
  { name: "Citrus Burst", value: "from-yellow-400 via-green-400 to-lime-400" },
  { name: "Violet Veil", value: "from-purple-400 via-pink-500 to-red-400" },
  { name: "Rainbow Bliss", value: "from-red-400 via-yellow-400 to-green-400" },
  { name: "Inferno", value: "from-red-400 via-orange-400 to-yellow-400" },
  { name: "Arctic Frost", value: "from-blue-400 via-cyan-400 to-white" },
];


import {
    ArrowDown,
    ArrowDownLeft,
    ArrowDownRight,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    ArrowUpLeft,
    ArrowUpRight,
  } from "lucide-react";

  interface GradientDirectionOption {
    name: string;
    icon: JSX.Element;
    value: string;
  }
  
  export const gradientDirectionOptions: GradientDirectionOption[] = [
    {
      name: "To Top",
      icon: <ArrowUp strokeWidth={0.5} absoluteStrokeWidth />,
      value: "to-t",
    },
    {
      name: "To Top Right",
      icon: <ArrowUpRight strokeWidth={0.5} absoluteStrokeWidth />,
      value: "to-tr",
    },
    {
      name: "To Right",
      icon: <ArrowRight strokeWidth={0.5} absoluteStrokeWidth />,
      value: "to-r",
    },
    {
      name: "To Bottom Right",
      icon: <ArrowDownRight strokeWidth={0.5} absoluteStrokeWidth />,
      value: "to-br",
    },
    {
      name: "To Bottom",
      icon: <ArrowDown strokeWidth={0.5} absoluteStrokeWidth />,
      value: "to-b",
    },
    {
      name: "To Bottom Left",
      icon: <ArrowDownLeft strokeWidth={0.5} absoluteStrokeWidth />,
      value: "to-bl",
    },
    {
      name: "To Left",
      icon: <ArrowLeft strokeWidth={0.5} absoluteStrokeWidth />,
      value: "to-l",
    },
    {
      name: "To Top Left",
      icon: <ArrowUpLeft strokeWidth={0.5} absoluteStrokeWidth />,
      value: "to-tl",
    },
  ];