import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16" style={{ backgroundColor: '#FF6B35' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Main Message */}
          <div className="text-center space-y-6 flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center leading-tight">
             Rooted in Hope. Powered by Community. Built for Children.
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Illinois ranks among the most inequitable states for educational opportunity. 
              We're changing that by creating an extraordinary 50,000 sq ft children's museum 
              in Matteson, bringing world-class learning experiences to south suburban Cook County families.
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-l-4 border-red-600">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">The Challenge</h3>
                <p className="text-base sm:text-lg text-gray-800">
                  Children in our region travel <strong>25+ miles</strong> to reach the nearest children's museum, 
                  limiting access to hands-on learning experiences that inspire creativity and critical thinking.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-l-4 border-green-600">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-4">Our Solution</h3>
                <p className="text-base sm:text-lg text-gray-800">
                  A state-of-the-art museum featuring interactive exhibits in arts, sciences, and humanities, 
                  plus a 2-acre outdoor campus—all designed for accessibility and community engagement.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Impact Points */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:scale-105 transition-transform duration-300 bg-white shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <img src="/images/Icons/Edu.Equality.png?v=3" alt="Educational Equity" className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Educational Equity</h4>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  Serving 50,000+ children with accessible, world-class learning experiences
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:scale-105 transition-transform duration-300 bg-white shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <img src="/images/Icons/Community.png?v=3" alt="Community Building" className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Community Building</h4>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  200,000+ annual visitors creating connections across the south suburban region
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:scale-105 transition-transform duration-300 bg-white shadow-lg sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6 sm:p-8">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <img src="/images/Icons/Impact.png?v=3" alt="Economic Impact" className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Economic Impact</h4>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  $15M+ annual economic impact and 100+ new jobs for our community
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 