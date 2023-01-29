# API Documentation for POST

## workflowtargetfilters

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/workflowtargetfilters

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|query|Yes|object


- - - - - - - - - - - - - - - - - -
## engagement

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/engagement

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|parentId|No|string
|rawBucket|No|string
|rawPath|No|string
|eventClass|No|string
|eventType|No|string
|eventTime|No|string
|eventProvider|No|string
|eventAction|No|string
|eventName|No|string
|eventGroup|No|string
|eventCategory|No|string
|eventCode|No|string
|eventSeverity|No|string
|outcome|No|string
|message|No|string
|reason|No|string
|timezone|No|string
|startTime|No|string
|endTime|No|string
|eventData|No|object
|channelId|No|string
|channelType|No|string
|resourceId|No|string
|resourceType|No|string
|sourceId|No|string
|sourceType|No|string
|userAgent|No|string
|userId|No|string
|userPool|No|string
|userType|No|string
|testCol01|No|string


- - - - - - - - - - - - - - - - - -
## contactstatuslifecycle

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/contactstatuslifecycle

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|lifecycleName|Yes|string


- - - - - - - - - - - - - - - - - -
## eventcategory

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/eventcategory

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|eventCategoryName|Yes|string
|eventTargetedToTableName|No|string
|eventCategoryDescription|No|string
|createdAt|Yes|string
|updatedAt|No|string


- - - - - - - - - - - - - - - - - -
## persons

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/persons

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|lastname|No|string
|firstname|No|string
|address|No|string
|city|No|string


- - - - - - - - - - - - - - - - - -
## contactcustomfieldsection

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/contactcustomfieldsection

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|sectionName|Yes|string


- - - - - - - - - - - - - - - - - -
## account

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/account

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|subdomain|No|string
|parentAccountId|No|string
|masterUserId|No|string


- - - - - - - - - - - - - - - - - -
## loleadsource

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/loleadsource

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|color|Yes|string
|productId|No|string
|tileColor|Yes|string
|tileDescription|Yes|string
|tileHighlights|No|array
|title|Yes|string
|active|Yes|boolean
|callcenter|Yes|string
|dedicatedCallcenter|Yes|boolean
|notificationEmails|No|array
|order|No|integer


- - - - - - - - - - - - - - - - - -
## prismamigrations

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/prismamigrations

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|checksum|Yes|string
|finishedAt|No|string
|migrationName|Yes|string
|logs|No|string
|rolledBackAt|No|string
|startedAt|Yes|string
|appliedStepsCount|Yes|integer


- - - - - - - - - - - - - - - - - -
## theme

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/theme

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|name|No|string
|theme|Yes|object


- - - - - - - - - - - - - - - - - -
## contactfilter

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/contactfilter

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|query|Yes|object


- - - - - - - - - - - - - - - - - -
## eventtype

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/eventtype

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|eventType|Yes|string
|eventCategoryId|Yes|integer
|eventTypeDescription|No|string
|dbAction|No|string
|createdAt|Yes|string
|updatedAt|No|string


- - - - - - - - - - - - - - - - - -
## elementversion

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/elementversion

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|version|Yes|string
|elementId|Yes|string
|name|No|string
|data|No|object


- - - - - - - - - - - - - - - - - -
## user

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/user

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|userType|No|string
|email|No|string
|emailVerified|Yes|boolean
|firstname|No|string
|lastname|No|string
|phone|No|string
|phoneNumberVerified|Yes|boolean
|profileImage|No|string


- - - - - - - - - - - - - - - - - -
## workflow

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/workflow

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|sourceTemplate|No|string
|status|Yes|string
|steps|Yes|object
|targetFilter|No|string
|apiVersion|Yes|string
|firstStep|Yes|string
|flowType|Yes|string
|name|Yes|string
|recurring|No|object
|retry|No|object
|startTime|No|string
|target|No|string


- - - - - - - - - - - - - - - - - -
## workflowtemplate

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/workflowtemplate

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|workflowId|Yes|string
|workflowData|Yes|object
|version|Yes|string


- - - - - - - - - - - - - - - - - -
## property

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/property

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|type|Yes|string
|street1|No|string
|street2|No|string
|city|No|string
|state|No|string
|country|No|string
|taxes|No|number
|miscExp|No|number
|rentalIncome|No|number
|squareFootage|No|number
|bedrooms|No|number
|baths|No|number
|postal|No|string
|actualValue|No|number
|estimatedValue|No|number
|hazardInsurance|No|number
|propertyUnits|No|number
|propertyOccupancy|No|string


