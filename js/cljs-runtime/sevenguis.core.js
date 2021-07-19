goog.provide('sevenguis.core');
sevenguis.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/items",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:item-id",new cljs.core.Keyword(null,"item","item",249373802)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null));
sevenguis.core.path_for = (function sevenguis$core$path_for(var_args){
var args__4835__auto__ = [];
var len__4829__auto___52543 = arguments.length;
var i__4830__auto___52544 = (0);
while(true){
if((i__4830__auto___52544 < len__4829__auto___52543)){
args__4835__auto__.push((arguments[i__4830__auto___52544]));

var G__52545 = (i__4830__auto___52544 + (1));
i__4830__auto___52544 = G__52545;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return sevenguis.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(sevenguis.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__52472){
var vec__52473 = p__52472;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52473,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(sevenguis.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2(sevenguis.core.router,route));
}
}));

(sevenguis.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sevenguis.core.path_for.cljs$lang$applyTo = (function (seq52470){
var G__52471 = cljs.core.first(seq52470);
var seq52470__$1 = cljs.core.next(seq52470);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52471,seq52470__$1);
}));

/**
 * Component to wrap a single task
 */
sevenguis.core.ui_task = (function sevenguis$core$ui_task(title,task){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"UI-task"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"UI-task-container"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [task], null)], null)], null);
});
/**
 * Button with an on-click event handler
 */
sevenguis.core.ui_button = (function sevenguis$core$ui_button(var_args){
var G__52477 = arguments.length;
switch (G__52477) {
case 2:
return sevenguis.core.ui_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sevenguis.core.ui_button.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sevenguis.core.ui_button.cljs$core$IFn$_invoke$arity$2 = (function (title,on_click){
return sevenguis.core.ui_button.cljs$core$IFn$_invoke$arity$3(title,on_click,false);
}));

(sevenguis.core.ui_button.cljs$core$IFn$_invoke$arity$3 = (function (title,on_click,disabled){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"UI-button",new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
})], null),(cljs.core.truth_(disabled)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null):null)], 0))], null);
}));

(sevenguis.core.ui_button.cljs$lang$maxFixedArity = 3);

/**
 * Simple input element
 */
sevenguis.core.ui_input = (function sevenguis$core$ui_input(input_type,input_value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),input_type,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(input_value),new cljs.core.Keyword(null,"class","class",-2030961996),"UI-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52478_SHARP_){
return cljs.core.reset_BANG_(input_value,p1__52478_SHARP_.target.value);
})], null)], null);
});
/**
 * List box made of select and different options
 */
sevenguis.core.ui_list_box = (function sevenguis$core$ui_list_box(items,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"class","class",-2030961996),"UI-list-box",new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null),(function (){var iter__4622__auto__ = (function sevenguis$core$ui_list_box_$_iter__52479(s__52480){
return (new cljs.core.LazySeq(null,(function (){
var s__52480__$1 = s__52480;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52480__$1);
if(temp__5753__auto__){
var s__52480__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52480__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__52480__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__52482 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__52481 = (0);
while(true){
if((i__52481 < size__4621__auto__)){
var index = cljs.core._nth(c__4620__auto__,i__52481);
cljs.core.chunk_append(b__52482,(function (){var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items,index);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"name","name",1843675177));
var item_last = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"surname","surname",1407918027));
var item_key = ["item-",sevenguis.utils.escape_str(item_name),"-",sevenguis.utils.escape_str(item_last)].join('');
var item_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_name),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_last)].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),item_key,new cljs.core.Keyword(null,"key","key",-1516042587),item_key,new cljs.core.Keyword(null,"value","value",305978217),index], null),item_str], null);
})());

