const helloWorld = require('../path/to/helloWorld'); // Adjust the path as necessary

test('returns "Hello, World!"', () => {
	expect(helloWorld()).toBe('Hello, World!');
});