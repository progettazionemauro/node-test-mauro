const fs =require('fs');
fs.readFile('testo.txt', 'utf8', (error,data) => {
	if (error) {console.error(error)}
		else {
			console.log(data)
		}
})


// Tutorial: https://nodejs.dev/learn
// GIT :https://dont-be-afraid-to-commit.readthedocs.io/en/latest/git/commandlinegit.html
// Per stage vedere QUI: https://www.nobledesktop.com/learn/git/stage-commit-files