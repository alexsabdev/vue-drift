<p align="center">
  <img src="https://www.drift.com/wp-content/themes/drift-rebrand/dist/images/drift-logo-reg_c55e841e.svg" width="100px">
</p>

# vue-drift

Vue.js plugin implementation of the Drift chat widget with 100% [browser API](https://devdocs.drift.com/docs/using-drift-apis) compatability

## Usage

### Node-based environment

Install using npm:

```
npm install vue-drift
```

Add to `index.js` of your Vue application:

```
import Vue from 'vue'
import VueDrift from 'vue-drift'

Vue.use(VueDrift, {
  appId: 'YOUR_APP_ID',
})
```

Where `appId` is your application identifier provided by [Drift](https://app.drift.com/settings/widget)

That's it! Enjoy!

### Browser environment

It depends on your tooling, but the simplest way is to add this to your HTML page:

```
...
<div id="app"></div>
...
<script  src="https://unpkg.com/vue@latest/dist/vue.min.js"></script>

<script src="https://unpkg.com/vue-drift@latest/dist/vue-drift.window.min.js"></script>

<script>
  Vue.component('vue-drift', VueDrift);

  Vue.use(VueDrift, {
    appId: 'YOUR_APP_ID',
  })

  new Vue({
    el: '#app',
  })
</script>
...
```

Where `appId` is your application identifier provided by [Drift](https://app.drift.com/settings/widget)

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

### Disable in development mode

Add an optional parameter `development` when registering the component:

```
Vue.use(VueDrift, {
  appId: 'YOUR_APP_ID',
  development: true,
})
```

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
