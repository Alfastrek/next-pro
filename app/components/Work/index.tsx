'use client';
import Image from 'next/image';
import { Card } from '@/app/components/ui/card-tools';
import React, { lazy, Suspense } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { cn } from '@/lib/utils';
import { DotPattern } from '@/app/components/ui/dot-pattern';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/app/components/ui/tabs';
import {
  Tool,
  Category,
  TABS,
  toolsData,
  getToolsByCategory,
  groupIcons,
} from '@/lib/WorkData';
import { TracingBeam } from '../ui/tracing-beam';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faClock,
  faExternalLink,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import '@/app/styles/nftcard.scss';
import { pink } from '@mui/material/colors';

const TradingTools = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const getIconColor = (groupName: string) => {
    switch (groupName) {
      case 'Traders Tools':
        return 'text-blue-500';
      case 'Management Tools':
        return 'text-green-500';
      case 'Dev Tools':
        return 'text-red-500';
      case 'BD Tools':
        return 'text-purple-500';
      default:
        return 'text-neon-yellow';
    }
  };
  const checkboxStyles = {
    color: pink[800],
    '&.Mui-checked': {
      color: pink[600],
    },
  };
  return (
    <div>
      <div className="bg">
        <h1>AlphaGrep</h1>
      </div>
      <div className="mx-auto max-w-10xl mt-16 px-6 mb-20 relative">
        <div className="radial-bgone hidden lg:block"></div>
        <div className="text-center mb-14">
          <h3 className="text-neon-yellow text-3xl md:text-5xl font-bold mb-3">
            Trading Tools 🛠️
          </h3>
          <p className="text-bluish md:text-lg font-normal leading-8">
            Pick Out from a Variety of Trade Tools Selections from Below.
          </p>
        </div>

        <Tabs
          defaultValue="all"
          className="w-full md:w-19/20 lg:w-23/24 p-4 md:p-6 lg:p-8 mb-10"
        >
          <TabsList className="grid w-full grid-cols-6 mb-8">
            {TABS.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {TABS.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="relative">
                <DotPattern
                  className={cn(
                    '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]',
                    'absolute inset-2'
                  )}
                />
                <Card className="w-full md:w-19/20 lg:w-23/24 p-4 md:p-6 lg:p-8 mb-10">
                  <div className="scrollable-container">
                    <TracingBeam>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6  gap-x-4 mt-5">
                        {getToolsByCategory(
                          tab.value as Category,
                          toolsData
                        ).map((tool, i) => (
                          <div
                            className="nft p-2"
                            key={i}
                            style={{
                              // backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${tool.imgSrc})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              borderRadius: '8px',
                              backdropFilter: 'blur(20px)',
                              WebkitBackdropFilter: 'blur(10px)',
                              boxShadow: '0 7px 20px 5px #00000088',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                            }}
                          >
                            <div className="main">
                              {/* <Image
                              className="tokenImage rounded-md"
                              src={tool.imgSrc}
                              alt={tool.heading}
                              width={500} // Adjust width as needed
                              height={500} // Adjust height as needed
                            /> */}
                              <h2 className="text-xl font-bold text-white mt-4 h-12 text-center mb-10">
                                {tool.heading}
                              </h2>
                              <p className="description text-gray-400 mt-5 h-20 text-center">
                                {tool.subheading}
                              </p>
                              <div className="tokenInfo flex justify-between items-center mt-4">
                                <div className="flex items-center">
                                  <FontAwesomeIcon
                                    icon={
                                      groupIcons[
                                      tool.group
                                        .groupName as keyof typeof groupIcons
                                      ]
                                    }
                                    className="text-lg mb-2 ml-1 text-neon-yellow"
                                  />
                                  <span className="text-sm  mb-2 ml-1 text-neon-yellow">
                                    {tool.group.groupName.split(' ')[0]}
                                  </span>
                                </div>
                                <div
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0px',
                                  }}
                                >
                                  <Checkbox
                                    {...label}
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                    sx={checkboxStyles}
                                  />
                                  <span
                                    className="text-md"
                                    style={{ fontWeight: 'bold' }}
                                  >
                                    {tool.likeCount}
                                  </span>
                                </div>
                              </div>
                              <hr className="my-4 border-gray-700" />
                              <div className="creator flex items-center space-x-4"></div>
                              {tool.buttonText &&
                                tool.buttonLink &&
                                tool.documentLink && (
                                  <div className="text-center ">
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="inline-block px-2 py-2 text-sm font-medium text-black bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                      <Link
                                        href={tool.buttonLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <FontAwesomeIcon icon={faExternalLink} />
                                      </Link>
                                    </Button>

                                    <Button
                                      variant="outline"
                                      size="lg"
                                      className="inline-block px-2 py-2 text-sm font-medium text-black bg-blue-600 rounded-md hover:bg-blue-700 transition-colors ml-4"
                                    >
                                      <Link
                                        href={tool.documentLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {tool.buttonText}{' '}
                                        <FontAwesomeIcon
                                          icon={faArrowRight}
                                          className="ml-1"
                                        />
                                      </Link>
                                    </Button>
                                  </div>
                                )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </TracingBeam>
                  </div>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TradingTools;
