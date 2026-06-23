/**
 * Keyboard3D.tsx
 * A photorealistic 3D keyboard built with CSS + Framer Motion.
 * Shows "cloud deploy ↵" typing letter by letter, then on Enter:
 * Docker → Kubernetes → AWS light up top-to-bottom with animated lines.
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDocker, FaAws } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';

// ─── constants ──────────────────────────────────────────────
const CMD = 'cloud deploy';
const NODES = [
    { label: 'Docker',     icon: <FaDocker size={22} />,      color: '#2496ED', glow: 'rgba(36,150,237,0.7)' },
    { label: 'Kubernetes', icon: <SiKubernetes size={22} />,  color: '#326CE5', glow: 'rgba(50,108,229,0.7)' },
    { label: 'AWS Cloud',  icon: <FaAws size={22} />,         color: '#FF9900', glow: 'rgba(255,153,0,0.7)'  },
];

// The keyboard rows to render (only the relevant ones for space + looks)
const ROWS: { char: string; label?: string; width?: number; isEnter?: boolean; isSpace?: boolean }[][] = [
    [
        { char: 'q' }, { char: 'w' }, { char: 'e' }, { char: 'r' },
        { char: 't' }, { char: 'y' }, { char: 'u' }, { char: 'i' },
        { char: 'o' }, { char: 'p' },
    ],
    [
        { char: 'a' }, { char: 's' }, { char: 'd' }, { char: 'f' },
        { char: 'g' }, { char: 'h' }, { char: 'j' }, { char: 'k' },
        { char: 'l' },
    ],
    [
        { char: 'z' }, { char: 'x' }, { char: 'c' }, { char: 'v' },
        { char: 'b' }, { char: 'n' }, { char: 'm' },
        { char: '↵', label: 'ENTER', width: 2, isEnter: true },
    ],
    [
        { char: ' ', label: 'SPACE', width: 5, isSpace: true },
    ],
];

// Which characters from CMD are typed in order (inc space)
const CMD_CHARS = CMD.split(''); // ['c','l','o','u','d',' ','d','e','p','l','o','y']

// ─── helpers ────────────────────────────────────────────────
const KEY_W = 38;
const KEY_H = 38;
const KEY_GAP = 5;
const KEY_DEPTH = 6; // px of 3D depth

function Key({
    k,
    pressed,
}: {
    k: { char: string; label?: string; width?: number; isEnter?: boolean; isSpace?: boolean };
    pressed: boolean;
}) {
    const w = (k.width ?? 1) * KEY_W + ((k.width ?? 1) - 1) * KEY_GAP;

    const faceColor = pressed
        ? k.isEnter
            ? '#0d9e6e'
            : '#1d4ed8'
        : '#1e2a3a';
    const sideColor = pressed
        ? k.isEnter
            ? '#065f46'
            : '#1e3a8a'
        : '#0f172a';
    const shadowGlow = pressed
        ? k.isEnter
            ? '0 0 20px rgba(16,185,129,0.9)'
            : '0 0 14px rgba(59,130,246,0.8)'
        : 'none';

    return (
        <motion.div
            animate={{
                y: pressed ? KEY_DEPTH - 2 : 0,
            }}
            transition={{ duration: 0.08, ease: 'easeOut' }}
            style={{
                position: 'relative',
                width: w,
                height: KEY_H,
                flexShrink: 0,
                userSelect: 'none',
                cursor: 'default',
            }}
        >
            {/* Side face (3D depth illusion) */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: KEY_DEPTH,
                    background: sideColor,
                    borderRadius: '0 0 5px 5px',
                    transform: 'translateY(0)',
                    zIndex: 1,
                    transition: 'background 0.1s',
                }}
            />
            {/* Top face */}
            <motion.div
                animate={{
                    boxShadow: pressed ? shadowGlow : 'none',
                    background: faceColor,
                }}
                transition={{ duration: 0.08 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: KEY_H - (pressed ? 2 : KEY_DEPTH),
                    borderRadius: '5px 5px 4px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: k.isEnter || k.isSpace ? '0.55rem' : '0.7rem',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: k.isEnter || k.isSpace ? '0.12em' : 0,
                    color: pressed
                        ? '#fff'
                        : 'rgba(148,163,184,0.8)',
                    border: `1px solid ${pressed ? (k.isEnter ? 'rgba(16,185,129,0.4)' : 'rgba(59,130,246,0.4)') : 'rgba(255,255,255,0.07)'}`,
                    zIndex: 2,
                    transition: 'height 0.08s, background 0.08s',
                    textTransform: 'uppercase',
                    backgroundImage: `linear-gradient(160deg, rgba(255,255,255,0.04) 0%, transparent 60%)`,
                }}
            >
                {k.label ?? k.char}
            </motion.div>
        </motion.div>
    );
}

