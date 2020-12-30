var launcher = require('../');

launcher(function startBrowser(initErr, launch) {
  if (initErr) {
    return console.error(initErr);
  }

  launch('http://google.com', {
	browser: 'chrome',
     proxy: '127.0.0.1:8001'
}, function afterLaunch(launchErr, instance) {
    if (launchErr) {
      return console.error(launchErr);
    }

    console.log('Instance started with PID:', instance.pid);

    setTimeout(function stop() {
      instance.stop();
    }, 10000);

    instance.on('stop', function logCode(code) {
      console.log('Instance stopped with exit code:', code);
    });
  });
});
