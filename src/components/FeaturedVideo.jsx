import React from 'react';
import Button from './GradientButton';
import { useMediaQuery } from 'react-responsive';
import { Skeleton, Typography } from '@mui/material'; 
import { motion } from 'framer-motion'; // Import motion for animations

const FeaturedVideo = () => {
  const Video = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Example Video ID

  // Responsive queries
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });

  // Dynamic styles based on screen size
  const containerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1E1E1E',
  };

  const contentStyle = {
    display: 'flex',
    paddingTop: '2rem',
    paddingBottom: "2rem",
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: isMobile ? '1rem' : isTablet ? '2rem' : '3rem',
    width: isMobile ? '90%' : '80%',
    margin: '0 auto',
    
    textAlign: isMobile ? 'center' : 'left',
  };

  const iframeStyle = {
    width: isMobile ? '300px' : isTablet ? '500px' : '720px',
    height: isMobile ? '170px' : isTablet ? '280px' : '400px',
    objectFit: 'cover',
    borderRadius: isMobile ? '0.5rem' : '1rem',
  };

  const typographyStyle = {
    color: 'white',
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    fontSize: isMobile ? '24px' : '32px',
  };

  return (
    <div id="videos" style={containerStyle}>
      <div style={contentStyle}>
        {/* Animate the first div containing the text and button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Typography variant="h2" style={typographyStyle}>
            Featured
            <span style={{ fontSize: isMobile ? '36px' : '50px' }}>Video</span>
          </Typography>

          <div style={{ paddingLeft: isMobile ? '0' : '4rem' }}>
            <Button text="Discover more Videos" width='250px' />
          </div>
        </motion.div>

        {/* Animate the iframe or Skeleton */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {Video ? (
            <iframe
              src={`${Video}?autoplay=1&mute=1`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={iframeStyle}
            />
          ) : (
            <Skeleton
              variant="rectangular"
              animation="wave"
              style={{
                ...iframeStyle,
                backgroundColor: '#333',
              }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedVideo;