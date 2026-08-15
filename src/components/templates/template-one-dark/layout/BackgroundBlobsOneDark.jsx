const BackgroundBlobsOneDark = ({ page, isDemo = false }) => {
  if (page !== "home") return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div className="blob-bg top-[-200px] left-[-200px]" />
      <div
        className="blob-bg bottom-[-200px] right-[-200px]"
        style={{
          animationDelay: "-5s",
          background: "linear-gradient(135deg, rgba(128, 62, 255, 0.15) 0%, rgba(45, 91, 255, 0.15) 100%)",
        }}
      />
    </div>
  );
};

export default BackgroundBlobsOneDark;
