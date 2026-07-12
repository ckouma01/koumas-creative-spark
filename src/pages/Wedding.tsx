import { useState } from "react";
import { Heart, Camera, Upload, X } from "lucide-react";

const UPLOAD_URL =
  "https://ucy-my.sharepoint.com/:f:/g/personal/ckouma01_ucy_ac_cy/IgDL4dty42UmSp8J0QF-sKFUAedS-Hk-Shy6Dq3EiXfA0aA";

const Wedding = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-6"
      style={{
        background:
          "radial-gradient(ellipse at top, #faf6ee 0%, #f2ebdc 60%, #ece2cd 100%)",
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='%23b8935a' fill-opacity='0.09'><path d='M20 30c0-4 3-7 7-7 3 0 5 2 6 4 1-2 3-4 6-4 4 0 7 3 7 7 0 7-13 14-13 14S20 37 20 30z'/><path d='M56 58c0-2.5 2-4.5 4.5-4.5 1.8 0 3 1.2 3.7 2.5.7-1.3 1.9-2.5 3.7-2.5 2.5 0 4.5 2 4.5 4.5 0 4.5-8.2 9-8.2 9S56 62.5 56 58z'/><path d='M8 62c0-2 1.6-3.6 3.6-3.6 1.5 0 2.5 1 3 2 .5-1 1.5-2 3-2 2 0 3.6 1.6 3.6 3.6 0 3.6-6.6 7.2-6.6 7.2S8 65.6 8 62z'/></g></svg>\")",
        backgroundRepeat: "repeat",
        fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600&family=Playfair+Display:ital,wght@1,500;1,600;1,700&display=swap"
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
          className="text-5xl md:text-6xl leading-tight italic"
          style={{
            fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
            color: "#b8935a",
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          Λούκας
          <br />
          <span
            className="text-3xl md:text-4xl"
            style={{ color: "#a8834a", fontWeight: 500 }}
          >
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
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 600,
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