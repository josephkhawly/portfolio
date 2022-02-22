import Clients from "~/components/Clients";
import Hero from "~/components/Hero";
import Hire from "~/components/Hire";
import Work from "~/components/Work";

export default function Index() {
  return (
    <>
      <Hero />
      <Work />
      <Clients />
      <Hire />
    </>
  );
}