var G__52547 = (i__52481 + (1));
i__52481 = G__52547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52482),sevenguis$core$ui_list_box_$_iter__52479(cljs.core.chunk_rest(s__52480__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52482),null);
}
} else {
var index = cljs.core.first(s__52480__$2);
return cljs.core.cons((function (){var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items,index);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"name","name",1843675177));
var item_last = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"surname","surname",1407918027));
var item_key = ["item-",sevenguis.utils.escape_str(item_name),"-",sevenguis.utils.escape_str(item_last)].join('');
var item_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_name),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_last)].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),item_key,new cljs.core.Keyword(null,"key","key",-1516042587),item_key,new cljs.core.Keyword(null,"value","value",305978217),index], null),item_str], null);
})(),sevenguis$core$ui_list_box_$_iter__52479(cljs.core.rest(s__52480__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)));
})()], null);
});
/**
 * An full input element with callback on change, class, validation, disable, etc.
 */
sevenguis.core.input_change = (function sevenguis$core$input_change(var_args){
var G__52485 = arguments.length;
switch (G__52485) {
case 5:
return sevenguis.core.input_change.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return sevenguis.core.input_change.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return sevenguis.core.input_change.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sevenguis.core.input_change.cljs$core$IFn$_invoke$arity$5 = (function (input_name,input_type,input_class,input_value,on_change_evt){
return sevenguis.core.input_change.cljs$core$IFn$_invoke$arity$7(input_name,input_type,input_class,input_value,on_change_evt,true,false);
}));

(sevenguis.core.input_change.cljs$core$IFn$_invoke$arity$6 = (function (input_name,input_type,input_class,input_value,on_change_evt,is_valid){
return sevenguis.core.input_change.cljs$core$IFn$_invoke$arity$7(input_name,input_type,input_class,input_value,on_change_evt,is_valid,false);
}));

(sevenguis.core.input_change.cljs$core$IFn$_invoke$arity$7 = (function (input_name,input_type,input_class,input_value,on_change_evt,is_valid,disabled){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),input_type,new cljs.core.Keyword(null,"name","name",1843675177),input_name,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(input_value),new cljs.core.Keyword(null,"class","class",-2030961996),["UI-input ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_class),((is_valid === false)?" input-error":null)].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52483_SHARP_){
return (on_change_evt.cljs$core$IFn$_invoke$arity$1 ? on_change_evt.cljs$core$IFn$_invoke$arity$1(p1__52483_SHARP_) : on_change_evt.call(null,p1__52483_SHARP_));
})], null),(cljs.core.truth_(disabled)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null):null)], 0))], null);
}));

(sevenguis.core.input_change.cljs$lang$maxFixedArity = 7);

