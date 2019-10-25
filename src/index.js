function appendScript(content) {
  const script = document.createElement('script');
  script.innerText = content;
  script.async = true;
  script.charset = 'utf-8';
  document.body.appendChild(script);
}

let installed = false;

function loadInitScript(appId) {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return;
  }
  if (installed) {
    return;
  }
  const content = `!function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e=3e5*Math.ceil(new Date/3e5),n=document.createElement("script");n.type="text/javascript",n.async=!0,n.crossorigin="anonymous",n.src="https://js.driftt.com/include/"+e+"/"+t+".js";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)}}}(),drift.SNIPPET_VERSION="0.3.1",drift.load("${appId}");`;
  appendScript(content);
  installed = true;
}

function identify(userId, attributes = {}) {
  if (userId === undefined) {
    throw new Error('[vue-drift] missing the "userId" parameter');
  }

  if (typeof window === 'undefined') {
    throw new Error('[vue-drift] missing the "window" object');
  }

  if (typeof window.drift === 'undefined') {
    throw new Error('[vue-drift] missing the "drift" object');
  }

  window.drift.identify(userId, attributes);
}

function reset() {
  if (typeof window === 'undefined') {
    throw new Error('[vue-drift] missing the "window" object');
  }

  if (typeof window.drift === 'undefined') {
    throw new Error('[vue-drift] missing the "drift" object');
  }

  window.drift.reset();
}

function page(pageName = '') {
  if (typeof window === 'undefined') {
    throw new Error('[vue-drift] missing the "window" object');
  }

  if (typeof window.drift === 'undefined') {
    throw new Error('[vue-drift] missing the "drift" object');
  }

  if (pageName === '') {
    window.drift.page();
    return;
  }

  window.drift.page(pageName);
}

function setUserAttributes(attributes) {
  if (typeof window === 'undefined') {
    throw new Error('[vue-drift] missing the "window" object');
  }

  if (typeof window.drift === 'undefined') {
    throw new Error('[vue-drift] missing the "drift" object');
  }

  if (typeof window.drift.api === 'undefined') {
    throw new Error('[vue-drift] missing the "drift.api" object');
  }

  window.drift.api.setUserAttributes(attributes);
}

export default function install(Vue, options = {}) {
  const { appId, development } = options;
  if (appId === undefined) {
    throw new Error('[vue-drift] missing the "appId" parameter');
  }
  if (development) {
    return;
  }
  Vue.prototype.$drift = {
    identify,
    reset,
    page,
    setUserAttributes,
  };
  Vue.mixin({
    mounted() {
      loadInitScript(appId);
    },
  });
}
