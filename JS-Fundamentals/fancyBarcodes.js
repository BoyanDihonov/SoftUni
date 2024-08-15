function fancyBarCodes(input) {
    let patternBarcode = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    let patternDigits = /[0-9]/g;
  
    input.slice(1).forEach(barcode => {
      if (patternBarcode.test(barcode)) {
        let productGroup = (barcode.match(patternDigits) || ['0', '0']).join('');
        console.log(`Product group: ${productGroup}`);
        console.log(productGroup)
      } else {
        console.log('Invalid barcode');
      }
    });
    
  }

fancyBarCodes((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
)