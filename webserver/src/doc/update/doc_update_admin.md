# API Documentation for PUT for admin purpose

## Description

1. The PUT APIs in documentation update your existing record based on groupd or specific parameters
such as primary keys. To operate this API primary key is always a required field.

2. For successful updation, any one of the key must be provided.

3. This documentation is for the admin purpose use. 
This means, user will be able operate on the informaiton irrespective of whoever created it.

## persons

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/persons

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
personid

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|personid|integer|
|lastname|string|
|firstname|string|
|address|string|
|city|string|


- - - - - - - - - - - - - - - - - -
## engagement

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/engagement

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
eventId

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|parentId|string|
|eventId|string|
|rawBucket|string|
|rawPath|string|
|eventClass|string|
|eventType|string|
|eventTime|string|
|eventProvider|string|
|eventAction|string|
|eventName|string|
|eventGroup|string|
|eventCategory|string|
|eventCode|string|
|eventSeverity|string|
|outcome|string|
|message|string|
|reason|string|
|timezone|string|
|startTime|string|
|endTime|string|
|eventData|object|
|channelId|string|
|channelType|string|
|resourceId|string|
|resourceType|string|
|sourceId|string|
|sourceType|string|
|userAgent|string|
|userId|string|
|userPool|string|
|userType|string|
|testCol01|string|


- - - - - - - - - - - - - - - - - -
## theme

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/theme

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|name|string|
|theme|object|


- - - - - - - - - - - - - - - - - -
## eventtype

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/eventtype

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|integer|
|eventType|string|
|eventCategoryId|integer|
|eventTypeDescription|string|
|dbAction|string|
|createdAt|string|
|updatedAt|string|


- - - - - - - - - - - - - - - - - -
## contacttag

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/contacttag

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|name|string|
|order|integer|


- - - - - - - - - - - - - - - - - -
## property

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/property

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|type|string|
|street1|string|
|street2|string|
|city|string|
|state|string|
|country|string|
|taxes|number|
|miscExp|number|
|rentalIncome|number|
|squareFootage|number|
|bedrooms|number|
|baths|number|
|postal|string|
|actualValue|number|
|estimatedValue|number|
|hazardInsurance|number|
|propertyUnits|number|
|propertyOccupancy|string|


- - - - - - - - - - - - - - - - - -
## user

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/user

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|userType|string|
|email|string|
|emailVerified|boolean|
|firstname|string|
|lastname|string|
|phone|string|
|phoneNumberVerified|boolean|
|profileImage|string|


- - - - - - - - - - - - - - - - - -
## workflow

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/workflow

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|sourceTemplate|string|
|status|string|
|steps|object|
|targetFilter|string|
|apiVersion|string|
|firstStep|string|
|flowType|string|
|name|string|
|recurring|object|
|retry|object|
|startTime|string|
|target|string|


- - - - - - - - - - - - - - - - - -
## workflowstate

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/workflowstate

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|workflowId|string|
|entityName|string|
|apiVersion|string|
|steps|object|


- - - - - - - - - - - - - - - - - -
## events

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/events

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
eventId

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|eventAction|string|
|eventCategory|string|
|eventClass|string|
|eventCode|string|
|eventData|object|
|eventGroup|string|
|eventId|string|
|eventName|string|
|eventProvider|string|
|eventSeverity|string|
|eventType|string|
|message|string|
|outcome|string|
|parentId|string|
|rawBucket|string|
|rawPath|string|
|reason|string|
|endTime|string|
|eventTime|string|
|startTime|string|
|destinationId|string|
|channelId|string|
|channelType|string|
|destinationLocation|string|
|destinationType|string|
|deviceIp|string|
|deviceLocationCity|string|
|deviceLocationContinent|string|
|deviceLocationCoordinatesLat|string|
|deviceLocationCoordinatesLon|string|
|deviceLocationCountry|string|
|deviceLocationZip|string|
|deviceTimezone|string|
|deviceType|string|
|referralId|string|
|referralType|string|
|resourceId|string|
|resourceType|string|
|sourceId|string|
|sourceType|string|
|userAgent|string|
|userId|string|
|userPool|string|
|userType|string|
|timezone|string|


- - - - - - - - - - - - - - - - - -
## contactcustomfield

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/contactcustomfield

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|name|string|
|type|string|
|order|integer|
|purpose|string|
|sectionId|string|


- - - - - - - - - - - - - - - - - -
## template

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/template

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|type|string|
|name|string|
|data|object|
|thumbnail|string|
|latestVersionId|string|


- - - - - - - - - - - - - - - - - -
## organization

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/organization

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|addressId|string|
|name|string|
|type|string|
|phone|string|
|email|string|
|nmlsId|string|
|parentOrganizationId|string|


- - - - - - - - - - - - - - - - - -
## loleadsource

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/loleadsource

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|color|string|
|productId|string|
|tileColor|string|
|tileDescription|string|
|tileHighlights|array|
|title|string|
|active|boolean|
|callcenter|string|
|dedicatedCallcenter|boolean|
|notificationEmails|array|
|order|integer|


