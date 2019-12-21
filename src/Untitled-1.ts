let offset, resourcesAmount, fleetAmount;
// STEP 1 - Civil Fleet
fleetAmount = document.querySelector('li.transporterSmall >span.transporterSmall >span.amount').getAttribute('data-value')
document.querySelector('li.transporterSmall >input[name="transporterSmall"]').value = Math.max(fleetAmount - offset, 0)

fleetAmount = document.querySelector('li.transporterLarge >span.transporterLarge >span.amount').getAttribute('data-value')
document.querySelector('li.transporterLarge >input[name="transporterLarge"]').value = Math.max(fleetAmount - offset, 0)

fleetAmount = document.querySelector('li.recycler >span.recycler >span.amount').getAttribute('data-value')
document.querySelector('li.recycler >input[name="recycler"]').value = Math.max(fleetAmount - offset, 0)

// STEP 1 - Military Fleet
fleetAmount = document.querySelector("li.fighterLight >span.fighterLight >span.amount").getAttribute("data-value");
document.querySelector('li.fighterLight >input[name="fighterLight"]').value = Math.max(fleetAmount - offset, 0);

fleetAmount = document.querySelector("li.fighterHeavy >span.fighterHeavy >span.amount").getAttribute("data-value");
document.querySelector('li.fighterHeavy >input[name="fighterHeavy"]').value = Math.max(fleetAmount - offset, 0);

fleetAmount = document.querySelector('li.cruiser >span.cruiser >span.amount').getAttribute('data-value')
document.querySelector('li.cruiser >input[name="cruiser"]').value = Math.max(fleetAmount - offset, 0)

fleetAmount = document.querySelector("li.battleship >span.battleship >span.amount").getAttribute("data-value");
document.querySelector('li.battleship >input[name="battleship"]').value = Math.max(fleetAmount - offset, 0);

fleetAmount = document.querySelector("li.interceptor >span.interceptor >span.amount").getAttribute("data-value");
document.querySelector('li.interceptor >input[name="interceptor"]').value = Math.max(fleetAmount - offset, 0);

fleetAmount = document.querySelector("li.bomber >span.bomber >span.amount").getAttribute("data-value");
document.querySelector('li.bomber >input[name="bomber"]').value = Math.max(fleetAmount - offset, 0);

fleetAmount = document.querySelector("li.destroyer >span.destroyer >span.amount").getAttribute("data-value");
document.querySelector('li.destroyer >input[name="destroyer"]').value = Math.max(fleetAmount - offset, 0);

document.querySelector('a#continueToFleet2').click()

// STEP 2
document.querySelector('a#pbutton').click()

document.querySelector('div.coords >input#galaxy').value = 'galaxy'
document.querySelector('div.coords >input#system').value = 'system'
document.querySelector('div.coords >input#position').value = 'position'

document.querySelector('div.coords >input#speed').value = 'speed'

document.querySelector('a#continueToFleet3').click()

document.querySelector('a#missionButton4').click()

// STEP 3
resourcesAmount = document.querySelector('span#resources_metal').getAttribute('data-raw');
document.querySelector('div#resources >input#metal').value = Math.max(resourcesAmount - offset, 0)

resourcesAmount = document.querySelector('span#resources_cristal').getAttribute('data-raw');
document.querySelector('div#resources >input#cristal').value = Math.max(resourcesAmount - offset, 0)

resourcesAmount = document.querySelector('span#resources_deuterium').getAttribute('data-raw');
document.querySelector('div#resources >input#deuterium').value = Math.max(resourcesAmount - offset, 0)

document.querySelector('a#sendFleet').click()
