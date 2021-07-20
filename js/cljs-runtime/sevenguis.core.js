goog.provide('sevenguis.core');
sevenguis.core.click_count1 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
sevenguis.core.counter = (function sevenguis$core$counter(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-center","div.UI-task-center",1773518898),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.UI-counter","label.UI-counter",1653917519),cljs.core.deref(sevenguis.core.click_count1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_button,"Counter",(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sevenguis.core.click_count1,cljs.core.inc);
})], null)], null);
});
sevenguis.core.cels = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
sevenguis.core.cels_valid = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
sevenguis.core.fahr = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
sevenguis.core.fahr_valid = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
sevenguis.core.cels__GT_fahr = (function sevenguis$core$cels__GT_fahr(temp_str){
var temp = sevenguis.utils.parse_int(temp_str);
return Math.round(((temp * ((9) / (5))) + (32)));
});
sevenguis.core.fahr__GT_cels = (function sevenguis$core$fahr__GT_cels(temp_str){
var temp = sevenguis.utils.parse_int(temp_str);
return Math.round(((temp - (32)) * ((5) / (9))));
});
/**
 * Check if the input string is a valid value for temperature
 */
sevenguis.core.temperature_QMARK_ = (function sevenguis$core$temperature_QMARK_(val){
return (((!((val == null)))) && (cljs.core.boolean$(cljs.core.re_find(/^-?\d+$/,val))));
});
sevenguis.core.temp_converter = (function sevenguis$core$temp_converter(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-center","div.UI-task-center",1773518898),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.center-h.margin-h","div.center-h.margin-h",1698379265),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.input_change,"input-celsius","text","UI-input-right",sevenguis.core.cels,(function (e){
var input_value = e.target.value;
var valid_value = ((sevenguis.core.temperature_QMARK_(input_value)) || (clojure.string.blank_QMARK_(input_value)));
cljs.core.reset_BANG_(sevenguis.core.cels_valid,valid_value);

cljs.core.reset_BANG_(sevenguis.core.cels,input_value);

if(((valid_value) && ((!(clojure.string.blank_QMARK_(input_value)))))){
return cljs.core.reset_BANG_(sevenguis.core.fahr,sevenguis.core.cels__GT_fahr(input_value));
} else {
return null;
}
}),cljs.core.deref(sevenguis.core.cels_valid)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.UI-label-big","label.UI-label-big",-520842001),"C"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.center-h.margin-h","div.center-h.margin-h",1698379265),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.input_change,"input-fahreneith","text","UI-input-right",sevenguis.core.fahr,(function (e){
var input_value = e.target.value;
var valid_value = ((sevenguis.core.temperature_QMARK_(input_value)) || (clojure.string.blank_QMARK_(input_value)));
cljs.core.reset_BANG_(sevenguis.core.fahr_valid,valid_value);

cljs.core.reset_BANG_(sevenguis.core.fahr,input_value);

if(((valid_value) && ((!(clojure.string.blank_QMARK_(input_value)))))){
return cljs.core.reset_BANG_(sevenguis.core.cels,sevenguis.core.fahr__GT_cels(input_value));
} else {
return null;
}
}),cljs.core.deref(sevenguis.core.fahr_valid)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.UI-label-big","label.UI-label-big",-520842001),"F"], null)], null)], null);
});
sevenguis.core.booking_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("single");
sevenguis.core.start_date = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(sevenguis.utils.format_date.cljs$core$IFn$_invoke$arity$1(sevenguis.utils.date_now));
sevenguis.core.end_date = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(sevenguis.utils.format_date.cljs$core$IFn$_invoke$arity$1(sevenguis.utils.date_now));
/**
 * Transform a date string (dd-MM-yyyy) into a Date object
 */
sevenguis.core.str_to_date = (function sevenguis$core$str_to_date(date_str){
var coll = clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_str,/\./);
return (new Date([cljs.core.str.cljs$core$IFn$_invoke$arity$1((coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1((2)) : coll.call(null,(2)))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1((1)) : coll.call(null,(1)))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1((0)) : coll.call(null,(0))))].join('')));
});
/**
 * Check if the string contains a valid formatted date
 */
sevenguis.core.valid_date_QMARK_ = (function sevenguis$core$valid_date_QMARK_(val){
return cljs.core.boolean$(cljs.core.re_find(/^[\d]{2}.[\d]{2}.[\d]{4}$/,val));
});
/**
 * Check that end date is after start date
 */
sevenguis.core.end_after_start_QMARK_ = (function sevenguis$core$end_after_start_QMARK_(start_date,end_date){
return (sevenguis.core.str_to_date(end_date) >= sevenguis.core.str_to_date(start_date));
});
/**
 * True if the booking is single way
 */
sevenguis.core.one_way_QMARK_ = (function sevenguis$core$one_way_QMARK_(booking_type){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(booking_type),"single");
});
/**
 * Combobox for choose the type of flight
 */
