var validated=false;var sendingEnabled=true;var shipIDs=[];var speeds=[];var completeConsumptions=[];var storageCapacity=null;var probeStorageCapacity=null;var tankSpace=null;var probeCompleteConsumption=null;var maxSpeed=0;var speedFactor=1;var maxGalaxy=null;var maxSystem=null;var maxPosition=null;var DONUT_GALAXY=null;var DONUT_SYSTEM=null;var currentGalaxy=1;var currentSystem=1;var currentPosition=1;var currentPlanetType=1;var targetGalaxy=1;var targetSystem=1;var targetPosition=1;var defaultTargetGalaxy=1;var defaultTargetSystem=1;var defaultTargetPosition=1;var speed=0;var holdingTime=0;var metal=0;var crystal=0;var deuterium=0;var currentDeuterium=0;var returnLink="";var checkUrl="";var colonizationID=0;var missionNone=null;var missionUnionattack=null;var distance=5;var duration=0;var consumption=0;var cargoSpace=0;var cargoLeft=0;var locaAllPlanet="";var locaAllMoon="";var locaAllDebris="";var storageCapacity=0;var probeStorageCapacity=0;var probeCompleteConsumption=0;var metal=0;var crystal=0;var deuterium=0;var distance=5;var duration=0;var consumption=0;var cargoSpace=0;var cargoCapacity=0;var tankSpace=0;var fuelCapacity=0;var metalOnPlanet=0;var crystalOnPlanet=0;var deuteriumOnPlanet=0;var returnLink="";var missionHold=null;var missionExpedition=null;var durationAKS=0;var prioMetal;var prioCrystal;var prioDeuterium;var isAggressiveMission=false;function getDistance(){var b;var a;var c;var d;b=Math.abs(currentGalaxy-targetGalaxy);a=Math.abs(currentSystem-targetSystem);c=Math.abs(currentPosition-targetPosition);if(b!=0){d=Math.abs(b-maxGalaxy);if(DONUT_GALAXY==1&&(d<b)){return d*20000}else{return b*20000}}else{if(a!=0){d=Math.abs(a-maxSystem);if(DONUT_SYSTEM==1&&(d<a)){return d*5*19+2700}else{return a*5*19+2700}}else{if(c!=0){return c*5+1000}else{return 5}}}}function getDuration(){return Math.round(((35000/speed*Math.sqrt(distance*10/maxSpeed)+10)/speedFactor))}function getConsumption(e){var d=0;var b=0;var a=0;var c=Math.max(1,duration*speedFactor-10);for(i=0,maxI=shipIDs.length;i<maxI;i++){if(e==0||e==null||shipIDs[i]==e){a++;shipSpeedValue=35000/c*Math.sqrt(distance*10/speeds[i]);b+=completeConsumptions[i]*holdingTime;d+=completeConsumptions[i]*distance/35000*((shipSpeedValue/10)+1)*((shipSpeedValue/10)+1)}}if(a>0){d=Math.round(d)+1;if(holdingTime>0){d+=Math.max(Math.floor(b/10),1)}return d}else{return 0}}function getFreeStorage(){return cargoCapacity}function updateVariables(){if(currentPage=="fleet2"){prepareVariables()}distance=getDistance();duration=getDuration();consumption=getConsumption();cargoSpace=getFreeStorage();cargoLeft=cargoSpace-metal-crystal-deuterium;refreshFormData()}function refreshFormData(){$("#duration").html(formatTime(duration)+" h");$("#distanceValue").html(tsdpkt(distance));styleClass=cargoSpace<0?"overmark":"undermark";$("#storage").html('<span class="'+styleClass+'">'+tsdpkt(cargoSpace)+"</span>");styleClass=((consumption>fuelCapacity)||(consumption>$("#resources_deuterium").text().replace(/\./g,"")))?"overmark":"undermark";$("#consumption").html('<span class="'+styleClass+'">'+tsdpkt(consumption)+" ("+Math.ceil(100*consumption/fuelCapacity)+"%)</span>");styleClass=cargoLeft<0?"overmark":"undermark";$("#remainingresources").html('<span class="'+styleClass+'">'+tsdpkt(cargoLeft)+"</style>");$(".bar_container").data("currentAmount",cargoSpace-cargoLeft);$(".bar_container").data("capacity",cargoSpace);refreshBars("bar_container","filllevel_bar");setTType();if(currentPage=="fleet2"){modifyPlanetName()}checkOk()}function modifyPlanetName(){newName=getOwnName();if(newName!=""){$("#targetPlanetName").html(newName);$("#statusTarget").html(newName)}hideStatusBar()}function checkOk(){switch(currentPage){case"fleet2":if((currentGalaxy==$("#galaxy").val()&&currentSystem==$("#system").val()&&currentPosition==$("#position").val()&&currentPlanetType==$("#type").val())||$("#galaxy").val()==""||$("#system").val()==""||$("#position").val()==""||consumption>currentDeuterium||consumption>fuelCapacity||cargoSpace<0){validated=false;$("#continue").attr("class","off")}else{validated=true;$("#continue").attr("class","on")}break;case"fleet3":if(isMissionValid()&&cargoLeft>=0){validated=true;$("#start").attr("class","on")}else{validated=false;$("#start").attr("class","off")}break}};