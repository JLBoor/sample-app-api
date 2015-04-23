
# Group Authentication

## Authentication [/v1/authentication]

### Authenticate user [POST]
+ Request

    + Body

            {
                "username": "abc",
                "password": "pass"
            }

+ Response 200

    + Body

            {
                "id":"0",
                "username":"john.doe",
                "authorities":[
                                "USER",
                                "USER.EDIT",
                                "USER.CREATE",
                                "COMPANY",
                                "COMPANY.EDIT",
                                "COMPANY.CREATE"
                            ]
            }

+ Response 401