- - - - - - - - - - - - - - - - - -
## contactstatus

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/contactstatus

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|name|string|
|order|integer|
|isConverted|boolean|
|statusLifecycleId|string|


- - - - - - - - - - - - - - - - - -
## loan

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/loan

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|loanOfficerId|string|
|addressId|string|
|purpose|string|
|product|string|
|amount|number|
|interestRate|number|
|term|string|
|downPayment|number|
|remainingTerm|string|
|notes|string|
|mortgageInsurance|number|
|status|string|
|closingDate|string|
|remainingValue|number|
|amortization|string|
|desiredOrCurrent|string|
|desiredCashOutAmount|number|
|desiredDownPayment|number|
|loanPropertyType|string|
|loanUnits|number|
|timeline|string|
|loanPropertyOccupancy|string|
|loanPropertyValue|number|
|loanType|string|


- - - - - - - - - - - - - - - - - -
## page

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/page

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|name|string|
|body|object|
|templateId|string|
|path|string|
|headerMeta|object|
|themeId|string|
|category|string|
|ownerId|string|
|type|string|
|status|string|
|latestTemplateId|string|
|latestVersionId|string|


- - - - - - - - - - - - - - - - - -
## element

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/element

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|templateId|string|
|latestTemplate|string|
|id|string|
|name|string|
|data|object|
|type|string|
|latestVersionId|string|


- - - - - - - - - - - - - - - - - -
## losubscription

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/losubscription

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|stripeSubscription|string|
|stripeStatus|string|
|stripePaymentIntent|string|
|autoBilling|boolean|
|boberdooId|integer|
|boberdooBalance|number|
|bundleTitle|string|
|cancelTime|string|
|companyId|string|
|currentStep|string|
|dailyBudgetLimit|number|
|dailyUnitLimit|integer|
|deactivateTime|string|
|deactivateReason|string|
|finishTime|string|
|inactive|boolean|
|price|number|
|priceSubscriptionItemId|string|
|productId|string|
|transferPrice|number|
|transferPriceSubscriptionItemId|string|
|userId|string|
|activeLeadTransfer|boolean|
|agentState|string|
|callCenterService|array|
|creditStatus|array|
|scheduleDays|array|
|scheduleFrom|string|
|scheduleTo|string|
|timeZone|string|
|primaryPhoneType|string|
|primaryPhone|string|
|primaryPhoneVerified|boolean|
|secondaryPhoneType|string|
|secondaryPhone|string|
|secondaryPhoneVerified|boolean|
|alertList|array|
|addressCity|string|
|addressCountry|string|
|addressState|string|
|addressStreet|string|
|addressStreet2|string|
|addressStreet3|string|
|addressZip|string|
|preferredmeetingplaceCity|string|
|preferredmeetingplaceCountry|string|
|preferredmeetingplaceState|string|
|preferredmeetingplaceStreet|string|
|preferredmeetingplaceStreet2|string|
|preferredmeetingplaceStreet3|string|
|preferredmeetingplaceZip|string|
|county|string|
|preferredcommunicationscheduleDays|array|
|preferredcommunicationscheduleFrom|string|
|preferredcommunicationscheduleTo|string|
|infoEmail|string|
|infoPhone|string|
|infoName|string|
|infoWebsite|string|
|leadType|array|
|transactionType|array|
|loanRanges|object|
|loanType|array|
|vendors|array|
|totalMatchAmount|number|
|totalTransferAmount|number|
|totalLeadsMatched|integer|
|totalLeadsTransfered|integer|
|totalCredited|number|
|totalRefunded|number|
|leadCategory|array|
|weight|integer|
|rmpptBuyerId|integer|


- - - - - - - - - - - - - - - - - -
## losubscriptiondailystats

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/losubscriptiondailystats

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
statsDate

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|loSubscriptionId|string|
|totalMatchAmount|number|
|totalTransferAmount|number|
|totalLeadsMatched|integer|
|totalLeadsTransfered|integer|
|statsDate|string|


- - - - - - - - - - - - - - - - - -
## loleadraw

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/loleadraw

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|integer|
|cost|number|
|allowedTimesSold|integer|
|returnHashType|string|
|returnHashValueType|string|
|skipPartnerId|string|
|returnBestPrice|integer|
|srcId|string|
|type|integer|
|testLead|integer|
|skipXsl|integer|
|matchWithPartnerId|array|
|redirectUrl|string|
|ipAddress|string|
|src|string|
|landingPage|string|
|subId|string|
|pubId|string|
|optout|string|
|uniqueIdentifier|string|
|userAgent|string|
|tcpaConsent|string|
|tcpaLanguage|string|
|trustedFormUrl|string|
|leadidToken|string|
|firstName|string|
|lastName|string|
|address|string|
|city|string|
|state|string|
|zip|string|
|primaryPhone|string|
|secondaryPhone|string|
|email|string|
|estimatedPurchasePrice|number|
|downPayment|number|
|foundHome|string|
|movingDate|string|
|newPropertyZip|string|
|loanType|string|
|productType|string|
|cashOutAmount|number|
|dob|string|
|propertyType|string|
|propertyUse|string|
|refiGoal|string|
|workingWithAnAgent|string|
|bankruptcyLast7Years|string|
|foreclosureLast7Years|string|
|creditStatus|string|
|loanValue|number|
|homeValue|number|
|firstMortgageBalance|number|
|firstMortgageRate|integer|
|secondMortgage|string|
|secondMortgageBalance|number|
|secondMortgageRate|integer|
|ltv|integer|
|ssn|string|
|mode|string|
|status|string|
|reason|string|
|loLeadId|string|
|extraData|object|
|subscriptionId|string|
|billingStatus|string|


