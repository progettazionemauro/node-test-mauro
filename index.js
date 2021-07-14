const fs =require('fs');
fs.readFile('testo.txt', 'utf8', (error,data) => {
	if (error) {console.error(error)}
		else {
			console.log(data)
		}
})

// Questo il rif al tutorial (devo iniziare string and buffers): https://dev.to/w3tsa/node-js-crash-course-2021-2n96
// Git Clone: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository
// Install the latest version of Git: https://adrianba.net/2021/03/09/ubuntu-latest-git/
// Insert you username: https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git
// Add project Locally: https://docs.github.com/en/github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
// Spiegazione dei termini Git https://medium.com/mindorks/what-is-git-commit-push-pull-log-aliases-fetch-config-clone-56bc52a3601c
// per creare una nuova branch vedere questo stupendo TUT: https://forum.freecodecamp.org/t/push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too/13222



// Flusso 
// git status (verifica lo stato)
// 1) git add .
// 2) git comit -m "...."
// 3) git remote add origin  <REMOTE_URL> 
// 4) git remote -v (Verifies the new remote URL)
// 5) git push origin main (Pushes the changes in your local repository up to the remote repository you specified as the origin)
// 6) git checkout -b <NOME NUOVA BRANCH>  crea una nuova branch effettuando contemporaneamente il checkot
// 7) git push -u origin <NOME NUOVA BRANCH> effettua il push sulla nuova branch
// 8) git branch -m OLD-BRANCH-NAME NEW-BRANCH-NAME  rename branch


