import { useEffect, useRef } from 'react';

const WA_BOOK = "https://wa.me/917702521717?text=Hi%20Cine%20Hub%2C%20I%20want%20to%20book%20a%20shoot!";

function IPhoneMockup() {
  return (
    <div className="hero-iphone" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <div style={{
        animation: 'phoneFloat 3s ease-in-out infinite',
        position: 'relative',
      }}>
        {/* iPhone frame */}
        <div style={{
          width: 240,
          height: 480,
          background: '#0d0d0d',
          borderRadius: 40,
          border: '2px solid rgba(255,255,255,0.12)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.06)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Notch */}
          <div style={{
            position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
            width: 90, height: 26,
            background: '#0d0d0d',
            borderRadius: '0 0 18px 18px',
            zIndex: 10,
            boxShadow: '0 1px 0 rgba(255,255,255,0.06)',
          }} />

          {/* Screen content */}
          <div style={{
            flex: 1,
            background: 'linear-gradient(160deg, #1a0005 0%, #0a0a0a 50%, #0d0005 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 20px 32px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Red glow */}
            <div style={{
              position: 'absolute',
              top: '30%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 180, height: 180,
              background: 'radial-gradient(circle, rgba(208,2,27,0.25) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Cine Hub label */}
            <span style={{
              fontFamily: "'Great Vibes', cursive",
              color: '#D0021B',
              fontSize: '1.1rem',
              marginBottom: 16,
              opacity: 0.9,
            }}>Cine Hub</span>

            {/* Main text */}
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: '#F0F0F0',
              fontWeight: 700,
              fontSize: '1.05rem',
              textAlign: 'center',
              lineHeight: 1.4,
              marginBottom: 10,
              letterSpacing: '0.3px',
            }}>
              Reels Created &<br />Delivered On The Spot
            </p>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#666',
              fontSize: '0.7rem',
              textAlign: 'center',
              letterSpacing: '0.5px',
              marginBottom: 32,
            }}>
              Shot on iPhone • Delivered in 10 mins
            </p>

            {/* Record button */}
            <div style={{
              width: 56, height: 56,
              borderRadius: '50%',
              border: '2.5px solid rgba(208,2,27,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              <div style={{
                width: 38, height: 38,
                borderRadius: '50%',
                background: '#D0021B',
                boxShadow: '0 0 20px rgba(208,2,27,0.5)',
              }} />
            </div>
          </div>

          {/* Home indicator */}
          <div style={{
            height: 28,
            background: '#0d0d0d',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 80, height: 4, borderRadius: 9999, background: 'rgba(255,255,255,0.2)' }} />
          </div>
        </div>

        {/* Side buttons */}
        <div style={{ position: 'absolute', left: -3, top: 100, width: 3, height: 32, background: 'rgba(255,255,255,0.1)', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -3, top: 144, width: 3, height: 32, background: 'rgba(255,255,255,0.1)', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', right: -3, top: 120, width: 3, height: 52, background: 'rgba(255,255,255,0.1)', borderRadius: '0 2px 2px 0' }} />
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
        background: 'linear-gradient(90deg, transparent, rgba(208,2,27,0.5), transparent)',
        pointerEvents: 'none',
      }} />

      <div className="hero-inner" style={{
        width: '100%', maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 48, position: 'relative', zIndex: 1,
      }}>

        {/* Left: text content */}
        <div className="hero-text" style={{ flex: 1, minWidth: 0 }}>

          {/* Eyebrow */}
          <div className="reveal" style={{ marginBottom: 36 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(208,2,27,0.07)', border: '1px solid rgba(208,2,27,0.3)',
              borderRadius: 9999, padding: '9px 24px',
              fontFamily: "'Great Vibes', cursive", color: '#D0021B', fontSize: '1.3rem',
            }}>
              <span className="red-dot-pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: '#D0021B', flexShrink: 0, display: 'block' }} />
              World's First Quick Content Service
            </span>
          </div>

          {/* Sub-headline */}
          <p className="reveal delay-1 hero-sub" style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: 'rgba(240,240,240,0.5)',
            fontWeight: 600,
            fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
            letterSpacing: '0.04em',
            marginBottom: 12,
          }}>
            We Shoot • Edit • Deliver Reels in
          </p>

          {/* Big headline */}
          <h1 className="reveal delay-2 hero-headline" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(5rem, 14vw, 11rem)',
            color: '#D0021B',
            lineHeight: 0.9,
            marginBottom: 48,
            textShadow: '0 0 100px rgba(208,2,27,0.2)',
            letterSpacing: '2px',
          }}>
            10 Minutes
            <sup style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(1.4rem, 2.5vw, 2.5rem)', position: 'relative', top: '-0.5em', letterSpacing: 0, opacity: 0.7 }}>*</sup>
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
                onMouseEnter={(e) => { const s = e.currentTarget as HTMLSpanElement; s.style.borderColor = 'rgba(208,2,27,0.35)'; s.style.color = '#D0D0D0'; s.style.background = 'rgba(208,2,27,0.05)'; }}
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

        {/* Right: iPhone mockup */}
        <IPhoneMockup />
      </div>
    </section>
  );
}
