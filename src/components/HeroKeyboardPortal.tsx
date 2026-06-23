import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDocker, FaAws } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';

// The node data for the cascading connection visualization
const NODES = [
    { id: 'docker',  label: 'Docker',     icon: <FaDocker size={26} />,     color: '#2496ED', y: 0 },
    { id: 'k8s',     label: 'Kubernetes', icon: <SiKubernetes size={26} />, color: '#326CE5', y: 1 },
    { id: 'aws',     label: 'AWS Cloud',  icon: <FaAws size={26} />,        color: '#FF9900', y: 2 },
];

// The keyboard keys that simulate the "deploy" command
const KEYS = [
    { char: 'c', id: 'k1' }, { char: 'l', id: 'k2' }, { char: 'o', id: 'k3' },
    { char: 'u', id: 'k4' }, { char: 'd', id: 'k5' }, { char: ' ', id: 'k6', label: 'SPC' },
    { char: 'd', id: 'k7' }, { char: 'e', id: 'k8' }, { char: 'p', id: 'k9' },
    { char: 'l', id: 'k10' }, { char: 'o', id: 'k11' }, { char: 'y', id: 'k12' },
    { char: '↵', id: 'enter', isEnter: true },
];

export default function HeroKeyboardPortal() {
    const [typedCount, setTypedCount] = useState(0);
    const [enterPressed, setEnterPressed] = useState(false);
    const [activeNodes, setActiveNodes] = useState<number[]>([]);
    const [linesActive, setLinesActive] = useState<number[]>([]);

    // Auto-animate on mount with a delay
    useEffect(() => {
        let t: ReturnType<typeof setTimeout>;
        // Sequentially type each key
        KEYS.slice(0, -1).forEach((_, i) => {
            t = setTimeout(() => setTypedCount(i + 1), 800 + i * 80);
        });
        // Press Enter
        setTimeout(() => {
            setEnterPressed(true);
            // Light up nodes one by one
            NODES.forEach((_, ni) => {
                setTimeout(() => {
                    setActiveNodes(prev => [...prev, ni]);
                    if (ni > 0) setLinesActive(prev => [...prev, ni - 1]);
                }, ni * 400);
            });
        }, 800 + KEYS.length * 80 + 300);

        return () => clearTimeout(t);
    }, []);

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '1.5rem', padding: '1rem 0',
            width: '100%',
        }}>
            {/* === KEYBOARD ROW === */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{
                    display: 'flex', gap: '5px', alignItems: 'center',
                    flexWrap: 'wrap', justifyContent: 'center',
                    maxWidth: '340px',
                }}
            >
                {KEYS.map((key, i) => {
                    const isTyped = i < typedCount;
                    const isEnter = key.isEnter;
                    const isActive = isEnter ? enterPressed : isTyped;

                    return (
                        <motion.div
                            key={key.id}
                            animate={isActive ? {
                                backgroundColor: isEnter ? '#10b981' : 'rgba(96,165,250,0.3)',
                                boxShadow: isEnter
                                    ? '0 0 18px rgba(16,185,129,0.8), 0 4px 0 rgba(16,185,129,0.4)'
                                    : '0 0 10px rgba(96,165,250,0.5), 0 2px 0 rgba(96,165,250,0.3)',
                                y: isActive ? 2 : 0,
                                scale: isEnter && isActive ? [1, 1.15, 1] : 1,
                            } : {
                                backgroundColor: 'rgba(255,255,255,0.04)',
                                boxShadow: '0 4px 0 rgba(0,0,0,0.5)',
                            }}
                            transition={{ duration: 0.15, scale: { duration: 0.3 } }}
                            style={{
                                minWidth: isEnter ? '60px' : key.char === ' ' ? '44px' : '30px',
                                height: '32px', borderRadius: '5px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '0.7rem', fontFamily: 'monospace', fontWeight: 700,
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: isEnter ? '#10b981' : 'rgba(255,255,255,0.7)',
                                cursor: 'default', userSelect: 'none',
                                transition: 'background 0.15s',
                            }}
                        >
                            {isEnter ? '⏎ Enter' : (key.label || key.char.toUpperCase())}
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* === TOP-TO-BOTTOM CONNECTED NODES === */}
            <AnimatePresence>
                {enterPressed && (
                    <motion.div
                        key="nodes"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            gap: 0, position: 'relative',
                        }}
                    >
                        {NODES.map((node, i) => (
                            <div key={node.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {/* Node Circle */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={activeNodes.includes(i)
                                        ? { scale: 1, opacity: 1 }
                                        : { scale: 0, opacity: 0 }
                                    }
                                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                    style={{
                                        width: '64px', height: '64px', borderRadius: '50%',
                                        background: `radial-gradient(circle at 40% 40%, ${node.color}33, #0f172a)`,
                                        border: `2px solid ${node.color}`,
                                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                        boxShadow: `0 0 20px ${node.color}66, 0 0 40px ${node.color}22`,
                                        color: node.color,
                                        gap: '3px',
                                    }}
                                >
                                    {node.icon}
                                    <span style={{ fontSize: '0.5rem', fontFamily: 'monospace', letterSpacing: 1 }}>
                                        {node.label}
                                    </span>
                                </motion.div>

                                {/* Connector Line below (skip for last node) */}
                                {i < NODES.length - 1 && (
                                    <div style={{ position: 'relative', width: '2px', height: '40px', overflow: 'hidden' }}>
                                        {/* Static grey rail */}
                                        <div style={{
                                            position: 'absolute', inset: 0,
                                            background: 'rgba(255,255,255,0.07)',
                                        }} />
                                        {/* Animated light beam travelling down */}
                                        <motion.div
                                            initial={{ scaleY: 0, originY: 0 }}
                                            animate={linesActive.includes(i)
                                                ? { scaleY: [0, 1], opacity: [0, 1] }
                                                : {}
                                            }
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                            style={{
                                                position: 'absolute', inset: 0,
                                                background: `linear-gradient(to bottom, ${NODES[i].color}, ${NODES[i + 1].color})`,
                                                boxShadow: `0 0 8px ${NODES[i].color}`,
                                            }}
                                        />
                                        {/* Travelling data packet dot */}
                                        {linesActive.includes(i) && (
                                            <motion.div
                                                animate={{ y: ['0%', '100%'] }}
                                                transition={{ duration: 0.8, delay: 0.3, repeat: Infinity, ease: 'linear' }}
                                                style={{
                                                    position: 'absolute', left: '-3px',
                                                    width: '8px', height: '8px', borderRadius: '50%',
                                                    background: NODES[i].color,
                                                    boxShadow: `0 0 12px ${NODES[i].color}`,
                                                }}
                                            />
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