- - - - - - - - - - - - - - - - - -
## workflowstate

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/workflowstate

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|workflowId|Yes|string
|entityName|Yes|string
|apiVersion|Yes|string
|steps|Yes|object


- - - - - - - - - - - - - - - - - -
## templateversion

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/templateversion

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|version|Yes|string
|templateId|Yes|string
|type|No|string
|name|No|string
|data|No|object


- - - - - - - - - - - - - - - - - -
## events

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/events

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|eventAction|No|string
|eventCategory|No|string
|eventClass|No|string
|eventCode|No|string
|eventData|No|object
|eventGroup|No|string
|eventName|No|string
|eventProvider|No|string
|eventSeverity|No|string
|eventType|No|string
|message|No|string
|outcome|No|string
|parentId|No|string
|rawBucket|No|string
|rawPath|No|string
|reason|No|string
|endTime|No|string
|eventTime|No|string
|startTime|No|string
|destinationId|No|string
|channelId|No|string
|channelType|No|string
|destinationLocation|No|string
|destinationType|No|string
|deviceIp|No|string
|deviceLocationCity|No|string
|deviceLocationContinent|No|string
|deviceLocationCoordinatesLat|No|string
|deviceLocationCoordinatesLon|No|string
|deviceLocationCountry|No|string
|deviceLocationZip|No|string
|deviceTimezone|No|string
|deviceType|No|string
|referralId|No|string
|referralType|No|string
|resourceId|No|string
|resourceType|No|string
|sourceId|No|string
|sourceType|No|string
|userAgent|No|string
|userId|No|string
|userPool|No|string
|userType|No|string
|timezone|No|string


- - - - - - - - - - - - - - - - - -
## filterpermission

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/filterpermission

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|ownerAccountId|Yes|string
|sharedAccountId|Yes|string
|contactFilterId|Yes|string


- - - - - - - - - - - - - - - - - -
## contacttag

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/contacttag

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|name|Yes|string
|order|Yes|integer


- - - - - - - - - - - - - - - - - -
## contactcustomfield

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/contactcustomfield

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|name|Yes|string
|type|Yes|string
|order|Yes|integer
|purpose|No|string
|sectionId|No|string


- - - - - - - - - - - - - - - - - -
## workflowtemplatepermission

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/workflowtemplatepermission

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|workflowTemplateId|Yes|string
|permission|Yes|string
|ownerAccountId|Yes|string
|sharedAccountId|Yes|string
|forceLatestVersion|No|boolean


- - - - - - - - - - - - - - - - - -
## organization

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/organization

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|addressId|No|string
|name|No|string
|type|No|string
|phone|No|string
|email|No|string
|nmlsId|No|string
|parentOrganizationId|No|string


- - - - - - - - - - - - - - - - - -
## loan

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/loan

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|loanOfficerId|No|string
|addressId|No|string
|purpose|No|string
|product|No|string
|amount|No|number
|interestRate|No|number
|term|No|string
|downPayment|No|number
|remainingTerm|No|string
|notes|No|string
|mortgageInsurance|No|number
|status|Yes|string
|closingDate|No|string
|remainingValue|No|number
|amortization|No|string
|desiredOrCurrent|Yes|string
|desiredCashOutAmount|No|number
|desiredDownPayment|No|number
|loanPropertyType|No|string
|loanUnits|No|number
|timeline|No|string
|loanPropertyOccupancy|No|string
|loanPropertyValue|No|number
|loanType|No|string


- - - - - - - - - - - - - - - - - -
## bridgesectionlifecycle

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/bridgesectionlifecycle

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|customFieldSectionId|Yes|string
|lifecycleId|Yes|string


- - - - - - - - - - - - - - - - - -
## stripesubscriptionitem

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/stripesubscriptionitem

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|stripePrice|No|string
|isTransferPrice|No|boolean


- - - - - - - - - - - - - - - - - -
## workflowtoworkflowtargetfilters

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/workflowtoworkflowtargetfilters

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|A|Yes|string
|B|Yes|string


- - - - - - - - - - - - - - - - - -
## template

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/template

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|type|Yes|string
|name|Yes|string
|data|Yes|object
|thumbnail|Yes|string
|latestVersionId|Yes|string


- - - - - - - - - - - - - - - - - -
## element

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/element

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|templateId|No|string
|latestTemplate|No|string
|name|Yes|string
|data|Yes|object
|type|Yes|string
|latestVersionId|Yes|string


- - - - - - - - - - - - - - - - - -
## elementtotemplateversion

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/elementtotemplateversion

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|A|Yes|string
|B|Yes|string


