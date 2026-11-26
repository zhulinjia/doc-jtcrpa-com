---
layout: doc
title: Webhook delivery
description: Send newly saved rows from a dataset to an endpoint and check delivery history.
---

# Webhook delivery

Enable a webhook for a dataset to send the rows the extension writes in each collection batch to your endpoint. This can include new rows and rows replaced by newer results. The rule applies to collection after you enable it.

## Create and test a webhook

1. Click the Jiutouchong icon to open the sidebar, then choose **Settings → Webhook delivery**.
2. Click **New webhook**, enter a **Webhook name**, and choose a **Dataset**. You can select a saved collection dataset or a workflow's collection destination before its first write.
3. For **Endpoint URL**, enter the full HTTP or HTTPS address provided by the receiver. If the address redirects, use the final URL.
4. Under **Fields to send**, keep **All data fields** selected or uncheck it and choose the columns to send. If the list is empty before the first run, enter a **Field name** and click **Add field**. Match the name of the column the workflow writes.
5. If the receiver checks signatures, fill in **Signing secret (optional)**. Use the same secret on the receiving end.
6. Click **Send test** and verify that the receiver gets the sample. Check **Enable webhook** and click **Save**, then run a workflow that writes to that dataset.

Send test uses sample data. To verify a real collection batch, open **Delivery history** on the rule card and compare the row count, status, and fields received by the endpoint.

## Signatures and repeat deliveries

When a secret is configured, the extension signs the raw request body with HMAC-SHA256 and sends the result in the `X-Webhook-Signature` HTTP header. The receiver verifies the signature with the same secret and the original body bytes. The header value consists of `sha256=` followed by the hexadecimal digest. Leaving the secret blank sends an unsigned request.

Automatic and manual retries keep the same `X-Webhook-Delivery-Id`. The receiver can use this ID to recognize a repeated delivery and process it once. The next batch gets a new delivery ID.

### Verify signatures in a Node.js receiver {#verify-signature}

Keep the raw request body as a `Buffer`. Read `X-Webhook-Signature` and call this function before parsing the JSON. Use the same secret configured in the extension, for example from the receiver's `WEBHOOK_SECRET` environment variable.

```js
import { createHmac, timingSafeEqual } from 'node:crypto'

export function verifyWebhookSignature(rawBody, signature, secret) {
  if (!secret || typeof signature !== 'string') return false

  const digest = createHmac('sha256', secret).update(rawBody).digest('hex')
  const expected = Buffer.from(`sha256=${digest}`, 'utf8')
  const received = Buffer.from(signature, 'utf8')

  return received.length === expected.length && timingSafeEqual(received, expected)
}
```

In a native Node.js HTTP server, read the signature from `req.headers['x-webhook-signature']`. Return `401` if verification returns `false`. Parse and process the body after it returns `true`. Use **Send test** to confirm the receiver has the original bytes. Formatting or reserializing the JSON changes the bytes used for verification. [Node.js crypto module](https://nodejs.org/api/crypto.html#cryptotimingsafeequala-b)

## Manage webhooks and troubleshoot deliveries

| What you see or want to do | Action |
| --- | --- |
| **Waiting for data** | Check that the workflow writes to the selected dataset, then run it again. |
| **Waiting to retry** | The extension retries temporary network or endpoint failures. Check **Delivery history** after the receiver recovers. |
| A delivery failed | Check **Delivery history** for the error or HTTP status. After fixing the endpoint, use **Retry** if the entry offers it. After changing the endpoint URL, secret, dataset, or selected fields, collect a new batch to verify the updated rule. |
| Pause sending | Click **Pause** on the rule card. Click **Enable** to resume pending deliveries from before the pause. |
| Remove the webhook | Click **Delete** and confirm. This removes the rule and its delivery history. The collected rows are still available in Storage. |