sevenguis.core.input_range = (function sevenguis$core$input_range(min,max,value,on_change){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-center","div.UI-task-center",1773518898),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.center-h.margin-h","div.center-h.margin-h",1698379265),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.input_change,"input-celsius","text","UI-input-right",sevenguis.core.cels,(function (e){
var input_value = e.target.value;
var valid_value = ((sevenguis.core.temperature_QMARK_(input_value)) || (clojure.string.blank_QMARK_(input_value)));
cljs.core.reset_BANG_(sevenguis.core.cels_valid,valid_value);

cljs.core.reset_BANG_(sevenguis.core.cels,input_value);

if(((valid_value) && ((!(clojure.string.blank_QMARK_(input_value)))))){
return cljs.core.reset_BANG_(sevenguis.core.fahr,sevenguis.core.cels__GT_fahr(input_value));
} else {
return null;
}
}),cljs.core.deref(sevenguis.core.cels_valid)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.UI-label-big","label.UI-label-big",-520842001),"C"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.center-h.margin-h","div.center-h.margin-h",1698379265),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.input_change,"input-fahreneith","text","UI-input-right",sevenguis.core.fahr,(function (e){
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"flight-combobox",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(booking_type),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52486_SHARP_){
return cljs.core.reset_BANG_(booking_type,p1__52486_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"single"], null),"one-way flight"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"double"], null),"return flight"], null)], null);
});
sevenguis.core.flight_booker = (function sevenguis$core$flight_booker(){
var start_valid = sevenguis.core.valid_date_QMARK_(cljs.core.deref(sevenguis.core.start_date));
var end_valid = sevenguis.core.valid_date_QMARK_(cljs.core.deref(sevenguis.core.end_date));
var btn_enabled = ((((sevenguis.core.one_way_QMARK_(sevenguis.core.booking_type)) && (start_valid))) || ((((!(sevenguis.core.one_way_QMARK_(sevenguis.core.booking_type)))) && (((start_valid) && (((end_valid) && (sevenguis.core.end_after_start_QMARK_(cljs.core.deref(sevenguis.core.start_date),cljs.core.deref(sevenguis.core.end_date))))))))));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-center","div.UI-task-center",1773518898),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.flight_combo,sevenguis.core.booking_type], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#spacer","div#spacer",485775725)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Start date: "], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.input_change,"start-date","text","UI-input-center",sevenguis.core.start_date,(function (p1__52487_SHARP_){
return cljs.core.reset_BANG_(sevenguis.core.start_date,p1__52487_SHARP_.target.value);
}),start_valid], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"End date: "], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.input_change,"end-date","text","UI-input-center",sevenguis.core.end_date,(function (p1__52488_SHARP_){
return cljs.core.reset_BANG_(sevenguis.core.end_date,p1__52488_SHARP_.target.value);
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-center","div.UI-task-center",1773518898),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-section","div.UI-task-section",2085123211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.UI-label","span.UI-label",-16913788),"Elapsed Time"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meter","meter",-187641611),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),meter_value,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 0%"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-section","div.UI-task-section",2085123211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(time_str),"s"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-section","div.UI-task-section",2085123211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.UI-label","span.UI-label",-16913788),"Duration"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.input_range,(0),(30),cljs.core.deref(sevenguis.core.timer_duration),(function (p1__52489_SHARP_){
return cljs.core.reset_BANG_(sevenguis.core.timer_duration,p1__52489_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#spacer","div#spacer",485775725)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_button,"Reset Timer",(function (){
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52490_SHARP_){
return ((clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__52490_SHARP_,new cljs.core.Keyword(null,"surname","surname",1407918027))),filter_lower)) || (clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__52490_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177))),filter_lower)));
}),items));
});
sevenguis.core.crud = (function sevenguis$core$crud(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-center","div.UI-task-center",1773518898),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-section","div.UI-task-section",2085123211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.UI-label","span.UI-label",-16913788),"Filter prefix:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_input,"text",sevenguis.core.crud_filter], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-section.UI-task-section--with-spaces","div.UI-task-section.UI-task-section--with-spaces",595954876),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_list_box,sevenguis.core.filter_items(cljs.core.deref(sevenguis.core.crud_items),cljs.core.deref(sevenguis.core.crud_filter)),(function (p1__52491_SHARP_){
return cljs.core.reset_BANG_(sevenguis.core.crud_selected_item,p1__52491_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-space-around","div.UI-space-around",1635514790),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-form-inline","div.UI-form-inline",-1411502159),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.UI-label","span.UI-label",-16913788),"Name:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_input,"text",sevenguis.core.crud_name], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-form-inline","div.UI-form-inline",-1411502159),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.UI-label","span.UI-label",-16913788),"Surname:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_input,"text",sevenguis.core.crud_surname], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#spacer","div#spacer",485775725)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-section","div.UI-task-section",2085123211),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_button,"Create",(function (){
if(((cljs.core.seq(cljs.core.deref(sevenguis.core.crud_name))) && (cljs.core.seq(cljs.core.deref(sevenguis.core.crud_surname))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(sevenguis.core.crud_items,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref(sevenguis.core.crud_name),new cljs.core.Keyword(null,"surname","surname",1407918027),cljs.core.deref(sevenguis.core.crud_surname)], null));

cljs.core.reset_BANG_(sevenguis.core.crud_name,"");

return cljs.core.reset_BANG_(sevenguis.core.crud_surname,"");
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_button,"Update",(function (){
if(((cljs.core.seq(cljs.core.deref(sevenguis.core.crud_name))) && (cljs.core.seq(cljs.core.deref(sevenguis.core.crud_surname))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.crud_items,cljs.core.assoc,(cljs.core.deref(sevenguis.core.crud_selected_item) | (0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.deref(sevenguis.core.crud_name),new cljs.core.Keyword(null,"surname","surname",1407918027),cljs.core.deref(sevenguis.core.crud_surname)], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_button,"Delete",(function (){
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(past_history,(function (){var G__52492 = cljs.core.peek(past_history);
return (create_state.cljs$core$IFn$_invoke$arity$1 ? create_state.cljs$core$IFn$_invoke$arity$1(G__52492) : create_state.call(null,G__52492));
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
var with_let52494 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let52494","with-let52494",1078948479));
var temp__5757__auto___52549 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___52549 == null)){
} else {
var c__52334__auto___52550 = temp__5757__auto___52549;
if((with_let52494.generation === c__52334__auto___52550.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let52494.generation = c__52334__auto___52550.ratomGeneration);
}

var init52495 = (with_let52494.length === (0));
var pos = ((((init52495) || (cljs.core.not(with_let52494.hasOwnProperty((0))))))?(with_let52494[(0)] = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.current_diameter_frame))):(with_let52494[(0)]));
var ref = ((((init52495) || (cljs.core.not(with_let52494.hasOwnProperty((1))))))?(with_let52494[(1)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let52494[(1)]));
var handler = ((((init52495) || (cljs.core.not(with_let52494.hasOwnProperty((2))))))?(with_let52494[(2)] = (function (e){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.deref(ref);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.deref(ref).contains(e.target));
} else {
return and__4221__auto__;
}
})())){
return sevenguis.core.reset_diameter_frame();
} else {
return sevenguis.utils.prevent_default(e);
}
})):(with_let52494[(2)]));
var _ = ((((init52495) || (cljs.core.not(with_let52494.hasOwnProperty((3))))))?(with_let52494[(3)] = document.addEventListener("click",handler)):(with_let52494[(3)]));
var res52496 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-menu","div.UI-menu",299004867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__52493_SHARP_){
return cljs.core.reset_BANG_(ref,p1__52493_SHARP_);
})], null),"Adjust Diameter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(2),new cljs.core.Keyword(null,"max","max",61366548),(100),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.selected_circle)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),sevenguis.core.update_current_range,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),sevenguis.core.clone_current_history], null)], null)], null);
var destroy__52333__auto___52551 = (function (){
return document.removeEventListener("click",handler);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let52494.destroy == null)){
(with_let52494.destroy = destroy__52333__auto___52551);
} else {
}
} else {
destroy__52333__auto___52551();
}

