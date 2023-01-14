# Create Customer

URL: `POST /contact`

## Request body:

```javascript
{
  "email": "prith@something.com",
  "firstname": "string",
  "lastname": "string",
  "address1": "string",
  "address2": "string",
  "city": "string",
  "company": "string",
  "country": "USA",
  "gender": "string",
  "job_title": "string",
  "locale": "string",
  "mobileno": "string",
  "monthly_income": "string",
  "realtor": "string",
  "landline": "string",
  "postcode": "string",
  "provider": "string",
  "state": "string",
  "timezone": "string"
}
```

## Request parameters:


|Fields|Type|Description|
|:---|:---:|----:|
|email|String|*(Required)* Primary email address of the contact|
|firstname|String|*(Required)* First name of the contact|
|lastname|String|*(Optional)* Last name of the contact|
|address1|String|*(Optional)* Address of the contact|
|address2|String|*(Optional)* Address of the contact|
|city|String|*(Optional)* City of the contact|
|company|String|*(Optional)* Company of the contact|
|country|String|*(Required)* Country of the contact|
|gender|String|*(Optional)* Gender of the contact|
|job_title|String|*(Optional)* Job title of the contact|
|locale|String|*(Optional)* Locale of the contact|
|mobileno|String|*(Optional)* Mobileno of the contact|
|realtor|String|*(Optional)* Realtor of the contact|
|landline|String|*(Optional)* Landline of the contact|
|postcode|String|*(Optional)* Postcode of the contact|
|provider|String|*(Optional)* Provider of the contact|
|state|String|*(Optional)* State of the contact|
|timezone|String|*(Optional)* Timezone of the contact|

## Response *200*

```javascript
{
	"contact_id": <number>
}
```


