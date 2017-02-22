# Request Header Parser Microservice

Displays the IP address, language and operating system of your browser.

## Set up

~~~bash
npm install
node server.js
~~~

The server will listen to the port specified in the PORT environment variable.
If this variable is unset, the port will default to 8080.

## Example ouput

~~~json
{"ipaddress":"127.0.0.1","language":"en-US","software":"Windows 10.0"}
~~~