sevenguis.core.flight_combo = (function sevenguis$core$flight_combo(booking_type){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"flight-combobox",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(booking_type),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__39008_SHARP_){
return cljs.core.reset_BANG_(booking_type,p1__39008_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"single"], null),"one-way flight"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"double"], null),"return flight"], null)], null);
});
sevenguis.core.flight_booker = (function sevenguis$core$flight_booker(){
var start_valid = sevenguis.core.valid_date_QMARK_(cljs.core.deref(sevenguis.core.start_date));
var end_valid = sevenguis.core.valid_date_QMARK_(cljs.core.deref(sevenguis.core.end_date));
var btn_enabled = ((((sevenguis.core.one_way_QMARK_(sevenguis.core.booking_type)) && (start_valid))) || ((((!(sevenguis.core.one_way_QMARK_(sevenguis.core.booking_type)))) && (((start_valid) && (((end_valid) && (sevenguis.core.end_after_start_QMARK_(cljs.core.deref(sevenguis.core.start_date),cljs.core.deref(sevenguis.core.end_date))))))))));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-center","div.UI-task-center",1773518898),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.flight_combo,sevenguis.core.booking_type], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#spacer","div#spacer",485775725)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Start date: "], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.input_change,"start-date","text","UI-input-center",sevenguis.core.start_date,(function (p1__39009_SHARP_){
return cljs.core.reset_BANG_(sevenguis.core.start_date,p1__39009_SHARP_.target.value);
}),start_valid], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"End date: "], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.input_change,"end-date","text","UI-input-center",sevenguis.core.end_date,(function (p1__39010_SHARP_){
return cljs.core.reset_BANG_(sevenguis.core.end_date,p1__39010_SHARP_.target.value);
}),end_valid,sevenguis.core.one_way_QMARK_(sevenguis.core.booking_type)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#spacer","div#spacer",485775725)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.UI-button","button.UI-button",1720363561),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(btn_enabled)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var msg = ["You have booked a return flight from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.start_date)),(((!(sevenguis.core.one_way_QMARK_(sevenguis.core.booking_type))))?[" to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.end_date))].join(''):null)].join('');
return alert(msg);
})], null),"Book"], null)], null);
});
sevenguis.core.timer_duration = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((15));
sevenguis.core.timer_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
/**
 * Round a number to precision decimal values.
 */
sevenguis.core.round = (function sevenguis$core$round(number,precision){
var scale = Math.pow((10),precision);
return (Math.round((number * scale)) / scale);
});
sevenguis.core.display_timer = (function sevenguis$core$display_timer(){
var time_str = cljs.core.deref(sevenguis.core.timer_value).toFixed((1));
var meter_value = (((cljs.core.deref(sevenguis.core.timer_duration) > (0)))?(cljs.core.deref(sevenguis.core.timer_value) / cljs.core.deref(sevenguis.core.timer_duration)):(1));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-center","div.UI-task-center",1773518898),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-section","div.UI-task-section",2085123211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.UI-label","span.UI-label",-16913788),"Elapsed Time"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meter","meter",-187641611),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),meter_value,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 0%"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-section","div.UI-task-section",2085123211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(time_str),"s"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-section","div.UI-task-section",2085123211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.UI-label","span.UI-label",-16913788),"Duration"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.input_range,(0),(30),cljs.core.deref(sevenguis.core.timer_duration),(function (p1__39011_SHARP_){
return cljs.core.reset_BANG_(sevenguis.core.timer_duration,p1__39011_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#spacer","div#spacer",485775725)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_button,"Reset Timer",(function (){
return cljs.core.reset_BANG_(sevenguis.core.timer_value,(0));
})], null)], null)], null);
});
sevenguis.core.update_timer = (function sevenguis$core$update_timer(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sevenguis.core.timer_value,(function (prev_value){
if((prev_value >= cljs.core.deref(sevenguis.core.timer_duration))){
return prev_value;
} else {
return sevenguis.core.round((prev_value + 0.1),(1));
}
}));
});
sevenguis.core.timer = (function sevenguis$core$timer(){
setInterval(sevenguis.core.update_timer,(100));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.display_timer], null);
});
sevenguis.core.crud_filter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
sevenguis.core.crud_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
sevenguis.core.crud_surname = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
sevenguis.core.crud_items = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Harry",new cljs.core.Keyword(null,"surname","surname",1407918027),"Potter"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Hermione",new cljs.core.Keyword(null,"surname","surname",1407918027),"Granger"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ron",new cljs.core.Keyword(null,"surname","surname",1407918027),"Weasley"], null)], null));
sevenguis.core.crud_selected_item = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
sevenguis.core.filter_items = (function sevenguis$core$filter_items(items,filter_str){
var filter_lower = clojure.string.lower_case(filter_str);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39012_SHARP_){
return ((clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__39012_SHARP_,new cljs.core.Keyword(null,"surname","surname",1407918027))),filter_lower)) || (clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__39012_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177))),filter_lower)));
}),items));
});
sevenguis.core.crud = (function sevenguis$core$crud(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-center","div.UI-task-center",1773518898),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-section","div.UI-task-section",2085123211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.UI-label","span.UI-label",-16913788),"Filter prefix:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_input,"text",sevenguis.core.crud_filter], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-section.UI-task-section--with-spaces","div.UI-task-section.UI-task-section--with-spaces",595954876),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_list_box,sevenguis.core.filter_items(cljs.core.deref(sevenguis.core.crud_items),cljs.core.deref(sevenguis.core.crud_filter)),(function (p1__39013_SHARP_){
return cljs.core.reset_BANG_(sevenguis.core.crud_selected_item,p1__39013_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-space-around","div.UI-space-around",1635514790),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-form-inline","div.UI-form-inline",-1411502159),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.UI-label","span.UI-label",-16913788),"Name:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_input,"text",sevenguis.core.crud_name], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-form-inline","div.UI-form-inline",-1411502159),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.UI-label","span.UI-label",-16913788),"Surname:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_input,"text",sevenguis.core.crud_surname], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#spacer","div#spacer",485775725)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-section","div.UI-task-section",2085123211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_button,"Create",(function (){
if(((cljs.core.seq(cljs.core.deref(sevenguis.core.crud_name))) && (cljs.core.seq(cljs.core.deref(sevenguis.core.crud_surname))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sevenguis.core.crud_items,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref(sevenguis.core.crud_name),new cljs.core.Keyword(null,"surname","surname",1407918027),cljs.core.deref(sevenguis.core.crud_surname)], null));

