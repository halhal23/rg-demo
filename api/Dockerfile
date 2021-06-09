FROM golang:1.15.2-alpine
# アップデートとgitのインストール！！
# go getコマンドは裏でgitコマンドを使用しているようですがalpineにはgitが入っていないのでインストールする必要があります。
RUN apk update && apk add git
# appディレクトリの作成
RUN mkdir /go/src/app
# ワーキングディレクトリの設定
WORKDIR /go/src/app
# ホストのファイルをコンテナの作業ディレクトリに移行
ADD . /go/src/app
# ホットリロードを提供するライブラリ
RUN go get -u github.com/oxequa/realize 
# gin
RUN go get github.com/gin-gonic/gin
# gorm
RUN go get github.com/go-sql-driver/mysql
RUN go get github.com/jinzhu/gorm
CMD ["realize", "start"]