return res52496;
});
sevenguis.core.circle_menu_1 = (function sevenguis$core$circle_menu_1(){
var with_let52498 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let52498","with-let52498",633722972));
var temp__5757__auto___52552 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___52552 == null)){
} else {
var c__52334__auto___52553 = temp__5757__auto___52552;
if((with_let52498.generation === c__52334__auto___52553.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let52498.generation = c__52334__auto___52553.ratomGeneration);
}

var init52499 = (with_let52498.length === (0));
var pos = ((((init52499) || (cljs.core.not(with_let52498.hasOwnProperty((0))))))?(with_let52498[(0)] = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.current_diameter_frame))):(with_let52498[(0)]));
var ref = ((((init52499) || (cljs.core.not(with_let52498.hasOwnProperty((1))))))?(with_let52498[(1)] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let52498[(1)]));
var handler = ((((init52499) || (cljs.core.not(with_let52498.hasOwnProperty((2))))))?(with_let52498[(2)] = (function (e){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.deref(ref);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.deref(ref).contains(e.target));
} else {
return and__4221__auto__;
}
})())){
return sevenguis.core.reset_diameter_frame();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.current_diameter_frame,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core.inc);
}
})):(with_let52498[(2)]));
var _ = ((((init52499) || (cljs.core.not(with_let52498.hasOwnProperty((3))))))?(with_let52498[(3)] = document.addEventListener("click",handler)):(with_let52498[(3)]));
var res52500 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-menu","div.UI-menu",299004867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos)], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__52497_SHARP_){
return cljs.core.reset_BANG_(ref,p1__52497_SHARP_);
})], null),"Adjust Diameter"], null);
var destroy__52333__auto___52554 = (function (){
return document.removeEventListener("click",handler);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let52498.destroy == null)){
(with_let52498.destroy = destroy__52333__auto___52554);
} else {
}
} else {
destroy__52333__auto___52554();
}