- - - - - - - - - - - - - - - - - -
## pageversion

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/pageversion

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|version|Yes|string
|pageId|Yes|string
|name|No|string
|body|No|object


- - - - - - - - - - - - - - - - - -
## losubscription

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/losubscription

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|stripeSubscription|No|string
|stripeStatus|No|string
|stripePaymentIntent|No|string
|autoBilling|No|boolean
|boberdooId|No|integer
|boberdooBalance|No|number
|bundleTitle|No|string
|cancelTime|No|string
|companyId|No|string
|currentStep|No|string
|dailyBudgetLimit|No|number
|dailyUnitLimit|No|integer
|deactivateTime|No|string
|deactivateReason|No|string
|finishTime|No|string
|inactive|No|boolean
|price|No|number
|priceSubscriptionItemId|No|string
|productId|No|string
|transferPrice|No|number
|transferPriceSubscriptionItemId|No|string
|userId|No|string
|activeLeadTransfer|No|boolean
|agentState|No|string
|callCenterService|No|array
|creditStatus|No|array
|scheduleDays|No|array
|scheduleFrom|No|string
|scheduleTo|No|string
|timeZone|No|string
|primaryPhoneType|No|string
|primaryPhone|No|string
|primaryPhoneVerified|No|boolean
|secondaryPhoneType|No|string
|secondaryPhone|No|string
|secondaryPhoneVerified|No|boolean
|alertList|No|array
|addressCity|No|string
|addressCountry|No|string
|addressState|No|string
|addressStreet|No|string
|addressStreet2|No|string
|addressStreet3|No|string
|addressZip|No|string
|preferredmeetingplaceCity|No|string
|preferredmeetingplaceCountry|No|string
|preferredmeetingplaceState|No|string
|preferredmeetingplaceStreet|No|string
|preferredmeetingplaceStreet2|No|string
|preferredmeetingplaceStreet3|No|string
|preferredmeetingplaceZip|No|string
|county|No|string
|preferredcommunicationscheduleDays|No|array
|preferredcommunicationscheduleFrom|No|string
|preferredcommunicationscheduleTo|No|string
|infoEmail|No|string
|infoPhone|No|string
|infoName|No|string
|infoWebsite|No|string
|leadType|No|array
|transactionType|No|array
|loanRanges|Yes|object
|loanType|No|array
|vendors|No|array
|totalMatchAmount|No|number
|totalTransferAmount|No|number
|totalLeadsMatched|No|integer
|totalLeadsTransfered|No|integer
|totalCredited|No|number
|totalRefunded|No|number
|leadCategory|No|array
|weight|Yes|integer
|rmpptBuyerId|No|integer


- - - - - - - - - - - - - - - - - -
## loleadraw

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/loleadraw

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|cost|No|number
|allowedTimesSold|No|integer
|returnHashType|No|string
|returnHashValueType|No|string
|skipPartnerId|No|string
|returnBestPrice|No|integer
|srcId|No|string
|type|No|integer
|testLead|No|integer
|skipXsl|No|integer
|matchWithPartnerId|No|array
|redirectUrl|No|string
|ipAddress|No|string
|src|No|string
|landingPage|No|string
|subId|No|string
|pubId|No|string
|optout|No|string
|uniqueIdentifier|No|string
|userAgent|No|string
|tcpaConsent|No|string
|tcpaLanguage|No|string
|trustedFormUrl|No|string
|leadidToken|No|string
|firstName|No|string
|lastName|No|string
|address|No|string
|city|No|string
|state|No|string
|zip|No|string
|primaryPhone|No|string
|secondaryPhone|No|string
|email|No|string
|estimatedPurchasePrice|No|number
|downPayment|No|number
|foundHome|No|string
|movingDate|No|string
|newPropertyZip|No|string
|loanType|No|string
|productType|No|string
|cashOutAmount|No|number
|dob|No|string
|propertyType|No|string
|propertyUse|No|string
|refiGoal|No|string
|workingWithAnAgent|No|string
|bankruptcyLast7Years|No|string
|foreclosureLast7Years|No|string
|creditStatus|No|string
|loanValue|No|number
|homeValue|No|number
|firstMortgageBalance|No|number
|firstMortgageRate|No|integer
|secondMortgage|No|string
|secondMortgageBalance|No|number
|secondMortgageRate|No|integer
|ltv|No|integer
|ssn|No|string
|mode|No|string
|status|No|string
|reason|No|string
|loLeadId|No|string
|extraData|No|object
|subscriptionId|No|string
|billingStatus|No|string


