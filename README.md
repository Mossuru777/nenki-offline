# Nenki Offline

人物の命日から年忌法要を確認し、カレンダーに取り込める ICS を出力するオフライン対応アプリです。

## 開発

Node.js 26 LTS を使います。

```sh
npm ci
npm run dev
npm run lint
```

開発サーバーは [localhost:3000](http://localhost:3000) で起動します。開発モードではサービスワーカーを登録しません。

## 静的ビルド

```sh
npm run build
```

生成された `out/` を静的ホスティングで配信します。GitHub Pages などでサブディレクトリに公開する場合は、ビルド時の環境変数 `URL_PREFIX` にリポジトリ名を指定します。サービスワーカーを確認するときは HTTPS または localhost で、ビルド時と同じパスから配信します。

人物データはブラウザーの IndexedDB に保存されます。同じオリジンで公開を続けることで既存の人物データを引き継げます。
