import React from "react";
import styles from "./vedio.module.css";

const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <video width="800" height="600" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
