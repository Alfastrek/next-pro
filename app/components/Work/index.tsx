"use client";
import Image from "next/image";
import { Card } from "@/app/components/ui/card copy";
import React, {lazy, Suspense} from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { Tool, Category, TABS, toolsData, getToolsByCategory } from "@/lib/WorkData";
import { TracingBeam } from "../ui/tracing-beam";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Button } from "@/app/components/ui/button";


const TradingTools = () => {
  return (
    <div>
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
              <Card className="w-full md:w-19/20 lg:w-23/24 p-4 md:p-6 lg:p-8 mb-10">
              <TracingBeam>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-y-20 gap-x-5 mt-110">
                  {getToolsByCategory(tab.value as Category, toolsData).map((tool, i) => (
                    <div className="card-b p-8" key={i}>
                      <div className="work-img-bg rounded-full flex justify-center absolute p-6">
                        <Image
                          src={tool.imgSrc}
                          alt={tool.heading}
                          width={44}
                          height={44}
                        />
                      </div>
                      <div>
                        <Image
                          src="/images/Work/bg-arrow.svg"
                          alt="arrow-bg"
                          width={85}
                          height={35}
                        />
                      </div>
                      <h3 className="text-2xl text-offwhite font-semibold text-center mt-8">
                        {tool.heading}
                      </h3>
                      <p className="text-base font-normal text-bluish text-center mt-2">
                        {tool.subheading}
                      </p>
                      {tool.buttonText && tool.buttonLink && tool.documentLink &&(
                        <div className="text-center mt-4">
                         <Button variant="outline" size="lg" className="inline-block px-4 py-2 text-sm font-medium text-black bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
  <Link href={tool.buttonLink} target="_blank" rel="noopener noreferrer">
    {tool.linkbuttonText} <FontAwesomeIcon icon={faExternalLink} className="ml-2" />
  </Link>
</Button>

<Button variant="outline" size="lg" className="inline-block px-4 py-2 text-sm font-medium text-black bg-blue-600 rounded-md hover:bg-blue-700 transition-colors ml-4">
  <Link href={tool.documentLink} target="_blank" rel="noopener noreferrer">
    {tool.buttonText} <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
  </Link>
</Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                </TracingBeam>
              </Card>
            </TabsContent>
               
          ))}
    
       
        </Tabs>
        
      </div>
    </div>
  );
};

export default TradingTools;