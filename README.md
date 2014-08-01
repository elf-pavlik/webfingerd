# webfingerd

simple [webfinger](http://webfinger.net) daemon in node.js

## deployment

copy config file

```bash
$ cp config.example.json config.json
```
edit if needed

```bash
$ cp test/fixtures/perpetual-tripper@wwelves.org test/fixtures/yourName@yourDomain.tld
```
you need to configure nginx, if you don't use any other /.well-known
services this would work (use port you set in config.json!):

```
upstream webfingerd {
        server 0.0.0.0:8888
}

location /.well-known {
        proxy_pass http://webfingerd;
}
```

## development

```bash
$ cp config.example.json config.json
```

edit config.json if needed

```bash
$ npm install
$ grunt
```
