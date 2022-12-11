import { AmplifyS3ResourceTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyS3ResourceTemplate) {
    resources.s3AuthPublicPolicy.policyDocument.Statement =  [
        ...resources.s3AuthPublicPolicy.policyDocument.Statement,
        {
            Effect: "Allow",
            Action: [ "s3:GetObject", "s3:PutObjectAcl"],
            Resource: [ "arn:aws:s3:::" + resources.s3Bucket.bucketName + "/public/*"]
        }
    ]
}

/*
amplify override storage and modify the override.ts
with policy like this:
{
    "Version":"2012-10-17",
    "Statement": [
        {
            "Sid":"GrantAnonymousReadPermissions",
            "Effect":"Allow",
            "Principal": "*",
            "Action":["s3:GetObject", "s3:PutObjectAcl"],
            "Resource":["arn:aws:s3:::awsexamplebucket1/*"]
        }
    ]
}
 */