import { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { FiLayers, FiCode, FiX } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Signin = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.dismiss();
    navigate("/");
  };


  // Logo start...
  const ProjectUILogo = ({ size = 70 }) => (
    <motion.div
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 8, scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative flex items-center justify-center rounded-2xl shadow-lg cursor-pointer"
      style={{
        width: size,
        height: size,
        background:
          "linear-gradient(135deg, #8AD0DA 0%, #479ED3 50%, #3BD7C0 100%)",
      }}
    >
      <FiLayers
        size={size * 0.3}
        className="absolute text-white opacity-90 -translate-y-0.5"
      />
      <FiCode
        size={size * 0.22}
        className="absolute text-white/90 translate-y-1"
      />
      <HiOutlineSparkles
        size={size * 0.15}
        className="absolute text-white/80 top-[10%] right-[10%]"
      />
    </motion.div>
  );
  // logo end...

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2a2a2a",
        padding: "1rem 1.5rem",
        overflow: "auto",
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: "#333",
          borderRadius: "1.5rem",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          width: "100%",
          maxWidth: "28rem",
          padding: "1.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
        className="hover:shadow-xl transition-shadow duration-300"
      >
        <button
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: "#444",
            color: "#ccc",
            transition: "background-color 0.2s",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#555")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#444")}
        >
          <FiX size={24} />
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.25rem",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <ProjectUILogo size={70} />
        </div>

        <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "#007bff",
            }}
          >
            Welcome back
          </h1>
          <p style={{ color: "#ccc", fontSize: "0.875rem" }}>
            Sign in to continue your journey with{" "}
            <span style={{ fontWeight: "600" }}>ProjectUI</span>.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            width: "100%",
            marginBottom: "0.75rem",
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid #666",
              borderRadius: "0.5rem",
              backgroundColor: "transparent",
              color: "#ccc",
              cursor: "pointer",
              transition: "transform 0.2s",
              width: "100%",
            }}
            className="hover:scale-105"
          >
            <FaGoogle /> Continue with Google
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid #666",
              borderRadius: "0.5rem",
              backgroundColor: "transparent",
              color: "#ccc",
              cursor: "pointer",
              transition: "transform 0.2s",
              width: "100%",
            }}
            className="hover:scale-105"
          >
            <FaGithub /> Continue with GitHub
          </button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: "0.5rem 0",
          }}
        >
          <span style={{ color: "#888", fontSize: "0.875rem" }}>or</span>
        </div>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            width: "100%",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Email address"
            style={{
              width: "100%",
              padding: "0.5rem 0.75rem",
              border: "1px solid #666",
              borderRadius: "0.5rem",
              backgroundColor: "#444",
              color: "#ccc",
            }}
            required
            autoComplete="email"
            spellCheck={false}
          />

          <div
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem 3rem 0.5rem 0.75rem",
                border: "1px solid #666",
                borderRadius: "0.5rem",
                backgroundColor: "#444",
                color: "#ccc",
              }}
              autoComplete="current-password"
              spellCheck={false}
            />
            <div
              style={{
                position: "absolute",
                right: "0.75rem",
                cursor: "pointer",
                color: "#aaa",
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          <div style={{ textAlign: "right", marginTop: "-0.5rem" }}>
            <span
              style={{
                color: "#007bff",
                fontSize: "0.875rem",
                fontWeight: "600",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.2s",
              width: "100%",
              marginTop: "0.5rem",
            }}
            className="hover:scale-105"
          >
            Sign In <ArrowRight size={20} />
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            color: "#ccc",
            fontSize: "0.875rem",
            marginTop: "0.75rem",
          }}
        >
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/auth")}  // add your routes
            style={{
              color: "#007bff",
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Sign up
          </span>
        </p>

        <p
          style={{
            textAlign: "center",
            color: "#888",
            fontSize: "0.75rem",
            marginTop: "1.25rem",
          }}
        >
          Made with <span style={{ color: "#ff6b6b" }}>❤️</span>{" "}
          <span style={{ color: "#007bff", fontWeight: "600" }}>
            ProjectUI Team
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Signin;
