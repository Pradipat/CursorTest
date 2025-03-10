import { Achievements } from "../components/landing/Achievements";
import { BlogSection } from "../components/landing/BlogSection";
import { CallToAction } from "../components/landing/CallToAction";
import { Clients } from "../components/landing/Clients";
import { Community } from "../components/landing/Community";
import { FeatureSection } from "../components/landing/FeatureSection";
import { Footer } from "../components/landing/Footer";
import { Header } from "../components/landing/Header";
import { Hero } from "../components/landing/Hero";
import { Testimonials } from "../components/landing/Testimonials";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <Hero />
      <Clients />
      <Community />
      <FeatureSection
        image="https://placehold.co/442x442"
        title="The unseen of spending three years at Pixelgrade"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
        buttonText="Learn More"
        imageLeft={true}
      />
      <FeatureSection
        image="https://placehold.co/442x442"
        title="How to design your site footer like we did"
        description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
        buttonText="Learn More"
        imageLeft={false}
      />
      <Achievements />
      <BlogSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
} 