var cancelProduction_id;var production_listid;function cancelProduction(c,a,b){cancelProduction_id=c;production_listid=a;errorBoxDecision(loca.LOCA_ALL_NETWORK_ATTENTION,""+b+"",loca.LOCA_ALL_YES,loca.LOCA_ALL_NO,cancelProductionStart)}function cancelProductionStart(){window.location.replace(urlCancleBuilding+"&techid="+cancelProduction_id+"&listid="+production_listid)};