import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback, useMemo } from 'react';

function ParticlesComponent(props) {
    const options = useMemo(() => {
        return {
            // background:{
            //     color: {value: "#230c3c"}
            // },
            fullScreen:{
                enabled: true,
                zIndex: 0,
            },
            particles: {
                color: {
                    value: "#ffffff" // Particle color
                },
                number: {
                    value: 100 // Number of particles
                },
                size: {
                    value: {min:0.5, max:2} // Size of particles
                },
                move: {
                    enable: true,
                    speed: {min:0.2, max:1.5} // Speed of particles
                },
                opacity:{
                    value: {min:0.3, max:0.7}
                }
            }
        };
    }, []);
    
    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);
  
    return <Particles id={props.id} init={particlesInit} options={options} />;
}

export default ParticlesComponent;
