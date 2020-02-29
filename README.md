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

Where `appId` is your application identifier provided by [Drift](https://app.drift.com/settings/widget)

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

### Change Configuration

Make this call anywhere in your app:

```
this.$drift.config({
  locale: 'SOME_LOCALE',
  backgroundColor: 'SOME_BACKGROUND_COLOR',
});
```

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

### Remove User Identification

Make this call anywhere in your app:

```
this.$drift.reset();
```

### Change Page

Make this call on route change in your app:

```
this.$drift.page();
```

### Hide the Widget

Make this call anywhere in your app:

```
this.$drift.hide();
```

### Show the Widget

Make this call anywhere in your app:

```
this.$drift.show();
```

### Other browser API

Make this call anywhere in your app:

```
this.$drift.METHOD
```

where `METHOD` is any browser API method (see [here](https://devdocs.drift.com/docs/using-drift-apis))

## License

[MIT](https://opensource.org/licenses/MIT)
