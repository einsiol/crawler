const fs = require('fs');


var getDictionary = function(word, data){

	const dicfile = fs.readFileSync(data);
	const wordfile = fs.readFileSync(word);

	const dicContent = JSON.parse(dicfile);
	const wordContent = JSON.parse(wordfile);

	let i = 0;

	for(var wordKey in wordContent) {
		  //dictionaryWords[exKey] = true;

		  wordKey = wordKey.toUpperCase();

		  console.log(wordKey + ' is : ' + dicContent[wordKey]);
/*
		  dicKey = dicKey.toLocaleLowerCase();

		  console.log(dicKey + ' is : ' + dicContent[dicKey]);

		  dicKey = dicKey[0].toUpperCase() + dicKey.slice(1);

		  console.log(dicKey + ' is : ' + dicContent[dicKey]);*/

		  
		  i++
	      //console.log(exKey);
	 }

	 //dictionaryWords = dictionaryWords.sort();

	 //console.log(wordContent["AngularJS"]);

	 /*fs.writeFile('dicwords.json', JSON.stringify(dictionaryWords), "utf8", function (err){
		      if (err) return console.log(err);
	 });*/
	
}

getDictionary('words.json', 'dicwords.json');