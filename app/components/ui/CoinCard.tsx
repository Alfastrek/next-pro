import { TrendingUp, TrendingDown, TrendingUpDown, Car } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

interface CoinData {
  name: string;
  imgSrc: string;
  high: number;
  low: number;
  chartData: { time: string; high: number; low: number }[];
}

interface CoinCardProps {
  title: string;
  coins: CoinData[];
}
export function CoinCard({
  title,
  coins,
  latestHigh,
  latestLow,
}: {
  title: string;
  coins: any[];
  latestHigh: number;
  latestLow: number;
}) {
  let marketTrend = "stable";
  if (latestHigh > latestLow) {
    marketTrend = "upward";
  } else if (latestHigh < latestLow) {
    marketTrend = "downward";
  }

  return (
    <Card className="flex-1 min-w-[300px]">
      <CardHeader className="flex items-center justify-between">
        <div className="flex justify-center w-full">
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {coins.map((coin, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center gap-4 p-2 border-b last:border-none"
            >
              {/* Name Column */}
              <div className="flex items-center gap-4">
                <img src={coin.imgSrc} alt={coin.name} className="h-10 w-10" />
                <div className="font-semibold">{coin.name}</div>
              </div>
              {/* high/low Column */}
              <div className="text-sm text-muted-foreground">
                <div>High: ${coin.high.toLocaleString()}</div>
                <div>Low: ${coin.low.toLocaleString()}</div>
              </div>
              {/* Chart Column */}
              <div style={{ width: "150px", height: "50px" }}>
                <ResponsiveContainer>
                  <AreaChart data={coin.chartData}>
                    <defs>
                      <linearGradient
                        id={`gradienthigh-${index}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="hsl(var(--chart-1))"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="hsl(var(--chart-1))"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                      <linearGradient
                        id={`gradientlow-${index}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="hsl(var(--chart-2))"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="hsl(var(--chart-2))"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="high"
                      stroke="hsl(var(--chart-1))"
                      fill={`url(#gradienthigh-${index})`}
                    />
                    <Area
                      type="monotone"
                      dataKey="low"
                      stroke="hsl(var(--chart-2))"
                      fill={`url(#gradientlow-${index})`}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter marketTrend={marketTrend} />
    </Card>
  );
}
const CardFooter = ({ marketTrend }: { marketTrend: string }) => (
  <div className="card-footer flex justify-center items-center mb-5">
    <div className="flex items-center gap-2 text-sm">
      {marketTrend === "upward" && (
        <TrendingUp className="h-4 w-4 text-green-500" />
      )}
      {marketTrend === "downward" && (
        <TrendingDown className="h-4 w-4 text-red-500" />
      )}
      {marketTrend === "stable" && (
        <TrendingUpDown className="h-4 w-4 text-gray-500" />
      )}
      <span>Market is trending {marketTrend} (for demo only)</span>
    </div>
  </div>
);