return res52500;
});
sevenguis.core.circle_drawer = (function sevenguis$core$circle_drawer(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-circle-drawer","div.UI-circle-drawer",-2077311753),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-form-inline","div.UI-form-inline",-1411502159),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_button,"Undo",(function (){
return sevenguis.core.undo();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_button,"Redo",(function (){
return sevenguis.core.redo();
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-canvas","div.UI-canvas",-1678375654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),sevenguis.core.add_circle], null),(function (){var iter__4622__auto__ = (function sevenguis$core$circle_drawer_$_iter__52502(s__52503){
return (new cljs.core.LazySeq(null,(function (){
var s__52503__$1 = s__52503;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52503__$1);
if(temp__5753__auto__){
var s__52503__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52503__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__52503__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__52505 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__52504 = (0);
while(true){
if((i__52504 < size__4621__auto__)){
var circle = cljs.core._nth(c__4620__auto__,i__52504);
cljs.core.chunk_append(b__52505,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-circle","div.UI-circle",1503002052),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"data-attr","data-attr",1291040879),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__52504,circle,c__4620__auto__,size__4621__auto__,b__52505,s__52503__$2,temp__5753__auto__){
return (function (p1__52501_SHARP_){
return sevenguis.core.show_circle_menu(p1__52501_SHARP_,circle);
});})(i__52504,circle,c__4620__auto__,size__4621__auto__,b__52505,s__52503__$2,temp__5753__auto__))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(circle)], null)], null)], null));

var G__52555 = (i__52504 + (1));
i__52504 = G__52555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52505),sevenguis$core$circle_drawer_$_iter__52502(cljs.core.chunk_rest(s__52503__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52505),null);
}
} else {
var circle = cljs.core.first(s__52503__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-circle","div.UI-circle",1503002052),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"data-attr","data-attr",1291040879),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (circle,s__52503__$2,temp__5753__auto__){
return (function (p1__52501_SHARP_){
return sevenguis.core.show_circle_menu(p1__52501_SHARP_,circle);
});})(circle,s__52503__$2,temp__5753__auto__))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(circle),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(circle)], null)], null)], null),sevenguis$core$circle_drawer_$_iter__52502(cljs.core.rest(s__52503__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(sevenguis.core.current_state());
})()], null),(function (){var G__52506 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sevenguis.core.current_diameter_frame));
switch (G__52506) {
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
sevenguis.core.operations = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"SUM","SUM",607822884),(function (p1__52507_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,p1__52507_SHARP_);
}),new cljs.core.Keyword(null,"SUB","SUB",1236808813),(function (p1__52508_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,p1__52508_SHARP_);
}),new cljs.core.Keyword(null,"MUL","MUL",-1545099504),(function (p1__52509_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,p1__52509_SHARP_);
}),new cljs.core.Keyword(null,"DIV","DIV",-1432109015),(function (p1__52510_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._SLASH_,p1__52510_SHARP_);
}),new cljs.core.Keyword(null,"AVG","AVG",-577452922),(function (p1__52511_SHARP_){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,p1__52511_SHARP_) / cljs.core.count(p1__52511_SHARP_));
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
var and__4221__auto__ = cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("formula","op","formula/op",942093547),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(formula,(1),(4)));
if(and__4221__auto__){
var rest = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(formula,(4));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(rest),"(")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(rest),")")));
} else {
return and__4221__auto__;
}
});
/**
 * True if the string is a valid range
 */
