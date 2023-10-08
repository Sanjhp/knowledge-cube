import React, { useState, useRef } from "react";
import "./EditCourse.css"; // Add your CSS file for styling

function EditCourse() {
  const [videoFile, setVideoFile] = useState(null);
  const [volume, setVolume] = useState(1);
  const [text, setText] = useState("Your Text Here");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleVideoUpload = (e) => {
    const selectedFile = e.target.files[0];
    setVideoFile(URL.createObjectURL(selectedFile));
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = e.target.value;
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTextOverlay = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!video) {
      console.error("Video element not found.");
      return;
    }

    // Set canvas size to match video dimensions
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw video frame on canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Add text overlay
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(text, 20, canvas.height - 20); // Adjust position as needed

    // Create a new video element with the canvas data
    const newVideo = document.createElement("video");
    newVideo.controls = true;
    const newSource = document.createElement("source");
    newSource.src = canvas.toDataURL("video/mp4");
    newSource.type = "video/mp4";
    newVideo.appendChild(newSource);

    // Replace the original video element with the new video
    const videoContainer = video.parentNode;
    if (videoContainer) {
      videoContainer.replaceChild(newVideo, video);
      newVideo.play();
    } else {
      console.error("Video container not found.");
    }
  };

  return (
    <div>
      <h1>Video Editor</h1>
      <label className="custom-file-upload">
        <input type="file" accept="video/*" onChange={handleVideoUpload} />
        Upload Video
      </label>
      <br />
      {videoFile && (
        <div>
          <video ref={videoRef} controls>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <br />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Text"
            value={text}
            onChange={handleTextChange}
          />
          <button onClick={handleAddTextOverlay}>Add Text Overlay</button>
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
    </div>
  );
}

export default EditCourse;
