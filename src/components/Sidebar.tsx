"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NavCard = ({ title, description, active, onClick }: { title: string; description: string; active: boolean; onClick: () => void }) => {
  return (
    <div className="max-w-xs w-full group/card mb-4" onClick={onClick}>
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-40 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
          "bg-gradient-to-br from-purple-500 to-pink-500 bg-cover",
          active ? "ring-2 ring-white" : ""
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="40"
            width="40"
            alt="Icon"
            src="/icon.png" // Replace with your icon
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {title}
            </p>
          </div>
        </div>
        <div className="text content">
          <p className="font-normal text-sm text-gray-50 relative z-10 my-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`/${tab}`);
  };

  const tabs = [
    { name: 'Home', route: 'home', description: 'Welcome to my personal website' },
    { name: 'About', route: 'about', description: 'Learn more about me' },
    { name: 'Projects', route: 'projects', description: 'Check out my latest work' },
    { name: 'Writings', route: 'writings', description: 'Read my thoughts and articles' },
  ];

  return (
    <div className="w-1/3 bg-gray-900 p-4">
      <ScrollArea className="h-full">
        {tabs.map((tab) => (
          <NavCard
            key={tab.route}
            title={tab.name}
            description={tab.description}
            active={activeTab === tab.route}
            onClick={() => handleTabChange(tab.route)}
          />
        ))}
      </ScrollArea>
    </div>
  );
};

export default Sidebar;