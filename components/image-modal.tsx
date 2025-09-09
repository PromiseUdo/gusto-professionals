"use client";

import { useEffect, useState, useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./image-modal.module.css";

const ImageModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle modal visibility and manage body scroll
  const toggleModal = useCallback((open: boolean) => {
    setIsOpen(open);
    document.body.style.overflow = open ? "hidden" : "";
  }, []);

  // Show modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      toggleModal(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [toggleModal]);

  // Close modal on click outside
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggleModal(false);
    }
  };

  // Close modal on escape key press (accessibility)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        toggleModal(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, toggleModal]);

  return (
    <div
      className={`${styles.modalOverlay} ${isOpen ? styles.active : ""}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-image"
    >
      <div className={styles.modal}>
        <img
          src="/hsejob.jpeg" // Replace with your image path
          alt="Promotionalimage"
          className={styles.modalImage}
          id="modal-image"
        />
        <button
          className={styles.btnClose}
          onClick={() => toggleModal(false)}
          aria-label="Close modal"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
