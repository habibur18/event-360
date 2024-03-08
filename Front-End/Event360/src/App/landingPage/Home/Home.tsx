import EventItems from "./EventItems";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import PartnerMarquee from "./PartnerMarquee";
import RecentEvents from "./RecentEvents";
import Reviews from "./Reviews";
import ServiceSection from "./ServiceSection";
import SubscriptionPlan from "./SubscriptionPlan";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <EventItems />
      <GallerySection />
      <SubscriptionPlan />
      <Reviews />
      <RecentEvents />
      <PartnerMarquee />
    </div>
  );
}
