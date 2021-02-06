/* loadSources.js */

const fs = require("fs").promises;

const loadSources = async (dir) => {
	//let dir = "../data/";
	let sources = {};
	let files = await fs.readdir(dir).catch(err => {
		console.error(err);
	}).then((files) => {
		return files.filter((file) => {
			return /.*\.csv$/.test(file);
		});
	});
	for (fileName of files) {
		sources[fileName] = await fs.readFile(dir + fileName, "utf8").catch(err => {
			console.error(err);
		});
	}
	return sources;
}
module.exports = loadSources;