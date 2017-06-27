// TODO: this needs to be moved to its own library

var BASE_URL = 'https://json.northpole.ro/';
const help = `
NorthPole JS wrapper example usage:

responseHandler = function (data) {
  console.log(data);
};

jNorthPole.getStorage(json, responseHandler);

socket = jNorthPole.getNewRealtimeSocket(responseHandler)
jNorthPole.subscribe(socket, 'foo')
jNorthPole.publish(socket, 'foo', { message: 'hello' })
`;

export default class jNorthPole {
  static get BASE_URL() {
    return BASE_URL;
  }

  static set BASE_URL(baseUrl) {
    BASE_URL = baseUrl;
  }

  static get help() {
    return help;
  }

  static genericRequest(jsonObj, method, endPoint, responseHandler, errorHandler) {
    var r;

    if (errorHandler == null) {
      errorHandler = responseHandler;
    }
    if (responseHandler == null) {
      throw new Error('responseHandler function missing');
    }
    r = new XMLHttpRequest();
    r.open(method, this.BASE_URL + endPoint + '.json', true);
    r.onreadystatechange = function () {
      if (r.readyState !== 4) {
        return;
      }
      if (r.status === 200) {
        responseHandler(JSON.parse(r.responseText), r.status);
      } else {
        errorHandler(JSON.parse(r.responseText), r.status);
      }
    };
    r.send(JSON.stringify(jsonObj));
  }

  static createUser(apiKey, secret, success, failure) {
    var jsonObj;

    jsonObj = {
      'api_key': apiKey,
      'secret': secret
    };
    this.genericRequest(jsonObj, 'POST', 'user', success, failure);
  }

  static getUser(jsonObj, responseHandler, errorHandler) {
    this.genericRequest(jsonObj, 'SEARCH', 'user', responseHandler, errorHandler);
  }

  static createStorage(jsonObj, responseHandler, errorHandler) {
    this.genericRequest(jsonObj, 'POST', 'storage', responseHandler, errorHandler);
  }

  static getStorage(jsonObj, responseHandler, errorHandler) {
    this.genericRequest(jsonObj, 'SEARCH', 'storage', responseHandler, errorHandler);
  }

  static putStorage(jsonObj, responseHandler, errorHandler) {
    this.genericRequest(jsonObj, 'PUT', 'storage', responseHandler, errorHandler);
  }

  static deleteStorage(jsonObj, responseHandler, errorHandler) {
    this.genericRequest(jsonObj, 'DELETE', 'storage', responseHandler, errorHandler);
  }

  static getNewRealtimeSocket(responseHandler, errorHandler) {
    var socket, socketUrl;

    if (errorHandler == null) {
      errorHandler = responseHandler;
    }
    socketUrl = this.BASE_URL.replace('http', 'ws');
    socket = new WebSocket(socketUrl + 'realtime');
    socket.onmessage = responseHandler;
    socket.onclose = errorHandler;
    return socket;
  }

  static subscribe(socket, channelName) {
    return socket.send(JSON.stringify({
      type: 'subscribe',
      'channel_name': channelName
    }));
  }

  static unsubscribe(socket, channelName) {
    return socket.send(JSON.stringify({
      type: 'unsubscribe',
      'channel_name': channelName
    }));
  }

  static publish(socket, channelName, json) {
    return socket.send(JSON.stringify({
      type: 'publish',
      'channel_name': channelName,
      content: json
    }));
  }
}
