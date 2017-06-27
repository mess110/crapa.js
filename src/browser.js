export default function browser() {
  var nVer = navigator.appVersion;
  var nAgt = navigator.userAgent;
  var browserName = navigator.appName;
  var fullVersion = '' + parseFloat(navigator.appVersion);
  var majorVersion = parseInt(navigator.appVersion, 10);
  var OSName = 'Unknown OS';
  var uaa = navigator.userAgent.replace(/[\(\)\,]/g, '').split(' ').map(function (e) {
    return e.split('/');
  });
  var userAgentArray = [].concat.apply([], uaa);
  var nameOffset, verOffset, ix;

  // In Opera, the true version is after "Opera" or after "Version"
  if ((verOffset = nAgt.indexOf('Opera')) !== -1) {
    browserName = 'Opera';
    fullVersion = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf('Version')) !== -1) {
      fullVersion = nAgt.substring(verOffset + 8);
    }
  } else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) {
    // In MSIE, the true version is after "MSIE" in userAgent
    browserName = 'Microsoft Internet Explorer';
    fullVersion = nAgt.substring(verOffset + 5);
  } else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
    // In Chrome, the true version is after "Chrome"
    browserName = 'Chrome';
    fullVersion = nAgt.substring(verOffset + 7);
  } else if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
    // In Safari, the true version is after "Safari" or after "Version"
    browserName = 'Safari';
    fullVersion = nAgt.substring(verOffset + 7);

    if ((verOffset = nAgt.indexOf('Version')) !== -1) {
      fullVersion = nAgt.substring(verOffset + 8);
    }
  } else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
    // In Firefox, the true version is after "Firefox"
    browserName = 'Firefox';
    fullVersion = nAgt.substring(verOffset + 8);
  } else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
    // In most other browsers, "name/version" is at the end of userAgent
    browserName = nAgt.substring(nameOffset, verOffset);
    fullVersion = nAgt.substring(verOffset + 1);
    if (browserName.toLowerCase() === browserName.toUpperCase()) {
      browserName = navigator.appName;
    }
  }
  // trim the fullVersion string at semicolon/space if present
  if ((ix = fullVersion.indexOf(';')) !== -1) {
    fullVersion = fullVersion.substring(0, ix);
  }
  if ((ix = fullVersion.indexOf(' ')) !== -1) {
    fullVersion = fullVersion.substring(0, ix);
  }

  majorVersion = parseInt('' + fullVersion, 10);
  if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  }

  if (nVer.indexOf('Win') !== -1) OSName = 'Windows';
  if (nVer.indexOf('Mac') !== -1) OSName = 'MacOS';
  if (nVer.indexOf('X11') !== -1) OSName = 'UNIX';
  if (nVer.indexOf('Linux') !== -1) OSName = 'Linux';

  return {
    browserName: browserName,
    fullVersion: fullVersion,
    majorVersion: majorVersion,
    appName: navigator.appName,
    userAgent: navigator.userAgent,
    userAgentArray: userAgentArray,
    os: OSName
  };
}
