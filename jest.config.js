module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>/src'],
	globals: {
		'ts-jest': {
			diagnostics: true
		}
	},
	setupFilesAfterEnv: ['./setupTests.ts'],
	coveragePathIgnorePatterns: ['/node_modules/'],
	moduleDirectories: ['.', 'node_modules']
}
