import { useEffect, useRef } from 'react';

const WA_BOOK = "https://wa.me/917702521717?text=Hi%20Cine%20Hub%2C%20I%20want%20to%20book%20a%20shoot!";

function IPhoneMockup() {
  return (
    <div className="hero-iphone" style={{
      maxWidth: 280, width: '100%', margin: '0 auto',
      paddingRight: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, position: 'relative',
    }}>
      {/* Red glow behind phone */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 200, height: 200, borderRadius: '50%',
        background: 'rgba(255,26,26,0.15)',
        filter: 'blur(60px)',
        zIndex: 0, pointerEvents: 'none',
      }} />

      <div style={{ animation: 'phoneFloat 3s ease-in-out infinite', position: 'relative', zIndex: 1 }}>
        {/* iPhone frame */}
        <div style={{
          width: 220, height: 440,
          background: '#0d0d0d',
          borderRadius: 40,
          border: '2px solid rgba(255,255,255,0.12)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.06)',
          position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
        }}>
          {/* Notch */}
          <div style={{
            position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
            width: 80, height: 24, background: '#0d0d0d',
            borderRadius: '0 0 16px 16px', zIndex: 10,
            boxShadow: '0 1px 0 rgba(255,255,255,0.06)',
          }} />

          {/* Screen */}
          <div style={{
            flex: 1,
            background: 'linear-gradient(160deg, #1a0000 0%, #0d0d0d 100%)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '44px 18px 28px',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Screen red glow */}
            <div style={{
              position: 'absolute', top: '30%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 160, height: 160,
              background: 'radial-gradient(circle, rgba(255,26,26,0.22) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Cine Hub label */}
            <span style={{
              fontFamily: "'Great Vibes', cursive",
              color: '#FF1A1A', fontSize: '1.2rem',
              marginBottom: 14, opacity: 0.95, position: 'relative',
            }}>Cine Hub</span>

            {/* Main text */}
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: '#F0F0F0', fontWeight: 700,
              fontSize: '1rem', textAlign: 'center',
              lineHeight: 1.4, marginBottom: 8,
              letterSpacing: '0.3px', position: 'relative',
            }}>
              Reels Created &<br />Delivered On The Spot
            </p>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#555', fontSize: '0.65rem',
              textAlign: 'center', letterSpacing: '0.5px',
              marginBottom: 28, position: 'relative',
            }}>
              Shot on iPhone • Delivered in 10 mins
            </p>

            {/* Record button with pulse ring */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Pulse ring */}
              <div style={{
                position: 'absolute', inset: -8,
                borderRadius: '50%',
                border: '2px solid rgba(255,26,26,0.4)',
                animation: 'recordPing 1.5s ease-out infinite',
              }} />
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                border: '2.5px solid rgba(255,26,26,0.6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: '#FF1A1A',
                  boxShadow: '0 0 20px rgba(255,26,26,0.6)',
                }} />
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div style={{
            height: 26, background: '#0d0d0d',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 72, height: 4, borderRadius: 9999, background: 'rgba(255,255,255,0.2)' }} />
          </div>
        </div>

        {/* Side buttons */}
        <div style={{ position: 'absolute', left: -3, top: 90, width: 3, height: 28, background: 'rgba(255,255,255,0.1)', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -3, top: 130, width: 3, height: 28, background: 'rgba(255,255,255,0.1)', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', right: -3, top: 110, width: 3, height: 48, background: 'rgba(255,255,255,0.1)', borderRadius: '0 2px 2px 0' }} />
      </div>
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.05 });
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', paddingTop: 90, paddingBottom: 60,
      overflow: 'hidden',
    }}>
      {/* Top glow line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '80%', maxWidth: 900, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,26,26,0.5), transparent)',
        pointerEvents: 'none',
      }} />

      <div className="hero-inner" style={{
        width: '100%', maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 32, position: 'relative', zIndex: 1,
      }}>

        {/* Left: text — 55% */}
        <div className="hero-text" style={{ flex: '0 0 55%', maxWidth: '55%', paddingLeft: '5%' }}>

          {/* Eyebrow */}
          <div className="reveal" style={{ marginBottom: 32 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,26,26,0.08)', border: '1px solid rgba(255,26,26,0.35)',
              borderRadius: 9999, padding: '9px 24px',
              fontFamily: "'Great Vibes', cursive", color: '#FF1A1A', fontSize: '1.3rem',
            }}>
              <span className="red-dot-pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF1A1A', flexShrink: 0, display: 'block' }} />
              World's First Quick Content Service
            </span>
          </div>

          {/* Sub-headline */}
          <p className="reveal delay-1 hero-sub" style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: '#ffffff',
            fontWeight: 500,
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            letterSpacing: '1px',
            marginBottom: 10,
          }}>
            We Shoot • Edit • Deliver Reels in
          </p>

          {/* Big headline */}
          <h1 className="reveal delay-2 hero-headline" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: 'clamp(5rem, 12vw, 10rem)',
            color: '#FF1A1A',
            lineHeight: 0.9,
            marginBottom: 48,
            textShadow: '0 0 80px rgba(255,26,26,0.5), 0 0 40px rgba(255,26,26,0.3)',
            letterSpacing: '-1px',
          }}>
            10 Minutes
            <sup style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(1.2rem, 2vw, 2rem)',
              position: 'relative', top: '-0.5em',
              letterSpacing: 0, opacity: 0.7, fontStyle: 'normal',
            }}>*</sup>
          </h1>

          {/* Badges */}
          <div className="reveal delay-3 hero-badges" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 48 }}>
            {['🕐 24/7 Available', '✅ ISO Certified', "📍 Vijayawada's #1"].map((b) => (
              <span key={b} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 9999, padding: '8px 20px',
                fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem',
                color: '#888', letterSpacing: '0.3px',
                transition: 'border-color 0.25s, color 0.25s, background 0.25s',
                cursor: 'default',
              }}
                onMouseEnter={(e) => { const s = e.currentTarget as HTMLSpanElement; s.style.borderColor = 'rgba(255,26,26,0.35)'; s.style.color = '#D0D0D0'; s.style.background = 'rgba(255,26,26,0.05)'; }}
                onMouseLeave={(e) => { const s = e.currentTarget as HTMLSpanElement; s.style.borderColor = 'rgba(255,255,255,0.09)'; s.style.color = '#888'; s.style.background = 'rgba(255,255,255,0.03)'; }}
              >
                {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="reveal delay-4 hero-ctas" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, marginBottom: 80 }}>
            <button onClick={() => window.open(WA_BOOK, '_blank')} className="btn-primary" style={{ fontSize: '0.85rem', padding: '16px 44px' }}>
              Book Now
            </button>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent', border: '1.5px solid rgba(255,255,255,0.25)',
                borderRadius: 9999, padding: '16px 44px',
                color: 'rgba(240,240,240,0.7)', fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1.2px',
                textTransform: 'uppercase', cursor: 'pointer',
                transition: 'border-color 0.3s, color 0.3s, background 0.3s, transform 0.25s',
              }}
              onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = 'rgba(255,255,255,0.6)'; b.style.color = '#F0F0F0'; b.style.background = 'rgba(255,255,255,0.04)'; b.style.transform = 'scale(1.03) translateY(-1px)'; }}
              onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.borderColor = 'rgba(255,255,255,0.25)'; b.style.color = 'rgba(240,240,240,0.7)'; b.style.background = 'transparent'; b.style.transform = 'scale(1) translateY(0)'; }}
            >
              View Packages
            </button>
          </div>

          {/* Shimmer + trust badges */}
          <div className="reveal delay-5" style={{ marginBottom: 32 }}>
            <div className="shimmer-line" />
          </div>
          <div className="reveal delay-6" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 32 }}>
            {[{ icon: '⚡', text: '10-Min Delivery' }, { icon: '🎬', text: 'Pro Cinematographers' }, { icon: '📍', text: 'Based in Vijayawada' }].map(({ icon, text }, i) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                {i > 0 && <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.07)' }} />}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", color: '#666', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 500 }}>{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: iPhone mockup — 40% */}
        <div style={{ flex: '0 0 40%', maxWidth: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IPhoneMockup />
        </div>
      </div>
    </section>
  );
}