cljs.core.reset_BANG_(sevenguis.core.crud_name,"");

return cljs.core.reset_BANG_(sevenguis.core.crud_surname,"");
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_button,"Update",(function (){
if(((cljs.core.seq(cljs.core.deref(sevenguis.core.crud_name))) && (cljs.core.seq(cljs.core.deref(sevenguis.core.crud_surname))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.crud_items,cljs.core.assoc,(cljs.core.deref(sevenguis.core.crud_selected_item) | (0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref(sevenguis.core.crud_name),new cljs.core.Keyword(null,"surname","surname",1407918027),cljs.core.deref(sevenguis.core.crud_surname)], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_button,"Delete",(function (){
var item_idx = (cljs.core.deref(sevenguis.core.crud_selected_item) | (0));
if((((item_idx >= (0))) && ((item_idx < cljs.core.count(cljs.core.deref(sevenguis.core.crud_items)))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sevenguis.core.crud_items,sevenguis.utils.vec_remove,item_idx);
} else {
return null;
}
})], null)], null)], null);
});
sevenguis.core.circles_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history-idx","history-idx",-2005262576),(0),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null));
sevenguis.core.selected_circle = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
sevenguis.core.current_diameter_frame = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null));
sevenguis.core.reset_diameter_frame = (function sevenguis$core$reset_diameter_frame(){
return cljs.core.reset_BANG_(sevenguis.core.current_diameter_frame,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),(0),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null));
});
/**
 * Return the current history state
 */
sevenguis.core.current_state = (function sevenguis$core$current_state(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.core.circles_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"history-idx","history-idx",-2005262576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.circles_state))], null));
});
/**
 * Delete future history from the current index
 */
sevenguis.core.delete_future = (function sevenguis$core$delete_future(){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.circles_state))),(new cljs.core.Keyword(null,"history-idx","history-idx",-2005262576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.circles_state)) - (1)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.circles_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (past_history){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(past_history,(0),(new cljs.core.Keyword(null,"history-idx","history-idx",-2005262576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.circles_state)) + (1)));
}));
} else {
return null;
}
});
/**
 * Create a state using the function and append it to the history
 */
sevenguis.core.add_state = (function sevenguis$core$add_state(create_state){
sevenguis.core.delete_future();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.circles_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-idx","history-idx",-2005262576)], null),cljs.core.inc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.circles_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (past_history){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(past_history,(function (){var G__39014 = cljs.core.peek(past_history);
return (create_state.cljs$core$IFn$_invoke$arity$1 ? create_state.cljs$core$IFn$_invoke$arity$1(G__39014) : create_state.call(null,G__39014));
})());
}));
});
/**
 * Decrement the history index if > 0
 */
sevenguis.core.undo = (function sevenguis$core$undo(){
if((new cljs.core.Keyword(null,"history-idx","history-idx",-2005262576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.circles_state)) > (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.circles_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-idx","history-idx",-2005262576)], null),cljs.core.dec);
} else {
return null;
}
});
/**
 * Increment the history index if < length of history
 */
sevenguis.core.redo = (function sevenguis$core$redo(){
if(((new cljs.core.Keyword(null,"history-idx","history-idx",-2005262576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.circles_state)) + (1)) < cljs.core.count(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.circles_state))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.circles_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-idx","history-idx",-2005262576)], null),cljs.core.inc);
} else {
return null;
}
});
/**
 * Create a new circle and push it into the application state history
 */
sevenguis.core.add_circle = (function sevenguis$core$add_circle(e){
var new_circle = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),e.nativeEvent.offsetX,new cljs.core.Keyword(null,"y","y",-1757859776),e.nativeEvent.offsetY,new cljs.core.Keyword(null,"d","d",1972142424),(30),new cljs.core.Keyword(null,"id","id",-1388402092),(new Date()).getTime()], null);
return sevenguis.core.add_state((function (prev_state){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_state,new_circle);
}));
});
sevenguis.core.show_circle_menu = (function sevenguis$core$show_circle_menu(e,circle){
var pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.nativeEvent.pageX,new cljs.core.Keyword(null,"y","y",-1757859776),e.nativeEvent.pageY], null);
sevenguis.utils.prevent_default(e);

