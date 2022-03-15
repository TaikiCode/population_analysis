# 都道府県別の総人口推移

### demo

https://taikicode.github.io/population_analysis/

# 利用 した API

### RESAS API（都道府県情報）

https://opendata.resas-portal.go.jp/

# 採用したライブラリ

### React Query（状態管理）

- API から取得したデータをキャッシュに持たせる。
  - 「staleTime」の指定により、過度な fetch を防ぐ。
- status も同時に返してくれる。
  - 「isLoading」「isError」など。
- 外部データとアプリ内データでそれぞれ分離して管理できる。

  - 外部データは、React Query で管理する。
  - アプリ内データは、通常の useState で管理する。

### Highcharts（グラフ）

- データ構造が対象の API から取得したデータ構造と相性が良かった。
