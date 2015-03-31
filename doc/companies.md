
# Group Companies

## Company List [/companies]

+ Model

    + Body

            [
                {
                    "id": "kkad2a5a-d4c6-4f94-a2cb-b763f8ada69",
                    "name": "Company name 1",
                    "contact": "Contact 1"
                },
                {
                    "id": "zz4d2a5a-d4c6-4f94-a2cb-b763f8ada69",
                    "name": "Company name 2",
                    "contact": "Contact 2"
                }
            ]

### Get Companies  [GET]

+ Response 200

    [Company List][]

### Create New Company [POST]
+ Request

    + Body

            {
                "name": "Company name 3",
                "contact": "Contact 3"
            },

+ Response 201

    + Body

            {
                "id": "zzad2a5a-d4c6-4f94-a2cb-b763f8ada69",
                "name": "Company name 3",
                "contact": "Contact 3"
            }


## Company [/companies/{id}]

+ Parameters

    + id (required, string, `zzad2a5a-d4c6-4f94-a2cb-b763f8ada69`)

+ Model

    + Body

            {
                "id": "zzad2a5a-d4c6-4f94-a2cb-b763f8ada69",
                "name": "Company name 3",
                "contact": "Contact 3"
            }

### Get Company [GET]

+ Response 200

    [Company][]

+ Response 404

    + Body

            {
                "error": "Company not found"
            }

### Update a Company [PUT]

+ Request

    + Body

            {
                "name": "Company x"
            }

+ Response 200

    [Company][]

+ Response 404

    + Body

            {
                "error": "Company not found"
            }

### Delete a Company [DELETE]

+ Response 204

+ Response 404

    + Body

            {
                "error": "Company not found"
            }