cljs.core.reset_BANG_(sevenguis.core.selected_circle,circle);

return cljs.core.reset_BANG_(sevenguis.core.current_diameter_frame,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),(1),new cljs.core.Keyword(null,"position","position",-2011731912),pos], null));
});
/**
 * Clone the current history in a new state
 */
sevenguis.core.clone_current_history = (function sevenguis$core$clone_current_history(){
var idx = sevenguis.core.current_state().indexOf(cljs.core.deref(sevenguis.core.selected_circle));
return sevenguis.core.add_state((function (prev_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev_state,idx,cljs.core.deref(sevenguis.core.selected_circle));
}));
});
/**
 * Update the current range only into the history, without adding a new one
 */
sevenguis.core.update_current_range = (function sevenguis$core$update_current_range(e){
var d = (e.target.value | (0));
var idx = sevenguis.core.current_state().indexOf(cljs.core.deref(sevenguis.core.selected_circle));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.circles_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"history-idx","history-idx",-2005262576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.circles_state)),idx,new cljs.core.Keyword(null,"d","d",1972142424)], null),d);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.selected_circle,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424)], null),d);
});
sevenguis.core.circle_menu_2 = (function sevenguis$core$circle_menu_2(){
var with_let39016 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let39016","with-let39016",550026908));
var temp__5757__auto___39064 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___39064 == null)){
} else {
var c__35414__auto___39065 = temp__5757__auto___39064;
if((with_let39016.generation === c__35414__auto___39065.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let39016.generation = c__35414__auto___39065.ratomGeneration);
}

var init39017 = (with_let39016.length === (0));
var pos = ((((init39017) || (cljs.core.not(with_let39016.hasOwnProperty((0))))))?(with_let39016[(0)] = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.current_diameter_frame))):(with_let39016[(0)]));
var ref = ((((init39017) || (cljs.core.not(with_let39016.hasOwnProperty((1))))))?(with_let39016[(1)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let39016[(1)]));
var handler = ((((init39017) || (cljs.core.not(with_let39016.hasOwnProperty((2))))))?(with_let39016[(2)] = (function (e){
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.deref(ref);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.deref(ref).contains(e.target));
} else {
return and__4210__auto__;
}
})())){
return sevenguis.core.reset_diameter_frame();
} else {
return sevenguis.utils.prevent_default(e);
}
})):(with_let39016[(2)]));
var _ = ((((init39017) || (cljs.core.not(with_let39016.hasOwnProperty((3))))))?(with_let39016[(3)] = document.addEventListener("click",handler)):(with_let39016[(3)]));
var res39018 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-menu","div.UI-menu",299004867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__39015_SHARP_){
return cljs.core.reset_BANG_(ref,p1__39015_SHARP_);
})], null),"Adjust Diameter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(2),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.selected_circle)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),sevenguis.core.update_current_range,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),sevenguis.core.clone_current_history], null)], null)], null);
var destroy__35413__auto___39066 = (function (){
return document.removeEventListener("click",handler);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let39016.destroy == null)){
(with_let39016.destroy = destroy__35413__auto___39066);
} else {
}
} else {
destroy__35413__auto___39066();
}

return res39018;
});
sevenguis.core.circle_menu_1 = (function sevenguis$core$circle_menu_1(){
var with_let39020 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let39020","with-let39020",-2007152311));
var temp__5757__auto___39067 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___39067 == null)){
} else {
var c__35414__auto___39068 = temp__5757__auto___39067;
if((with_let39020.generation === c__35414__auto___39068.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let39020.generation = c__35414__auto___39068.ratomGeneration);
}

var init39021 = (with_let39020.length === (0));
var pos = ((((init39021) || (cljs.core.not(with_let39020.hasOwnProperty((0))))))?(with_let39020[(0)] = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.current_diameter_frame))):(with_let39020[(0)]));
var ref = ((((init39021) || (cljs.core.not(with_let39020.hasOwnProperty((1))))))?(with_let39020[(1)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let39020[(1)]));
var handler = ((((init39021) || (cljs.core.not(with_let39020.hasOwnProperty((2))))))?(with_let39020[(2)] = (function (e){
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.deref(ref);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.deref(ref).contains(e.target));
} else {
return and__4210__auto__;
}
})())){
return sevenguis.core.reset_diameter_frame();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.current_diameter_frame,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core.inc);
}
})):(with_let39020[(2)]));
var _ = ((((init39021) || (cljs.core.not(with_let39020.hasOwnProperty((3))))))?(with_let39020[(3)] = document.addEventListener("click",handler)):(with_let39020[(3)]));
var res39022 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-menu","div.UI-menu",299004867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__39019_SHARP_){
return cljs.core.reset_BANG_(ref,p1__39019_SHARP_);
})], null),"Adjust Diameter"], null);
var destroy__35413__auto___39069 = (function (){
return document.removeEventListener("click",handler);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let39020.destroy == null)){
(with_let39020.destroy = destroy__35413__auto___39069);
} else {
}
} else {
destroy__35413__auto___39069();
}

