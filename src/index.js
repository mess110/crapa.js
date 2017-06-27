import browser from './browser.js';
import jNorthPole from './jnorthpole.js';

var attached = false;
var API_KEY = 'guest';
var SECRET = 'guest';

function setBaseUrl(url) {
  jNorthPole.BASE_URL = url;
}

function send(input) {
  input['browser'] = browser();
  input['api_key'] = API_KEY;
  input['secret'] = SECRET;
  input['type'] = 'error';

  jNorthPole.createStorage(input, function (data) {
    console.log(data);
  });

  return input;
};

function attach() {
  if (attached === true) {
    console.warn('crapa listener already attached');
    return;
  }
  attached = true;

  window.addEventListener('error', function (e) {
    var hash = {
      filename: e.filename,
      message: e.message,
      stack: e.error.stack,
      type: e.type,
      timeStamp: e.timeStamp,
      lineno: e.lineno,
      colno: e.colno
    };

    send({ error: hash });
    return false;
  });
}

function init(apiKey, secret) {
  API_KEY = apiKey;
  SECRET = secret;
  attach();
}

function register(apiKey, secret) {
  try {
    jNorthPole.createUser(apiKey, secret, function (data) {
      console.log(data);
    });
  } catch (e) {
    console.error(e);
  }
  init(apiKey, secret);
};

export { init, register, setBaseUrl };
