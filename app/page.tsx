import React, { Suspense } from "react";
import Banner from "./components/Banner/index";
import Work from "./components/Work/index";
import Features from "./components/Features/index";
import Simple from "./components/Simple/index";
import Trade from "./components/Trade/index";
import Faq from "./components/Faq/index";
import { Separator } from "./components/ui/separator";
import "@fortawesome/fontawesome-free/css/all.css";

const Companies = React.lazy(() => import("./components/Companies"));
const Table = React.lazy(() => import("./components/Table"));

export default function Home() {
  return (
    <main>
      <Banner />
      <Suspense fallback={<div>Loading Companies...</div>}>
        <Companies />
      </Suspense>
      <Suspense fallback={<div>Loading Table...</div>}>
        <Table />
      </Suspense>
      <Separator />
      <Work />
      <Simple />
      <Features />

      <Trade />
      <Faq />
    </main>
  );
}
