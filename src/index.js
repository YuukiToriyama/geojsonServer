/* index.js */

const fs = require("fs");
const csv2geojson = require("csv2geojson");

const loadSources = require("./loadSources");

const buildGeoJSONs = async () => {
	let srcDir = "./data/";
	let dstDir = "./build/"

	// dataフォルダからCSVを読み込む
	const sources = await loadSources(srcDir);
	console.log(sources);

	// buildディレクトリがない場合は作成する
	if (!fs.existsSync("build")) {
		fs.mkdir("build", (err) => {
			console.error(err);
		});
	}

	// 読み込んだCSVをファイルごとに処理する
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

		// 元のファイル名 - ".csv" + ".geojson"でbuildディレクトリに書き出し
		fs.writeFileSync(dstDir + fileName.replace(/.csv$/, ".geojson"), JSON.stringify(geojson, null, "\t"));
	}
}
buildGeoJSONs();