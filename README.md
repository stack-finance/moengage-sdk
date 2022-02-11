# moengage-sdk
An API to API NodeJS SDK for MoEngage.

---
## Requirements

You will need an account on MoEngage to make successful method calls from this package, *obviously*.

You will also need the `API ID` and `API Key` for your account, which can be obtained from
`Dashboard -> Settings -> APIs`

## Installation

`npm i @stack-finance/moengage-sdk`

## Starter Code

```js
import { MoEngage } from '@stack-finance/moengage-sdk';

const moengage = new MoEngage(
  '<API ID>',
  '<API Key>',
  '<Data Center - Only "01", "02" and "03" are valid values>');

const res = await MoengageSDK.triggerEvent({
  "type": "event",
  "customer_id": "john@example.com",
  "device_id": "96bd03b6-defc-4203-83d3-dc1c73080232",
  "actions": [{
      "action": "Added to Cart",
      "attributes": {
        "product": "Mobile",
        "color": "white",
        "Brand": "Apple"
      },
      "platform": "iOS",
      "app_version": "1.2.3",
      "current_time": new Date().getTime() / 1000,
      "user_timezone_offset": 19800
    },
    {
      "action": "Purchase",
      "attributes": {
        "product": "MacBook Air",
        "Brand": "Apple"
      },
      "platform": "web",
      "app_version": "1.2.3",
      "current_time": new Date().getTime() / 1000,
      "user_timezone_offset": 19800
    }
  ]
});
if (res.ok) {
  console.log(await res.json());
} else {
  // Errors are not handled in the package yet, for now you will have to handle this.
  // We will implement error handlign in the future versions.
  console.log(await res.text() || res.statusText());
}
```