- - - - - - - - - - - - - - - - - -
## contact

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/contact

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|statusId|string|
|addressId|string|
|pictureUrl|string|
|nmlsId|string|
|type|string|
|firstName|string|
|lastName|string|
|personalEmail|string|
|workEmail|string|
|mobilePhone|string|
|workPhone|string|
|extraMail|array|
|extraPhone|array|
|jobTitle|string|
|maritalStatus|string|
|gender|string|
|dob|string|
|creationSource|string|
|ssn|string|
|leadSourceType|string|
|leadSource|string|
|middleName|string|
|locale|string|
|monthlyIncome|number|
|organizationId|string|
|origin|string|
|taygoSource|string|
|timezone|string|
|isConverted|boolean|
|statusLifecycleId|string|
|homePhone|string|
|fico|integer|
|currentLoanId|string|
|desiredLoanId|string|


- - - - - - - - - - - - - - - - - -
## contactcomment

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/contactcomment

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|contactId|string|
|userId|string|
|comment|string|
|active|boolean|


- - - - - - - - - - - - - - - - - -
## contactreminder

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/contactreminder

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|contactId|string|
|userId|string|
|type|string|
|title|string|
|description|string|
|dueDate|string|
|executeAt|string|
|reminderData|string|
|active|boolean|


- - - - - - - - - - - - - - - - - -
## eventsv2

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/eventsv2

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
eventId

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|eventId|string|
|eventCategoryId|integer|
|eventCategory|string|
|eventTypeId|integer|
|eventType|string|
|eventData|object|
|eventProvider|string|
|rawBucket|string|
|rawPath|string|
|reason|string|
|destinationLocation|string|
|destinationType|string|
|deviceIp|string|
|deviceLocationCity|string|
|deviceLocationContinent|string|
|deviceLocationCoordinatesLat|string|
|deviceLocationCoordinatesLon|string|
|deviceLocationCountry|string|
|deviceLocationZip|string|
|deviceTimezone|string|
|deviceType|string|
|userPool|string|
|destinationId|string|
|endTime|string|
|eventClass|string|
|eventCode|string|
|eventSeverity|string|
|eventTime|string|
|message|string|
|ownerId|string|
|referralId|string|
|referralType|string|
|startTime|string|
|resourceId|string|
|resourceType|string|
|sourceId|string|
|sourceType|string|
|timeZone|string|
|channelId|string|
|channelType|string|


- - - - - - - - - - - - - - - - - -
## activitylog

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/activitylog

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|eventId|string|
|eventCategoryId|integer|
|eventCategory|string|
|eventTypeId|integer|
|eventType|string|
|historyData|string|
|endTime|string|
|eventClass|string|
|eventCode|string|
|eventData|string|
|eventSeverity|string|
|eventTime|string|
|message|string|
|ownerId|string|
|reason|string|
|startTime|string|
|timeZone|string|
|channelId|string|
|channelType|string|
|resourceId|string|
|resourceType|string|
|sourceId|string|
|sourceType|string|
|contactId|string|
|masterEventTime|string|
|userId|string|


- - - - - - - - - - - - - - - - - -
## lolead

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/lolead

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|assignmentId|string|
|billed|boolean|
|boberdooId|integer|
|callCenterService|string|
|companyId|string|
|creditStatus|string|
|email|string|
|firstName|string|
|language|string|
|lastName|string|
|ownerId|string|
|phone|string|
|productId|string|
|provider|string|
|vendor|string|
|secondaryPhone|string|
|source|string|
|subscriptionId|string|
|price|number|
|transferPrice|number|
|transferStatus|string|
|leadType|string|
|leadCategory|string|
|addressCity|string|
|addressCountry|string|
|addressState|string|
|addressStreet|string|
|addressStreet2|string|
|addressStreet3|string|
|addressZip|string|
|loanDownPayment|number|
|loanInterestRate|number|
|loanMonthlyPayment|number|
|loanPurchasePrice|number|
|loanTransactionType|string|
|loanType|string|
|loLeadRawId|integer|
|loanRange|object|
|creditedPrice|number|
|creditedTransferPrice|number|
|refundedPrice|number|
|refundedTransferPrice|number|
|transferDate|string|


- - - - - - - - - - - - - - - - - -
## contactotherassociates

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/admin/contactotherassociates

Methods: `PUT`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```
*Request parameter must*:
| propeties | details |
| :--- | ---: |
id

*Request parameters any of:*
| propeties | details |
| :--- | ---: |
|id|string|
|contactId|string|
|associateName|string|


- - - - - - - - - - - - - - - - - -
