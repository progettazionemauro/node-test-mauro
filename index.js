const fs =require('fs');
fs.readFile('testo.txt', 'utf8', (error,data) => {
	if (error) {console.error(error)}
		else {
			console.log(data)
		}
})

// Questo il rif al tutorial: https://dev.to/w3tsa/node-js-crash-course-2021-2n96
// Git Clone: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository
// Install the latest version of Git: https://adrianba.net/2021/03/09/ubuntu-latest-git/
// Insert you username: https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git