goog.provide('sevenguis.components');
/**
 * Component to wrap a single task
 */
sevenguis.components.ui_task = (function sevenguis$components$ui_task(title,task){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"UI-task"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"UI-task-container"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [task], null)], null)], null);
});
/**
 * Button with an on-click event handler
 */
sevenguis.components.ui_button = (function sevenguis$components$ui_button(var_args){
var G__38996 = arguments.length;
switch (G__38996) {
case 2:
return sevenguis.components.ui_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sevenguis.components.ui_button.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sevenguis.components.ui_button.cljs$core$IFn$_invoke$arity$2 = (function (title,on_click){
return sevenguis.components.ui_button.cljs$core$IFn$_invoke$arity$3(title,on_click,false);
}));

(sevenguis.components.ui_button.cljs$core$IFn$_invoke$arity$3 = (function (title,on_click,disabled){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"UI-button",new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
})], null),(cljs.core.truth_(disabled)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null):null)], 0))], null);
}));

(sevenguis.components.ui_button.cljs$lang$maxFixedArity = 3);

/**
 * Simple input element
 */
sevenguis.components.ui_input = (function sevenguis$components$ui_input(input_type,input_value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),input_type,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(input_value),new cljs.core.Keyword(null,"class","class",-2030961996),"UI-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38997_SHARP_){
return cljs.core.reset_BANG_(input_value,p1__38997_SHARP_.target.value);
})], null)], null);
});
/**
 * List box made of select and different options
 */
sevenguis.components.ui_list_box = (function sevenguis$components$ui_list_box(items,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"class","class",-2030961996),"UI-list-box",new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null),(function (){var iter__4611__auto__ = (function sevenguis$components$ui_list_box_$_iter__38998(s__38999){
return (new cljs.core.LazySeq(null,(function (){
var s__38999__$1 = s__38999;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__38999__$1);
if(temp__5753__auto__){
var s__38999__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38999__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__38999__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__39001 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__39000 = (0);
while(true){
if((i__39000 < size__4610__auto__)){
var index = cljs.core._nth(c__4609__auto__,i__39000);
cljs.core.chunk_append(b__39001,(function (){var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items,index);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"name","name",1843675177));
var item_last = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"surname","surname",1407918027));
var item_key = ["item-",sevenguis.utils.escape_str(item_name),"-",sevenguis.utils.escape_str(item_last)].join('');
var item_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_name),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_last)].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),item_key,new cljs.core.Keyword(null,"key","key",-1516042587),item_key,new cljs.core.Keyword(null,"value","value",305978217),index], null),item_str], null);
})());

var G__39006 = (i__39000 + (1));
i__39000 = G__39006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39001),sevenguis$components$ui_list_box_$_iter__38998(cljs.core.chunk_rest(s__38999__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39001),null);
}
} else {
var index = cljs.core.first(s__38999__$2);
return cljs.core.cons((function (){var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items,index);
var item_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"name","name",1843675177));
var item_last = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"surname","surname",1407918027));
var item_key = ["item-",sevenguis.utils.escape_str(item_name),"-",sevenguis.utils.escape_str(item_last)].join('');
var item_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_name),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_last)].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),item_key,new cljs.core.Keyword(null,"key","key",-1516042587),item_key,new cljs.core.Keyword(null,"value","value",305978217),index], null),item_str], null);
})(),sevenguis$components$ui_list_box_$_iter__38998(cljs.core.rest(s__38999__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)));
})()], null);
});
/**
 * An full input element with callback on change, class, validation, disable, etc.
 */
sevenguis.components.input_change = (function sevenguis$components$input_change(var_args){
var G__39004 = arguments.length;
switch (G__39004) {
case 5:
return sevenguis.components.input_change.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return sevenguis.components.input_change.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return sevenguis.components.input_change.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sevenguis.components.input_change.cljs$core$IFn$_invoke$arity$5 = (function (input_name,input_type,input_class,input_value,on_change_evt){
return sevenguis.components.input_change.cljs$core$IFn$_invoke$arity$7(input_name,input_type,input_class,input_value,on_change_evt,true,false);
}));

(sevenguis.components.input_change.cljs$core$IFn$_invoke$arity$6 = (function (input_name,input_type,input_class,input_value,on_change_evt,is_valid){
return sevenguis.components.input_change.cljs$core$IFn$_invoke$arity$7(input_name,input_type,input_class,input_value,on_change_evt,is_valid,false);
}));

(sevenguis.components.input_change.cljs$core$IFn$_invoke$arity$7 = (function (input_name,input_type,input_class,input_value,on_change_evt,is_valid,disabled){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),input_type,new cljs.core.Keyword(null,"name","name",1843675177),input_name,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(input_value),new cljs.core.Keyword(null,"class","class",-2030961996),["UI-input ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_class),((is_valid === false)?" input-error":null)].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__39002_SHARP_){
return (on_change_evt.cljs$core$IFn$_invoke$arity$1 ? on_change_evt.cljs$core$IFn$_invoke$arity$1(p1__39002_SHARP_) : on_change_evt.call(null,p1__39002_SHARP_));
})], null),(cljs.core.truth_(disabled)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null):null)], 0))], null);
}));

(sevenguis.components.input_change.cljs$lang$maxFixedArity = 7);

sevenguis.components.input_range = (function sevenguis$components$input_range(min,max,value,on_change){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null);
});

//# sourceMappingURL=sevenguis.components.js.map
