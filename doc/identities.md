
# Group Identities

## Identity [/v1/identities/:id]
+ Parameters

    + id (required, string, `zzad2a5a-d4c6-4f94-a2cb-b763f8ada69`)

+ Model

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
            
### Get Identity [GET]

+ Response 200

    [Identity][]

+ Response 404

    + Body

            {
                "error": "Identity not found"
            }
