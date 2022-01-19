
# Start and stop the server
```
#start
npm run start

#stop
press ctrl + c on the teriminal

```
# End points

``` 
All Endpoints need authorization bearer token for authorization

Sample Auth token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxsbyI6ImhsbG8iLCJpYXQiOjE2NDI1NjIzNTMsImV4cCI6MTY0Njg4MjM1M30.YslLj4VVQRuzsIkWabzfaenJEv41xoNplroZrJtorzU

use this on header

```


Upload the Csv file:

```sh
[post] /api/csv/uploads
```

Body: form-data
FieldName: csv
Required: csv file

Get All Contents:

```sh
[get] /api/csv
```


Get Single Content:

```sh
[get] /api/csv/{contentId}
```
Required: contentId

Create Content:

```sh
[post] /api/csv/
```
Body: raw - json
Fields: name,rollno,gender,stream,mail,year
Required: All fields
Example:
```
{
    "name": "akshaya",
    "rollno": "20bit001",
    "gender": "feMale",
    "stream" : "Bsc.IT",
    "mail" : "abc@aa.com",
    "year" : "2018-2022"
}
```

Update Content:

```sh
[patch] /api/csv/{id}
```
Body: raw - json
Fields: name,rollno,gender,stream,mail,year
Required: Filed you want to update and contentId
Example:
```
{
    "mail" : "abc@ca.com",
}
```

Delete Content:

```sh
[get] /api/csv/{contentId}
```
Required: contentId
