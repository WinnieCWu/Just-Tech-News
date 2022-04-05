const {format_date} = require('../utils/helpers');

//write test to ensure that format_date() takes Date() obj and returns in MM/DD/YY format
test('format_date() returns a date string', () => {
    const date = new Date('2022-04-04 22:40:00');
    expect(format_date(date)).toBe('4/4/2022');
});