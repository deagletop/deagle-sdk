# DEAGLE.TOP

CS2/CS:GO Market Pricing JS-SDK
[JSR Package Registry](https://jsr.io/@steam/deagle "JSR Package Registry")

---

# Install

- npm: `npx jsr add @steam/deagle`
- pnpm: `pnpm dlx jsr add @steam/deagle`
- bun `bunx jsr add @steam/deagle`
- deno: `deno add @steam/deagle`
- yarn: `yarn dlx jsr add @steam/deagle`

## API URL

`https://api.deagle.top/csgo.json`
`https://api.deagle.top/csgo_images.json`

## Tutorial

```javascript
import Deagle from "@steam/deagle";

const deagle = new Deagle();

deagle.fetchPrices().then((data) => {
  // Handle the retrieved CSGO market data
  console.log("CSGO Market Data:", data);
});

deagle.fetchImages().then((data) => {
  // Handle the retrieved CSGO image data
  console.log("CSGO Image Data:", data);
});
```
