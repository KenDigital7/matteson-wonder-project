import { Button } from "@/components/ui/button";

const ProjectStatus = () => {
  return (
    <section id="status" className="py-16" style={{ backgroundColor: '#9333EA' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              We're Making It Happen
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From vision to reality—here's how we're bringing the Matteson Children's Museum to life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <img src="/images/Icons/Completed.png?v=2" alt="Completed" className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-green-700">Completed</h3>
              <p className="text-xs sm:text-sm text-gray-800">
                Museum incorporated, community support secured, site identified
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <img src="/images/Icons/Focus.png?v=2" alt="Current Focus" className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-orange-700">Current Focus</h3>
              <p className="text-xs sm:text-sm text-gray-800">
                Feasibility study underway, seeking community investors and supporters
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border-l-4 border-blue-500 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <img src="/images/Icons/Timeline.png?v=2" alt="Timeline" className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-contain" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-blue-700">Timeline</h3>
              <p className="text-xs sm:text-sm text-gray-800">
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