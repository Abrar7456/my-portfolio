export const SunBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Glowing Sun Core */}
      <div
        className="absolute rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400 blur-3xl opacity-80 animate-spin-slow shadow-2xl"
        style={{
          top: "60px",
          right: "60px",
          width: "180px",
          height: "180px",
          filter: "blur(45px)",
          animationDuration: "50s",
        }}
      />

      {/* Sun Halo Layer */}
      <div
        className="absolute rounded-full bg-yellow-100 opacity-30 animate-pulse"
        style={{
          top: "45px",
          right: "45px",
          width: "220px",
          height: "220px",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
};