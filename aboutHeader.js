import React from "react";
import "./aboutHeader.css";
import Aboutfounder from "./aboutfounder";
export default function AboutHeader() {
  return (
    <>
      <div className="header">
        <h1>Weaving Together</h1>
        <h1>Knowledge and Knowing</h1>
        <p>
          Through modern scientific inquiry, we seek to better understand a{" "}
          <br></br>
          timeless truth — humanity is deeply interconnected.
        </p>
      </div>
      <div className="discovery-heading">
        <h1>Scientific Discovery and Personal Exploration</h1>
        <div className="discovery-container"></div>
      </div>
      <div className="discovery-des">
        <div>
          <p>
            RITAMBHARA is not just another research institute; it's a unique
            platform and a research arm of Ritanveshi Yogayan foundation (RYF)
            that aims to bridge the gap between ancient Indigenous or Vedic
            research methodologies and modern techniques. We firmly believe that
            by harmonizing the wisdom of the past with the advancements of the
            present, we can unlock new dimensions of knowledge and
            understanding.
          </p>
        </div>
        <div>
          <p>
            At RITAMBHARA, our primary mission is to facilitate the fusion of
            traditional wisdom with contemporary research, fostering an
            environment where these two seemingly distinct approaches can
            coexist and complement each other. As a member, you will find a
            plethora of opportunities and benefits awaiting you:
          </p>
        </div>
        <div>
          <ol>
            <li>
              <strong>1. Holistic Learning:</strong> Gain access to a treasure
              trove of ancient wisdom from Indigenous and Vedic traditions. Our
              workshops and seminars are designed to expose you to the profound
              insights of the past that continue to hold relevance today.
            </li>
            <li>
              <strong>2. Innovative Research:</strong> Embark on groundbreaking
              research projects that combine the best of both worlds. By merging
              ancient research methodologies with modern techniques, you can
              uncover unique perspectives and solutions to complex challenges.
            </li>
            <li>
              <strong>3. Cross-Disciplinary Collaboration:</strong> RITAMBHARA
              is a vibrant hub where scholars, researchers, and experts from
              diverse fields converge. Collaborative projects provide a platform
              to exchange ideas and drive interdisciplinary innovation.
            </li>
            <li>
              <strong>4. Publication and Recognition:</strong>
              Present your research findings in our journals and publications,
              thereby sharing your insights with a global audience. Our
              institute recognizes and celebrates contributions that bridge the
              gap between ancient and modern knowledge.
            </li>
            <li>
              <strong>5. Empowerment and Empathy:</strong>
              Our institute places strong emphasis on personal growth and
              holistic development. Through mindfulness sessions and
              experiential learning, we cultivate empathy and a deeper
              understanding of our roots.
            </li>
          </ol>
        </div>
        <Aboutfounder />
      </div>
    </>
  );
}
