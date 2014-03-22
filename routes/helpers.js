var moment = require('moment');

var dateFormatter = function(createdDate){
	console.log(createdDate);
	return moment(createdDate).fromNow();
}
exports.dateFormatter = dateFormatter;

exports.variety = [
	{label: '', value: ''},
	{label: 'Cabernet Sauvignon', value: 'Cabernet Sauvignon'},
	{label: 'Chardonnay', value: 'Chardonnay'},
	{label: 'Gewurztraminer', value: 'Gewurztraminer'},
	{label: 'Malbec', value: 'Malbec'},
	{label: 'Merlot', value: 'Merlot'},
	{label: 'Pinot Grigio', value: 'Pinot Grigio'},
	{label: 'Pinot Noir', value: 'Pinot Noir'},
	{label: 'Reisling', value: 'Reisling'},
	{label: 'Sauvignon Blanc', value: 'Sauvignon Blanc'},
	{label: 'Syrah/Shiraz ', value: 'Syrah/Shiraz'},
	{label: 'Sémillon', value: 'Sémillon'},
	{label: 'Viognier', value: 'Viognier'},
	{label: 'Zinfandel', value: 'Zinfandel'}
];

exports.grapes = [
	{label: '', value: ''},
	{label: 'Champagne', value:'Champagne'},
	{label: 'Prosecco', value: 'Prosecco'},
	{label: 'Red', value: 'Red'},
	{label: 'Rose',value: 'Rose'},
	{label: 'Sparkling', value: 'Sparkling'},
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