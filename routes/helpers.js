var moment = require('moment');

var dateFormatter = function(createdDate){
	console.log(createdDate);
	return moment(createdDate).fromNow();
}
exports.dateFormatter = dateFormatter;

exports.variety = [
	{label: 'Pinot Noir', value: 'Pinot Noir'},
	{label: 'Cabernet Sauvignon', value: 'Cabernet Sauvignon'},
	{label: 'Malbec', value: 'Malbec'},
	{label: 'Merlot', value: 'Merlot'},
	{label: 'Syrah/Shiraz ', value: 'Syrah/Shiraz'},
	{label: 'Zinfandel', value: 'Zinfandel'},
	{label: 'Chardonnay', value: 'Chardonnay'},
	{label: 'Gewurztraminer', value: 'Gewurztraminer'},
	{label: 'Pinot Grigio', value: 'Pinot Grigio'},
	{label: 'Reisling', value: 'Reisling'},
	{label: 'Sauvignon Blanc', value: 'Sauvignon Blanc'},
	{label: 'Sémillon', value: 'Sémillon'},
	{label: 'Viognier', value: 'Viognier'}
];

exports.grapes = [
	{label: 'Red', value: 'Red'},
	{label: 'White', value: 'White'}
];

var years = [];
for(var i = 2013; i >= 1950; i--){
	years.push(i);
}
exports.years = years;

var countries = [
	'USA',
	'France',
	'Spain',
	'Argentina',
	'Italy',
	'Australia',
	'New Zealand'
];

exports.countries = countries;