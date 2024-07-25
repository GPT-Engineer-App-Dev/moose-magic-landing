import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Our Moose Conservation Efforts</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          We are dedicated to the preservation and protection of moose populations across North America. 
          Through education, research, and conservation efforts, we strive to ensure a sustainable future for these majestic creatures.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Conduct research on moose habitats and behavior</li>
          <li>Implement conservation strategies to protect moose populations</li>
          <li>Educate the public about the importance of moose in our ecosystems</li>
          <li>Collaborate with local communities and government agencies</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="mb-4">
          Your support is crucial in our mission to protect moose. Here's how you can help:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Volunteer</h3>
            <p>Join our team in field research and community outreach programs.</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Donate</h3>
            <p>Your contributions help fund our conservation efforts and research initiatives.</p>
          </div>
        </div>
      </section>

      <div className="text-center">
        <Button size="lg">Contact Us</Button>
      </div>
    </div>
  );
};

export default About;
