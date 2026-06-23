/* =========================================================
   SectionConnector.tsx
   A glowing "pipeline" SVG line that connects two sections
   visually — used between Projects → Academic Work
   ========================================================= */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
    fromLabel?: string;
    toLabel?: string;
    color?: string;
}

export default function SectionConnector({ fromLabel = 'Projects', toLabel = 'Academic Work', color = '#3b82f6' }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <div
            ref={ref}
            style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '1.5rem 1rem', gap: '0.75rem', position: 'relative',
            }}
        >
            {/* From label */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4 }}
                style={{
                    fontSize: '0.72rem', fontFamily: 'monospace', letterSpacing: '0.15em',
                    color: color, textTransform: 'uppercase',
                    padding: '4px 12px', border: `1px solid ${color}44`,
                    borderRadius: '20px', background: `${color}11`,
                }}
            >
                {fromLabel}
            </motion.span>

            {/* Animated pipeline */}
            <div style={{ position: 'relative', width: '2px', height: '60px' }}>
                {/* Rail */}
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.06)', borderRadius: '2px' }} />
                {/* Beam */}
                <motion.div
                    initial={{ scaleY: 0, originY: '0%' }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        position: 'absolute', inset: 0,
                        background: `linear-gradient(to bottom, ${color}, ${color}88)`,
                        boxShadow: `0 0 10px ${color}`,
                        borderRadius: '2px',
                    }}
                />
                {/* Travelling dot */}
                {isInView && (
                    <motion.div
                        animate={{ y: ['0px', '60px'] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear', delay: 0.5 }}
                        style={{
                            position: 'absolute', top: 0, left: '-3px',
                            width: '8px', height: '8px', borderRadius: '50%',
                            background: color, boxShadow: `0 0 10px ${color}, 0 0 20px ${color}44`,
                        }}
                    />
                )}
            </div>

            {/* Chevron arrow */}
            <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 }}
                style={{ color, fontSize: '1.2rem', lineHeight: 1, marginTop: '-4px' }}
            >
                ▼
            </motion.div>

            {/* To label */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 }}
                style={{
                    fontSize: '0.72rem', fontFamily: 'monospace', letterSpacing: '0.15em',
                    color: '#a78bfa', textTransform: 'uppercase',
                    padding: '4px 12px', border: '1px solid rgba(167,139,250,0.3)',
                    borderRadius: '20px', background: 'rgba(167,139,250,0.08)',
                }}
            >
                {toLabel}
            </motion.span>
        </div>
    );
}
