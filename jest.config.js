module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/general/pdfViewer/**/*'],
    transform: {
        "node_modules/variables/.+\\.(j|t)sx?$": "babel-jest"
      },
      transformIgnorePatterns: [
        "node_modules/(?!variables/.*)"
      ]
  };