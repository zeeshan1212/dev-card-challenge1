import { motion } from "framer-motion"; // For animations
import {
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";
import "./DevCard.css";

const DevCard = () => {
  const cardVariants = {
    initial: { scale: 1, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" },
    hover: {
      scale: 1.05,
      boxShadow:
        "0px 4px 8px rgba(0, 0, 255, 0.3), 0px 6px 12px rgba(0, 0, 255, 0.5), 0px 8px 16px rgba(0, 0, 255, 0.7)",
      transition: { duration: 0.3 },
    },
  };

  const mainCardVariants = {
    initial: { scale: 1, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={mainCardVariants}
      initial="initial"
      whileHover="hover"
      style={{ borderRadius: "15px" }}
    >
      <div
        style={{
          width: "80%",
          minWidth: "250px",
          margin: "auto",
          borderRadius: "15px",
          overflow: "hidden",
          marginBottom: "1rem",
          backgroundColor: "#343434",
          paddingBottom: "5px",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
          transition: "box-shadow 0.3s ease",
        }}
        className="box"
      >
        <div>
          <img
            src="banner.webp"
            style={{ width: "100%", height: "180px", objectFit: "cover" }} // Reduced height
            alt="Profile Avatar"
          />
        </div>
        <div style={{ padding: "15px", position: "relative", top: "-60px" }}>
          <div>
            <img
              src="unnamed.png"
              width={80}
              style={{
                borderRadius: "50%",
                border: "4px solid #fcca46",
              }}
              alt="Profile Avatar"
            />
          </div>
          <div>
            <div>
              <h2
                style={{
                  color: "#FFFFFF",
                  textShadow: "2px 2px 4px rgba(144, 238, 144, 0.7)",
                  fontWeight: "700",
                  margin: "0px",
                }}
              >
                Tony Stark
              </h2>
              <p
                style={{
                  color: "#B0B0B0",
                  marginBottom: "10px",
                }}
              >
                Developer Advocate
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginBottom: "10px",
                justifyContent: "center",
              }}
            >
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                style={{
                  background:
                    "linear-gradient(to bottom, #2f2f2f, #2f2f2f, #2f2f2f, gray)",
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  padding: "5px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <IconBrandGithub
                  style={{ color: "#FFFFFF", fontSize: "1.2rem" }}
                />
              </motion.div>
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                style={{
                  background:
                    "linear-gradient(to bottom, #2f2f2f, #2f2f2f, #2f2f2f, gray)",
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  padding: "5px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                  transition: "border 0.3s, box-shadow 0.3s",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <IconBrandTwitter
                  style={{ color: "#FFFFFF", fontSize: "1.2rem" }}
                />
              </motion.div>
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                style={{
                  background:
                    "linear-gradient(to bottom, #2f2f2f, #2f2f2f, #2f2f2f, gray)",
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  padding: "5px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                  transition: "border 0.3s, box-shadow 0.3s",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <IconBrandWhatsapp
                  style={{ color: "#FFFFFF", fontSize: "1.2rem" }}
                />
              </motion.div>
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                style={{
                  background:
                    "linear-gradient(to bottom, #2f2f2f, #2f2f2f, #2f2f2f, gray)",
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  padding: "5px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                  transition: "border 0.3s, box-shadow 0.3s",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <IconBrandFacebook
                  style={{ color: "#FFFFFF", fontSize: "1.2rem" }}
                />
              </motion.div>
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                style={{
                  background:
                    "linear-gradient(to bottom, #2f2f2f, #2f2f2f, #2f2f2f, gray)",
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  padding: "5px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                  transition: "border 0.3s, box-shadow 0.3s",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <IconBrandInstagram
                  style={{ color: "#FFFFFF", fontSize: "1.2rem" }}
                />
              </motion.div>
            </div>

            <div style={{ display: "flex", gap: "25px", marginTop: "15px" }}>
              <div>
                <h3
                  style={{
                    color: "#FFFFFF",
                    textShadow: "2px 2px 4px rgba(144, 238, 144, 0.7)",
                  }}
                >
                  120
                </h3>
                <p style={{ color: "#B0B0B0" }}>Issues Resolved</p>
              </div>
              <div>
                <h3
                  style={{
                    color: "#FFFFFF",
                    textShadow: "2px 2px 4px rgba(144, 238, 144, 0.7)",
                  }}
                >
                  $3400
                </h3>
                <p style={{ color: "#B0B0B0" }}>Bounties Earned</p>
              </div>
              <div>
                <h3
                  style={{
                    color: "#FFFFFF",
                    textShadow: "2px 2px 4px rgba(144, 238, 144, 0.7)",
                  }}
                >
                  15
                </h3>
                <p style={{ color: "#B0B0B0" }}>Challenges Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DevCard;
