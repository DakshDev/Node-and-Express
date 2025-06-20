1 `GET`
2 `POST`
3 `PUT`
4 `DELETE`
5 `PATCH`
6 `HEAD`
7 `OPTIONS`






<!-- GET Method -->
`Purpose`: Server se data receive karna.
`Example`: Browser me koi web page open karna.
`Characteristics`:
    URL me data bhejta hai (query parameters).
    Secure nahi hota sensitive data ke liye.
    Idempotent hota hai (same request multiple times = same result).



<!-- POST Method -->
`Purpose`: Server par data bhejna ya resource create karna.
`Example`: Form submit karna (login, registration).
`Characteristics`:
    Body me data bhejta hai.
    Secure hota hai GET ke mukable.
    Not idempotent (same request multiple times = multiple records).



<!-- PUT Method -->
`Purpose`: Server par existing resource ko update karna.
`Example`: User profile update karna.
`Characteristics`:
    Pure resource ko replace karta hai.
    Idempotent hota hai.



<!-- DELETE Method -->
`Purpose`: Resource delete karna server se.
`Example`: User account delete karna.
`Characteristics`:
    Idempotent hota hai.



<!-- PATCH Method -->
`Purpose`: Resource ka partial update karna.
`Example`: Sirf email address update karna.
`Characteristics`:
    Sirf changes bhejta hai, pura resource nahi.
    Not always idempotent, lekin often considered idempotent.



<!-- HEAD Method -->
`Purpose`: GET ki tarah hota hai, lekin sirf headers return karta hai, body nahi.
`Use Case`: Check karna ki resource exist karta hai ya nahi without downloading it.



<!-- OPTION Method -->
`Purpose`: Server se poochhna ki kaunse methods supported hain resource ke liye.
`Use Case`: CORS (Cross-Origin Resource Sharing) me kaafi use hota hai.