return res39022;
});
sevenguis.core.circle_drawer = (function sevenguis$core$circle_drawer(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-circle-drawer","div.UI-circle-drawer",-2077311753),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-form-inline","div.UI-form-inline",-1411502159),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_button,"Undo",(function (){
return sevenguis.core.undo();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_button,"Redo",(function (){
return sevenguis.core.redo();
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-canvas","div.UI-canvas",-1678375654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),sevenguis.core.add_circle], null),(function (){var iter__4611__auto__ = (function sevenguis$core$circle_drawer_$_iter__39024(s__39025){
return (new cljs.core.LazySeq(null,(function (){
var s__39025__$1 = s__39025;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39025__$1);
if(temp__5753__auto__){
var s__39025__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39025__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__39025__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__39027 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__39026 = (0);
while(true){
if((i__39026 < size__4610__auto__)){
var circle = cljs.core._nth(c__4609__auto__,i__39026);
cljs.core.chunk_append(b__39027,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-circle","div.UI-circle",1503002052),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"data-attr","data-attr",1291040879),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__39026,circle,c__4609__auto__,size__4610__auto__,b__39027,s__39025__$2,temp__5753__auto__){
return (function (p1__39023_SHARP_){
return sevenguis.core.show_circle_menu(p1__39023_SHARP_,circle);
});})(i__39026,circle,c__4609__auto__,size__4610__auto__,b__39027,s__39025__$2,temp__5753__auto__))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(circle)], null)], null)], null));

var G__39070 = (i__39026 + (1));
i__39026 = G__39070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39027),sevenguis$core$circle_drawer_$_iter__39024(cljs.core.chunk_rest(s__39025__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39027),null);
}
} else {
var circle = cljs.core.first(s__39025__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-circle","div.UI-circle",1503002052),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"data-attr","data-attr",1291040879),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (circle,s__39025__$2,temp__5753__auto__){
return (function (p1__39023_SHARP_){
return sevenguis.core.show_circle_menu(p1__39023_SHARP_,circle);
});})(circle,s__39025__$2,temp__5753__auto__))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(circle)], null)], null)], null),sevenguis$core$circle_drawer_$_iter__39024(cljs.core.rest(s__39025__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(sevenguis.core.current_state());
})()], null),(function (){var G__39028 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.current_diameter_frame));
switch (G__39028) {
case (2):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.circle_menu_2], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.circle_menu_1], null);

break;
default:
return null;

}
})()], null);
});
sevenguis.core.table_size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.char$,cljs.core.range.cljs$core$IFn$_invoke$arity$2("A".charCodeAt((0)),("Z".charCodeAt((0)) + (1)))),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(100))], null);
sevenguis.core.table_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A0","A0",452449387),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"computed","computed",-1482016762),(1)], null),new cljs.core.Keyword(null,"A1","A1",-514669796),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"2",new cljs.core.Keyword(null,"computed","computed",-1482016762),(2)], null),new cljs.core.Keyword(null,"A2","A2",-1329076341),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"=SUM(A0:A1, 2)",new cljs.core.Keyword(null,"computed","computed",-1482016762),(5)], null)], null));
sevenguis.core.cell_dependencies = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
sevenguis.core.active_cell = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
sevenguis.core.edit_mode = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
sevenguis.core.table_cell = (function sevenguis$core$table_cell(col,row){
var coord = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)].join('');
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.core.table_state),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(coord));
});
sevenguis.core.operations = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"SUM","SUM",607822884),(function (p1__39029_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,p1__39029_SHARP_);
}),new cljs.core.Keyword(null,"SUB","SUB",1236808813),(function (p1__39030_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,p1__39030_SHARP_);
}),new cljs.core.Keyword(null,"MUL","MUL",-1545099504),(function (p1__39031_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,p1__39031_SHARP_);
}),new cljs.core.Keyword(null,"DIV","DIV",-1432109015),(function (p1__39032_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._SLASH_,p1__39032_SHARP_);
}),new cljs.core.Keyword(null,"AVG","AVG",-577452922),(function (p1__39033_SHARP_){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,p1__39033_SHARP_) / cljs.core.count(p1__39033_SHARP_));
})], null);
/**
 * True if the cell value is a formula
 */
sevenguis.core.formula_QMARK_ = (function sevenguis$core$formula_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),"=");
});
/**
 * True if the string is a valid coordinate
 */
sevenguis.core.coord_QMARK_ = (function sevenguis$core$coord_QMARK_(c){
if(typeof c === 'string'){
return cljs.core.boolean$(cljs.core.re_find(/^[A-Z]{1}[0-9]{1,2}$/,c));
} else {
return null;
}
});
/**
 * True if the formula contains a valid operation
 */
sevenguis.core.operation_QMARK_ = (function sevenguis$core$operation_QMARK_(formula){
var and__4210__auto__ = cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("formula","op","formula/op",942093547),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(formula,(1),(4)));
if(and__4210__auto__){
var rest = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(formula,(4));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(rest),"(")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(rest),")")));
} else {
return and__4210__auto__;
}
});
/**
 * True if the string is a valid range
 */
