<p align="center">
  <img src="https://mk0drift0ho9g7wbfexi.kinstacdn.com/wp-content/themes/drift-kumbi/assets/images/logo.svg" width="100px">
</p>

# vue-drift

Vue.js plugin implementation of the Drift chat widget

## Installation

```
npm install vue-drift
```

## Usage

Add to `index.js` of your Vue application:

```
import Vue from 'vue'
import VueDrift from 'vue-drift'

Vue.use(VueDrift, {
  appId: 'YOUR_APP_ID',
})
```

Where `appId` is an application identifier provided by [Drift](https://app.drift.com/settings/widget)

If you need to disable it in development mode, then add an optional `depelopment` parameter:

```
import Vue from 'vue'
import VueDrift from 'vue-drift'

Vue.use(VueDrift, {
  appId: 'YOUR_APP_ID',
  development: true,
})
```

That's it! Enjoy!

## Demo

Run in Terminal:

```
cd demo
npm install
echo 'DRIFT_APPID="YOUR_APP_ID"' > .env
npm run serve
```

Wait for a browser window to open

## Advanced Usage

### Identify Users

Add to `App.vue` of your Vue application:

```
<script>
export default {
  mounted() {
    this.$drift.identify('SOME_USER_ID', {
      name: 'SOME_USER_NAME',
      email: 'SOME_USER_EMAIL'
    })
  }
}
</script>
```

## License

[MIT](https://opensource.org/licenses/MIT)
