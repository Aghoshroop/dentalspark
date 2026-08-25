"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How much does All-on-4 cost?",
    answer: "It depends on the condition of your jaw and the materials used. We will provide an exact figure during your consultation at The Dental Spark. Flexible payment and EMI options are available to make your treatment stress-free."
  },
  {
    question: "Will it hurt?",
    answer: "Not at all. Dr. Nilam specializes in gentle, pain-free dentistry. We use advanced local anesthesia and modern techniques to ensure you are completely comfortable throughout the entire procedure."
  },
  {
    question: "Am I a candidate for implants?",
    answer: "Most patients are excellent candidates. Even if you have bone loss, procedures like bone grafting can make implants possible. We will take a 3D scan during your visit to assess your specific situation."
  },
  {
    question: "How long does it take?",
    answer: "A standard implant placement takes about an hour in the chair. Full integration and final crown placement typically take 3 to 6 months, though we ensure you never leave the clinic without a temporary smile."
  },
  {
    question: "I was told there is no bone. Is that the end?",
    answer: "Not necessarily. With modern bone grafting techniques and advanced implant designs, we can often rebuild the necessary bone structure to safely and predictably support your new teeth."
  },
  {
    question: "Is this permanent, or will I redo it in five years?",
    answer: "Dental implants are designed to be a permanent, lifelong solution. Unlike traditional bridges or dentures, with proper oral hygiene and regular check-ups, they can last the rest of your life."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section 
      style={{
        backgroundColor: "#f4f3ed",
        // Graph paper grid pattern matching the previous sections
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "24px 24px",
        padding: "4rem 0 8rem 0",
        position: "relative"
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 4vw", display: "flex", flexWrap: "wrap", gap: "6rem" }}>
        
        {/* Left Side: Headline & CTA */}
        <div style={{ flex: "1 1 350px", position: "sticky", top: "120px", alignSelf: "flex-start" }}>
          <span style={{ color: "#bfa573", fontSize: "0.75rem", letterSpacing: "1px", fontWeight: 700, textTransform: "uppercase", marginBottom: "1rem", display: "block" }}>
            FAQ
          </span>
          <h2 style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 700, margin: "0 0 1.5rem 0", letterSpacing: "-1.5px", color: "#111", lineHeight: 1 }}>
            Frequently<br/>asked questions.
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.5, marginBottom: "2.5rem", maxWidth: "320px" }}>
            Still unsure about something? The fastest answer is a free consultation — an honest look at your case, no pressure.
          </p>
          <a 
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.8rem",
              backgroundColor: "#1a1a1a",
              color: "#fff",
              padding: "1rem 2rem",
              borderRadius: "30px",
              fontSize: "0.95rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#333"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1a1a1a"}
          >
            Book a consultation
            <span style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              width: "24px", 
              height: "24px", 
              borderRadius: "50%", 
              backgroundColor: "rgba(255,255,255,0.1)",
              fontSize: "1.1rem"
            }}>
              →
            </span>
          </a>
        </div>

        {/* Right Side: Accordion */}
        <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                style={{ 
                  borderBottom: "1px solid rgba(0,0,0,0.1)", 
                  padding: "2rem 0",
                  cursor: "pointer"
                }}
                onClick={() => toggleFAQ(index)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "2rem" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 600, color: "#111", margin: 0, lineHeight: 1.3 }}>
                    {faq.question}
                  </h3>
                  
                  {/* Toggle Button (+ / -) */}
                  <div style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: isOpen ? "#cfae70" : "rgba(0,0,0,0.05)",
                    color: isOpen ? "#fff" : "#111",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    fontWeight: 300,
                    flexShrink: 0,
                    transition: "all 0.3s ease"
                  }}>
                    {isOpen ? "−" : "+"}
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: "1rem" }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{ color: "#666", fontSize: "1.05rem", lineHeight: 1.6, margin: 0, maxWidth: "90%" }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
