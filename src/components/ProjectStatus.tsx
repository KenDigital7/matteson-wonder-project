import { CheckCircle, Target, Calendar } from "lucide-react";

const ProjectStatus = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.style.display = 'none';
    const fallback = img.nextElementSibling as HTMLElement;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

  return (
    <section id="status" className="py-16" style={{ backgroundColor: '#9333EA' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              We're Making It Happen
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
              From vision to reality—here's how we're bringing the Matteson Children's Museum to life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <img 
                  src="https://kendigital7.github.io/matteson-wonder-project/images/Icons/Completed.png" 
                  alt="Completed" 
                  className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-60 xl:h-60 object-contain"
                  onError={handleImageError}
                />
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-60 xl:h-60 bg-green-100 rounded-lg flex items-center justify-center hidden">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 text-green-500" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-700 text-center">Completed</h3>
              <p className="text-sm sm:text-base text-gray-800 text-center leading-relaxed">
                Museum incorporated, community support secured, site identified
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <img 
                  src="https://kendigital7.github.io/matteson-wonder-project/images/Icons/Focus.png" 
                  alt="Current Focus" 
                  className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-60 xl:h-60 object-contain"
                  onError={handleImageError}
                />
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-60 xl:h-60 bg-orange-100 rounded-lg flex items-center justify-center hidden">
                  <Target className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 text-orange-500" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-orange-700 text-center">Current Focus</h3>
              <p className="text-sm sm:text-base text-gray-800 text-center leading-relaxed">
                Feasibility study underway, seeking community investors and supporters
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-blue-500 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <img 
                  src="https://kendigital7.github.io/matteson-wonder-project/images/Icons/Timeline.png" 
                  alt="Timeline" 
                  className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-60 xl:h-60 object-contain"
                  onError={handleImageError}
                />
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-60 xl:h-60 bg-blue-100 rounded-lg flex items-center justify-center hidden">
                  <Calendar className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 text-blue-500" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-700 text-center">Timeline</h3>
              <p className="text-sm sm:text-base text-gray-800 text-center leading-relaxed">
                Opening planned for 2028 at the former Lincoln Mall site
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ProjectStatus; 