import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import DecipherText from './DecipherText';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SENT

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('SENDING');
    
    // Simulate transmission delay
    setTimeout(() => {
      setStatus('SENT');
      alert(` Transmission Received. Over and Out.`);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('IDLE'), 3000);
    }, 2000);
  };

  return (
    <section className={styles.contact}>
      <div className={styles.gridOverlay}></div>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>
          <DecipherText text="CONTACT_UPLINK" delay={300} />
        </h2>
        <div className={styles.headerLine}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.scanline}></div>
        {/* Terminal Header */}
        <div className={styles.terminalHeader}>
          <div className={styles.terminalControls}>
            <span className={`${styles.control} ${styles.close}`}></span>
            <span className={`${styles.control} ${styles.minimize}`}></span>
            <span className={`${styles.control} ${styles.maximize}`}></span>
          </div>
          <div className={styles.terminalTitle}>
            <span className={styles.desktopTitle}>COMM_UPLINK_V.2.4</span>
            <span className={styles.mobileTitle}>COMM_UPLINK</span>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.statusLine}>
            &gt; INITIALIZING SECURE CONNECTION... <span className={styles.blink}>_</span>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <div className={styles.formGroup}>
                <div className={styles.fieldHeader}>
                  <label className={styles.label}>// AGENT_NAME</label>
                  <span className={styles.fieldStatus}>REQUIRED</span>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  autoComplete="off"
                  placeholder="IDENTIFY SELF..."
                />
              </div>
              <div className={styles.formGroup}>
                <div className={styles.fieldHeader}>
                  <label className={styles.label}>// CONTACT_FREQ</label>
                  <span className={styles.fieldStatus}>COMM_LINK</span>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                  autoComplete="off"
                  placeholder="target@domain.ext"
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <div className={styles.fieldHeader}>
                <label className={styles.label}>// TRANSMISSION_DATA</label>
                <span className={styles.fieldStatus}>ENCRYPT_ENABLED</span>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                required
                placeholder="TYPE MESSAGE HERE..."
              ></textarea>
            </div>
            
            <button type="submit" className={styles.submitBtn} disabled={status === 'SENDING'}>
              <span className={styles.btnText}>
                {status === 'IDLE' && 'INITIATE UPLOAD'}
                {status === 'SENDING' && 'UPLOADING...'}
                {status === 'SENT' && 'UPLOAD COMPLETE'}
              </span>
            </button>
          </form>
        </div>

        {/* Social Links Removed - Moved to Footer */}
      </div>
    </section>
  );
};

export default Contact;