sevenguis.core.range_QMARK_ = (function sevenguis$core$range_QMARK_(r){
var and__4221__auto__ = typeof r === 'string';
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(r),(5));
if(and__4221__auto____$1){
var and__4221__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(r,(2)),":");
if(and__4221__auto____$2){
var and__4221__auto____$3 = sevenguis.core.coord_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(r,(0),(2)));
if(cljs.core.truth_(and__4221__auto____$3)){
return sevenguis.core.coord_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(r,(3),(5)));
} else {
return and__4221__auto____$3;
}
} else {
return and__4221__auto____$2;
}
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("type","number","type/number",1566746768),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","boolean","cljs.core/boolean",-1222483266,null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),/^\d*\.?\d+$/,new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__52512_SHARP_){
return cljs.core.boolean$(cljs.core.re_find(/^\d*\.?\d+$/,p1__52512_SHARP_));
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("formula","op","formula/op",942093547),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__52513#","p1__52513#",997802512,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","subs","cljs.core/subs",-1092266147,null),cljs.core.list(new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),new cljs.core.Symbol(null,"p1__52513#","p1__52513#",997802512,null)),(1))),cljs.core.list(new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),new cljs.core.Symbol("sevenguis.core","operations","sevenguis.core/operations",2141698102,null)))),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52513_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52513_SHARP_),(1));
}),cljs.core.keys(sevenguis.core.operations))));
/**
 * Get cell value using coordinates
 */
