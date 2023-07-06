const wbm = require('wbm');

wbm.start({showBrowser: false,})
.then(async qrCodeData => {
    console.log(qrCodeData); 
    const phones = ['9864972356'];
    const message = 'Good Morning.';
    await wbm.send(phones, message);
  

}).catch(err => console.log(err));