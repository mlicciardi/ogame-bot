function initTrader(){var b=false;var a=$.deparam.fragment();if(typeof(a.animation)!="undefined"){if(a.animation=="false"){b=true}}var c={$link:null,$panel:null,close:function(){this.$panel.hide()},setPanel:function(){this.$panel=$("#js_togglePanel"+traderObj.traderId.replace(/#div_trader/,""))},init:function(e){var f=$(e+" .selectWrapper");e=e.replace(/#div_trader/,"");if(!f){return}this.$link=$("#js_toggleLink"+e);this.$panel=$("#js_togglePanel"+e);var h=this.$panel;h.hide();this.$link.unbind("click.selectLink").bind("click.selectLink",function(i){e=traderObj.traderId.replace(/#div_trader/,"");if($(this).hasClass("honor")){return false}if(h.find("ul.active").has("li").length){h.toggle()}return false});$(".selectWrapper .source").unbind("click.selectPlanetOrMoon").bind("click.selectPlanetOrMoon",function(i){c.selectPlanetOrMoon(this)});$("#"+h.attr("id")).find("li").unbind("click.selectSource").bind("click.selectSource",function(i){traderObj.selectSource(this);return false});c.outerClick(f,h);var g=null,d=8000;f.unbind("mouseout.closeSelect").bind("mouseout.closeSelect",function(j){j=j||window.event;var i=(j.relatedTarget)?j.relatedTarget:j.toElement;if(i==f||c.isChildOf(i,f)){return}g=setTimeout(function(){h.hide()},d)}).unbind("mouseover.clearTimeout").bind("mouseover.clearTimeout",function(){if(g){clearTimeout(g)}})},isChildOf:function(e,d){d=d[0];while(e&&e!=d){e=e.parentNode}return e==d},outerClick:function(d,e){$("body").bind("click.outerClick",function(f){if(!f){f=window.event}if(!($(f.target).closest(".selectWrapper")==d)&&e.is(":visible")!=false){e.toggle()}})},selectPlanetOrMoon:function(j){var g;if($(j).hasClass("selected")){return false}var f="",k=null;if($(j).hasClass("js_honor")){$(traderObj.traderId+" .selectWrapper .source").removeClass("selected");$(traderObj.traderId+" .js_honor").addClass("selected");$(traderObj.traderId+" .toggleLink").addClass("honor");var f='<img height="18" src="//gf1.geo.gfsrv.net/cdnfc/f35675179214f8f6f0f8d75740d7db.png" alt="'+loca.honorPoints+'"/><span class="option_source">'+loca.honorPoints+"</span>";$(traderObj.traderId+" .js_valSourcePlanet").html(f);$(traderObj.traderId+" .normalResource").hide();$(traderObj.traderId+" .honorResource").show();return false}var e=$(traderObj.traderId+" .togglePanel");var i="planet";if($(j).hasClass("js_moon")){var h=0;i="moon";for(g in traderObj.planets){if(traderObj.planets[g].isMoon){h++}}if(h==0){return false}}var d=traderObj.planets[traderObj.current.planet];e.find("ul").hide().removeClass("active");e.find("ul."+i).show().addClass("active");$(traderObj.traderId+" .toggleLink").removeClass("honor");$(traderObj.traderId+" .selectWrapper .source").removeClass("selected");$(traderObj.traderId+" .js_"+i).addClass("selected");if($(j).hasClass("js_moon")?d.isMoon:!d.isMoon){k=traderObj.current.planet}else{if(d.otherPlanet!=null&&typeof(traderObj.planets[d.otherPlanet])!="undefined"){k=d.otherPlanet}else{k=e.find("ul."+i+" li:first").attr("id")}}$(traderObj.traderId+" .normalResource").show();$(traderObj.traderId+" .honorResource").hide();e.find("ul li#"+k).click();return false},setToggleLink:function(f){var e=traderObj.traderId.replace(/#div_trader/,""),d=$(f).find("span"),g=traderObj.planets[$(f).attr("id")].name;if(g!=d.text()){d.attr("title",g.replace(/\|/g,"&#124;"))}this.$link=$("#js_toggleLink"+e);this.$link.html($(f).html())}};traderObj={traderBGPos:{"#div_traderResources":"0px 0px","#div_traderAuctioneer":"-546px 0px","#div_traderScrap":"0px -220px","#div_traderImportExport":"-546px -220px"},timer:500,planets:{},honorOutput:0,price:0,deficit:0,priceImportExport:0,sumResources:0,traderId:null,resources:["Metal","Crystal","Deuterium"],current:{planet:currentPlanetId,resource:"",sliderValue:""},barXPos:-180,barYPos:0,percentPaid:0,switchingTrader:false,checkOverbidden:function(){if(playerBid==false||playerBid>=getValue($(".detail_value.currentSum").html())){$(".overbid_text").hide()}else{$(".overbid_text").show()}},refresh:function(){var d=traderObj.traderId;if("#"+$(this).closest(".div_trader").attr("id")!==d){return}var e=$(this).attr("class");var f=new RegExp(/\b(js_slider\w*)\b/);e=(f.test(e))?RegExp.$1:false;if(!e){return}traderObj.current.sliderValue=$(this).slider("value");traderObj.current.resource=e.replace("js_slider","").toLowerCase();if(traderObj.current.resource=="honor"){traderObj.honorOutput=traderObj.current.sliderValue}else{traderObj.planets[traderObj.current.planet].output[traderObj.current.resource]=traderObj.current.sliderValue}formatNumber($(d+" .js_amount.js_"+traderObj.current.resource),traderObj.current.sliderValue);if(d=="#div_traderAuctioneer"){traderObj.price=getValue($(d+" .js_price").html());traderObj.sumAuctioneer();traderObj.checkOverbidden()}else{if(d=="#div_traderImportExport"){traderObj.sumImportExport()}}},resetValues:function(f,e){f=f||traderObj.traderId;e=e||false;for(var d in traderObj.planets){for(var g in traderObj.planets[d].output){traderObj.planets[d].output[g]=0}}traderObj.honorOutput=0;$(".js_amount").val(0);if(traderObj.traderId=="#div_traderAuctioneer"){traderObj.sumAuctioneer()}else{if(traderObj.traderId=="#div_traderImportExport"){traderObj.sumImportExport()}}if(e){f=f.replace(/#div_trader/,"");$("#js_togglePanel"+f).find("li#"+currentPlanetId).click()}c.close()},resetMaxAmount:function(l,f){var m=traderObj.traderId;var e=traderObj.resources;for(var k in traderObj.planets){for(var h=0;h<e.length;h++){var n=e[h].toLowerCase();traderObj.planets[k].input[n]=l[k][n]}}for(var g=0;g<e.length;g++){n=e[g].toLowerCase();var d=traderObj.planets[traderObj.current.planet].input[n];$(m+" .max_planet_"+n).html(number_format(d,0))}honorScore=f;$(m+" .max_planet_honor").html(number_format(Math.max(0,f),0));c.close()},selectSource:function(m){traderObj.current.planet=$(m).attr("id");c.close();c.setToggleLink($(m));var j=traderObj.traderId;var f=traderObj.current.planet;var e=traderObj.resources;for(var g=0;g<e.length;g++){var l=e[g].toLowerCase();var d=traderObj.planets[f].input[l];if(j=="#div_traderImportExport"){var k=(traderObj.priceImportExport/multiplier[l])-traderObj.sumResources+traderObj.planets[f].output[l];var h=Math.min(d,k)}$(j+" .max_planet_"+l).html(number_format(d,0));$(j+" .js_amount.js_"+l).val(number_format(traderObj.planets[f].output[l],0))}},selectTrader:function(e,j,g){j=j||traderObj.timer;$.bbq.pushState({page:e,animation:"false"});$(".planetlink, .moonlink").fragment({page:e,animation:"false"});traderObj.traderId="#div_"+e;var f=traderObj.traderId,d=$(".back_to_overview");var h=function(){if(f=="#div_traderAuctioneer"||f=="#div_traderImportExport"){traderObj.resetValues(null,true)}var k=function(){$("#traderOverview").find(".c-left, .c-right").addClass("c-small");d.show();if(f=="#div_traderAuctioneer"||f=="#div_traderImportExport"){d.addClass("left");d.removeClass("right")}else{if(f=="#div_traderResources"||f=="#div_traderScrap"){d.addClass("right");d.removeClass("left")}}$("#planet #header_text h2").html(loca[e]).parent().show()};if(animation&&!b){$("#traderOverview").find(".c-left, .c-right").hide();$("#planet").animate({backgroundPosition:traderObj.traderBGPos[f],height:"250px"},j,function(){$("#planet").addClass("detail");$("#traderOverview").find(".c-left, .c-right").show();k();if(f=="#div_traderResources"){showTradeNowButton()}})}else{b=false;$("#planet").css("background-position",traderObj.traderBGPos[f]).css("height","250px");k();if(f=="#div_traderResources"){showTradeNowButton()}}c.setPanel();$("#planet").addClass("detail");$(".js_trader").hide();$(f).show();if(f=="#div_traderResources"&&typeof(g)!="undefined"){$(f+" .ui-tabs").tabs("option","active",g)}traderObj.switchingTrader=false};if($(traderObj.traderId).length==0){var i=e.toLowerCase().replace(/^trader/,"");$.ajax({url:traderUrl,type:"POST",data:{show:i,ajax:1},beforeSend:function(){$("#loadingOverlay").addClass(i).show()},success:function(k){$("#inhalt").append(k);$("#loadingOverlay").hide().removeClass(i);h()},error:function(){fadeBox(loca.error,true);$("#loadingOverlay").hide().removeClass(i)}})}else{h()}},submitAuction:function(){var e=traderObj.traderId;var f=getValue($(e+" .js_auctioneerSum").html());if(!$(e+" .right_box .pay").hasClass("disabled")&&traderObj.price>0&&traderObj.deficit<=0){$(e+" .right_box .pay").addClass("disabled");var d={planets:{},honor:traderObj.honorOutput};for(var g in traderObj.planets){d.planets[g]=traderObj.planets[g].output}$.ajax({url:auctionUrl,type:"POST",data:{bid:d,token:auctioneerToken,ajax:1},dataType:"json",success:function(h){auctioneerToken=h.newToken;fadeBox(h.message,h.error);if(!h.error){traderObj.resetValues(e,false);traderObj.resetMaxAmount(h.planetResources,h.honor);traderObj.reloadResources()}},error:function(){fadeBox(loca.error,true)}})}return false},submitImportExport:function(){if(!$(traderObj.traderId+" .right_box .pay").hasClass("disabled")){$(traderObj.traderId+" .right_box .pay").addClass("disabled");var d={planets:{},honor:traderObj.honorOutput};for(planetId in traderObj.planets){d.planets[planetId]=traderObj.planets[planetId].output}$.ajax({url:importUrl,type:"POST",data:{action:"trade",bid:d,token:importToken,ajax:1},dataType:"json",success:function(e){importToken=e.newToken;fadeBox(e.message,e.error);if(!e.error){for(planetId in traderObj.planets){traderObj.planets[planetId].output={metal:0,crystal:0,deuterium:0}}$(traderObj.traderId+" .bargain_overlay").show();$(traderObj.traderId+" .payment").hide();$(traderObj.traderId+" .image_140px a").addClass("slideIn");traderObj.reloadResources();traderObj.updateImportItem(e.item);traderObj.refresh()}},error:function(){fadeBox(loca.error,true)}})}return false},reloadResources:function(d){getAjaxResourcebox(d)},changeImportItem:function(){if($(traderObj.traderId+" .import_bargain.change").hasClass("disabled")){if(darkMatter<importChangeCost){errorBoxDecision(LocalizationStrings.error,loca.errorNotEnoughDM,LocalizationStrings.yes,LocalizationStrings.no,redirectPremium)}}else{$(traderObj.traderId+" .import_bargain.change").addClass("disabled");$.ajax({url:importUrl,type:"POST",data:{action:"bargain",token:importToken,ajax:1},dataType:"json",success:function(d){importToken=d.newToken;fadeBox(d.message,d.error);if(!d.error){traderObj.updateImportItem(d.item);traderObj.reloadResources(function(){if(d.item.offersLeft>0&&darkMatter>=importChangeCost){$(traderObj.traderId+" .import_bargain.change").removeClass("disabled")}else{$(traderObj.traderId+" .import_bargain.change").addClass("disabled")}});traderObj.refresh()}},error:function(){fadeBox(loca.error,true)}})}return false},updateImportItem:function(d){$(traderObj.traderId+" .got_item_text").html(d.itemText);$(traderObj.traderId+" .bargain_text").html(d.bargainText);$(traderObj.traderId+" .bargain_cost").html(d.bargainCostText);importChangeCost=d.bargainCost;$(traderObj.traderId+" .image_140px img").attr("src","/cdn/img/item-images/"+d.image+"-140x.png");removeTooltip($(traderObj.traderId+" .image_140px a"));$(traderObj.traderId+" .image_140px a").attr("ref",d.uuid).removeClass("tooltip").addClass("tooltipHTML").attr("title",d.tooltip);initTooltips($(traderObj.traderId+" .image_140px a"));$(traderObj.traderId+" .detail_button .amount").text(d.amount)},takeImportItem:function(){if(!$(traderObj.traderId+" .import_bargain.take").hasClass("disabled")){$(traderObj.traderId+" .import_bargain.change").addClass("disabled");$(traderObj.traderId+" .import_bargain.take").addClass("disabled");$(traderObj.traderId+" .import_bargain.change").addClass("hidden");$(traderObj.traderId+" .import_bargain.take").addClass("hidden");$(traderObj.traderId+" .bargain_cost").addClass("hidden");$.ajax({url:importUrl,type:"POST",data:{action:"takeItem",token:importToken,ajax:1},dataType:"json",success:function(e){importToken=e.newToken;fadeBox(e.message,e.error);if(!e.error){var d=e.item.ref;changeTooltip($(".detail_button[ref='"+d+"']"),e.item.title);$(".detail_button[ref='"+d+"'] span.amount, #itemDetails[data-uuid='"+d+"'] span.amount").html(tsdpkt(e.item.amount));if(e.item.canBeActivated){$('#itemDetails[data-uuid="'+d+'"] a.activateItem').removeClass("build-it_disabled").addClass("build-it")}else{$('#itemDetails[data-uuid="'+d+'"] a.activateItem').addClass("build-it_disabled").removeClass("build-it")}if(e.item.newOffer==false){$(traderObj.traderId+" .bargain_text").html(e.item.noOfferMessage)}else{traderObj.resetImport(e.item.newOffer)}}},error:function(){fadeBox(loca.error,true)}})}return false},resetImport:function(d){importChangeCost=d.bargainCost;if(darkMatter>=importChangeCost){$(traderObj.traderId+" .import_bargain.change").removeClass("disabled")}else{$(traderObj.traderId+" .import_bargain.change").addClass("disabled")}$(traderObj.traderId+" .import_bargain.take").removeClass("disabled");$(traderObj.traderId+" .import_bargain.change").removeClass("hidden");$(traderObj.traderId+" .import_bargain.take").removeClass("hidden");$(traderObj.traderId+" .bargain_cost").removeClass("hidden");$(traderObj.traderId+" .bargain_overlay").hide();$(traderObj.traderId+" .payment").show();$(traderObj.traderId+" .image_140px img").attr("src","/cdn/img/trader/container_"+d.rarity+".jpg");$(traderObj.traderId+" .image_140px a").removeClass("slideIn").attr("ref","").removeClass("tooltipHTML").addClass("tooltip").removeClass("r_common_140px").removeClass("r_uncommon_140px").removeClass("r_rare_140px").removeClass("r_epic_140px").removeClass("r_buddy_140px").addClass("r_"+d.rarity+"_140px");changeTooltip($(traderObj.traderId+" .image_140px a"),d.tooltip);$(traderObj.traderId+" .js_import_price").removeClass("green_text").text(number_format(d.price,0));$(traderObj.traderId+" .image_140px .amount").text("?");traderObj.priceImportExport=getValue($(".js_import_price").html());traderObj.resetValues(null,true);traderObj.init()},sumAuctioneer:function(){var e=traderObj.traderId;var h=traderObj.price;if(h==0){$("#div_traderAuctioneer .js_amount").attr("disabled","disabled")}else{$("#div_traderAuctioneer .js_amount").removeAttr("disabled")}var f=0;for(var g in traderObj.planets){var d=traderObj.planets[g].output;f+=parseInt(d.metal)*multiplier.metal+parseInt(d.crystal)*multiplier.crystal+parseInt(d.deuterium)*multiplier.deuterium}f+=parseInt(traderObj.honorOutput)*multiplier.honor;f=Math.floor(f);traderObj.deficit=(Number(auctioneer.calculateDeficit())-Number(f));if(traderObj.deficit>0){$(" .js_deficit").html(number_format(traderObj.deficit,0))}else{$(" .js_deficit").html(number_format(0,0))}if(f>0){$("#div_traderAuctioneer .js_auctioneerSum").html("+ "+number_format(f,0))}else{$("#div_traderAuctioneer .js_auctioneerSum").html("")}$("#div_traderAuctioneer .js_alreadyBidden").html(number_format(Math.floor(playerBid+f),0));if(h>0&&traderObj.deficit<=0){$("#div_traderAuctioneer .right_box .pay").removeClass("disabled")}else{$("#div_traderAuctioneer .right_box .pay").addClass("disabled")}},sumImportExport:function(){var f=traderObj.traderId;var g=0;var j=0;var i=0;traderObj.sumResources=0;for(var h in traderObj.planets){var e=traderObj.planets[h].output;g+=parseInt(e.metal)*multiplier.metal;j+=parseInt(e.crystal)*multiplier.crystal;i+=parseInt(e.deuterium)*multiplier.deuterium}var d=traderObj.honorOutput*multiplier.honor;traderObj.sumResources+=g+j+i+d;if(traderObj.sumResources>=traderObj.priceImportExport){traderObj.sumResources=traderObj.priceImportExport}$(f+" .js_sum_price").html(number_format(Math.floor(traderObj.sumResources),0));if(traderObj.sumResources>=traderObj.priceImportExport){$(f+" .js_import_price").addClass("green_text");$(f+" .right_box .pay").removeClass("disabled")}else{$(f+" .js_import_price").removeClass("green_text");$(f+" .right_box .pay").addClass("disabled")}},updateValues:function(d){var k=traderObj.traderId;if(k!=="#"+d.closest(".div_trader").attr("id")){return}var h=d.attr("class");var m=new RegExp(/\b(js_slider\w*)\b/);h=(m.test(h))?RegExp.$1:false;if(!h){return}var g=traderObj.current.planet;var j,l,e;if(h.indexOf("More")!=-1){e=h.replace("More","");j="More"}else{if(h.indexOf("Max")!=-1){e=h.replace("Max","");j="Max"}}traderObj.current.resource=e.replace("js_slider","").toLowerCase()||null;var f=traderObj.current.resource;var i=0;if(f=="honor"){i=Math.max(0,honorScore)}else{i=traderObj.planets[g].input[f]}l=getValue($(k+" ."+e+"Input").val());if(j=="More"){if(k=="#div_traderImportExport"){if(traderObj.sumResources<=traderObj.priceImportExport-1000*multiplier[f]){l+=1000}else{if(traderObj.sumResources<traderObj.priceImportExport){l+=Math.ceil((traderObj.priceImportExport-traderObj.sumResources)/multiplier[f])}}}else{if(k=="#div_traderAuctioneer"&&traderObj.price>0){l+=1000}}if(l>=i){l=Math.max(0,i)}}else{if(j=="Max"){if(k=="#div_traderImportExport"){if(traderObj.sumResources==0){l=Math.min(i,Math.ceil(traderObj.priceImportExport/multiplier[f]))}else{if(traderObj.sumResources.isBetween(0,traderObj.priceImportExport-1)){l=Math.min(i,l+Math.ceil((traderObj.priceImportExport-traderObj.sumResources)/multiplier[f]));l=Math.max(0,l)}}}else{if(k=="#div_traderAuctioneer"&&traderObj.price>0){l=Math.min(i,Math.ceil(getValue($(k+" .js_deficit").html())/multiplier[f]+l))}}if(f=="honor"&&l<0){l=0}}}$(k+" .js_amount."+e+"Input").val(number_format(l,0));if(f=="honor"){traderObj.honorOutput=l}else{traderObj.planets[g].output[f]=l}if(k=="#div_traderImportExport"){traderObj.sumImportExport()}else{if(k=="#div_traderAuctioneer"&&traderObj.price>0){traderObj.sumAuctioneer();traderObj.checkOverbidden()}}},updateValuesInputCanged:function(d){var m=traderObj.traderId;if(m!=="#"+d.closest(".div_trader").attr("id")){return}var i=d.attr("class");var o=new RegExp(/\b(js_slider\w*)\b/);i=(o.test(i))?RegExp.$1:false;if(!i){return}var e=i.replace("Input","");var g=e.replace("js_slider","").toLowerCase();var h=traderObj.current.planet;var j=0;if(g=="honor"){j=Math.max(0,honorScore)}else{j=parseInt(traderObj.planets[h].input[g])}var n=0;if(m=="#div_traderImportExport"){var k=0;for(var l in traderObj.planets){var f=traderObj.planets[l].output;if(g!="metal"){k+=Math.floor(parseInt(f.metal)*multiplier.metal)}if(g!="crystal"){k+=Math.floor(parseInt(f.crystal)*multiplier.crystal)}if(g!="deuterium"){k+=Math.floor(parseInt(f.deuterium)*multiplier.deuterium)}}n=Math.min(getValue(d.val()),Math.ceil((traderObj.priceImportExport-k)/multiplier[g]))}else{if(m=="#div_traderAuctioneer"){n=getValue(d.val())}}n=Math.min(n,j);traderObj.planets[h].output[g]=n;if(g=="honor"){traderObj.honorOutput=n}else{traderObj.planets[h].output[g]=n}if(m=="#div_traderImportExport"){traderObj.sumImportExport()}else{if(m=="#div_traderAuctioneer"){traderObj.sumAuctioneer();traderObj.checkOverbidden()}}formatNumber(m+" .js_amount."+e+"Input",n)},init:function(){$(".honorResource").hide();$("#menuTable a.trader").unbind("click.gotoTrader").bind("click.gotoTrader",function(d){d.preventDefault();traderObj.switchTrader("traderResources")});$(window).unbind("hashchange.switchTrader").bind("hashchange.switchTrader",function(f){var d=$.deparam.fragment(f.fragment);if(typeof(d.page)=="undefined"||d.page==""&&traderObj.traderId!=null){traderObj.returnToOverview()}else{traderObj.switchTrader(d.page)}});$(".small_back_to_overview").unbind("mouseenter").unbind("mouseout").bind("mouseenter",function(){$("#header_text").css("background-position","0 -250px")}).bind("mouseout",function(){$("#header_text").css("background-position","0 0")})},initSliderTrader:function(d){$(d+" .js_valButton").unbind("click.valControl");$(d+" .js_amount").unbind("keyup.inputVal");c.init(d);$(d+" .js_valButton").bind("click.valControl",function(f){traderObj.updateValues($(this));f.stopPropagation()});$(d+" .js_amount").bind("keyup.inputVal",function(f){traderObj.updateValuesInputCanged($(this));f.stopPropagation()})},initImportExport:function(){traderObj.planets=planetResources;traderObj.priceImportExport=getValue($(".js_import_price").html());traderObj.initSliderTrader("#div_traderImportExport");$("#div_traderImportExport .right_box .pay").bind("click",function(){traderObj.submitImportExport()});$("#div_traderImportExport .import_bargain.change").bind("click",function(){traderObj.changeImportItem()});$("#div_traderImportExport .import_bargain.take").bind("click",function(){traderObj.takeImportItem()})},switchTrader:function(d){if(traderObj.switchingTrader){return}traderObj.switchingTrader=true;Tipped.hideAll();$("#planet .close_details:visible").click();if("#div_"+d==traderObj.traderId){return}if(traderObj.traderId!=null||d==""||d==null){traderObj.returnToOverview();if(animation&&!b){setTimeout(function(){traderObj.selectTrader(d)},500)}else{traderObj.selectTrader(d)}}else{traderObj.selectTrader(d)}},returnToOverview:function(){Tipped.hideAll();$("#planet #header_text h2").empty().parent().hide();$("#traderOverview").find(".c-left, .c-right").hide();var d=traderObj.traderId;if(!d){return}$(d).hide();$("#callTrader").hide();if(animation&&!b){$("#planet h2").hide();$("#planet").animate({backgroundPosition:"-273px 0px",height:"470px"},500,function(){$("#planet h2").show();$("#planet").removeClass("detail");$("#traderOverview").find(".c-left, .c-right").show();$(".js_trader").show()})}else{$("#planet").removeClass("detail").css("background-position","-273px 0px").css("height","470px");$(".js_trader").show()}$("#planet a").show();$("#planet .back_to_overview").hide();removeTooltip($("#planet .back_to_overview"));$("#traderOverview").find(".c-left, .c-right").removeClass("c-small");traderObj.traderId=null;traderObj.switchingTrader=false}};breakerObj={costs:null,offer:null,ships:{},locked:false,lastTechId:null,initialize:function(){this.offer=parseInt($(".scrap_offer_amount").html());this.costs=breakerCosts;var d=this;$("#js_anythingSliderShips, #js_anythingSliderDefense").anythingSlider({startStopped:true,buildStartStop:false,expand:true,resizeContents:false,theme:"default",infiniteSlides:false,autoPlay:false,easing:"swing",resizeContents:true,stopAtEnd:true,playRtl:isRTLEnabled,buildNavigation:false,onInitialized:function(k,g){if(isMobile){var h=1000,j=50,l=0,n=0,i="ontouchend" in document,o=(i)?"touchstart":"mousedown",m=(i)?"touchmove":"mousemove",f=(i)?"touchend":"mouseup";g.$window.bind(o,function(p){n=(new Date()).getTime();l=p.originalEvent.touches?p.originalEvent.touches[0].pageX:p.pageX}).bind(f,function(p){n=0;l=0}).bind(m,function(s){s.preventDefault();var t=s.originalEvent.touches?s.originalEvent.touches[0].pageX:s.pageX,q=(l===0)?0:Math.abs(t-l),p=(new Date()).getTime();if(n!==0&&p-n<h&&q>j){if(t<l){g.goForward()}if(t>l){g.goBack()}n=0;l=0}})}}});$("#js_anythingSliderDefense").parent().parent().hide();$(".scrap_defense").bind("click.tabDefense",function(){$(".scrap_ships").removeClass("selected");$(this).addClass("selected");$("#js_anythingSliderShips").parent().parent().hide();$("#js_anythingSliderDefense").parent().parent().show()});$(".scrap_ships").bind("click.tabShips",function(){$(".scrap_defense").removeClass("selected");$(this).addClass("selected");$("#js_anythingSliderDefense").parent().parent().hide();$("#js_anythingSliderShips").parent().parent().show()});$(".buildingimg a").each(function(){var e=$(this).attr("ref").substr(6,3);var g=$(this).find(".level");var f=g.contents().filter(function(){return this.nodeType==3});d.ships[e]=f.text().replace(/^\s+|\s+$/g,"");f.remove();g.append(tsdpkt(d.ships[e]))});$("#js_scrapBargain").unbind("click").bind("click",function(){if(!$(this).hasClass("disabled")){d.bargain(d)}return false});$("#js_scrapScrapIT").unbind("click").bind("click",function(){if(!$(this).hasClass("disabled")){d.trade(d)}return false});$("input.ship_amount").unbind("focus").bind("focus",function(){d.lastTechId=$(this).attr("name").substr(2,3);$(this).val("")});$("input.ship_amount").unbind("keyup change").bind("keyup change",function(e){d.lastTechId=$(this).attr("name").substr(2,3);formatNumber(this,$(this).val());var f=$(this);clearTimeout(f.data("timer"));f.data("timer",setTimeout(function(){f.removeData("timer");d.updateResources(d)},300))});$(".buildingimg a").unbind("click").bind("click",function(){return false});$(".js_maxShips").unbind("click").bind("click",function(){if(!isMobile){$($(this).attr("ref")).focus()}var e=d.ships[$(this).attr("ref").substr(6,3)];$($(this).attr("ref")).val(tsdpkt(e)).trigger("change");d.updateResources(d);return false});$(".sendAll").unbind("click").bind("click",function(){$(".anythingSlider ul:visible input").each(function(){d.lastTechId=$(this).attr("name").substr(2,3);var e=d.ships[d.lastTechId];$(this).val(tsdpkt(e))});d.updateResources(d,function(e){if(e.error){$(".anythingSlider ul:visible input").val("");$("#div_traderScrap .resource_amount").text(0);d.checkShips(d)}})});$(".sendNone").unbind("click").bind("click",function(){$(".anythingSlider ul:visible input").each(function(){d.lastTechId=$(this).attr("name").substr(2,3);$(this).val("")});d.updateResources(d)});$("#js_bargainCost").text(tsdpkt(this.costs));this.checkMoney(this);this.checkShips(this);this.updateBargain(this)},bargain:function(d){$("#js_scrapBargain").addClass("disabled");$.ajax({url:breakerCallLink,type:"POST",dataType:"json",data:{bargain:1,token:breakerToken},beforeSend:function(){d.lock(d)},success:function(e){d.unlock(d);breakerToken=e.newToken;fadeBox(e.message,e.error);if(!e.error){d.costs=e.bargainPrice;d.offer=e.percentage;darkMatter=e.resources.dm;d.updateBargain(d);d.updateResources(d);traderObj.reloadResources(function(){d.checkMoney(d);Tipped.show($("#js_scrapBargain")[0])})}$(".scrap_trader_quote").text(e.quote)},error:function(){d.unlock(d)}})},trade:function(f){f.lock(f);var e=f.getTradeArray();var d=function d(){var h=loca.breakerQuestion+'<br/><br/><div style="text-align: left; margin-left: 30px">';var g=0;$.each(e,function(i){h+=this+"x "+loca.shipNames[i]+", ";g++;if(g%2==0){h+="<br/>"}});h=h.replace(/, (<br\/>)?$/,"");h+="</div>";return h};errorBoxDecision(loca.breaker,d(),LocalizationStrings.yes,LocalizationStrings.no,function(){$.ajax({url:breakerCallLink,type:"POST",dataType:"json",data:{lastTechId:f.lastTechId,finishTrade:1,trade:e,token:breakerToken},success:function(g){f.unlock(f);breakerToken=g.newToken;if(g.error){fadeBox(g.message,true)}else{fadeBox(g.message,false);f.offer=g.percentage;f.costs=g.bargainPrice;f.resetForm();f.updateBargain(f);$("#js_scrapAmountMetal").html(0);$("#js_scrapAmountCrystal").html(0);$("#js_scrapAmountDeuterium").html(0);traderObj.reloadResources(function(){f.updateShips(f)})}$(".scrap_trader_quote").text(g.quote)},error:function(){f.unlock(f);fadeBox(loca.error,true)}})},function(){f.unlock(f)})},updateResources:function(d,e){if(d.locked){return}$.ajax({url:breakerCallLink,type:"POST",dataType:"json",data:{lastTechId:d.lastTechId,trade:d.getTradeArray(),token:breakerToken},beforeSend:function(){d.lock(d)},success:function(h){breakerToken=h.newToken;if(h.error){fadeBox(h.message,true)}d.locked=false;var g=false;for(var f in h.techAmount){$("#ship_"+f).val(tsdpkt(h.techAmount[f]));if(!g&&$("#ship_"+f).val()!=d.ships[f]){g=true}}$("#js_scrapAmountMetal").html(tsdpkt(h.resources.metal));$("#js_scrapAmountCrystal").html(tsdpkt(h.resources.crystal));$("#js_scrapAmountDeuterium").html(tsdpkt(h.resources.deuterium));if(!d.notFirstOffer){$(".scrap_trader_quote").text(loca.breakerFirstOffer);d.notFirstOffer=true}if(g){d.updateShips(d)}else{d.unlock(d)}if(typeof(e)=="function"){e(h)}},error:function(){d.unlock(d)}})},updateShips:function(d){$.ajax({url:techUrl,type:"POST",dataType:"json",beforeSend:function(){d.lock(d)},success:function(e){$("#div_traderScrap .item").each(function(){var f=$(this).attr("id").substr(6,3);if(typeof(e[f])!="undefined"){var g=0;if(e[f]!=null){g=getValue(e[f])}d.ships[f]=g;var i=$(this).find(".level");i.contents().filter(function(){return this.nodeType==3}).remove();i.append(tsdpkt(g));if(e[f]!=null){var h=$("#button"+f);h.removeClass("on").removeClass("off");if(g>0){h.addClass("on")}else{h.addClass("off")}}}});d.unlock(d)},error:function(){d.unlock(d)}})},getTradeArray:function(){var d={};$("input.ship_amount").each(function(){var e=$(this).attr("name").substr(2,3);if(getValue($(this).val())!=0){d[e]=getValue($(this).val())}});return d},resetForm:function(){$("input.ship_amount").each(function(){$(this).val("0")});removeTooltip($("#js_scrapBargain"));$("#js_scrapBargain").removeClass("tooltip").removeAttr("title")},checkMoney:function(d){if(darkMatter<d.costs){$("#js_scrapBargain").addClass("disabled")}else{if(breakerMaximumPercent<=d.offer){$("#js_scrapBargain").addClass("disabled").addClass("tooltip").attr("title",loca.infoMaxBargain);initTooltips($("#js_scrapBargain"))}else{$("#js_scrapBargain").removeClass("disabled")}}},checkShips:function(e){var d=false;$("input.ship_amount").each(function(){if($(this).val().length>0&&getValue($(this).val())>0){d=true}});if(!d){$("#js_scrapScrapIT").addClass("disabled")}else{$("#js_scrapScrapIT").removeClass("disabled")}},updateBargain:function(d){$(".scrap_offer_amount").css("height",d.offer/100*$(".scrap_offer_amount").parent().css("height").replace("px",""));$(".scrap_offer_amount").html(d.offer+"%");$(".js_bargainCost").text(tsdpkt(d.costs))},lock:function(d){$("#js_scrapBargain").addClass("disabled");$("#js_scrapScrapIT").addClass("disabled");d.locked=true},unlock:function(d){d.locked=false;d.checkShips(d);d.checkMoney(d)}};auctioneer={socket:null,connected:false,timeout:null,retryInterval:5000,historyShown:false,initConnection:function(){try{var f=auctioneer;this.socket=new io.connect("/auctioneer",nodeParams);this.socket.on("connect",function(){f.connected=true;clearTimeout(this.timeout)});this.socket.on("disconnect",function(){f.connected=false;f.retryConnection()});this.socket.on("new auction",function(j){auctionId=j.auctionId;var i=$("#div_traderAuctioneer .detail_value.currentPlayer").html();if(j.oldAuction.player==null){i=loca.auctionNotSold}else{i='<a href="'+j.oldAuction.player.link+'">'+j.oldAuction.player.name+"</a>"}removeTooltip($("#div_traderAuctioneer .image_140px .detail_button"));var k=$("#div_traderAuctioneer .image_140px .detail_button").attr("title");var h=$(".auction_history li:first").hasClass("even")?"odd":"even";var g='                        <li class="'+h+'" style="display: none">                            <a href="javascript:void(0);"                               class="slideIn"                               ref="'+j.oldAuction.item.uuid+'">                                <img height="30" width="30"                                     src="/cdn/img/item-images/'+j.oldAuction.item.imageSmall+'-small.png"                                     alt="" title="'+k+'"                                     class="item_img tooltipHTML tooltipLeft r_'+j.oldAuction.item.rarity+'"/>                            </a>                            <span class="detail sum">'+number_format(j.oldAuction.sum,0)+'</span>                            <span class="detail player">'+i+'</span>                            <span class="detail date_time">'+j.oldAuction.time+"</span>                        </li>";$(".auction_history .history_content ul").prepend(g);$(".auction_history .history_content li:first").slideDown("slow");var e=$("#div_traderAuctioneer .auction_history li").length;if(e>3){$(".auction_history .history_content li:last").slideUp("slow",function(){$(".auction_history .history_content li:eq(21)").remove();var l=$(".auction_history .history_content li:eq(3)");l.addClass("more_auctions_li");if(auctioneer.historyShown){l.show()}});$("#div_traderAuctioneer .auction_history .more").show()}$("#div_traderAuctioneer .image_140px .detail_button").attr("ref",j.item.uuid).attr("title","").removeClass("r_common_140px").removeClass("r_uncommon_140px").removeClass("r_rare_140px").removeClass("r_epic_140px").addClass("r_"+j.item.rarity+"_140px");$("#div_traderAuctioneer .image_140px img").attr("src","/cdn/img/item-images/"+j.item.image+"-140x.png");$("#div_traderAuctioneer .left_header h2").html(loca.auctionRunning);f.setItemTooltip($("#div_traderAuctioneer .image_140px .detail_button"));f.setData({price:1000,sum:0,player:null,bids:0,info:j.info});$("#div_traderAuctioneer .js_alreadyBidden").html(number_format(0,0));$(".noAuctionOverlay").hide();traderObj.resetValues("#div_traderAuctioneer",false);traderObj.checkOverbidden()});this.socket.on("new bid",function(e){if(e.player.id==playerId){playerBid=e.sum;AuctionIdOflastPlayerBid=e.auctionId;$("#div_traderAuctioneer .js_alreadyBidden").html(number_format(Math.floor(playerBid),0))}f.setData({price:e.price,sum:e.sum,player:e.player,bids:e.bids});traderObj.checkOverbidden()});this.socket.on("auction finished",function(e){f.setData({price:0,player:e.player,bids:e.bids,info:e.info});traderObj.resetValues("#div_traderAuctioneer",false);$("#div_traderAuctioneer .js_alreadyBidden").html(number_format(0,0));$("#div_traderAuctioneer .js_auctioneerSum").html("");$("#div_traderAuctioneer .left_header h2").html(loca.auctionFinished);if(e.player!=null){if(e.player.id==playerId){f.setItemTooltip($("#div_traderAuctioneer .image_140px .detail_button"))}}$(".noAuctionOverlay").show();traderObj.checkOverbidden()});this.socket.on("timeLeft",function(e){f.setData({info:e})})}catch(d){}},setItemTooltip:function(d){$.ajax({url:detailUrl,data:{getDetails:1,type:$(d).attr("ref"),ajax:1},dataType:"json",success:function(e){changeTooltip(d,e.title);$("#itemDetails[data-uuid='"+$(d).attr("ref")+"'] .amount,a.detail_button[ref='"+$(d).attr("ref")+"'] .amount").html(tsdpkt(e.amount))},error:function(){fadeBox(loca.error,true)}})},initialize:function(){traderObj.initSliderTrader("#div_traderAuctioneer");traderObj.planets=planetResources;traderObj.price=getValue($(".js_price").html());$("#div_traderAuctioneer .right_box .pay").bind("click",function(){traderObj.submitAuction()});$("#div_traderAuctioneer .auction_history .more").bind("click",function(){if(auctioneer.historyShown){$(this).text("["+loca.auctionShowMore+"]")}else{$(this).text("["+loca.auctionShowLess+"]")}auctioneer.historyShown=!auctioneer.historyShown;$("#div_traderAuctioneer .auction_history .more_auctions_li").slideToggle("slow")});traderObj.sumAuctioneer();traderObj.checkOverbidden();this.initCountdown();loadScript(nodeUrl,this.initConnection)},retryConnection:function(){var d=this;setTimeout(function(){d.initConnection()},5000)},setData:function(e){var d=false;if(typeof(e.player)!="undefined"){if(e.player==null){$("#div_traderAuctioneer .detail_value.currentPlayer").text("");$("#div_traderAuctioneer .detail_value.currentPlayer").attr("href","")}else{$("#div_traderAuctioneer .detail_value.currentPlayer").text(e.player.name);$("#div_traderAuctioneer .detail_value.currentPlayer").attr("href",e.player.link);$("#div_traderAuctioneer .detail_value.currentPlayer").attr("data-player-id",e.player.id);$("#div_traderAuctioneer .detail_value.currentPlayer").data("playerId",e.player.id)}d=true}if(typeof(e.price)!=="undefined"){traderObj.price=e.price;$("#div_traderAuctioneer .js_price").html(number_format(Math.floor(e.price),0));d=true}if(typeof(e.sum)!=="undefined"){$("#div_traderAuctioneer .detail_value.currentSum").html(number_format(Math.floor(e.sum),0));d=true}if(typeof(e.bids)!=="undefined"){$("#div_traderAuctioneer .detail_value.numberOfBids").html(number_format(e.bids,0));d=true}if(typeof(e.info)!=="undefined"&&$.trim($("#div_traderAuctioneer .auction_info").html())!=e.info){$("#div_traderAuctioneer .auction_info").html(e.info);this.initCountdown();d=true}if(d){this.flash();traderObj.sumAuctioneer()}},initCountdown:function(){if(typeof(this.nextAuctionTimer)=="object"){timerHandler.removeCallback(this.nextAuctionTimer.timer)}if($(".nextAuction").length>0){this.nextAuctionTimer=new simpleCountdown($(".nextAuction").get(0),$(".nextAuction").text())}},flash:function(){if(traderObj.traderId=="#div_traderAuctioneer"){$("#div_traderAuctioneer .overlay").fadeIn("normal",function(){$(this).fadeOut("normal")})}},calculateDeficit:function(){var d=0;if(Math.floor(traderObj.price)==0){d=0}else{if(auctionId!=AuctionIdOflastPlayerBid){d=Math.floor(traderObj.price)}else{d=Math.floor(traderObj.price)-Math.floor(playerBid)}}return Math.floor(d)}};$(".js_trader").hover(function(){var d=$(this).attr("id").replace("js_trader","").toLowerCase();$(this).addClass(d+"_link_hover")},function(){var d=$(this).attr("id").replace("js_trader","").toLowerCase();$(".trader_link").each(function(e,f){$(this).removeClass(d+"_link_hover")})});$(".right_box .pay, .value-control, .ui-slider-handle, .bargain, .scrap_it, .source").hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")});traderObj.init();$(document).undelegate(".js_trader","click").delegate(".js_trader","click",function(){var d=$(this).attr("id").replace("js_","");traderObj.switchTrader(d)}).undelegate("#planet .js_backToOverview","click").delegate("#planet .js_backToOverview","click",function(){$.bbq.pushState({page:"",animation:""});$(".planetlink, .moonlink").fragment({page:"",animation:""})});var a=$.deparam.fragment();if(typeof(a.page)!="undefined"&&a.page!=""){traderObj.selectTrader(a.page,undefined,a.tab)}};