sevenguis.core.cell_value = (function sevenguis$core$cell_value(coord,table_state){
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(table_state),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(coord));
var computed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.Keyword(null,"computed","computed",-1482016762));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell,new cljs.core.Keyword(null,"value","value",305978217));
var or__4223__auto__ = computed;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
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
var iter__4622__auto__ = (function sevenguis$core$parse_range_$_iter__52514(s__52515){
return (new cljs.core.LazySeq(null,(function (){
var s__52515__$1 = s__52515;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52515__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var c = cljs.core.first(xs__6308__auto__);
var iterys__4618__auto__ = ((function (s__52515__$1,c,xs__6308__auto__,temp__5753__auto__,parts,start,end){
return (function sevenguis$core$parse_range_$_iter__52514_$_iter__52516(s__52517){
return (new cljs.core.LazySeq(null,((function (s__52515__$1,c,xs__6308__auto__,temp__5753__auto__,parts,start,end){
return (function (){
var s__52517__$1 = s__52517;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__52517__$1);
if(temp__5753__auto____$1){
var s__52517__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52517__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__52517__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__52519 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__52518 = (0);
while(true){
if((i__52518 < size__4621__auto__)){
var r = cljs.core._nth(c__4620__auto__,i__52518);
cljs.core.chunk_append(b__52519,(function (){var cell_coord = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
var value__$1 = sevenguis.core.cell_value(cell_coord,table_state);
sevenguis.core.update_dependencies(cell_coord,coord,cell_dependencies);

var or__4223__auto__ = ((((typeof value__$1 === 'number') || (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","number","type/number",1566746768),value__$1))))?sevenguis.utils.parse_float(value__$1):null);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})());

var G__52557 = (i__52518 + (1));
i__52518 = G__52557;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52519),sevenguis$core$parse_range_$_iter__52514_$_iter__52516(cljs.core.chunk_rest(s__52517__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52519),null);
}
} else {
var r = cljs.core.first(s__52517__$2);
return cljs.core.cons((function (){var cell_coord = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
var value__$1 = sevenguis.core.cell_value(cell_coord,table_state);
sevenguis.core.update_dependencies(cell_coord,coord,cell_dependencies);

var or__4223__auto__ = ((((typeof value__$1 === 'number') || (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","number","type/number",1566746768),value__$1))))?sevenguis.utils.parse_float(value__$1):null);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})(),sevenguis$core$parse_range_$_iter__52514_$_iter__52516(cljs.core.rest(s__52517__$2)));
}
} else {
return null;
}
break;
}
});})(s__52515__$1,c,xs__6308__auto__,temp__5753__auto__,parts,start,end))
,null,null));
});})(s__52515__$1,c,xs__6308__auto__,temp__5753__auto__,parts,start,end))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(start),(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(end) + (1))))));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,sevenguis$core$parse_range_$_iter__52514(cljs.core.rest(s__52515__$1)));
} else {
var G__52558 = cljs.core.rest(s__52515__$1);
s__52515__$1 = G__52558;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(start),(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(end) + (1)))));
});
/**
 * Parse operation arguments
 */
sevenguis.core.parse_args = (function sevenguis$core$parse_args(params,coord,table_state,cell_dependencies){
var args = clojure.string.split.cljs$core$IFn$_invoke$arity$2(params,/,/);
if((cljs.core.count(args) > (1))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52520_SHARP_){
return (sevenguis.core.parse_args.cljs$core$IFn$_invoke$arity$4 ? sevenguis.core.parse_args.cljs$core$IFn$_invoke$arity$4(p1__52520_SHARP_,coord,table_state,cell_dependencies) : sevenguis.core.parse_args.call(null,p1__52520_SHARP_,coord,table_state,cell_dependencies));
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
var G__52522 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sevenguis.core.cell_value(arg,table_state)], 0));
var G__52523 = sevenguis.core.cell_value(arg,table_state);
var fexpr__52521 = sevenguis.core.update_dependencies(arg,coord,cell_dependencies);
return (fexpr__52521.cljs$core$IFn$_invoke$arity$2 ? fexpr__52521.cljs$core$IFn$_invoke$arity$2(G__52522,G__52523) : fexpr__52521.call(null,G__52522,G__52523));
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
var computed_52559 = sevenguis.core.compute_formula(value,coord,sevenguis.core.table_state,sevenguis.core.cell_dependencies);
var formatted_52560 = ((cljs.core.float_QMARK_(computed_52559))?parseFloat(computed_52559.toFixed((5))):computed_52559);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.table_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(coord),new cljs.core.Keyword(null,"computed","computed",-1482016762)], null),formatted_52560);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.table_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(coord),new cljs.core.Keyword(null,"computed","computed",-1482016762)], null),null);
}

var seq__52525 = cljs.core.seq(cljs.core.deref(sevenguis.core.cell_dependencies));
var chunk__52526 = null;
var count__52527 = (0);
var i__52528 = (0);
while(true){
if((i__52528 < count__52527)){
var vec__52535 = chunk__52526.cljs$core$IIndexed$_nth$arity$2(null,i__52528);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52535,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52535,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (seq__52525,chunk__52526,count__52527,i__52528,vec__52535,k,v,coord){
return (function (p1__52524_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,p1__52524_SHARP_);
});})(seq__52525,chunk__52526,count__52527,i__52528,vec__52535,k,v,coord))
,v))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.table_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"computed","computed",-1482016762)], null),sevenguis.core.compute_formula(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.core.table_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"value","value",305978217)], null)),k,sevenguis.core.table_state,sevenguis.core.cell_dependencies));
} else {
}


