import React from 'react';
import { motion } from 'framer-motion';
import { FaDocker, FaAws, FaServer } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';

const CloudArchitecture3D = () => {
    return (
        <div style={{
            position: 'relative', width: '100%', height: '400px',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            perspective: '1200px',
            overflow: 'visible'
        }}>
            {/* 3D Tilted Plane */}
            <motion.div 
                style={{
                    position: 'relative', width: '300px', height: '300px',
                    transformStyle: 'preserve-3d',
                    rotateX: 65,
                }}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
                {/* Orbital Rings */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', border: '2px solid rgba(59, 130, 246, 0.2)', boxShadow: '0 0 30px rgba(59, 130, 246, 0.15)' }} />
                <div style={{ position: 'absolute', top: '-25%', left: '-25%', width: '150%', height: '150%', borderRadius: '50%', border: '1px dashed rgba(255, 255, 255, 0.1)' }} />
                <div style={{ position: 'absolute', top: '25%', left: '25%', width: '50%', height: '50%', borderRadius: '50%', border: '1px dashed rgba(59, 130, 246, 0.3)' }} />

                {/* Central Server Node (Counter-rotated to face camera) */}
                <motion.div 
                    style={{
                        position: 'absolute', top: '50%', left: '50%', x: '-50%', y: '-50%',
                        width: '90px', height: '90px', borderRadius: '50%', background: 'linear-gradient(135deg, #0f172a, #1e3a8a)',
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        boxShadow: '0 0 40px rgba(59, 130, 246, 0.8), inset 0 0 20px rgba(255,255,255,0.2)',
                        border: '2px solid rgba(96, 165, 250, 0.8)'
                    }}
                    animate={{ rotateZ: -360, rotateX: -65 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <FaServer size={40} color="#60a5fa" />
                    </motion.div>
                </motion.div>

                {/* Orbiting Nodes */}
                <OrbitNode icon={<FaDocker size={28} color="#2496ED" />} angle={0} radius={150} label="Docker" />
                <OrbitNode icon={<SiKubernetes size={28} color="#326CE5" />} angle={120} radius={150} label="K8s" />
                <OrbitNode icon={<FaAws size={28} color="#FF9900" />} angle={240} radius={150} label="AWS" />
                
                {/* Inner Orbiting Data Packets */}
                <DataPacket angle={45} radius={75} duration={3} />
                <DataPacket angle={225} radius={75} duration={3} delay={1.5} />

            </motion.div>
        </div>
    );
};

const OrbitNode = ({ icon, angle, radius, label }: { icon: React.ReactNode, angle: number, radius: number, label: string }) => {
    // Calculate x and y based on angle and radius
    const rad = angle * (Math.PI / 180);
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);

    return (
        <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        }}>
            {/* Counter-rotate to stay upright to the camera */}
            <motion.div
                style={{
                    width: '65px', height: '65px', borderRadius: '50%', background: '#0f172a',
                    border: '1px solid rgba(255,255,255,0.15)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.8), inset 0 0 10px rgba(255,255,255,0.05)',
                }}
                animate={{ rotateZ: -360, rotateX: -65 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
                {icon}
            </motion.div>
        </div>
    );
};

const DataPacket = ({ angle, radius, duration, delay = 0 }: { angle: number, radius: number, duration: number, delay?: number }) => {
    const rad = angle * (Math.PI / 180);
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);

    return (
        <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        }}>
             <motion.div
                style={{
                    width: '12px', height: '12px', borderRadius: '50%', background: '#60a5fa',
                    boxShadow: '0 0 15px #60a5fa, 0 0 30px #60a5fa',
                }}
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay }}
             />
        </div>
    )
}

export default CloudArchitecture3D;
