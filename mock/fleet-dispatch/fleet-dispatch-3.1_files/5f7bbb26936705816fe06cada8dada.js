function initBuyResourceOverlay(d,b,c){$(".close_buyResourceOverlay").on("click",function(){$("#buyResourceOverlayBody").closest(".ui-dialog").find(".ui-icon-closethick").click()});var a=function(){if(d&&b){errorBoxDecision(c.allNetworkAttention,c.slotWarning,c.allYes,c.allNo,sendDMAcceptanceForm)}else{sendDMAcceptanceForm()}};$("#premiumConfirmButton").on("click",function(e){e.preventDefault();a()});$(document).on("ajaxShowOverlay",function(e){$("#premiumConfirmButton").focus()});$("#premiumConfirmButton").on("keyup",function(e){e.stopPropagation();if(e.keyCode==13){a()}})}function sendDMAcceptanceForm(){$("#premiumAcceptForm").submit();return}function openBuyResourceDialog(a){openOverlay(a,{"class":"buyResourceDialog"})}function abortBuyResource(){$(".overlaydiv .abort_button").on("click",function(){$(".overlaydiv").dialog("close")})}function initBuyResources(){refreshBars("bar_container","filllevel_bar");$(".fill_resource").on("click",".fillup",onChangeToPremium).on("click",".btn_premium",submitBuyRequest)}function onChangeToPremium(d){var a=$(d.currentTarget).find(".btn_blue"),c=a.closest(".fillup"),b=a.closest(".fill_resource_ctn").find(".premium_bar");$(".fillup").removeClass("premium").parent().find(".current_stock span").removeClass("premium_txt").each(function(){var e=$(this);e.text(e.data("currentAmount"))});$(".fill_resource .btn_premium").html(loca.fillUpResource).attr("class","btn_blue");$(".premium_bar").css("width","0%").data("premiumPercent",0);if(a.attr("disabled")=="disabled"){return}a.html(loca.buyNow).attr("class","btn_premium small");c.addClass("premium");c.parent().find(".current_stock span").addClass("premium_txt").text(a.data("newValueFormatted"));b.data("premiumPercent",a.data("premiumPercent"));changeTooltip(b,"+"+tsdpkt(Math.floor(a.data("premiumValue"))));refreshBars("bar_container","filllevel_bar","premium_bar")}function submitBuyRequest(f){var c=$(f.currentTarget),d=c.data("resource"),b=c.data("premiumCosts"),g=c.data("packageType"),a=c.data("traderBuyResource");$.ajax({url:"index.php?page=traderOverview",data:{buyResource:d,buyPackage:g,costs:b,token:a,ajax:1},type:"POST",dataType:"json",success:function(e){refreshToken=function(h){$(".btn_blue").each(function(){$(this).data("traderBuyResource",h)})};refreshToken(e.buyResourceToken);if(!e.success){fadeBox(e.message,true);return}getAjaxResourcebox(function(h){$(".fill_resource .bar_container").each(function(){var i=$(this);i.data("currentAmount",h[i.data("resource")]["amount"]);i.parent().find(".current_stock span").html(e[i.data("resource")]).data("currentAmount",e[i.data("resource")]);refreshBars("fill_resource .bar_container","filllevel_bar")})});$(".fill_resource .fillup").each(function(){var j=$(this);var i=j.find("a");var l=i.data("resource");var k=i.data("packageType");if(!e.possiblePackages[l][k]["isBuyable"]){i.attr("disabled","disabled");j.attr("disabled","disabled");j.addClass("disabled")}i.data("premiumCosts",e.possiblePackages[l][k]["costs"]);i.data("premiumValue",e.possiblePackages[l][k]["resources"]);i.data("newValueFormatted",e.possiblePackages[l][k]["newValueFormatted"]);if(e.possiblePackages[l][k]["displayCosts"]){j.find(".fillup_cost .premium_txt").html(e.possiblePackages[l][k]["formattedCosts"])}else{j.find(".fillup_cost").addClass("overmark").html("-")}if(k==3){var h=i.data("buyButtonClass");if(!e.possiblePackages[l][k]["isCapped"]&&j.children("."+h).length){j.children("."+h).removeClass(h).addClass("fillup_100percent");j.children(".fillup_txt").html(loca.fillUpTo)}}})},error:function(){}})};