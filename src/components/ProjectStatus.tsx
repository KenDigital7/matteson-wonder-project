import { Button } from "@/components/ui/button";

const ProjectStatus = () => {
  return (
    <section id="status" className="py-16" style={{ backgroundColor: '#9333EA' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Current Status */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              We're Making It Happen
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Currently in our feasibility study phase, working to secure the funding 
              and community support needed to bring this vision to life.
            </p>
          </div>

          {/* Status Indicators */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-center justify-center mb-4">
                <img src="/images/Icons/Completed.png?v=2" alt="Completed" className="w-60 h-60 object-contain" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-green-700">Completed</h3>
              <p className="text-sm text-gray-800">
                Museum incorporated, community support secured, site identified
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center justify-center mb-4">
                <img src="/images/Icons/Focus.png?v=2" alt="Current Focus" className="w-60 h-60 object-contain" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-700">Current Focus</h3>
              <p className="text-sm text-gray-800">
                Feasibility study underway, seeking community investors and supporters
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center justify-center mb-4">
                <img src="/images/Icons/Timeline.png?v=2" alt="Timeline" className="w-60 h-60 object-contain" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Timeline</h3>
              <p className="text-sm text-gray-800">
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