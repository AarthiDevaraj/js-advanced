function coffeeMaker() {
  nCups = 0;
  console.log('coffeeMaker Called');
  return function() {
    nCups++;
    console.log(`Dispensing coffee. Total: ${nCups}`);
  };
}

vendor = coffeeMaker();

vendor();
vendor();
vendor();
vendor();
vendor();
