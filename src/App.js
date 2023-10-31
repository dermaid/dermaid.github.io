import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Reports from "./Reports"
import Navbar from "./Navbar";
import './styles.css';

function Main () {

  return (
    
    <div className="Main">
      <div className="div">
        <Navbar></Navbar>
        <div className="div-9" id="aboutSection">
          <div className="div-10">
            <div className="div-11" >Dermaid </div>
            <div className="div-12" >
              This is the project page for CS491. This page is currently being
              updated, we will be adding more sections shortly. For more
              questions about our project ‘Dermaid’ please feel free to contact
              any of the team members. You can learn more about our project very
              soon :)
            </div>
          </div>
        </div>
        <div className="div-13" id="teamSection">
          <div className="div-14">
            <div className="div-15">Our team</div>
            <div className="div-16">We are a team of four.</div>
          </div>
          <div className="div-17">
            <div className="div-18">
              <div className="div-19">
                <div className="column">
                  <div className="div-20">
                    <img
                      loading="lazy"
                      srcSet="saad.jpeg"
                     
                      className="img-2"
                    />
                    <div className="div-21">
                      <div className="div-22">Saad Khan</div>
                      <div className="div-23">CS Senior Year Student</div>
                    </div>
                    <div className="div-24">
                      <a href="https://www.linkedin.com/in/saad-khan-6a30641b2/" target="_blank" rel="noopener noreferrer">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/48486f33-23d2-43f3-a026-4e8653b9633c?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/48486f33-23d2-43f3-a026-4e8653b9633c?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48486f33-23d2-43f3-a026-4e8653b9633c?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/48486f33-23d2-43f3-a026-4e8653b9633c?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/48486f33-23d2-43f3-a026-4e8653b9633c?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48486f33-23d2-43f3-a026-4e8653b9633c?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/48486f33-23d2-43f3-a026-4e8653b9633c?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/48486f33-23d2-43f3-a026-4e8653b9633c?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                        className="img-3"
                      />
                      </a>
                      <a href="mailto:saad.khan@ug.bilkent.edu.tr">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                        className="img-4"
                      />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="column-2">
                  <div className="div-25">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/985592d9-6359-47cf-8ef2-7c120a068d17?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/985592d9-6359-47cf-8ef2-7c120a068d17?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/985592d9-6359-47cf-8ef2-7c120a068d17?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/985592d9-6359-47cf-8ef2-7c120a068d17?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/985592d9-6359-47cf-8ef2-7c120a068d17?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/985592d9-6359-47cf-8ef2-7c120a068d17?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/985592d9-6359-47cf-8ef2-7c120a068d17?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/985592d9-6359-47cf-8ef2-7c120a068d17?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                      className="img-5"
                    />
                    <div className="div-26">
                      <div className="div-27">Emirhan Büyükkonuklu</div>
                      <div className="div-28">CS Senior Year Student</div>
                    </div>
                    <div className="div-29">
                    <a href="https://www.linkedin.com/in/emirhan-büyükkonuklu-5839a81b4" target="_blank" rel="noopener noreferrer">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/70fedcb3-1e55-47be-a306-78ff6d27d08b?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/70fedcb3-1e55-47be-a306-78ff6d27d08b?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70fedcb3-1e55-47be-a306-78ff6d27d08b?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/70fedcb3-1e55-47be-a306-78ff6d27d08b?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/70fedcb3-1e55-47be-a306-78ff6d27d08b?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70fedcb3-1e55-47be-a306-78ff6d27d08b?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/70fedcb3-1e55-47be-a306-78ff6d27d08b?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/70fedcb3-1e55-47be-a306-78ff6d27d08b?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                        className="img-6"
                      />
                      </a>
                      <a href="mailto:e.buyukkonuklu@ug.bilkent.edu.tr">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                        className="img-4"
                      />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-30">
              <div className="div-31">
                <div className="column">
                  <div className="div-32">
                    <img
                      loading="lazy"
                      srcSet="hasan.jpeg"
                      className="img-8"
                    />
                    <div className="div-33">
                      <div className="div-34">Hasan Yarkın Kurt</div>
                      <div className="div-35">CS Senior Year Student</div>
                    </div>
                    <div className="div-36">
                    <a href="https://www.linkedin.com/in/hasan-yarkın-kurt" target="_blank" rel="noopener noreferrer">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f120656-8140-4ba9-842e-ebfab615ea16?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f120656-8140-4ba9-842e-ebfab615ea16?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f120656-8140-4ba9-842e-ebfab615ea16?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f120656-8140-4ba9-842e-ebfab615ea16?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f120656-8140-4ba9-842e-ebfab615ea16?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f120656-8140-4ba9-842e-ebfab615ea16?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f120656-8140-4ba9-842e-ebfab615ea16?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f120656-8140-4ba9-842e-ebfab615ea16?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                        className="img-9"
                      />
                      </a>
                      <a href="mailto:yarkin.kurt@ug.bilkent.edu.tr">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                        className="img-4"
                      />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="column-3">
                  <div className="div-37">
                    <img
                      loading="lazy"
                      srcSet="goktug.jpeg"
                      className="img-11"
                    />
                    <div className="div-38">
                      <div className="div-39">Göktuğ Kuşcu</div>
                      <div className="div-40">CS Senior Year Student</div>
                    </div>
                    <div className="div-41">
                    <a href="https://www.linkedin.com/in/göktuğ-kuşcu-b62233243" target="_blank" rel="noopener noreferrer">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                        className="img-12"
                      />
                      </a>
                      <a href="mailto:goktug.kuscu@ug.bilkent.edu.tr">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                        className="img-4"
                      />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-42" id="supervisorSection">
          <div className="div-43">Our Supervisor and Innovation Expert</div>
          <div className="div-44">
            <div className="div-45">
              <div className="column">
                <div className="div-46">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                    className="img-14"
                  />
                  <div className="div-47">
                    <div className="div-48">Sinem Sav</div>
                    <div className="div-49">Supervisor</div>
                  </div>
                  <div className="div-50">
                  <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                        className="img-12"
                      />
                      </a>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                      className="img-19"
                    />
                    </a>
                    <a href="mailto:saad.khan@ug.bilkent.edu.tr">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                        className="img-4"
                      />
                      </a>
                  </div>
                </div>
              </div>
              <div className="column-4">
                <div className="div-51">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dcd13f2d-2d9a-4a51-81d7-786906fc81bc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                    className="img-17"
                  />
                  <div className="div-52">
                    <div className="div-53">Deniz Katırcıoğlu Öztürk</div>
                    <div className="div-54">Innovation Expert</div>
                  </div>
                  <div className="div-55">
                      <a href="https://www.linkedin.com/in/denizkatircioglu" target="_blank" rel="noopener noreferrer">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/63f958c4-42db-4b5b-9314-97ac013288b3?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                        className="img-12"
                      />
                      </a>
                    <a href="https://www.denizkatircioglu.com" target="_blank" rel="noopener noreferrer">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/79b21a62-e700-4186-8ff5-db1253b0d218?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                      className="img-19"
                    />
                    </a>
                    <a href="mailto:denizkatircioglu@gmail.com">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e45cedc6-fb71-4ad7-816d-5a1a83d6da94?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
                        className="img-4"
                      />
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-56" id="contactSection">
          <div className="div-57">Contact us</div>
          <div className="div-58">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/76949a6c-c425-4777-ad88-e1c29578b249?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/76949a6c-c425-4777-ad88-e1c29578b249?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76949a6c-c425-4777-ad88-e1c29578b249?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/76949a6c-c425-4777-ad88-e1c29578b249?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/76949a6c-c425-4777-ad88-e1c29578b249?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/76949a6c-c425-4777-ad88-e1c29578b249?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/76949a6c-c425-4777-ad88-e1c29578b249?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/76949a6c-c425-4777-ad88-e1c29578b249?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
              className="img-20"
            />
            <div className="div-59">
              <div className="div-60">Email</div>
              <div className="div-61">
                Please email us on personal emails or contact us through
                LinkedIn, we will be providing an official email very soon!
              </div>
            </div>
          </div>
        </div>
        <div className="div-62">
          <div className="div-63">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/49922436-33af-472c-a63a-68fc41685dbc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/49922436-33af-472c-a63a-68fc41685dbc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49922436-33af-472c-a63a-68fc41685dbc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/49922436-33af-472c-a63a-68fc41685dbc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/49922436-33af-472c-a63a-68fc41685dbc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49922436-33af-472c-a63a-68fc41685dbc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/49922436-33af-472c-a63a-68fc41685dbc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/49922436-33af-472c-a63a-68fc41685dbc?apiKey=c37f206b38aa4d1b83ed5b2714f09684&"
              className="img-21"
            />
            <div className="div-64">
              <div className="div-65">Contact Us</div>
              <div className="div-66">FAQs</div>
            </div>
          </div>
          <div className="div-67">
            <div className="div-68" />
            <div className="div-69">© 2023 Dermaid All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Main;
