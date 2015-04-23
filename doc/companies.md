
# Group Companies

## Company List [/v1/companies]

+ Model

    + Body

            {  
               "elements":[  
                  {  
                     "id":"0",
                     "contact":{  
                        "name":{  
                           "first":"Karyn",
                           "last":"Porter"
                        },
                        "email":"karyn.porter@stelaecor.com"
                     },
                     "name":"MARVAME",
                     "phone":"+1 (828) 533-2655"
                  },
                  {  
                     "id":"1",
                     "contact":{  
                        "name":{  
                           "first":"Page",
                           "last":"Williamson"
                        },
                        "email":"page.williamson@trollery.name"
                     },
                     "name":"BOILICON",
                     "phone":"+1 (893) 432-3827"
                  },
               ],
               "_metadata":{  
                  "totalElements":2
               }
            }

### Get Companies  [GET]

+ Response 200

    [Company List][]

### Create New Company [POST]
+ Request

    + Body

            {
               "name":"Company name 3",
               "address":"Address 3",
               "phone":"Phone 3",
               "contact":{
                  "name":{
                     "last":"Lastname 3",
                     "first":"Firstname 3"
                  },
                  "email":"company3@gmail.com"
               }
            }

+ Response 201

    + Body

            {
               "id":"b8fb6c42-9eef-4d3f-821d-5535e218fd6c",
               "name":"Company name 3",
               "address":"Address 3",
               "phone":"Phone 3",
               "contact":{
                  "name":{
                     "last":"Lastname 3",
                     "first":"Firstname 3"
                  },
                  "email":"company3@gmail.com"
               }
            }


## Company [/v1/companies/{id}]

+ Parameters

    + id (required, string, `zzad2a5a-d4c6-4f94-a2cb-b763f8ada69`)

+ Model

    + Body
    
            {
               "id":"b8fb6c42-9eef-4d3f-821d-5535e218fd6c",
               "name":"Company name 3",
               "address":"Address 3",
               "phone":"Phone 3",
               "contact":{
                  "name":{
                     "last":"Lastname 3",
                     "first":"Firstname 3"
                  },
                  "email":"company3@gmail.com"
               }
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
               "id":"2",
                "name":"TALAE",
                "phone":"+1 (816) 590-3053",
                "address":"New address"
               "contact":{
                  "name":{
                     "first":"Joseph",
                     "last":"Cherry"
                  },
                  "email":"joseph.cherry@venoflex.org"
               }
            }

+ Response 200

            {
               "id":"2",
                "name":"TALAE",
                "phone":"+1 (816) 590-3053",
                "address":"New address"
               "contact":{
                  "name":{
                     "first":"Joseph",
                     "last":"Cherry"
                  },
                  "email":"joseph.cherry@venoflex.org"
               }
            }
            
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
