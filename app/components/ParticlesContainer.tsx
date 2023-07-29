'use client';

import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react'
import {  Engine } from 'tsparticles-engine';

const ParticlesContainer = () => {

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => { }, []);
  return (
    <Particles
      className='
        w-full
        h-full
        absolute 
        translate-z-0
      '
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: ''
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          }
        },
        particles: {
          color: {
            value: '#efe6a9'
          },
          links: {

            color: '#ffffe5',
            distance: 170,
            enable: true,
            opacity: 0.6,
            width: 1,
          },
          collision: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80

          },
          opacity: {
            value: 1,
          },
          shape: {
            type: 'square'
          },
          size: {
            value: { min: 1, max: 3 }
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesContainer