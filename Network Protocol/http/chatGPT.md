1. HTTP (Hypertext Transfer Protocol) Kya Hai?
HTTP ek protocol hai jo web browsers aur servers ke darmiyan communication ke liye use hota hai. Jab bhi tum kisi website ko open karte ho, tumhara browser HTTP request bhejta hai aur server HTTP response wapas bhejta hai.

2. HTTP Methods (Request Methods)
HTTP methods request type define karte hain jo client (browser) server se maang raha hota hai.

GET → Data ko retrieve karne ke liye (e.g., koi webpage dekhna)

POST → Server par naye data ko send karne ke liye (e.g., form submit karna)

PUT → Server par existing data ko update karne ke liye

DELETE → Server se data delete karne ke liye

PATCH → Sirf ek part of data update karne ke liye

HEAD → GET jaisa hota hai, lekin sirf headers return karta hai, data nahi

OPTIONS → Server se allow ki gayi methods ka pata lagane ke liye

3. HTTP Headers
Headers extra information bhejte hain request aur response ke saath. Yeh do types ke hote hain:

Request Headers (Jo browser bhejta hai server ko)
User-Agent: Browser aur OS ka detail bataata hai

Accept: Browser ko kis type ka content chahiye

Authorization: Secure APIs ke liye authentication details bhejne ke liye

Content-Type: Request body ka format define karta hai (e.g., application/json)

Response Headers (Jo server wapas bhejta hai)
Content-Type: Server bataata hai ki data kis format mein hai (HTML, JSON, etc.)

Set-Cookie: Cookies store karne ke liye

Cache-Control: Browser ko batata hai ki page cache hoga ya nahi

Server: Server software ka naam (e.g., Apache, Nginx)

4. HTTP Status Codes (Server ka Response Code)
Yeh codes bataate hain ki request ka result kya tha:

✅ Success Codes (200–299)

200 OK → Request successful

201 Created → Naya resource create ho gaya

204 No Content → Response body empty hai

❌ Client Errors (400–499)

400 Bad Request → Request galat hai

401 Unauthorized → Authentication chahiye

403 Forbidden → Permission nahi hai

404 Not Found → Page ya resource nahi mila

🚨 Server Errors (500–599)

500 Internal Server Error → Server ka issue hai

502 Bad Gateway → Server ne galat response diya

503 Service Unavailable → Server busy hai ya down hai

5. URL Structure (Uniform Resource Locator)
Ek HTTP request URL ke through bheji jati hai. Yeh URL ke parts hain:


https://www.example.com:443/path/to/page?query=hello#section
https:// → Protocol (HTTP ya HTTPS)

www.example.com → Domain name (Server ka address)

:443 → Port number (Default 80 for HTTP, 443 for HTTPS)

/path/to/page → Resource ya page jo hum access kar rahe hain

?query=hello → Query parameters jo request ke sath bheje gaye hain

#section → Page ka ek specific section

6. Cookies, Sessions, and Authentication
Cookies: Client-side data storage jo server set karta hai

Sessions: Server-side user session tracking

JWT (JSON Web Token): Secure authentication ke liye

7. HTTP vs HTTPS
HTTP → Secure nahi hota, data plaintext mein send hota hai

HTTPS → SSL/TLS encryption ke saath secure hota hai

Agar tum HTTP ko practically test karna chahte ho toh Postman ya cURL ka use kar sakte ho.

Agar aur deep dive chahiye toh batao! 🚀