- - - - - - - - - - - - - - - - - -
## losubscriptiondailystats

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/losubscriptiondailystats

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|loSubscriptionId|Yes|string
|totalMatchAmount|No|number
|totalTransferAmount|No|number
|totalLeadsMatched|No|integer
|totalLeadsTransfered|No|integer


- - - - - - - - - - - - - - - - - -
## page

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/page

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|name|Yes|string
|body|Yes|object
|templateId|No|string
|path|No|string
|headerMeta|No|object
|themeId|Yes|string
|category|No|string
|ownerId|Yes|string
|type|Yes|string
|status|No|string
|latestTemplateId|No|string
|latestVersionId|Yes|string


- - - - - - - - - - - - - - - - - -
## routing

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/routing

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|subdomain|No|string
|resourceId|Yes|string


- - - - - - - - - - - - - - - - - -
## contactstatus

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/contactstatus

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|name|Yes|string
|order|Yes|integer
|isConverted|Yes|boolean
|statusLifecycleId|No|string


- - - - - - - - - - - - - - - - - -
## partner

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/partner

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|organizationId|No|string
|type|No|string
|firstName|Yes|string
|lastName|Yes|string
|personalEmail|No|string
|workEmail|No|string
|mobilePhone|No|string
|workPhone|No|string
|addressId|No|string


- - - - - - - - - - - - - - - - - -
## templatedependency

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/templatedependency

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|templateId|Yes|string
|resourceId|Yes|string
|versionId|Yes|string


- - - - - - - - - - - - - - - - - -
## links

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/links

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|sourceId|Yes|string
|destinationId|Yes|string


- - - - - - - - - - - - - - - - - -
## eventsv2

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/eventsv2

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|eventCategoryId|No|integer
|eventCategory|No|string
|eventTypeId|No|integer
|eventType|No|string
|eventData|Yes|object
|eventProvider|No|string
|rawBucket|No|string
|rawPath|No|string
|reason|No|string
|destinationLocation|No|string
|destinationType|No|string
|deviceIp|No|string
|deviceLocationCity|No|string
|deviceLocationContinent|No|string
|deviceLocationCoordinatesLat|No|string
|deviceLocationCoordinatesLon|No|string
|deviceLocationCountry|No|string
|deviceLocationZip|No|string
|deviceTimezone|No|string
|deviceType|No|string
|userPool|No|string
|destinationId|No|string
|endTime|No|string
|eventClass|No|string
|eventCode|No|string
|eventSeverity|No|string
|eventTime|Yes|string
|message|No|string
|ownerId|No|string
|referralId|No|string
|referralType|No|string
|startTime|No|string
|resourceId|No|string
|resourceType|No|string
|sourceId|No|string
|sourceType|No|string
|timeZone|No|string
|channelId|No|string
|channelType|No|string


- - - - - - - - - - - - - - - - - -
## contact

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/contact

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|statusId|No|string
|addressId|No|string
|pictureUrl|No|string
|nmlsId|No|string
|type|Yes|string
|firstName|Yes|string
|lastName|Yes|string
|personalEmail|No|string
|workEmail|No|string
|mobilePhone|No|string
|workPhone|No|string
|extraMail|No|array
|extraPhone|No|array
|jobTitle|No|string
|maritalStatus|No|string
|gender|No|string
|dob|No|string
|creationSource|Yes|string
|ssn|No|string
|leadSourceType|No|string
|leadSource|No|string
|middleName|No|string
|locale|No|string
|monthlyIncome|No|number
|organizationId|No|string
|origin|No|string
|taygoSource|No|string
|timezone|No|string
|isConverted|Yes|boolean
|statusLifecycleId|No|string
|homePhone|No|string
|fico|No|integer
|currentLoanId|No|string
|desiredLoanId|No|string


- - - - - - - - - - - - - - - - - -
## incomesource

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/incomesource

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|contactId|No|string
|addressId|No|string
|organizationId|No|string
|type|No|string
|employerName|No|string
|title|No|string
|phone|No|string
|amount|No|number
|incomeAmountPeriod|No|string
|startDate|No|string
|endDate|No|string
|description|No|string
|employerPhone|No|string
|status|No|string


- - - - - - - - - - - - - - - - - -
## bridgecontactuser

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/bridgecontactuser

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|contactId|Yes|string
|userId|Yes|string
|assignedBy|Yes|string
|assignTime|Yes|string
|assignRequest|Yes|string
|id|Yes|string


- - - - - - - - - - - - - - - - - -
## contactreminder

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/contactreminder

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|contactId|Yes|string
|userId|Yes|string
|type|Yes|string
|title|No|string
|description|No|string
|dueDate|Yes|string
|executeAt|Yes|string
|reminderData|No|string
|active|Yes|boolean


