import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Music, VolumeX, Heart, BookOpen } from 'lucide-react';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const audioRef = useRef(null);

  const openInvite = () => {
    setIsInviteOpen(true);
    setIsPlaying(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.log("Autoplay prevented by browser:", error);
        });
      }
    }, 100);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="container">
      
      {/* --- AUDIO ELEMENT --- */}
      <audio ref={audioRef} loop>
        <source src="/lagukawin.mp3" type="audio/mpeg" />
      </audio>

      {/* --- WELCOME OVERLAY --- */}
      <AnimatePresence>
        {!isInviteOpen && (
          <motion.div 
            className="welcome-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
          >
            <div className="overlay-content">
              <p className="arabic" style={{color: 'white'}}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
              <h1 className="cursive" style={{color: 'white', fontSize: '2.5rem'}}>Daniel & Aina</h1>
              <p style={{color: 'white', marginBottom: '20px'}}>Walimatul Urus</p>
              
              <button onClick={openInvite} className="btn-open">
                <BookOpen size={18} style={{marginRight: '8px'}}/>
                Buka Jemputan
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* --- MAIN CONTENT --- */}
      {isInviteOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Music Toggle Button */}
          <button className="music-toggle" onClick={toggleMusic}>
            {isPlaying ? <Music size={24} /> : <VolumeX size={24} />}
          </button>

          {/* HERO SECTION */}
          <section className="hero">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
            >
              <p className="arabic">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
              <h3 className="wedding-header">Walimatul Urus</h3>
              <div className="couple-name-big">Daniel & Aina</div>
              <h3 className="wedding-date">16 May 2026</h3>
            </motion.div>
          </section>

          {/* DETAILS SECTION */}
          <section>
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
            >
              <Heart size={30} color="#D4AF37" style={{marginBottom: '1rem'}} />
              <h2>Butiran Majlis</h2>
              
              <div className="details-card">
                <div className="info-row">
                  <Calendar size={20} color="#D4AF37"/>
                  <p><strong>Sabtu, 16 May 2026</strong></p>
                </div>
                <div className="info-row">
                  <Clock size={20} color="#D4AF37"/>
                  <p>11:30 AM - 4:00 PM</p>
                </div>
                <div className="info-row">
                  <MapPin size={20} color="#D4AF37"/>
                  <p>Dewan Pudina MBSA, Taman Bukit Subang</p>
                </div>
              </div>

              {/* Vertical Button Container */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '15px',          /* Space between buttons */
                alignItems: 'center', /* Center align */
                marginTop: '20px'
              }}>
                
                {/* Google Maps Button */}
                <a 
                  href="https://maps.app.goo.gl/5cj9Z8CBEvmRrAUr6" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn"
                  style={{ marginTop: '0', minWidth: '220px' }} /* Remove default top margin, set width */
                >
                  Lihat Lokasi (Google Maps)
                </a>

                {/* Waze Button */}
                <a 
                  href="https://ul.waze.com/ul?place=ChIJWVt5LjtQzDERIlRBEUbnTvM&ll=3.16877280%2C101.51068320&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn"
                  style={{ marginTop: '0', minWidth: '220px' }}
                >
                  Lihat Lokasi (Waze)
                </a>

              </div>
            </motion.div>
          </section>

          {/* ITINERARY */}
          <section style={{ backgroundColor: '#fafafa' }}>
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
            >
              <h2>Assalamualaikum & Salam Sejahtera</h2>
              <br/>
              <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                <li><strong>Abdul Karnain & Faziratul Shima</strong></li>
                <li><strong>(Keluarga pengantin lelaki)</strong></li>
                <li><strong>Dengan penuh kesyukuran kehadrat Illahi, kami mempersilakan</strong></li>
                <li><strong>Dato'/Datin/Dr/Tuan/Puan/Encik/Cik</strong></li>
                <li><strong>ke walimatulurus anakanda kesayangan kami</strong></li>
                <li style={{ fontFamily: 'Great Vibes', fontSize: '2.5rem', color: '#D4AF37', marginTop: '10px' }}>Daniel Zulhaiqal</li>
                <li style={{ fontFamily: 'Cinzel', fontSize: '1.5rem', color: '#2C3E50' }}>&</li>
                <li style={{ fontFamily: 'Great Vibes', fontSize: '2.5rem', color: '#D4AF37', marginBottom: '10px' }}>Aina Nurjeha</li>
              </ul>
            </motion.div>
          </section>

          {/* RSVP / CONTACT */}
          <section>
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
            >
              
              {/* GOOGLE FORM RSVP SECTION */}
              <div style={{ marginBottom: '3rem', borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
                <h2 style={{ marginBottom: '10px' }}>RSVP Kehadiran</h2>
                <p>Sila sahkan kehadiran anda:</p>
                <a 
                  href="https://forms.gle/YjpEWLncXFN8ySzZA" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn" 
                  style={{ backgroundColor: '#7248B9', color: 'white', marginTop: '15px' }}
                >
                  Isi RSVP (Google Form)
                </a>
              </div>

              <h2>Jika ada sebarang pertanyaan, sila hubungi:</h2>
              <br />

                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '15px',          
                  alignItems: 'center', 
                  marginTop: '20px'
                }}>
                    
                    {/* Abdul */}
                    <a href="https://wa.me/601111406730" className="btn" style={{ minWidth: '200px',backgroundColor: '#25D366', color: 'white' }}>
                      Whatsapp Abdul 
                    </a>

                    {/* Shima */}
                    <a href="https://wa.me/60173687849" className="btn" style={{ minWidth: '200px', backgroundColor: '#25D366', color: 'white' }}>
                      Whatsapp Shima
                    </a>

                    {/* Afif */}
                    <a href="https://wa.me/60176219120" className="btn" style={{ minWidth: '200px', backgroundColor: '#25D366', color: 'white' }}>
                      Whatsapp Afif 
                    </a>

                </div>
            </motion.div>
          </section>

          {/* FOOTER */}
          <footer style={{ padding: '2rem', textAlign: 'center', background: '#2C3E50', color: 'white' }}>
            <p className="cursive" style={{ fontSize: '1.5rem', color: 'white' }}>Terima Kasih</p>
            <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '10px' }}>
              Kami menanti kehadiran anda untuk memeriahkan majlis kami.
            </p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

export default App;