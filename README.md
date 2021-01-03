# Quote2you

Randomly pick a quote for you that might encourage you in 2021.
Hosted on AWS S3 with Cloudfront.

![Image of Product](https://quote2you.yutafujii.net/ogp.png)
Product Link: https://quote2you.yutafujii.net

## Deploy

**NOTE**
Please make sure to create AWS resources needed to deploy.

#### Deploy through CircleCI

When you push something to `master` branch, Github action fires `gulp deploy` command.
Please make sure you're configured the following environment variable in CircleCI:

```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
```

#### Deploy from your PC

I use gulp to deploy static files to S3, so first install gulp and some related libraries.

```
yarn add gulp gulp-awspublish gulp-cloudfront-invalidate-aws-publish concurrent-transform -D
yarn --global add gulp
```

Configure AWS credentials and run `gulp deploy`.

```
$ export AWS_ACCESS_KEY_ID=<your-key-here>
$ export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>

$ gulp deploy
```

For more information, take a look at [Nuxt official document](https://nuxtjs.org/faq/deployment-aws-s3-cloudfront/).

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
$ yarn start
```

## Going further

In a real production, you may need the following settings

* Launch API(see below)
* Enable Website hosting with S3 bucket
* Set Cloudfront Origin as S3 website hositing link
* Add record to your host (Route53)

#### API server

Refer to [serverless-quote-service repository](https://github.com/YutaFujii0/serverless-quote-service) and launch api server.

**NOTE**

Because this is just a pet porject, I don't set up API servers for development/stagin environments.


## Demo

<img src="https://github.com/YutaFujii0/quote-with-you/blob/master/product_demo.gif?raw=true" alt="demo" width=450>