- - - - - - - - - - - - - - - - - -
## bridgecontactloan

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/bridgecontactloan

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|contactId|Yes|string
|loanId|Yes|string
|assignedBy|Yes|string
|assignTime|Yes|string
|assignRequest|Yes|string
|type|Yes|string
|id|Yes|string


- - - - - - - - - - - - - - - - - -
## bridgecontacttag

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/bridgecontacttag

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|contactId|Yes|string
|tagId|Yes|string
|assignedBy|Yes|string
|assignTime|Yes|string
|assignRequest|Yes|string
|id|Yes|string


- - - - - - - - - - - - - - - - - -
## contactcomment

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/contactcomment

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|contactId|Yes|string
|userId|Yes|string
|comment|Yes|string
|active|Yes|boolean


- - - - - - - - - - - - - - - - - -
## activitylog

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/activitylog

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|eventId|No|string
|eventCategoryId|Yes|integer
|eventCategory|Yes|string
|eventTypeId|Yes|integer
|eventType|Yes|string
|historyData|No|string
|endTime|No|string
|eventClass|No|string
|eventCode|No|string
|eventData|No|string
|eventSeverity|No|string
|eventTime|Yes|string
|message|No|string
|ownerId|No|string
|reason|No|string
|startTime|No|string
|timeZone|No|string
|channelId|No|string
|channelType|No|string
|resourceId|No|string
|resourceType|No|string
|sourceId|No|string
|sourceType|No|string
|contactId|No|string
|masterEventTime|Yes|string
|userId|No|string


- - - - - - - - - - - - - - - - - -
## contactpermission

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/contactpermission

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|contactId|Yes|string
|ownerAccountId|Yes|string
|sharedAccountId|Yes|string


- - - - - - - - - - - - - - - - - -
## contactcustomfieldvalue

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/contactcustomfieldvalue

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|contactId|Yes|string
|customFieldId|Yes|string
|value|Yes|string
|id|Yes|string


- - - - - - - - - - - - - - - - - -
## bridgecontactprimaryincome

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/bridgecontactprimaryincome

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|contactId|Yes|string
|incomeSourceId|Yes|string


- - - - - - - - - - - - - - - - - -
## lolead

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/lolead

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|assignmentId|No|string
|billed|Yes|boolean
|boberdooId|No|integer
|callCenterService|No|string
|companyId|No|string
|creditStatus|No|string
|email|No|string
|firstName|No|string
|language|No|string
|lastName|No|string
|ownerId|No|string
|phone|No|string
|productId|No|string
|provider|No|string
|vendor|No|string
|secondaryPhone|No|string
|source|No|string
|subscriptionId|Yes|string
|price|Yes|number
|transferPrice|Yes|number
|transferStatus|No|string
|leadType|No|string
|leadCategory|No|string
|addressCity|No|string
|addressCountry|No|string
|addressState|No|string
|addressStreet|No|string
|addressStreet2|No|string
|addressStreet3|No|string
|addressZip|No|string
|loanDownPayment|No|number
|loanInterestRate|No|number
|loanMonthlyPayment|No|number
|loanPurchasePrice|No|number
|loanTransactionType|No|string
|loanType|No|string
|loLeadRawId|No|integer
|loanRange|No|object
|creditedPrice|Yes|number
|creditedTransferPrice|Yes|number
|refundedPrice|Yes|number
|refundedTransferPrice|Yes|number
|transferDate|No|string


- - - - - - - - - - - - - - - - - -
## bridgecontactpartner

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/bridgecontactpartner

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|contactId|Yes|string
|partnerId|Yes|string
|type|No|string
|assignedBy|Yes|string
|assignTime|Yes|string
|assignRequest|Yes|string


- - - - - - - - - - - - - - - - - -
## contactotherassociates

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/contactotherassociates

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|contactId|Yes|string
|associateName|Yes|string


- - - - - - - - - - - - - - - - - -
## bridgecontactcontact

URL: https://twofr0plj9.execute-api.us-east-1.amazonaws.com/dev/v2/rest/bridgecontactcontact

Methods: `POST`

Headers: 
```
x-api-key: ONnXurVUA4oIRX4fvtkI2YHvCJu16kla2d6oYNU4
Content-Type: application/json
```

*Request parameters:*
| propeties | required? | details |
| :--- | :--: | ---: |
|contactId|Yes|string
|assignedTo|Yes|string
|relationship|Yes|string
|assignedBy|Yes|string
|assignTime|Yes|string
|assignRequest|Yes|string
|id|Yes|string


- - - - - - - - - - - - - - - - - -
