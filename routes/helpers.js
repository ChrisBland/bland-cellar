var moment = require('moment');

var timeFrom = function(createdDate){
	console.log(createdDate);
	if(createdDate == null || createdDate == '') return;
	return moment(createdDate).fromNow();
};

var cleanDate = function(d){
	console.log(d);
	if(d !=null && d!= ''){
		return moment(d).format("MM/DD/YYYY")
	}else{
		return '';
	}
};

var dateUtils = {
	timeFrom: timeFrom,
	moment: moment,
	cleanDate: cleanDate
};

exports.dateUtils = dateUtils

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
	{label: 'Zinfandel', value: 'Zinfandel'},
	{label: 'Other', value: 'Other'}
];

exports.grapes = [
	{label: '', value: ''},
	{label: 'Champagne', value:'Champagne'},
	{label: 'Prosecco', value: 'Prosecco'},
	{label: 'Red', value: 'Red'},
	{label: 'Rose',value: 'Rose'},
	{label: 'Sparkling', value: 'Sparkling'},
	{label: 'White', value: 'White'},
	{label: 'Other', value: 'Other'}
];

var years = [];
for(var i = 2013; i >= 1950; i--){
	years.push(i);
}
exports.years = years;

var countries = [
	'',
	'Argentina',
	'Australia',
	'France',
	'Italy',
	'New Zealand',
	'Spain',
	'USA',
	'Other'
];

exports.countries = countries;