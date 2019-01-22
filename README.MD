# Serverless workshop

## General information

During the workshop, you will all create AWS resources on the same account. Hence, you should prefix all names for all resources
you create with your own identifier. For example, if an AWS Lambda function is to be created, it should be called `<identifier>-lambda-fn-name`.

The account and users which will be used during the workshop, will be communicated at that time.
Initially, everything can be done on the platform itself, without the need to setup any client side tools.
However, you are of course free to try them out if there's any time left. 

During the workshop, we will be using DynamoDB as a storage solution for which each participant will use their own table.

## Use cases

For the workshop, we will be recreating the sign in application of the ITP offices in Ghent.
This will be done using the serverless services from AWS, including AWS Lambda and Amazon API Gateway.

### Use case 1

A user has to be able to sign in and out of the building using the application during which they need to 
provide their name, email address, company and whom they are visiting.

### Use case 2

In case of an emergency, it has to be possible to get an overview of all users currently signed in. This should include
all captured information during the sign in.

### Use case 3

When a user registers, the person they are visiting has to be notified. This can be done using a message in a Slack channel
of the slack space created for this purpose: https://workshop-cloudway.slack.com

### Other use cases

If there is any time left, you are free to add some extra functionality. You can use extra services provided by AWS
such as AWS IoT. You might want to create daily statistics or add some functionality to allow known employees to sign in as
well using a (mocked) NFC tag. You can also check out AWS SAM and AWS CloudFormation to create your setup as IaC.

## Front-end

On this repo, a simple frontend is provided to allow you to simply test the application with it. A swagger file is also available,
providing documentation for the implementation of the UI. However, you are not bound by the swagger specification and you may 
change whatever you like to the REST service to enable some custom features. You will each run your own front-end using AWS S3.

## Useful links

* AWS Lambda: https://docs.aws.amazon.com/lambda/latest/dg/welcome.html
* Amazon API Gateway: https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html
* CloudFormation: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html
* AWS SAM: https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md
* AWS IoT: https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html
* AWS S3: https://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html
* Amazon DynamoDB: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html