sevenguis.core.range_QMARK_ = (function sevenguis$core$range_QMARK_(r){
var and__4210__auto__ = typeof r === 'string';
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(r),(5));
if(and__4210__auto____$1){
var and__4210__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(r,(2)),":");
if(and__4210__auto____$2){
var and__4210__auto____$3 = sevenguis.core.coord_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(r,(0),(2)));
if(cljs.core.truth_(and__4210__auto____$3)){
return sevenguis.core.coord_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(r,(3),(5)));
} else {
return and__4210__auto____$3;
}
} else {
return and__4210__auto____$2;
}
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("type","number","type/number",1566746768),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","boolean","cljs.core/boolean",-1222483266,null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),/^\d*\.?\d+$/,new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__39034_SHARP_){
return cljs.core.boolean$(cljs.core.re_find(/^\d*\.?\d+$/,p1__39034_SHARP_));
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("formula","op","formula/op",942093547),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__39035#","p1__39035#",710847593,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","subs","cljs.core/subs",-1092266147,null),cljs.core.list(new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),new cljs.core.Symbol(null,"p1__39035#","p1__39035#",710847593,null)),(1))),cljs.core.list(new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),new cljs.core.Symbol("sevenguis.core","operations","sevenguis.core/operations",2141698102,null)))),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39035_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39035_SHARP_),(1));
}),cljs.core.keys(sevenguis.core.operations))));
/**
 * Get cell value using coordinates
 */
sevenguis.core.cell_value = (function sevenguis$core$cell_value(coord,table_state){
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(table_state),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(coord));
var computed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.Keyword(null,"computed","computed",-1482016762));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.Keyword(null,"value","value",305978217));
var or__4212__auto__ = computed;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(((cljs.core.seq(value)) && (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","number","type/number",1566746768),value)))){
return value;
} else {
return null;
}
}
});
/**
 * Add a dependency to the cell dependencies state
 */
sevenguis.core.update_dependencies = (function sevenguis$core$update_dependencies(dep,coord,cell_dependencies){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_dependencies,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(coord)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dep], 0));
});
/**
 * Get column coordinate using spec map
 */
sevenguis.core.coord_from_range = (function sevenguis$core$coord_from_range(r){
var col = cljs.pprint.char_code(cljs.core.first(r));
var row = sevenguis.utils.parse_int(cljs.core.last(r));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"row","row",-570139521),row], null);
});
/**
 * Parse and return a range
 */
sevenguis.core.parse_range = (function sevenguis$core$parse_range(value,coord,table_state,cell_dependencies){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,/\:/);
var start = sevenguis.core.coord_from_range(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(0)));
var end = sevenguis.core.coord_from_range(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(1)));
var iter__4611__auto__ = (function sevenguis$core$parse_range_$_iter__39036(s__39037){
return (new cljs.core.LazySeq(null,(function (){
var s__39037__$1 = s__39037;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39037__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var c = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__39037__$1,c,xs__6308__auto__,temp__5753__auto__,parts,start,end){
return (function sevenguis$core$parse_range_$_iter__39036_$_iter__39038(s__39039){
return (new cljs.core.LazySeq(null,((function (s__39037__$1,c,xs__6308__auto__,temp__5753__auto__,parts,start,end){
return (function (){
var s__39039__$1 = s__39039;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__39039__$1);
if(temp__5753__auto____$1){
var s__39039__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39039__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__39039__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__39041 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__39040 = (0);
while(true){
if((i__39040 < size__4610__auto__)){
var r = cljs.core._nth(c__4609__auto__,i__39040);
cljs.core.chunk_append(b__39041,(function (){var cell_coord = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
var value__$1 = sevenguis.core.cell_value(cell_coord,table_state);
sevenguis.core.update_dependencies(cell_coord,coord,cell_dependencies);

var or__4212__auto__ = ((((typeof value__$1 === 'number') || (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","number","type/number",1566746768),value__$1))))?sevenguis.utils.parse_float(value__$1):null);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})());

var G__39072 = (i__39040 + (1));
i__39040 = G__39072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39041),sevenguis$core$parse_range_$_iter__39036_$_iter__39038(cljs.core.chunk_rest(s__39039__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39041),null);
}
} else {
var r = cljs.core.first(s__39039__$2);
return cljs.core.cons((function (){var cell_coord = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
var value__$1 = sevenguis.core.cell_value(cell_coord,table_state);
sevenguis.core.update_dependencies(cell_coord,coord,cell_dependencies);

var or__4212__auto__ = ((((typeof value__$1 === 'number') || (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","number","type/number",1566746768),value__$1))))?sevenguis.utils.parse_float(value__$1):null);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})(),sevenguis$core$parse_range_$_iter__39036_$_iter__39038(cljs.core.rest(s__39039__$2)));
}
} else {
return null;
}
break;
}
});})(s__39037__$1,c,xs__6308__auto__,temp__5753__auto__,parts,start,end))
,null,null));
});})(s__39037__$1,c,xs__6308__auto__,temp__5753__auto__,parts,start,end))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(start),(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(end) + (1))))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,sevenguis$core$parse_range_$_iter__39036(cljs.core.rest(s__39037__$1)));
} else {
var G__39073 = cljs.core.rest(s__39037__$1);
s__39037__$1 = G__39073;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(start),(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(end) + (1)))));
});
/**
 * Parse operation arguments
 */
sevenguis.core.parse_args = (function sevenguis$core$parse_args(params,coord,table_state,cell_dependencies){
var args = clojure.string.split.cljs$core$IFn$_invoke$arity$2(params,/,/);
if((cljs.core.count(args) > (1))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39042_SHARP_){
return (sevenguis.core.parse_args.cljs$core$IFn$_invoke$arity$4 ? sevenguis.core.parse_args.cljs$core$IFn$_invoke$arity$4(p1__39042_SHARP_,coord,table_state,cell_dependencies) : sevenguis.core.parse_args.call(null,p1__39042_SHARP_,coord,table_state,cell_dependencies));
}),args)));
} else {
var arg = clojure.string.trim(cljs.core.first(args));
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","number","type/number",1566746768),arg)){
return sevenguis.utils.parse_float(arg);
} else {
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(sevenguis.core.range_QMARK_,arg)){
return sevenguis.core.parse_range(arg,coord,table_state,cell_dependencies);
} else {
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(sevenguis.core.coord_QMARK_,arg)){
sevenguis.core.update_dependencies(arg,coord,cell_dependencies);

var value = sevenguis.core.cell_value(arg,table_state);
if(((typeof value === 'number') || (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","number","type/number",1566746768),value)))){
return sevenguis.utils.parse_float(value);
} else {
return value;
}
} else {
return null;
}
}
}
}
});
/**
 * Return the computed cell formula content 
 * and update the cell-dependencies state while parsing the arguments.
 */