var G__52561 = seq__52525;
var G__52562 = chunk__52526;
var G__52563 = count__52527;
var G__52564 = (i__52528 + (1));
seq__52525 = G__52561;
chunk__52526 = G__52562;
count__52527 = G__52563;
i__52528 = G__52564;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52525);
if(temp__5753__auto__){
var seq__52525__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52525__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__52525__$1);
var G__52565 = cljs.core.chunk_rest(seq__52525__$1);
var G__52566 = c__4649__auto__;
var G__52567 = cljs.core.count(c__4649__auto__);
var G__52568 = (0);
seq__52525 = G__52565;
chunk__52526 = G__52566;
count__52527 = G__52567;
i__52528 = G__52568;
continue;
} else {
var vec__52538 = cljs.core.first(seq__52525__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52538,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52538,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (seq__52525,chunk__52526,count__52527,i__52528,vec__52538,k,v,seq__52525__$1,temp__5753__auto__,coord){
return (function (p1__52524_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,p1__52524_SHARP_);
});})(seq__52525,chunk__52526,count__52527,i__52528,vec__52538,k,v,seq__52525__$1,temp__5753__auto__,coord))
,v))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sevenguis.core.table_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"computed","computed",-1482016762)], null),sevenguis.core.compute_formula(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sevenguis.core.table_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"value","value",305978217)], null)),k,sevenguis.core.table_state,sevenguis.core.cell_dependencies));
} else {
}


var G__52569 = cljs.core.next(seq__52525__$1);
var G__52570 = null;
var G__52571 = (0);
var G__52572 = (0);
seq__52525 = G__52569;
chunk__52526 = G__52570;
count__52527 = G__52571;
i__52528 = G__52572;
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
})], null),(cljs.core.truth_((function (){var and__4221__auto__ = is_active;
if(and__4221__auto__){
return cljs.core.deref(sevenguis.core.edit_mode);
} else {
return and__4221__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.UI-table-cell-input","input.UI-table-cell-input",-1486045668),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),cell_value,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__52541_SHARP_){
return sevenguis.core.handle_cell_change(col,row,p1__52541_SHARP_.target.value);
})], null)], null):(function (){var or__4223__auto__ = cell_comp;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
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
sevenguis.core.home_page = (function sevenguis$core$home_page(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.github_corner], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.page-title","h1.page-title",1640684783),"7GUIs in Clojurescript with Reagent"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is a live version of 7GUIs with ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://clojurescript.org",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Clojurescript"], null)," and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://reagent-project.github.io/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Reagent"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/elias94/7guis-clojurescript",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"(source)"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_task,"Counter",sevenguis.counter.main], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_task,"Temperature Converter",sevenguis.core.temp_converter], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_task,"Flight Booker",sevenguis.core.flight_booker], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_task,"Timer",sevenguis.core.timer], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_task,"CRUD",sevenguis.core.crud], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_task,"Circle Drawer",sevenguis.core.circle_drawer], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.ui_task,"Cells",sevenguis.core.cells], null)], null);
});
sevenguis.core.page_for = (function sevenguis$core$page_for(route){
var G__52542 = route;
var G__52542__$1 = (((G__52542 instanceof cljs.core.Keyword))?G__52542.fqn:null);
switch (G__52542__$1) {
case "index":
return new cljs.core.Var(function(){return sevenguis.core.home_page;},new cljs.core.Symbol("sevenguis.core","home-page","sevenguis.core/home-page",1504514993,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sevenguis.core","sevenguis.core",-1969993721,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"sevenguis/core.cljs",16,1,826,826,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(sevenguis.core.home_page)?sevenguis.core.home_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52542__$1)].join('')));

}
});
sevenguis.core.current_page = (function sevenguis$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get(new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Created by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.eliascotto.com"], null),"Elia Scotto"], null),"."], null)], null)], null);
});
});
sevenguis.core.mount_root = (function sevenguis$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.core.current_page], null),document.getElementById("app"));
});
sevenguis.core.init_BANG_ = (function sevenguis$core$init_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path(sevenguis.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.session.put_BANG_(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),sevenguis.core.page_for(current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_(path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$(reitit.frontend.match_by_path(sevenguis.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_();

return sevenguis.core.mount_root();
});

//# sourceMappingURL=sevenguis.core.js.map
