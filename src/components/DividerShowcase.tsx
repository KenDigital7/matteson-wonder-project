import React, { useState } from 'react';
import SectionDivider from './SectionDivider';

const DividerShowcase = () => {
  const [selectedColor, setSelectedColor] = useState('#FF6B35');
  const [selectedHeight, setSelectedHeight] = useState('80px');
  const [isAnimated, setIsAnimated] = useState(false);

  // All available divider types organized by category
  const dividerCategories = {
    'WordPress Classics': [
      { type: 'triangle' as const, name: 'Triangle', description: 'Clean geometric triangle cut' },
      { type: 'triangle-asymmetric' as const, name: 'Asymmetric Triangle', description: 'Off-center triangle for modern look' },
      { type: 'diagonal' as const, name: 'Diagonal', description: 'Simple diagonal cut' },
      { type: 'curved-arc' as const, name: 'Curved Arc', description: 'Smooth curved transition' },
      { type: 'tilt' as const, name: 'Tilt', description: 'Subtle angled slope' },
    ],
    'Wave Styles': [
      { type: 'wave' as const, name: 'Wave', description: 'Classic wave pattern' },
      { type: 'wave-smooth' as const, name: 'Smooth Wave', description: 'Gentle flowing wave' },
      { type: 'wave-layered' as const, name: 'Layered Wave', description: 'Multiple wave layers' },
      { type: 'wave-organic' as const, name: 'Organic Wave', description: 'Natural irregular wave' },
      { type: 'wave-transition' as const, name: 'Gradient Wave', description: 'Wave with color transition' },
    ],
    'Modern Geometric': [
      { type: 'zigzag' as const, name: 'Zigzag', description: 'Sharp zigzag pattern' },
      { type: 'mountains' as const, name: 'Mountains', description: 'Layered mountain range' },
      { type: 'pyramid' as const, name: 'Pyramid', description: 'Multi-peak pyramid' },
      { type: 'geometric' as const, name: 'Geometric', description: 'Abstract geometric cuts' },
      { type: 'split' as const, name: 'Split', description: 'Center split design' },
      { type: 'arrow' as const, name: 'Arrow', description: 'Pointed arrow shape' },
    ],
    'Creative & Playful': [
      { type: 'clouds' as const, name: 'Clouds', description: 'Fluffy cloud shapes' },
      { type: 'blocks' as const, name: 'Building Blocks', description: 'Colorful LEGO-style blocks' },
      { type: 'paint' as const, name: 'Paint Splashes', description: 'Artistic paint splatters' },
      { type: 'crayons' as const, name: 'Crayons', description: 'Scattered crayons design' },
      { type: 'books' as const, name: 'Books', description: 'Stack of colorful books' },
      { type: 'book-curve' as const, name: 'Book Curve', description: 'Curved line with book spines' },
      { type: 'puzzle' as const, name: 'Puzzle Pieces', description: 'Interlocking puzzle edge' },
    ],
  };

  const museumColors = [
    { name: 'Museum Orange', value: '#FF6B35' },
    { name: 'Museum Blue', value: '#118AB2' },
    { name: 'Museum Purple', value: '#9333EA' },
    { name: 'Creative Green', value: '#06D6A0' },
    { name: 'Warm Yellow', value: '#FFD23F' },
    { name: 'Deep Red', value: '#E74C3C' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Gray', value: '#6B7280' },
  ];

  const heights = ['60px', '80px', '100px', '120px', '150px'];

  const copyToClipboard = (type: string) => {
    const code = `<SectionDivider 
  type="${type}" 
  height="${selectedHeight}" 
  color="${selectedColor}"${isAnimated ? '\n  animated={true}' : ''}
/>`;
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎨 Divider Style Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive collection of WordPress-style dividers. 
            Perfect for creating smooth transitions between sections on your museum website.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-6">🎛️ Customize Your Dividers</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Color Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Choose Color
              </label>
              <div className="grid grid-cols-4 gap-2">
                {museumColors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-12 h-12 rounded-lg border-2 transition-all duration-200 ${
                      selectedColor === color.value 
                        ? 'border-gray-900 scale-110' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">Selected: {selectedColor}</p>
            </div>

            {/* Height Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Divider Height
              </label>
              <select
                value={selectedHeight}
                onChange={(e) => setSelectedHeight(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {heights.map((height) => (
                  <option key={height} value={height}>
                    {height}
                  </option>
                ))}
              </select>
            </div>

            {/* Animation Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Animation
              </label>
              <button
                onClick={() => setIsAnimated(!isAnimated)}
                className={`w-full px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  isAnimated
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isAnimated ? '✨ Animated' : '⏸️ Static'}
              </button>
            </div>
          </div>
        </div>

        {/* Divider Categories */}
        {Object.entries(dividerCategories).map(([category, dividers]) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{category}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {dividers.map(({ type, name, description }) => (
                <div key={type} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  
                  {/* Divider Preview */}
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 relative">
                    <SectionDivider
                      type={type}
                      height={selectedHeight}
                      color={selectedColor}
                      animated={isAnimated}
                    />
                  </div>
                  
                  {/* Divider Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {description}
                        </p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(type)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        title="Copy code to clipboard"
                      >
                        📋 Copy Code
                      </button>
                    </div>
                    
                    {/* Usage Example */}
                    <div className="bg-gray-100 rounded-md p-3 text-xs">
                      <code className="text-gray-800">
                        {`<SectionDivider type="${type}" height="${selectedHeight}" color="${selectedColor}"${isAnimated ? ' animated={true}' : ''} />`}
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Usage Instructions */}
        <div className="bg-blue-50 rounded-xl p-8 mt-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            📚 How to Use These Dividers
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 text-blue-800">
            <div>
              <h3 className="font-semibold mb-2">1. Import the Component</h3>
              <code className="bg-blue-100 px-2 py-1 rounded text-sm">
                import SectionDivider from '@/components/SectionDivider';
              </code>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">2. Add Between Sections</h3>
              <code className="bg-blue-100 px-2 py-1 rounded text-sm">
                {'<SectionDivider type="wave" color="#FF6B35" />'}
              </code>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">3. Customize Properties</h3>
              <ul className="text-sm space-y-1">
                <li>• <strong>type:</strong> Choose from 20+ styles</li>
                <li>• <strong>height:</strong> Adjust divider height</li>
                <li>• <strong>color:</strong> Match your brand colors</li>
                <li>• <strong>animated:</strong> Add subtle animations</li>
                <li>• <strong>flip:</strong> Rotate divider 180°</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">4. Advanced Options</h3>
              <ul className="text-sm space-y-1">
                <li>• <strong>fromColor/toColor:</strong> Gradient effects</li>
                <li>• <strong>flip:</strong> Perfect for top/bottom placement</li>
                <li>• <strong>Museum-themed:</strong> Blocks, books, crayons, etc.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DividerShowcase; 