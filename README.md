![Build and Release on GitHub Page](https://github.com/YUUKIToriyama/geojsonServer/workflows/Build%20and%20Release%20on%20GitHub%20Page/badge.svg)

# geojsonServer
GitHubActionsを用いた簡易的geojsonサーバーです

## 作ろうとしているもの
- 緯度・経度を含む建物リストのCSVファイルを`data`ディレクトリにpushすると、GitHubActionsで自動的にスクリプトが走ってGeoJSONを生成する
- 生成されたGeoJSONはGitHubPagesで公開され、外部のWebGISアプリからアクセスして使うことができる
