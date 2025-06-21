import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const visionSpaces = [
  {
    name: "Creative Art Lab",
    description: "Vibrant studios where young artists unleash their creativity",
    images: ["/images/Creative Art Lab/mediaken_Vibrant_childrens_art_studio_with_easels_art_supplies__8a481bd6-4751-49d5-a042-f8cb32752a22.png"]
  },
  {
    name: "Music Lab", 
    description: "Professional recording studios designed for young musicians",
    images: ["/images/Music Lab/mediaken_Kid-friendly_recording_studio_with_professional_equipm_d9a216dd-1cdf-446c-bf5e-e3ab813fc8f5.png"]
  },
  {
    name: "Food Lab",
    description: "Modern cooking classroom where future chefs learn and explore",
    images: ["/images/Food Lab/mediaken_Modern_childrens_cooking_classroom_with_kid-sized_cook_37777b02-33d8-4da9-94d7-007d92c8831e.png"]
  },
  {
    name: "Learning Garden",
    description: "Agricultural learning spaces connecting children with nature and sustainability",
    images: ["/images/Garden/mediaken_Modern_childrens_agricultural_learning_garden_with_rai_1647da46-2b00-43a5-a574-ebbe708a0a7a.png"]
  },
  {
    name: "Gathering Space",
    description: "Large multipurpose space for community events and flexible programming",
    images: ["/images/Gathering Space/mediaken_Large_open_multipurpose_space_in_childrens_museum_flex_915363d3-b267-49b6-8171-fc143b87259b.png"]
  },
  {
    name: "Classrooms",
    description: "Modern learning environments with colorful, engaging furniture",
    images: ["/images/Classrooms/mediaken_Modern_childrens_museum_classroom_with_colorful_furnit_c9624285-941b-4318-b67c-dd78100882bd.png"]
  },
  {
    name: "Theater",
    description: "State-of-the-art performance space for shows and education",
    images: ["/images/Theater/mediaken_add_theater_screen_to_new_area_--ar_9151_--raw_--v_7_a3498b23-a6e7-4f58-9902-8c3257a139d2.png"]
  },
  {
    name: "Interactive Exhibits",
    description: "Flexible exhibition spaces designed for hands-on learning",
    images: ["/images/Exhibits/mediaken_Flexible_museum_exhibition_space_with_modular_displays_802b7a21-ddd1-4415-a5f6-798f3540ef40.png"]
  },
  {
    name: "Water Play Area",
    description: "Interactive water features for sensory exploration and fun",
    images: ["/images/Waterpark/mediaken_Interactive_water_play_area_for_children_with_fountain_7a8be651-1150-4a35-ad3b-04276ca60c50.png"]
  },
  {
    name: "Outdoor Playground",
    description: "Contemporary play space connecting children with nature",
    images: ["/images/Playground/mediaken_Contemporary_outdoor_childrens_play_area_with_modern_p_5e0bca48-3617-48a1-9b04-c1dd9d34de83.png"]
  }
];

const VisionCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps'
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [inViewSlides, setInViewSlides] = React.useState<number[]>([]);
  const [isReady, setIsReady] = React.useState(false);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onSlidesInView = React.useCallback(() => {
    if (!emblaApi) return;
    setInViewSlides(emblaApi.slidesInView());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    onSlidesInView();
    setIsReady(true);
    
    emblaApi.on('select', onSelect);
    emblaApi.on('slidesInView', onSlidesInView);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('reInit', onSlidesInView);
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('slidesInView', onSlidesInView);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('reInit', onSlidesInView);
    };
  }, [emblaApi, onSelect, onSlidesInView]);

  // Flatten all images with their space info
  const allImages = visionSpaces.flatMap(space => 
    space.images.map(image => ({
      src: image,
      name: space.name,
      description: space.description
    }))
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Imagination Has No Limit
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            We envision a state-of-the-art facility that will serve as a cornerstone of the Southland community—
            a destination where wonder meets learning, creativity flourishes, and every child's potential is unlocked. 
            This revolutionary space will become a beloved community staple, inspiring generations of young minds 
            while bringing families together through the power of play and discovery.
          </p>
        </div>

        {/* Carousel */}
        <div 
          className={`relative transition-opacity duration-1000 ${
            isReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {allImages.map((item, index) => {
                const isSelected = index === selectedIndex;
                const isInView = inViewSlides.includes(index);
                const opacity = isInView ? (isSelected ? 1 : 0.9) : 0.6;
                const scale = isSelected ? 1 : 0.95;
                
                return (
                  <div 
                    key={index} 
                    className="flex-none w-full md:w-4/5 lg:w-3/4 xl:w-2/3 px-4"
                    style={{
                      opacity,
                      transition: 'opacity 0.6s ease-in-out'
                    }}
                  >
                    <Card 
                      className={`overflow-hidden shadow-2xl transition-all duration-700 ${
                        isSelected 
                          ? 'hover:shadow-3xl hover:scale-[1.02] ring-2 ring-blue-400/30' 
                          : 'hover:shadow-2xl hover:scale-[1.01] scale-95'
                      }`}
                      style={{
                        transform: `scale(${scale})`,
                        transition: 'transform 0.6s ease-in-out, box-shadow 0.3s ease'
                      }}
                    >
                      <CardContent className="p-0">
                        <div className="relative group">
                          <img
                            src={item.src}
                            alt={item.name}
                            className={`w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-all duration-700 ${
                              isSelected ? 'brightness-110' : 'brightness-100'
                            }`}
                            loading="lazy"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-700 ${
                            isSelected 
                              ? 'from-black/50 via-black/10 to-transparent' 
                              : 'from-black/80 via-black/30 to-transparent'
                          }`} />
                          <div className={`absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-700 ${
                            isSelected ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2'
                          }`}>
                            <h3 className={`text-2xl md:text-3xl font-bold mb-3 transition-all duration-700 ${
                              isSelected ? 'text-white' : 'text-white/90'
                            }`}>
                              {item.name}
                            </h3>
                            <p className={`text-lg leading-relaxed transition-all duration-700 ${
                              isSelected ? 'opacity-100' : 'opacity-75'
                            }`}>
                              {item.description}
                            </p>
                          </div>
                          
                          {/* Subtle glow for active slide */}
                          {isSelected && (
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-60" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-20 transition-all duration-300 backdrop-blur-sm border-white/30 hover:border-blue-200"
            onClick={scrollPrev}
            style={{ opacity: 0.8 }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-20 transition-all duration-300 backdrop-blur-sm border-white/30 hover:border-blue-200"
            onClick={scrollNext}
            style={{ opacity: 0.8 }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
          </Button>
          
          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {allImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  index === selectedIndex
                    ? 'bg-blue-600 opacity-100 scale-110 shadow-lg'
                    : 'bg-gray-400 opacity-50 hover:opacity-80 hover:bg-blue-400'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default VisionCarousel; 