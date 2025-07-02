import { useEffect, useState } from 'react';
// components
import Hero from 'components/layout/Hero';
import SearchBar from 'components/search/SearchBar';
import DestinationGrid from 'components/destinations/DestinationGrid';
import TestimonialSection from 'components/testimonials/TestimonialSection';
import BannerBottom from 'components/layout/BannerBottom';
// api
import { getDestinationByName, getDestinations } from 'services/destinations';
import { getTestimonials } from 'services/testimonials';

const Home = () => {
  const [destination, setDestination] = useState({});
  const [destinations, setDestinations] = useState([]);
  const [testimonials, setTestimonials] = useState(null);
  const [testimonialPage, setTestimonialPage] = useState(1);
  const [testimonialQuantityPerPage, setTestimonialQuantityPerPage] = useState(3);

  const MIN_SCREEN_SIZE = 896;

  const fetchAllDestinations = async () => {
    const response = await getDestinations();
    setDestinations(response);
  }

  const fetchDestination = async (name) => {
    const response = await getDestinationByName(name);
    setDestination(response);
  }

  const fetchAllTestimonials = async (numberPage, quantityPerPage) => {
    const response = await getTestimonials(numberPage, quantityPerPage);
    setTestimonials(response);
  }

  useEffect(() => {
    fetchAllDestinations();
   
    // Adjust the amount of cards to be displayed according to the screen size
    const handleResize = () => {
      if (window.innerWidth <= MIN_SCREEN_SIZE) {
        setTestimonialQuantityPerPage(1);
      } else {
        setTestimonialQuantityPerPage(3);
      }
    };
    // Set initial value to run when the component is mounted
    handleResize();
    // Add event listener to monitor when user resizes screen
    window.addEventListener('resize', handleResize);
    // Remove the event when the component is unmounted
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetchAllTestimonials(testimonialPage, testimonialQuantityPerPage);
  }, [testimonialPage, testimonialQuantityPerPage]);

  const handleTestimonialLoadPage = async (numberPage, quantityPerPage) => {
    if (testimonials && testimonials.total && testimonials.limit) {
      const totalPages = Math.ceil(testimonials.total / testimonials.limit);
      
      if (numberPage >= 1 && totalPages >= 1 && numberPage <= totalPages) {
        setTestimonialPage(numberPage);
      }
    }
  };

  const handleSearch = async (searchDestination) => {
    await fetchDestination(searchDestination);
  }

  return(
    <main>
      <Hero />

      <SearchBar 
        destinations={destinations}
        onSearch={handleSearch}
      />

      <DestinationGrid 
        destinations={destinations}
        filteredDestination={destination} 
      />

      <TestimonialSection 
        testimonials={testimonials}
        loadPage={(numberPage, quantityPerPage) => handleTestimonialLoadPage(numberPage, quantityPerPage)}
        currentPage={testimonialPage}
      />
      
      <BannerBottom />
    </main>
  )
}

export default Home;
