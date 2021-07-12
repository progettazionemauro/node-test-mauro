const fs =require('fs');
fs.readFile('testo.txt', 'utf8', (error,data) => {
	if (error) {console.error(error)}
		else {
			console.log(data)
		}
})
