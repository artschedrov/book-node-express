suite('Global Tests', function () {
	test('This page have current header', function () {
		assert(document.title && document.title.match(/\S/) &&
			document.title.toUpperCase() !== 'TODO');
	});
});