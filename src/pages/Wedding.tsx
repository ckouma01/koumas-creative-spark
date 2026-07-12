import { useState } from "react";
import { Heart, Camera, Upload, X } from "lucide-react";

// TODO: Replace with your OneDrive "Request Files" link
const UPLOAD_URL = "https://1drv.ms/REPLACE_WITH_YOUR_REQUEST_FILES_LINK";

const Wedding = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-6"
      style={{
        background:
          "radial-gradient(ellipse at top, #faf6ee 0%, #f2ebdc 60%, #ece2cd 100%)",
        fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Great+Vibes&display=swap"
        rel="stylesheet"
      />

      {/* Invitation card */}
      <div
        className="relative w-full max-w-xl mx-auto text-center px-8 py-14 md:px-14 md:py-16 animate-fade-in"
        style={{
          background: "#fbf7ee",
          border: "1px solid #c9a86a",
          boxShadow:
            "0 30px 80px -30px rgba(148, 117, 60, 0.35), 0 8px 24px -12px rgba(148,117,60,0.2)",
        }}
      >
        {/* Corner ornaments */}
        <div
          className="absolute top-4 left-4 w-10 h-10"
          style={{ borderTop: "1px solid #c9a86a", borderLeft: "1px solid #c9a86a" }}
        />
        <div
          className="absolute top-4 right-4 w-10 h-10"
          style={{ borderTop: "1px solid #c9a86a", borderRight: "1px solid #c9a86a" }}
        />
        <div
          className="absolute bottom-4 left-4 w-10 h-10"
          style={{ borderBottom: "1px solid #c9a86a", borderLeft: "1px solid #c9a86a" }}
        />
        <div
          className="absolute bottom-4 right-4 w-10 h-10"
          style={{ borderBottom: "1px solid #c9a86a", borderRight: "1px solid #c9a86a" }}
        />

        {/* Names */}
        <h1
          className="text-6xl md:text-7xl leading-tight"
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: "#b8935a",
          }}
        >
          Λούκας
          <br />
          <span className="text-4xl md:text-5xl" style={{ color: "#a8834a" }}>
            &amp;
          </span>
          <br />
          Μαρία
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-8">
          <div style={{ height: 1, width: 40, background: "#c9a86a" }} />
          <Heart className="w-4 h-4" style={{ color: "#b8935a" }} fill="#b8935a" />
          <div style={{ height: 1, width: 40, background: "#c9a86a" }} />
        </div>

        {/* Date */}
        <p
          className="text-2xl md:text-3xl tracking-[0.3em] mb-8"
          style={{ color: "#b8935a", fontWeight: 500 }}
        >
          27 | 10 | 26
        </p>

        {/* Message */}
        <p
          className="text-lg md:text-xl leading-relaxed mb-10 px-2"
          style={{ color: "#5a4a2e", fontStyle: "italic" }}
        >
          Μοιραστείτε μαζί μας τις φωτογραφίες και τα βίντεο που βγάλατε!
          <br />
          Σκανάρετε το QR και ανεβάστε τις αναμνήσεις σας.
        </p>

        {/* Upload button */}
        <button
          onClick={() => setShowModal(true)}
          className="group inline-flex items-center gap-3 px-8 py-4 text-base md:text-lg tracking-widest uppercase transition-all duration-300 hover:scale-105"
          style={{
            background: "#b8935a",
            color: "#fbf7ee",
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: "0.2em",
            boxShadow: "0 10px 30px -10px rgba(184, 147, 90, 0.6)",
          }}
        >
          <Camera className="w-5 h-5" />
          <span>Ανέβασμα Φωτογραφιών</span>
        </button>

        <p
          className="mt-8 text-sm tracking-widest uppercase"
          style={{ color: "#a8834a", letterSpacing: "0.25em" }}
        >
          Με αγάπη ♡ Ευχαριστούμε
        </p>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-fade-in"
          style={{ background: "rgba(50, 35, 15, 0.6)", backdropFilter: "blur(6px)" }}
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md text-center px-8 py-12"
            style={{
              background: "#fbf7ee",
              border: "1px solid #c9a86a",
              boxShadow: "0 30px 80px -20px rgba(0,0,0,0.4)",
            }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-1 transition-opacity hover:opacity-70"
              style={{ color: "#b8935a" }}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <Upload
              className="w-12 h-12 mx-auto mb-6"
              style={{ color: "#b8935a" }}
              strokeWidth={1.5}
            />

            <h2
              className="text-3xl mb-4"
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: "#b8935a",
              }}
            >
              Ευχαριστούμε!
            </h2>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#5a4a2e" }}
            >
              Πατήστε το κουμπί παρακάτω για να ανεβάσετε τις φωτογραφίες και τα
              βίντεό σας απευθείας στον κοινόχρηστο φάκελο.
            </p>

            <a
              href={UPLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 text-base tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: "#b8935a",
                color: "#fbf7ee",
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: "0.2em",
                boxShadow: "0 10px 30px -10px rgba(184, 147, 90, 0.6)",
              }}
            >
              <Upload className="w-4 h-4" />
              <span>Άνοιγμα Φακέλου</span>
            </a>

            <p
              className="mt-6 text-xs tracking-widest uppercase"
              style={{ color: "#a8834a", letterSpacing: "0.25em" }}
            >
              Θα ανοίξει σε νέα καρτέλα
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wedding;