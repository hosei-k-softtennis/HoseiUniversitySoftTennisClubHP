# 法政大学工体連ソフトテニス部ホームページ

[![Build Status](https://travis-ci.org/hosei-k-softtennis/HoseiUniversitySoftTennisClubHP.svg?branch=master)](https://travis-ci.org/hosei-k-softtennis/HoseiUniversitySoftTennisClubHP)

法政大学工体連ソフトテニス部ホームページのレポジトリです。

[Jekyll](https://jekyllrb-ja.github.io/)をベースとした[Jasper](https://github.com/myjekyll/jasper)テーマを用いたホームページになっています。
部員一覧や大会結果などはMarkdownで記述されています。

## レポジトリのクローン

```shell
$ git clone https://github.com/hosei-k-softtennis/HoseiUniversitySoftTennisClubHP.git
```

## 環境構築
### rbenv+ruby-buildを使ったRubyの環境構築

- rbenvのインストール
  - https://github.com/rbenv/rbenv#installation
    - rbenvのレポジトリをクローン
    - 環境変数の追加

``` shell

$ git clone https://github.com/rbenv/rbenv.git ~/.rbenv
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
$ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
```

- ruby-buildのインストール
  - https://github.com/rbenv/ruby-build#installation
    - ruby-buildのレポジトリをクローンする
    - 環境変数の追加
  
``` shell
$ git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
$ echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bash_profile
```

- ホームページ用のRuby環境を構築する
  - Ruby2.4.2をインストール
  - Ruby2.4.2をベースにhosei-2.4.2環境を用意
  - bundleをインストール
  - bundleを使ってホームページのビルドに必要なパッケージをインストール
  
``` shell
$ rbenv install 2.4.2
$ mkdir ~/.rbenv/versions/hosei-2.4.2
$ ruby-build 2.4.2 ~/.rbenv/versions/hosei-2.4.2
$ cd HoseiUniversitySoftTennisClubHP
$ rbenv local hosei-2.4.2
$ gem install bundle
$ bundle install
```

## ホームページのビルド

- ホームページをビルドする
  - jekyll serverを立ち上げるとビルドされます。
  - http://127.0.0.1:4000/HoseiUniversitySoftTennisClubHP/ にアクセスすると、ビルドされたホームページを見ることができます。
  
``` shell
$ cd HoseiUniversitySoftTennisClubHP
$ jekyll server
```

## ホームページの更新
### ディレクトリ構成

```
/HoseiUniversitySoftTennisClubHP
├── README.md
├── _data
├── _includes
├── _layouts
├── _plugins
├── _posts
│   ├── 2011-11-07-post-01.md
│   ├── 2013-04-01-post-02.md
│   ├── 2013-12-26-post-03.md
│   ├── 2014-03-28-post-04.md
│   └── 2015-04-28-post-05.md
├── _site
│   ├── README.md
│   ├── about
│   ├── access
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── images
│   │   └── js
│   ├── author
│   │   └── admin
│   ├── contact
│   ├── member
│   ├── result
│   └── tag
│       └── post
├── about
│   └── index.md
├── access
│   └── index.md
├── assets
│   ├── css
│   ├── fonts
│   ├── images
│   └── js
├── contact
│   └── index.md
├── member
│   └── index.md
└── result
    └── index.md
```

### 記事の追加

- `_post/`の中に`.md`(markdown)形式で追加してください。
- ファイル名は`year-month-day-post-(number).md`に統一してください。
- ヘッダーに以下のような情報が必要です。コピペして適宜必要事項を変更してください。
  - title
  - date
  ```
  ---
  layout: post
  cover: 'assets/images/bg_map.jpg'
  navigation: True
  title: 【当部活OBさまへ】50周年記念 思い出話の寄稿様式について
  date: 2015-04-28
  tags: post
  subclass: 'post'
  logo: 'assets/images/hosei_logo_white.png'
  author: admin
  categories: admin
  ---
  ```
  
### 部員一覧の更新

- `member/index.md`を変更してください。

### 大会結果の更新

- `result/index.md`を変更してください。
