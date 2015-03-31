
# Group Users

## User List [/users]

+ Model

    + Body

            [
                {
                    "id": "abcd2a5a-d4c6-4f94-a2cb-b763f8ada69",
                    "first": "First 1",
                    "last": "Last 1"
                },
                {
                    "id": "zzed2a5a-d4c6-4f94-a2cb-b763f8ada69",
                    "first": "First 2",
                    "first": "Last 2"
                }
            ]

### Get Users  [GET]

+ Response 200

    [User List][]

### Create New User [POST]
+ Request

    + Body

                {
                    "first": "First 3",
                    "last": "Last 3"
                }

+ Response 201

    + Body

            {
                "id": "kkad2a5a-d4c6-4f94-a2cb-b763f8ada69",
                "first": "First 3",
                "last": "Last 3"
            }


## Users [/users/{id}]

+ Parameters

    + id (required, string, `kkad2a5a-d4c6-4f94-a2cb-b763f8ada69`)

+ Model

    + Body

            {
                "id": "kkad2a5a-d4c6-4f94-a2cb-b763f8ada69",
                "first": "First 3",
                "last": "Last 3"
            }

### Get User [GET]

+ Response 200

    [Users][]

+ Response 404

    + Body

            {
                "error": "User not found"
            }

### Update an User [PUT]

+ Request

    + Body

            {
                "first": "First x"
            }

+ Response 200

    [Users][]

+ Response 404

    + Body

            {
                "error": "User not found"
            }

### Delete a User [DELETE]

+ Response 204

+ Response 404

    + Body

            {
                "error": "User not found"
            }