sevenguis.core.compute_formula = (function sevenguis$core$compute_formula(formula,coord,table_state,cell_dependencies){
if(sevenguis.core.operation_QMARK_(formula)){
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sevenguis.core.operations,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(formula,(1),(4))));
var params = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(formula,(5),(cljs.core.count(formula) - (1)));
var args = sevenguis.core.parse_args(params,coord,table_state,cell_dependencies);
return (op.cljs$core$IFn$_invoke$arity$1 ? op.cljs$core$IFn$_invoke$arity$1(args) : op.call(null,args));
} else {
var arg = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(formula,(1));
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(sevenguis.core.coord_QMARK_,arg)){
var G__39044 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sevenguis.core.cell_value(arg,table_state)], 0));
var G__39045 = sevenguis.core.cell_value(arg,table_state);
var fexpr__39043 = sevenguis.core.update_dependencies(arg,coord,cell_dependencies);
return (fexpr__39043.cljs$core$IFn$_invoke$arity$2 ? fexpr__39043.cljs$core$IFn$_invoke$arity$2(G__39044,G__39045) : fexpr__39043.call(null,G__39044,G__39045));
} else {
return null;
}
}
});
sevenguis.core.change_cell_value = (function sevenguis$core$change_cell_value(col,row,value){
var coord = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.table_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(coord),new cljs.core.Keyword(null,"value","value",305978217)], null),value);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.cell_dependencies,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(coord),cljs.core.PersistentVector.EMPTY);

if(sevenguis.core.formula_QMARK_(value)){
var computed_39074 = sevenguis.core.compute_formula(value,coord,sevenguis.core.table_state,sevenguis.core.cell_dependencies);
var formatted_39075 = ((cljs.core.float_QMARK_(computed_39074))?parseFloat(computed_39074.toFixed((5))):computed_39074);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.table_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(coord),new cljs.core.Keyword(null,"computed","computed",-1482016762)], null),formatted_39075);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.table_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(coord),new cljs.core.Keyword(null,"computed","computed",-1482016762)], null),null);
}

var seq__39047 = cljs.core.seq(cljs.core.deref(sevenguis.core.cell_dependencies));
var chunk__39048 = null;
var count__39049 = (0);
var i__39050 = (0);
while(true){
if((i__39050 < count__39049)){
var vec__39057 = chunk__39048.cljs$core$IIndexed$_nth$arity$2(null,i__39050);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39057,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39057,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (seq__39047,chunk__39048,count__39049,i__39050,vec__39057,k,v,coord){
return (function (p1__39046_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,p1__39046_SHARP_);
});})(seq__39047,chunk__39048,count__39049,i__39050,vec__39057,k,v,coord))
,v))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.table_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"computed","computed",-1482016762)], null),sevenguis.core.compute_formula(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.core.table_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"value","value",305978217)], null)),k,sevenguis.core.table_state,sevenguis.core.cell_dependencies));
} else {
}


var G__39076 = seq__39047;
var G__39077 = chunk__39048;
var G__39078 = count__39049;
var G__39079 = (i__39050 + (1));
seq__39047 = G__39076;
chunk__39048 = G__39077;
count__39049 = G__39078;
i__39050 = G__39079;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39047);
if(temp__5753__auto__){
var seq__39047__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39047__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39047__$1);
var G__39080 = cljs.core.chunk_rest(seq__39047__$1);
var G__39081 = c__4638__auto__;
var G__39082 = cljs.core.count(c__4638__auto__);
var G__39083 = (0);
seq__39047 = G__39080;
chunk__39048 = G__39081;
count__39049 = G__39082;
i__39050 = G__39083;
continue;
} else {
var vec__39060 = cljs.core.first(seq__39047__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39060,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39060,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (seq__39047,chunk__39048,count__39049,i__39050,vec__39060,k,v,seq__39047__$1,temp__5753__auto__,coord){
return (function (p1__39046_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,p1__39046_SHARP_);
});})(seq__39047,chunk__39048,count__39049,i__39050,vec__39060,k,v,seq__39047__$1,temp__5753__auto__,coord))
,v))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.table_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"computed","computed",-1482016762)], null),sevenguis.core.compute_formula(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.core.table_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"value","value",305978217)], null)),k,sevenguis.core.table_state,sevenguis.core.cell_dependencies));
} else {
}


