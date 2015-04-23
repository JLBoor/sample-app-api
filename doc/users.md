
# Group Users

## User List [/v1/users?_orderBy, _pageNumber, _pageSize]

+ Model

    + Body
    
            {
                "elements":
                [
                    {
                        "id":"8",
                        "name":"Clementina DuBuque",
                        "email":"Rey.Padberg@karina.com"
                    },
                    {
                        "id":"3",
                        "name":"Ervin Howell",
                        "email":"Nathan@yesenia.net"
                    }
                ],
                "_metadata":
                    {
                        "totalElements":2
                    }
            }    


### Get Users  [GET]
+ Parameters
    + _orderBy (optional, string, `name`) ... Order by property
    + _pageNumber (optional, number, `3`) ... Use for pagination
    + _pageSize (optional, number, `20`) ... Use for pagination

+ Response 200

    [User List][]

### Create New User [POST]
+ Request

    + Body

                {
                   "name":"New User",
                   "email":"myEmail@gmail.com"
                }

+ Response 201

    + Body

            {
               "id":"6b767ac5-1e54-4736-8d82-6fdb23b214c7",
               "name":"New User",
               "email":"myEmail@gmail.com"
            }


## Users [/v1/users/{id}]

+ Parameters

    + id (required, string, `kkad2a5a-d4c6-4f94-a2cb-b763f8ada69`)

+ Model

    + Body

            {
                 "id":"6b767ac5-1e54-4736-8d82-6fdb23b214c7",
                 "name":"New User",
                 "email":"myEmail@gmail.com"
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
                 "id":"6b767ac5-1e54-4736-8d82-6fdb23b214c7",
                 "name":"New Name",
                 "email":"newEmail@gmail.com"
            }

+ Response 200

            {
                 "id":"6b767ac5-1e54-4736-8d82-6fdb23b214c7",
                 "name":"New Name",
                 "email":"newEmail@gmail.com"
            }    

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
