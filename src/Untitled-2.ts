let offset, resourcesAmount, amount;

resourcesAmount = document.querySelector('span#resources_metal').getAttribute('data-raw');
document.querySelector('div#resources >input#metal').value = Math.max(resourcesAmount - offset, 0)

resourcesAmount = document.querySelector('span#resources_cristal').getAttribute('data-raw');
document.querySelector('div#resources >input#cristal').value = Math.max(resourcesAmount - offset, 0)

resourcesAmount = document.querySelector('span#resources_deuterium').getAttribute('data-raw');
document.querySelector('div#resources >input#deuterium').value = Math.max(resourcesAmount - offset, 0)