var G__39084 = cljs.core.next(seq__39047__$1);
var G__39085 = null;
var G__39086 = (0);
var G__39087 = (0);
seq__39047 = G__39084;
chunk__39048 = G__39085;
count__39049 = G__39086;
i__39050 = G__39087;
continue;
}
} else {
return null;
}
}
break;
}
});
sevenguis.core.handle_cell_change = (function sevenguis$core$handle_cell_change(col,row,value){
sevenguis.core.change_cell_value(col,row,value);

return cljs.core.reset_BANG_(sevenguis.core.edit_mode,false);
});
sevenguis.core.set_active_cell = (function sevenguis$core$set_active_cell(col,row){
var coord = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)].join('');
cljs.core.reset_BANG_(sevenguis.core.active_cell,coord);

return cljs.core.reset_BANG_(sevenguis.core.edit_mode,true);
});
sevenguis.core.cells = (function sevenguis$core$cells(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-table-container","div.UI-table-container",-1402693043),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.UI-table","table.UI-table",1504016076),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.UI-table-tr-th","tr.UI-table-tr-th",-1782021286),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.UI-table-th.UI-table-th-small","th.UI-table-th.UI-table-th-small",78941633)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (col){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.UI-table-th","th.UI-table-th",933678006),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["header-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-table-cell-header","div.UI-table-cell-header",-660156961),col], null)], null);
}),new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(sevenguis.core.table_size)))], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.UI-table-header-vertical","td.UI-table-header-vertical",1835582013),row], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (col){
var cell_coord = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)].join('');
var cell = sevenguis.core.table_cell(col,row);
var cell_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.Keyword(null,"value","value",305978217));
var cell_comp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.Keyword(null,"computed","computed",-1482016762));
var is_active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.core.active_cell),cell_coord);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.UI-table-td","td.UI-table-td",-1313423048),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-table-cell","div.UI-table-cell",666660067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return sevenguis.core.set_active_cell(col,row);
})], null),(cljs.core.truth_((function (){var and__4210__auto__ = is_active;
if(and__4210__auto__){
return cljs.core.deref(sevenguis.core.edit_mode);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.UI-table-cell-input","input.UI-table-cell-input",-1486045668),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),cell_value,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__39063_SHARP_){
return sevenguis.core.handle_cell_change(col,row,p1__39063_SHARP_.target.value);
})], null)], null):(function (){var or__4212__auto__ = cell_comp;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cell_value;
}
})())], null)], null);
}),new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(sevenguis.core.table_size)))], null);
}),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(sevenguis.core.table_size)))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-table-desc","div.UI-table-desc",1813686688),["Click inside a cell to edit its formula."," Press enter to apply. Click outside the cell or press escape to cancel."," Here are some example contents:"," '5.5', 'Some text', '=A1', '=SUM(B2:C4)', '=DIV(C1, 5)'."," Supported operations are SUM, SUB, MUL, DIV, AVG."].join('')], null)], null);
});
sevenguis.core.github_corner = (function sevenguis$core$github_corner(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.github-corner","a.github-corner",1009860248),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"View source on GitHub",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/elias94/7guis-clojurescript"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fill","fill",883462889),"#151513",new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 250 250",new cljs.core.Keyword(null,"height","height",1025178622),"80",new cljs.core.Keyword(null,"width","width",-384071477),"80"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path.octo-arm","path.octo-arm",1773330838),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"130px 106px"], null),new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"d","d",1972142424),"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path.octo-body","path.octo-body",1681811810),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"d","d",1972142424),"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"], null)], null)], null)], null);
});
sevenguis.core.main_page = (function sevenguis$core$main_page(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.github_corner], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.page-title","h1.page-title",1640684783),"7GUIs in Clojurescript with Reagent"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is a live version of 7GUIs with ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://clojurescript.org",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Clojurescript"], null)," and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://reagent-project.github.io/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Reagent"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/elias94/7guis-clojurescript",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"(source)"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_task,"Counter",sevenguis.core.counter], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_task,"Temperature Converter",sevenguis.core.temp_converter], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_task,"Flight Booker",sevenguis.core.flight_booker], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_task,"Timer",sevenguis.core.timer], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_task,"CRUD",sevenguis.core.crud], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_task,"Circle Drawer",sevenguis.core.circle_drawer], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.components.ui_task,"Cells",sevenguis.core.cells], null)], null);
});
sevenguis.core.start = (function sevenguis$core$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.main_page], null),document.getElementById("app"));
});
sevenguis.core.init = (function sevenguis$core$init(){
return sevenguis.core.start();
});
goog.exportSymbol('sevenguis.core.init', sevenguis.core.init);
sevenguis.core.stop = (function sevenguis$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=sevenguis.core.js.map
