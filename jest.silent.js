// Custom Jest configuration to suppress warnings while keeping test output clean
module.exports = {
    reporters: [
      // Keep the default reporter for test results
      'default',
      
      // Add silent reporter to filter unwanted output
      ['jest-silent-reporter', { 
        useDots: true,          // Shows progress as ....
        showPaths: false,       // Hides file paths
        showWarnings: false,    // Hides all warnings
        showDeprecations: false // Hides deprecation notices
      }]
    ],
    
    // Optional: Add your existing Jest config here
    testEnvironment: 'jsdom',   // Example: Keep your existing env
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'] // Example setup file
  }