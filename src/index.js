/* index.js */

const fs = require("fs");
const csv2geojson = require("csv2geojson");

const loadSources = require("./loadSources");

const buildGeoJSONs = async () => {
	let srcDir = "../data/";
	let dstDir = "../build/"
	const sources = await loadSources(srcDir);
	console.log(sources);

	for (let [fileName, csv] of Object.entries(sources)) {
		let geojson;

		csv2geojson.csv2geojson(csv, {
			latfield: "latitude",
			lonfield: "longitude",
			delimiter: ","
		}, (err, data) => {
			if (err) {
				console.error(err);
			} else {
				geojson = data;
			}
		});

		fs.writeFileSync(dstDir + fileName.replace(/.csv$/, ".geojson"), JSON.stringify(geojson, null, "\t"));
	}
}
buildGeoJSONs();