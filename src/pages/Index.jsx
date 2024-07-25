import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Majestic Moose: Kings of the Forest</h1>
        <p className="text-xl mb-6">Discover the fascinating world of North America's largest deer species</p>
        <img src="/placeholder.svg" alt="Majestic Moose" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-8" />
      </section>

      {/* Moose Facts Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Moose Facts</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Moose are the largest members of the deer family</li>
          <li>Male moose (bulls) can weigh up to 1,500 pounds</li>
          <li>Their antlers can span up to 6 feet from end to end</li>
          <li>Moose are excellent swimmers and can dive up to 20 feet underwater</li>
          <li>They have a life span of 15-25 years in the wild</li>
        </ul>
      </section>

      {/* Habitat Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Moose Habitat</h2>
        <p className="mb-4">Moose are found in:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-2">North America</h3>
            <p>Canada, Alaska, and northern United States</p>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Europe</h3>
            <p>Scandinavia and Baltic countries</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Want to Learn More?</h2>
        <p className="mb-6">Join our newsletter for weekly moose facts and conservation updates!</p>
        <Button size="lg">Subscribe Now</Button>
      </section>
    </div>
  );
};

export default Index;