// ─── main component ──────────────────────────────────────────
export default function Keyboard3D() {
    const [typedCount, setTypedCount] = useState(0);
    const [enterPressed, setEnterPressed] = useState(false);
    const [activeNodes, setActiveNodes] = useState<number[]>([]);
    const [activeLines, setActiveLines] = useState<number[]>([]);

    useEffect(() => {
        // Sequentially "type" each character
        CMD_CHARS.forEach((_, i) => {
            setTimeout(() => setTypedCount(i + 1), 900 + i * 100);
        });
        const enterAt = 900 + CMD_CHARS.length * 100 + 300;
        // Press Enter
        setTimeout(() => {
            setEnterPressed(true);
            // Cascade nodes top → bottom
            NODES.forEach((_, ni) => {
                setTimeout(() => {
                    setActiveNodes(p => [...p, ni]);
                    if (ni > 0) setActiveLines(p => [...p, ni - 1]);
                }, ni * 450);
            });
        }, enterAt);
    }, []);

    // Which key chars are currently "pressed"
    const pressedChars = new Set(CMD_CHARS.slice(0, typedCount).join('').toLowerCase());
    const cmdDone = typedCount >= CMD_CHARS.length;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            width: '100%',
        }}>

            {/* ── Terminal prompt ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{
                    fontFamily: 'monospace',
                    fontSize: '0.78rem',
                    color: '#94a3b8',
                    background: 'rgba(0,0,0,0.35)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '8px',
                    padding: '8px 14px',
                    width: '100%',
                    maxWidth: '320px',
                    minHeight: '32px',
                    whiteSpace: 'nowrap',
                }}
            >
                <span style={{ color: '#10b981' }}>$ </span>
                <span style={{ color: '#e2e8f0' }}>{CMD.slice(0, typedCount)}</span>
                {cmdDone && !enterPressed && (
                    <span style={{ color: '#60a5fa', animation: 'blink 1s step-end infinite' }}>|</span>
                )}
                {enterPressed && <span style={{ color: '#10b981' }}> ✓ deploying...</span>}
            </motion.div>

            {/* ── 3D Keyboard ── */}
            <motion.div
                initial={{ opacity: 0, y: 20, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
                style={{
                    background: 'linear-gradient(145deg, #0f172a, #1e293b)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '14px',
                    padding: '14px 16px 18px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 4px 0 #060d18, 0 0 40px rgba(59,130,246,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: KEY_GAP,
                    width: 'fit-content',
                    perspective: '800px',
                }}
            >
                {ROWS.map((row, ri) => (
                    <div key={ri} style={{ display: 'flex', gap: KEY_GAP, justifyContent: 'center' }}>
                        {row.map((k) => {
                            const isTypedChar = !k.isSpace && !k.isEnter && pressedChars.has(k.char.toLowerCase());
                            const isEnterActive = k.isEnter && enterPressed;
                            const isSpaceActive = k.isSpace && pressedChars.has(' ');
                            return (
                                <Key
                                    key={k.char + k.label}
                                    k={k}
                                    pressed={isTypedChar || isEnterActive || isSpaceActive}
                                />
                            );
                        })}
                    </div>
                ))}
            </motion.div>

            {/* ── Top-to-bottom cloud connection ── */}
            <AnimatePresence>
                {enterPressed && (
                    <motion.div
                        key="cascade"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        {NODES.map((node, i) => (
                            <div key={node.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {/* Node bubble */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={activeNodes.includes(i) ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                    style={{
                                        width: 68,
                                        height: 68,
                                        borderRadius: '50%',
                                        background: `radial-gradient(circle at 35% 35%, ${node.color}22, #0f172a)`,
                                        border: `2px solid ${node.color}`,
                                        boxShadow: activeNodes.includes(i) ? `0 0 24px ${node.glow}, 0 0 50px ${node.color}22` : 'none',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: node.color,
                                        gap: 3,
                                    }}
                                >
                                    {node.icon}
                                    <span style={{ fontSize: '0.48rem', fontFamily: 'monospace', letterSpacing: 1 }}>
                                        {node.label}
                                    </span>
                                </motion.div>

                                {/* Connector line */}
                                {i < NODES.length - 1 && (
                                    <div style={{ position: 'relative', width: 2, height: 44 }}>
                                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.05)' }} />
                                        <motion.div
                                            initial={{ scaleY: 0 }}
                                            animate={activeLines.includes(i) ? { scaleY: 1 } : {}}
                                            transition={{ duration: 0.35, ease: 'easeIn' }}
                                            style={{
                                                position: 'absolute',
                                                inset: 0,
                                                transformOrigin: 'top',
                                                background: `linear-gradient(to bottom, ${NODES[i].color}, ${NODES[i + 1].color})`,
                                                boxShadow: `0 0 8px ${NODES[i].color}`,
                                            }}
                                        />
                                        {activeLines.includes(i) && (
                                            <motion.div
                                                animate={{ y: ['0%', '200%'] }}
                                                transition={{ duration: 0.7, delay: 0.2, repeat: Infinity, ease: 'linear' }}
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: -3,
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
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
