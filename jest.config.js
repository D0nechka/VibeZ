module.exports = {
    verbose: true,
    testMatch: [ '**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)' ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [ '<rootDir>/src/app/jest/setupTests.ts' ],
};