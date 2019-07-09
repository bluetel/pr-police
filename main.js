const { IncomingWebhook } = require("@slack/webhook")

// It might be worth exploring the ability to go via proxy, this package is the
// one shown in slacks dev documentation https://slack.dev/node-slack-sdk/webhook
// const { HttpsProxyAgent } = require("https-proxy-agent");

const URL = process.env.SLACK_WEBHOOK_URL
const webhook = new IncomingWebhook(URL, { username: "PR Police", icon_emoji: ":oncoming_police_car:" });

(async () => {
  await webhook.send({
    text: "I've got news for you!",
  })
})()
