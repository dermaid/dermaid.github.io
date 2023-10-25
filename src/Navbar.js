import React from 'react';
import './styles.css';
function Navbar() {
  return (
    <div className="div-2">
      <div className="div-3">
        <a href="dermaid.github.io">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7330867c-2a02-42b1-a942-2a10abceb65a?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7330867c-2a02-42b1-a942-2a10abceb65a?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7330867c-2a02-42b1-a942-2a10abceb65a?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7330867c-2a02-42b1-a942-2a10abceb65a?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7330867c-2a02-42b1-a942-2a10abceb65a?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7330867c-2a02-42b1-a942-2a10abceb65a?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7330867c-2a02-42b1-a942-2a10abceb65a?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w"
            className="img"
          />
        </a>
        <div className="div-4">
          <a href="#aboutSection" className="div-5">
            About
          </a>
          <a href="#teamSection" className="div-6">
            Team
          </a>
          <a href="#supervisorSection" className="div-7">
            Supervisors
          </a>
          <a href="/Reports" className="RepDiv">
            Reports
          </a>
          <a href="#contactSection" className="div-8">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
