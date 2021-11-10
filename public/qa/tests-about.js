suite('Test about page', function () {
	test('This page have link on contact page', function () {
    assert($('a[href="/contact"]').lenght);
	});
});