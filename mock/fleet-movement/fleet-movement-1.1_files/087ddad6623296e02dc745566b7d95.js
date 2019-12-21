function initFleet2(){updateVariables();timerHandler.appendCallback(updateTimesFleet2);if(!isMobile){$("#galaxy").focus()}initToggleHeader("fleet2");initBackButton();focusOnTabChange("#continue",true);detachEventHandlers();attachEventHandlers();if($(".combatunits>option:selected").length){$(".combatunits>option:selected").change()}}function attachEventHandlers(){var a=$("#speed");$(document).on("mouseover focus","#speedLinks>a",function(b){a.val($(this).attr("data-value"));updateVariables()}).on("mouseleave blur","#speedLinks>a",function(b){resetSpeedToSelected()}).on("mouseup touchstart","#speedLinks>a",function(b){$("#speedLinks>a.selected").removeClass("selected");$(this).addClass("selected").focus();a.val($(this).attr("data-value"));updateVariables()}).on("keyup","#speedLinks>a",function(b){if(b.keyCode==KeyEvent.DOM_VK_LEFT){$(this).prev().focus()}else{if(b.keyCode==KeyEvent.DOM_VK_RIGHT){$(this).next().focus()}else{if(b.keyCode==KeyEvent.DOM_VK_RETURN){b.stopPropagation();b.preventDefault();if($(this).hasClass("selected")){trySubmit()}else{$(this).trigger("mouseup")}}}}}).on("keypress","#speedLinks>a",function(b){if(b.keyCode==KeyEvent.DOM_VK_RETURN){b.stopPropagation();b.preventDefault();if($(this).hasClass("selected")){trySubmit()}else{$(this).click()}}}).on("keypress","#contentWrapper #inhalt",submitOnEnter)}function detachEventHandlers(){$(document).off("mouseover focus mouseleave blur mouseup touchstart keyup keypress","#speedLinks>a").off("keypress","#contentWrapper #inhalt")}function resetSpeedToSelected(){if(currentPage=="fleet2"){$("#speed").val($("#speedLinks>a.selected").attr("data-value"));updateVariables()}}function initBackButton(){$("#back").unbind("click").bind("click",function(){resetSpeedToSelected();$(this).parents("form").attr("action",returnLink).submit()})}function prepareVariables(){checkCoords();speed=$("#speedPercentage").attr("percent")}function setTType(a){a=a==null?$("#type").val():a;if(a==1){$("#pbutton").attr("class","planet_selected")}else{$("#pbutton").attr("class","planet")}if(a==2){$("#dbutton").attr("class","debris_selected")}else{$("#dbutton").attr("class","debris")}if(a==3){$("#mbutton").attr("class","moon_selected")}else{$("#mbutton").attr("class","moon")}if(a==1){$("#targetPlanetName").html(locaAllPlanet)}else{if(a==2){$("#targetPlanetName").html(locaAllDebris)}else{if(a==3){$("#targetPlanetName").html(locaAllMoon)}}}$("#type").val(a)}function shortLinkChange(b){var a;if(b!=null){a=$("#aksbox").val()}else{a=$("#slbox").val()}if(a!="-"){var c=a.split("#");$("#galaxy").val(c[0]);$("#system").val(c[1]);$("#position").val(c[2]);setTType(c[3]);$("#targetPlanetName").html(c[4]);targetGalaxy=c[0];targetSystem=c[1];targetPosition=c[2]}focusContinueButton()}function focusContinueButton(){setTimeout(function(){$("#continue").focus()},100)}function handleUnion(){if($("#aksbox").val()=="-"){document.details.union.value=0;document.details.mission.value=mission}else{parts=$("#aksbox").val().split("#");document.details.union.value=parts[5];document.details.mission.value=missionUnionattack}}function hideStatusBar(){if($(".fleetStatus")&&(targetGalaxy!=defaultTargetGalaxy||targetSystem!=defaultTargetSystem||targetPosition!=defaultTargetPosition)){$(".fleetStatus").hide();$("input[name='mission']").value=""}}function checkCoords(){checkIntInput("#galaxy",1,maxGalaxy);checkIntInput("#system",1,maxSystem);checkIntInput("#position",1,maxPosition);targetGalaxy=$("#galaxy").val();targetSystem=$("#system").val();targetPosition=$("#position").val();if(targetPosition==16){setTType(1);modifyPlanetName();checkOk()}}function checkTarget(){var a=checkUrl;var b={};b.galaxy=$("#galaxy").val();b.system=$("#system").val();b.planet=$("#position").val();b.type=$("#type").val();if($("form[name='details'] input[name='am"+colonizationID+"']").length>0&&$("form[name='details'] input[name='am"+colonizationID+"']").val()>0){b.cs=1}if($("form[name='details'] input[name='am"+recyclerID+"']").length>0&&$("form[name='details'] input[name='am"+recyclerID+"']").val()>0){b.recycler=1}$.post(a,b,displayError)}function updateTimesFleet2(){var a=getFormatedDate(serverTime.getTime()+1000*duration,"[d].[m].[y] [G]:[i]:[s]");var b=getFormatedDate(serverTime.getTime()+1000*2*duration,"[d].[m].[y] [G]:[i]:[s]");if(document.getElementById){$("#arrivalTime").html(a);$("#returnTime").html(b)}};