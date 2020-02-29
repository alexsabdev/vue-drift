let installed = false;

const load = (appId) => {
  if (installed) return;

  const script = document.createElement('script');
  script.innerText = `!function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e=3e5*Math.ceil(new Date/3e5),n=document.createElement("script");n.type="text/javascript",n.async=!0,n.crossorigin="anonymous",n.src="https://js.driftt.com/include/"+e+"/"+t+".js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)}}}(),drift.SNIPPET_VERSION="0.3.1",drift.load("${appId}");`;
  script.async = true;
  script.charset = 'utf-8';
  document.body.appendChild(script);

  installed = true;
}

export default function install(Vue, options = {}) {
  const { appId, development } = options;

  if (development) return;

  if (!appId) throw new Error('[vue-drift] missing the "appId" option');
  if (!window) throw new Error('[vue-drift] missing the "window" object');

  Vue.mixin({
    mounted() {
      load(appId);

      const drift = () => window.drift;

      Vue.prototype.$drift = new Proxy(drift, {
        get(target, prop) {
          const drift = target();

          if (!drift) throw new Error('[vue-drift] missing the "drift" object');

          if (prop in drift) return drift[prop];

          throw new Error(`[vue-drift] missing the "${prop}" method`);
        }
      });
    },
  });
}
