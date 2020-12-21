/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:5183f198-4496-4cf3-bd13-cea19db18900",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_YQJEs0F3d",
    "aws_user_pools_web_client_id": "659ddef1b795u23t6r0tj9krr2",
    "oauth": {
        "domain": "demopocb71d19d6-b71d19d6-develiii.auth.us-east-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:3000/",
        "redirectSignOut": "http://localhost:3000/login/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cloud_logic_custom": [
        {
            "name": "pocApi",
            "endpoint": "https://3v4t9nalwg.execute-api.us-east-1.amazonaws.com/develiii",
            "region": "us-east-1"
        },
        {
            "name": "peopleapi",
            "endpoint": "https://enegsfhy1d.execute-api.us-east-1.amazonaws.com/develiii",
            "region": "us-east-1"
        }
    ],
    "aws_dynamodb_all_tables_region": "us-east-1",
    "aws_dynamodb_table_schemas": [
        {
            "tableName": "people-develiii",
            "region": "us-east-1"
        }
    ]
};


export default awsmobile;
