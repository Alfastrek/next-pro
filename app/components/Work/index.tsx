"use client";
import Image from "next/image";
import { Card } from "../ui/card copy";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
interface WorkData {
  imgSrc: string;
  heading: string;
  subheading: string;
}

const AllWorkData: WorkData[] = [
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Create Account",
    subheading: "Register an account to get started with our trading platform.",
  },
  {
    imgSrc: "/images/Work/icon-two.svg",
    heading: "Market Research",
    subheading: "Analyze market trends and news to make informed decisions.",
  },
  {
    imgSrc: "/images/Work/icon-three.svg",
    heading: "Create Watchlist",
    subheading: "Add your favorite stocks and assets for quick tracking.",
  },
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Technical Analysis",
    subheading: "Access advanced charting tools to study price movements.",
  },
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Set Alerts",
    subheading: "Receive real-time notifications for price changes or events.",
  },
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Practice on Demo",
    subheading:
      "Use a demo account to trade risk-free and improve your skills.",
  },
];

const duringTradeWorkData: WorkData[] = [
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Execute Trades",
    subheading: "Place buy or sell orders in real-time with instant execution.",
  },
  {
    imgSrc: "/images/Work/icon-two.svg",
    heading: "Manage Orders",
    subheading: "Track, modify, or cancel your active trade orders.",
  },
  {
    imgSrc: "/images/Work/icon-three.svg",
    heading: "Use Leverage",
    subheading: "Maximize potential gains with margin trading options.",
  },
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Trading Tools",
    subheading:
      "Access tools like stop-loss, limit orders, and trailing stops.",
  },
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Live Chart Updates",
    subheading: "Monitor live price updates and chart patterns during trades.",
  },
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Community Chat",
    subheading: "Engage with other traders and share insights in real-time.",
  },
];

const postTradeWorkData: WorkData[] = [
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Review Trades",
    subheading: "Analyze your trade performance with detailed reports.",
  },
  {
    imgSrc: "/images/Work/icon-two.svg",
    heading: "Maintain Journal",
    subheading: "Log your trades and learn from your successes and mistakes.",
  },
  {
    imgSrc: "/images/Work/icon-three.svg",
    heading: "Profit/Loss Reports",
    subheading: "Access P/L summaries for daily, weekly, or monthly periods.",
  },
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Tax Calculation",
    subheading: "Simplify your tax filings with automated trade summaries.",
  },
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Receive Feedback",
    subheading: "Get personalized insights to improve your trading strategy.",
  },
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "Withdraw Funds",
    subheading: "Easily withdraw profits to your preferred payment method.",
  },
];

const Work = () => {
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
          defaultValue="All"
          className="w-full md:w-19/20 lg:w-23/24 p-4 md:p-6 lg:p-8 mb-10"
        >
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="For Traders">For Traders</TabsTrigger>
            <TabsTrigger value="For BD">For BD</TabsTrigger>
            <TabsTrigger value="For BO">For BO</TabsTrigger>
            <TabsTrigger value="For DevOps">For DevOps</TabsTrigger>
            <TabsTrigger value="For Management">For Management</TabsTrigger>
          </TabsList>
          <TabsContent value="All">
            <Card className="w-full md:w-19/20 lg:w-23/24 p-4 md:p-6 lg:p-8 mb-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-16">
                {AllWorkData.map((item, i) => (
                  <div className="card-b p-8" key={i}>
                    <div className="work-img-bg rounded-full flex justify-center absolute p-6">
                      <Image
                        src={item.imgSrc}
                        alt={item.imgSrc}
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
                      {item.heading}
                    </h3>
                    <p className="text-base font-normal text-bluish text-center mt-2">
                      {item.subheading}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="During-Trade">
            <Card className="w-full md:w-19/20 lg:w-23/24 p-4 md:p-6 lg:p-8 mb-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-16">
                {duringTradeWorkData.map((item, i) => (
                  <div className="card-b p-8" key={i}>
                    <div className="work-img-bg rounded-full flex justify-center absolute p-6">
                      <Image
                        src={item.imgSrc}
                        alt={item.imgSrc}
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
                      {item.heading}
                    </h3>
                    <p className="text-base font-normal text-bluish text-center mt-2">
                      {item.subheading}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="Post-Trade">
            <Card className="w-full md:w-19/20 lg:w-23/24 p-4 md:p-6 lg:p-8 mb-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-16">
                {postTradeWorkData.map((item, i) => (
                  <div className="card-b p-8" key={i}>
                    <div className="work-img-bg rounded-full flex justify-center absolute p-6">
                      <Image
                        src={item.imgSrc}
                        alt={item.imgSrc}
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
                      {item.heading}
                    </h3>
                    <p className="text-base font-normal text-bluish text-center mt-2">
                      {item.subheading}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Work;
