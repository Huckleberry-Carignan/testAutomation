module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/general/pdfViewer/**/*'],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/spec/helpers/transformToNothing.js',
  },
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/spec/helpers/transformToFilename.cjs',
    '\\.(html)$': '<rootDir>/spec/helpers/transformToString.js',
    '\\.[jt]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['jest-extended', 'jest-enzyme', '<rootDir>/spec/helpers/specHelpers.tsx'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['.git', 'splat/'],
};