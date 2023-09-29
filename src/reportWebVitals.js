const reportWebVitals = (onPerfEntry) => {
  if (typeof onPerfEntry === "function" && typeof window !== "undefined") {
    import("web-vitals").then(function (webVitals) {
      webVitals.getCLS(onPerfEntry);
      webVitals.getFID(onPerfEntry);
      webVitals.getFCP(onPerfEntry);
      webVitals.getLCP(onPerfEntry);
      webVitals.getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
