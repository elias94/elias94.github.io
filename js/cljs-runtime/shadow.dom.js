goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_66030 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_66030(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_66035 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_66035(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__64884 = coll;
var G__64885 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__64884,G__64885) : shadow.dom.lazy_native_coll_seq.call(null,G__64884,G__64885));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__64909 = arguments.length;
switch (G__64909) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__64917 = arguments.length;
switch (G__64917) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__64932 = arguments.length;
switch (G__64932) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__64945 = arguments.length;
switch (G__64945) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__64964 = arguments.length;
switch (G__64964) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__64983 = arguments.length;
switch (G__64983) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e65000){if((e65000 instanceof Object)){
var e = e65000;
return console.log("didnt support attachEvent",el,e);
} else {
throw e65000;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__65012 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__65013 = null;
var count__65014 = (0);
var i__65015 = (0);
while(true){
if((i__65015 < count__65014)){
var el = chunk__65013.cljs$core$IIndexed$_nth$arity$2(null,i__65015);
var handler_66052__$1 = ((function (seq__65012,chunk__65013,count__65014,i__65015,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65012,chunk__65013,count__65014,i__65015,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_66052__$1);


var G__66053 = seq__65012;
var G__66054 = chunk__65013;
var G__66055 = count__65014;
var G__66056 = (i__65015 + (1));
seq__65012 = G__66053;
chunk__65013 = G__66054;
count__65014 = G__66055;
i__65015 = G__66056;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65012);
if(temp__5753__auto__){
var seq__65012__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65012__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__65012__$1);
var G__66057 = cljs.core.chunk_rest(seq__65012__$1);
var G__66058 = c__4649__auto__;
var G__66059 = cljs.core.count(c__4649__auto__);
var G__66060 = (0);
seq__65012 = G__66057;
chunk__65013 = G__66058;
count__65014 = G__66059;
i__65015 = G__66060;
continue;
} else {
var el = cljs.core.first(seq__65012__$1);
var handler_66061__$1 = ((function (seq__65012,chunk__65013,count__65014,i__65015,el,seq__65012__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__65012,chunk__65013,count__65014,i__65015,el,seq__65012__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_66061__$1);


var G__66062 = cljs.core.next(seq__65012__$1);
var G__66063 = null;
var G__66064 = (0);
var G__66065 = (0);
seq__65012 = G__66062;
chunk__65013 = G__66063;
count__65014 = G__66064;
i__65015 = G__66065;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__65042 = arguments.length;
switch (G__65042) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__65054 = cljs.core.seq(events);
var chunk__65055 = null;
var count__65056 = (0);
var i__65057 = (0);
while(true){
if((i__65057 < count__65056)){
var vec__65071 = chunk__65055.cljs$core$IIndexed$_nth$arity$2(null,i__65057);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65071,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__66069 = seq__65054;
var G__66070 = chunk__65055;
var G__66071 = count__65056;
var G__66072 = (i__65057 + (1));
seq__65054 = G__66069;
chunk__65055 = G__66070;
count__65056 = G__66071;
i__65057 = G__66072;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65054);
if(temp__5753__auto__){
var seq__65054__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65054__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__65054__$1);
var G__66073 = cljs.core.chunk_rest(seq__65054__$1);
var G__66074 = c__4649__auto__;
var G__66075 = cljs.core.count(c__4649__auto__);
var G__66076 = (0);
seq__65054 = G__66073;
chunk__65055 = G__66074;
count__65056 = G__66075;
i__65057 = G__66076;
continue;
} else {
var vec__65076 = cljs.core.first(seq__65054__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65076,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65076,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__66077 = cljs.core.next(seq__65054__$1);
var G__66078 = null;
var G__66079 = (0);
var G__66080 = (0);
seq__65054 = G__66077;
chunk__65055 = G__66078;
count__65056 = G__66079;
i__65057 = G__66080;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__65084 = cljs.core.seq(styles);
var chunk__65085 = null;
var count__65086 = (0);
var i__65087 = (0);
while(true){
if((i__65087 < count__65086)){
var vec__65100 = chunk__65085.cljs$core$IIndexed$_nth$arity$2(null,i__65087);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65100,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65100,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__66085 = seq__65084;
var G__66086 = chunk__65085;
var G__66087 = count__65086;
var G__66088 = (i__65087 + (1));
seq__65084 = G__66085;
chunk__65085 = G__66086;
count__65086 = G__66087;
i__65087 = G__66088;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65084);
if(temp__5753__auto__){
var seq__65084__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65084__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__65084__$1);
var G__66089 = cljs.core.chunk_rest(seq__65084__$1);
var G__66090 = c__4649__auto__;
var G__66091 = cljs.core.count(c__4649__auto__);
var G__66092 = (0);
seq__65084 = G__66089;
chunk__65085 = G__66090;
count__65086 = G__66091;
i__65087 = G__66092;
continue;
} else {
var vec__65106 = cljs.core.first(seq__65084__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65106,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65106,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__66093 = cljs.core.next(seq__65084__$1);
var G__66094 = null;
var G__66095 = (0);
var G__66096 = (0);
seq__65084 = G__66093;
chunk__65085 = G__66094;
count__65086 = G__66095;
i__65087 = G__66096;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__65113_66097 = key;
var G__65113_66098__$1 = (((G__65113_66097 instanceof cljs.core.Keyword))?G__65113_66097.fqn:null);
switch (G__65113_66098__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_66103 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_66103,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_66103,"aria-");
}
})())){
el.setAttribute(ks_66103,value);
} else {
(el[ks_66103] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__65146){
var map__65149 = p__65146;
var map__65149__$1 = cljs.core.__destructure_map(map__65149);
var props = map__65149__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65149__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__65151 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65151,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65151,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65151,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__65154 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__65154,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__65154;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__65158 = arguments.length;
switch (G__65158) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__65183){
var vec__65185 = p__65183;
var seq__65186 = cljs.core.seq(vec__65185);
var first__65187 = cljs.core.first(seq__65186);
var seq__65186__$1 = cljs.core.next(seq__65186);
var nn = first__65187;
var first__65187__$1 = cljs.core.first(seq__65186__$1);
var seq__65186__$2 = cljs.core.next(seq__65186__$1);
var np = first__65187__$1;
var nc = seq__65186__$2;
var node = vec__65185;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65202 = nn;
var G__65203 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65202,G__65203) : create_fn.call(null,G__65202,G__65203));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65205 = nn;
var G__65206 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__65205,G__65206) : create_fn.call(null,G__65205,G__65206));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__65209 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65209,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65209,(1),null);
var seq__65221_66108 = cljs.core.seq(node_children);
var chunk__65222_66109 = null;
var count__65223_66110 = (0);
var i__65224_66111 = (0);
while(true){
if((i__65224_66111 < count__65223_66110)){
var child_struct_66112 = chunk__65222_66109.cljs$core$IIndexed$_nth$arity$2(null,i__65224_66111);
var children_66113 = shadow.dom.dom_node(child_struct_66112);
if(cljs.core.seq_QMARK_(children_66113)){
var seq__65290_66114 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66113));
var chunk__65292_66115 = null;
var count__65293_66116 = (0);
var i__65294_66117 = (0);
while(true){
if((i__65294_66117 < count__65293_66116)){
var child_66118 = chunk__65292_66115.cljs$core$IIndexed$_nth$arity$2(null,i__65294_66117);
if(cljs.core.truth_(child_66118)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66118);


var G__66119 = seq__65290_66114;
var G__66120 = chunk__65292_66115;
var G__66121 = count__65293_66116;
var G__66122 = (i__65294_66117 + (1));
seq__65290_66114 = G__66119;
chunk__65292_66115 = G__66120;
count__65293_66116 = G__66121;
i__65294_66117 = G__66122;
continue;
} else {
var G__66124 = seq__65290_66114;
var G__66125 = chunk__65292_66115;
var G__66126 = count__65293_66116;
var G__66127 = (i__65294_66117 + (1));
seq__65290_66114 = G__66124;
chunk__65292_66115 = G__66125;
count__65293_66116 = G__66126;
i__65294_66117 = G__66127;
continue;
}
} else {
var temp__5753__auto___66128 = cljs.core.seq(seq__65290_66114);
if(temp__5753__auto___66128){
var seq__65290_66129__$1 = temp__5753__auto___66128;
if(cljs.core.chunked_seq_QMARK_(seq__65290_66129__$1)){
var c__4649__auto___66130 = cljs.core.chunk_first(seq__65290_66129__$1);
var G__66131 = cljs.core.chunk_rest(seq__65290_66129__$1);
var G__66132 = c__4649__auto___66130;
var G__66133 = cljs.core.count(c__4649__auto___66130);
var G__66134 = (0);
seq__65290_66114 = G__66131;
chunk__65292_66115 = G__66132;
count__65293_66116 = G__66133;
i__65294_66117 = G__66134;
continue;
} else {
var child_66135 = cljs.core.first(seq__65290_66129__$1);
if(cljs.core.truth_(child_66135)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66135);


var G__66136 = cljs.core.next(seq__65290_66129__$1);
var G__66137 = null;
var G__66138 = (0);
var G__66139 = (0);
seq__65290_66114 = G__66136;
chunk__65292_66115 = G__66137;
count__65293_66116 = G__66138;
i__65294_66117 = G__66139;
continue;
} else {
var G__66140 = cljs.core.next(seq__65290_66129__$1);
var G__66141 = null;
var G__66142 = (0);
var G__66143 = (0);
seq__65290_66114 = G__66140;
chunk__65292_66115 = G__66141;
count__65293_66116 = G__66142;
i__65294_66117 = G__66143;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66113);
}


var G__66144 = seq__65221_66108;
var G__66145 = chunk__65222_66109;
var G__66146 = count__65223_66110;
var G__66147 = (i__65224_66111 + (1));
seq__65221_66108 = G__66144;
chunk__65222_66109 = G__66145;
count__65223_66110 = G__66146;
i__65224_66111 = G__66147;
continue;
} else {
var temp__5753__auto___66148 = cljs.core.seq(seq__65221_66108);
if(temp__5753__auto___66148){
var seq__65221_66149__$1 = temp__5753__auto___66148;
if(cljs.core.chunked_seq_QMARK_(seq__65221_66149__$1)){
var c__4649__auto___66150 = cljs.core.chunk_first(seq__65221_66149__$1);
var G__66151 = cljs.core.chunk_rest(seq__65221_66149__$1);
var G__66152 = c__4649__auto___66150;
var G__66153 = cljs.core.count(c__4649__auto___66150);
var G__66154 = (0);
seq__65221_66108 = G__66151;
chunk__65222_66109 = G__66152;
count__65223_66110 = G__66153;
i__65224_66111 = G__66154;
continue;
} else {
var child_struct_66155 = cljs.core.first(seq__65221_66149__$1);
var children_66156 = shadow.dom.dom_node(child_struct_66155);
if(cljs.core.seq_QMARK_(children_66156)){
var seq__65306_66157 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66156));
var chunk__65308_66158 = null;
var count__65309_66159 = (0);
var i__65310_66160 = (0);
while(true){
if((i__65310_66160 < count__65309_66159)){
var child_66165 = chunk__65308_66158.cljs$core$IIndexed$_nth$arity$2(null,i__65310_66160);
if(cljs.core.truth_(child_66165)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66165);


var G__66166 = seq__65306_66157;
var G__66167 = chunk__65308_66158;
var G__66168 = count__65309_66159;
var G__66169 = (i__65310_66160 + (1));
seq__65306_66157 = G__66166;
chunk__65308_66158 = G__66167;
count__65309_66159 = G__66168;
i__65310_66160 = G__66169;
continue;
} else {
var G__66170 = seq__65306_66157;
var G__66171 = chunk__65308_66158;
var G__66172 = count__65309_66159;
var G__66173 = (i__65310_66160 + (1));
seq__65306_66157 = G__66170;
chunk__65308_66158 = G__66171;
count__65309_66159 = G__66172;
i__65310_66160 = G__66173;
continue;
}
} else {
var temp__5753__auto___66174__$1 = cljs.core.seq(seq__65306_66157);
if(temp__5753__auto___66174__$1){
var seq__65306_66175__$1 = temp__5753__auto___66174__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65306_66175__$1)){
var c__4649__auto___66176 = cljs.core.chunk_first(seq__65306_66175__$1);
var G__66177 = cljs.core.chunk_rest(seq__65306_66175__$1);
var G__66178 = c__4649__auto___66176;
var G__66179 = cljs.core.count(c__4649__auto___66176);
var G__66180 = (0);
seq__65306_66157 = G__66177;
chunk__65308_66158 = G__66178;
count__65309_66159 = G__66179;
i__65310_66160 = G__66180;
continue;
} else {
var child_66182 = cljs.core.first(seq__65306_66175__$1);
if(cljs.core.truth_(child_66182)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66182);


var G__66183 = cljs.core.next(seq__65306_66175__$1);
var G__66184 = null;
var G__66185 = (0);
var G__66186 = (0);
seq__65306_66157 = G__66183;
chunk__65308_66158 = G__66184;
count__65309_66159 = G__66185;
i__65310_66160 = G__66186;
continue;
} else {
var G__66187 = cljs.core.next(seq__65306_66175__$1);
var G__66188 = null;
var G__66189 = (0);
var G__66190 = (0);
seq__65306_66157 = G__66187;
chunk__65308_66158 = G__66188;
count__65309_66159 = G__66189;
i__65310_66160 = G__66190;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66156);
}


var G__66191 = cljs.core.next(seq__65221_66149__$1);
var G__66192 = null;
var G__66193 = (0);
var G__66194 = (0);
seq__65221_66108 = G__66191;
chunk__65222_66109 = G__66192;
count__65223_66110 = G__66193;
i__65224_66111 = G__66194;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__65334 = cljs.core.seq(node);
var chunk__65335 = null;
var count__65336 = (0);
var i__65337 = (0);
while(true){
if((i__65337 < count__65336)){
var n = chunk__65335.cljs$core$IIndexed$_nth$arity$2(null,i__65337);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66195 = seq__65334;
var G__66196 = chunk__65335;
var G__66197 = count__65336;
var G__66198 = (i__65337 + (1));
seq__65334 = G__66195;
chunk__65335 = G__66196;
count__65336 = G__66197;
i__65337 = G__66198;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65334);
if(temp__5753__auto__){
var seq__65334__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65334__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__65334__$1);
var G__66199 = cljs.core.chunk_rest(seq__65334__$1);
var G__66200 = c__4649__auto__;
var G__66201 = cljs.core.count(c__4649__auto__);
var G__66202 = (0);
seq__65334 = G__66199;
chunk__65335 = G__66200;
count__65336 = G__66201;
i__65337 = G__66202;
continue;
} else {
var n = cljs.core.first(seq__65334__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66204 = cljs.core.next(seq__65334__$1);
var G__66205 = null;
var G__66206 = (0);
var G__66207 = (0);
seq__65334 = G__66204;
chunk__65335 = G__66205;
count__65336 = G__66206;
i__65337 = G__66207;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__65352 = arguments.length;
switch (G__65352) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__65361 = arguments.length;
switch (G__65361) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__65388 = arguments.length;
switch (G__65388) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___66217 = arguments.length;
var i__4830__auto___66218 = (0);
while(true){
if((i__4830__auto___66218 < len__4829__auto___66217)){
args__4835__auto__.push((arguments[i__4830__auto___66218]));

var G__66219 = (i__4830__auto___66218 + (1));
i__4830__auto___66218 = G__66219;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__65403_66221 = cljs.core.seq(nodes);
var chunk__65404_66222 = null;
var count__65405_66223 = (0);
var i__65406_66224 = (0);
while(true){
if((i__65406_66224 < count__65405_66223)){
var node_66225 = chunk__65404_66222.cljs$core$IIndexed$_nth$arity$2(null,i__65406_66224);
fragment.appendChild(shadow.dom._to_dom(node_66225));


var G__66226 = seq__65403_66221;
var G__66227 = chunk__65404_66222;
var G__66228 = count__65405_66223;
var G__66229 = (i__65406_66224 + (1));
seq__65403_66221 = G__66226;
chunk__65404_66222 = G__66227;
count__65405_66223 = G__66228;
i__65406_66224 = G__66229;
continue;
} else {
var temp__5753__auto___66230 = cljs.core.seq(seq__65403_66221);
if(temp__5753__auto___66230){
var seq__65403_66231__$1 = temp__5753__auto___66230;
if(cljs.core.chunked_seq_QMARK_(seq__65403_66231__$1)){
var c__4649__auto___66232 = cljs.core.chunk_first(seq__65403_66231__$1);
var G__66233 = cljs.core.chunk_rest(seq__65403_66231__$1);
var G__66234 = c__4649__auto___66232;
var G__66235 = cljs.core.count(c__4649__auto___66232);
var G__66236 = (0);
seq__65403_66221 = G__66233;
chunk__65404_66222 = G__66234;
count__65405_66223 = G__66235;
i__65406_66224 = G__66236;
continue;
} else {
var node_66237 = cljs.core.first(seq__65403_66231__$1);
fragment.appendChild(shadow.dom._to_dom(node_66237));


var G__66238 = cljs.core.next(seq__65403_66231__$1);
var G__66239 = null;
var G__66240 = (0);
var G__66241 = (0);
seq__65403_66221 = G__66238;
chunk__65404_66222 = G__66239;
count__65405_66223 = G__66240;
i__65406_66224 = G__66241;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq65394){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65394));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65447_66242 = cljs.core.seq(scripts);
var chunk__65448_66243 = null;
var count__65449_66244 = (0);
var i__65450_66245 = (0);
while(true){
if((i__65450_66245 < count__65449_66244)){
var vec__65478_66248 = chunk__65448_66243.cljs$core$IIndexed$_nth$arity$2(null,i__65450_66245);
var script_tag_66249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65478_66248,(0),null);
var script_body_66250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65478_66248,(1),null);
eval(script_body_66250);


var G__66251 = seq__65447_66242;
var G__66252 = chunk__65448_66243;
var G__66253 = count__65449_66244;
var G__66254 = (i__65450_66245 + (1));
seq__65447_66242 = G__66251;
chunk__65448_66243 = G__66252;
count__65449_66244 = G__66253;
i__65450_66245 = G__66254;
continue;
} else {
var temp__5753__auto___66255 = cljs.core.seq(seq__65447_66242);
if(temp__5753__auto___66255){
var seq__65447_66257__$1 = temp__5753__auto___66255;
if(cljs.core.chunked_seq_QMARK_(seq__65447_66257__$1)){
var c__4649__auto___66258 = cljs.core.chunk_first(seq__65447_66257__$1);
var G__66259 = cljs.core.chunk_rest(seq__65447_66257__$1);
var G__66260 = c__4649__auto___66258;
var G__66261 = cljs.core.count(c__4649__auto___66258);
var G__66262 = (0);
seq__65447_66242 = G__66259;
chunk__65448_66243 = G__66260;
count__65449_66244 = G__66261;
i__65450_66245 = G__66262;
continue;
} else {
var vec__65488_66264 = cljs.core.first(seq__65447_66257__$1);
var script_tag_66265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65488_66264,(0),null);
var script_body_66266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65488_66264,(1),null);
eval(script_body_66266);


var G__66268 = cljs.core.next(seq__65447_66257__$1);
var G__66269 = null;
var G__66270 = (0);
var G__66271 = (0);
seq__65447_66242 = G__66268;
chunk__65448_66243 = G__66269;
count__65449_66244 = G__66270;
i__65450_66245 = G__66271;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__65501){
var vec__65508 = p__65501;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65508,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65508,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__65536 = arguments.length;
switch (G__65536) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__65568 = cljs.core.seq(style_keys);
var chunk__65569 = null;
var count__65570 = (0);
var i__65571 = (0);
while(true){
if((i__65571 < count__65570)){
var it = chunk__65569.cljs$core$IIndexed$_nth$arity$2(null,i__65571);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66281 = seq__65568;
var G__66282 = chunk__65569;
var G__66283 = count__65570;
var G__66284 = (i__65571 + (1));
seq__65568 = G__66281;
chunk__65569 = G__66282;
count__65570 = G__66283;
i__65571 = G__66284;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65568);
if(temp__5753__auto__){
var seq__65568__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65568__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__65568__$1);
var G__66287 = cljs.core.chunk_rest(seq__65568__$1);
var G__66288 = c__4649__auto__;
var G__66289 = cljs.core.count(c__4649__auto__);
var G__66290 = (0);
seq__65568 = G__66287;
chunk__65569 = G__66288;
count__65570 = G__66289;
i__65571 = G__66290;
continue;
} else {
var it = cljs.core.first(seq__65568__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66292 = cljs.core.next(seq__65568__$1);
var G__66293 = null;
var G__66294 = (0);
var G__66295 = (0);
seq__65568 = G__66292;
chunk__65569 = G__66293;
count__65570 = G__66294;
i__65571 = G__66295;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k65583,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__65605 = k65583;
var G__65605__$1 = (((G__65605 instanceof cljs.core.Keyword))?G__65605.fqn:null);
switch (G__65605__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65583,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__65611){
var vec__65612 = p__65611;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65612,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65612,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65582){
var self__ = this;
var G__65582__$1 = this;
return (new cljs.core.RecordIter((0),G__65582__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65584,other65585){
var self__ = this;
var this65584__$1 = this;
return (((!((other65585 == null)))) && ((((this65584__$1.constructor === other65585.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65584__$1.x,other65585.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65584__$1.y,other65585.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65584__$1.__extmap,other65585.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k65583){
var self__ = this;
var this__4479__auto____$1 = this;
var G__65634 = k65583;
var G__65634__$1 = (((G__65634 instanceof cljs.core.Keyword))?G__65634.fqn:null);
switch (G__65634__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65583);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__65582){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__65638 = cljs.core.keyword_identical_QMARK_;
var expr__65639 = k__4481__auto__;
if(cljs.core.truth_((pred__65638.cljs$core$IFn$_invoke$arity$2 ? pred__65638.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65639) : pred__65638.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65639)))){
return (new shadow.dom.Coordinate(G__65582,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65638.cljs$core$IFn$_invoke$arity$2 ? pred__65638.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65639) : pred__65638.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65639)))){
return (new shadow.dom.Coordinate(self__.x,G__65582,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__65582),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__65582){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65582,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65590){
var extmap__4512__auto__ = (function (){var G__65654 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65590,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65590)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65654);
} else {
return G__65654;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65590),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65590),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k65668,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__65675 = k65668;
var G__65675__$1 = (((G__65675 instanceof cljs.core.Keyword))?G__65675.fqn:null);
switch (G__65675__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65668,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__65681){
var vec__65682 = p__65681;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65682,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65682,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65667){
var self__ = this;
var G__65667__$1 = this;
return (new cljs.core.RecordIter((0),G__65667__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65669,other65670){
var self__ = this;
var this65669__$1 = this;
return (((!((other65670 == null)))) && ((((this65669__$1.constructor === other65670.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65669__$1.w,other65670.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65669__$1.h,other65670.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65669__$1.__extmap,other65670.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k65668){
var self__ = this;
var this__4479__auto____$1 = this;
var G__65732 = k65668;
var G__65732__$1 = (((G__65732 instanceof cljs.core.Keyword))?G__65732.fqn:null);
switch (G__65732__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k65668);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__65667){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__65735 = cljs.core.keyword_identical_QMARK_;
var expr__65736 = k__4481__auto__;
if(cljs.core.truth_((pred__65735.cljs$core$IFn$_invoke$arity$2 ? pred__65735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65736) : pred__65735.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65736)))){
return (new shadow.dom.Size(G__65667,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65735.cljs$core$IFn$_invoke$arity$2 ? pred__65735.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65736) : pred__65735.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65736)))){
return (new shadow.dom.Size(self__.w,G__65667,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__65667),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__65667){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65667,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65672){
var extmap__4512__auto__ = (function (){var G__65766 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65672,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65672)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65766);
} else {
return G__65766;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65672),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65672),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__66350 = (i + (1));
var G__66351 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__66350;
ret = G__66351;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65814){
var vec__65815 = p__65814;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65815,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65823 = arguments.length;
switch (G__65823) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__66391 = ps;
var G__66392 = (i + (1));
el__$1 = G__66391;
i = G__66392;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__65870 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65870,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65870,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65870,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65879_66405 = cljs.core.seq(props);
var chunk__65880_66406 = null;
var count__65881_66407 = (0);
var i__65882_66408 = (0);
while(true){
if((i__65882_66408 < count__65881_66407)){
var vec__65900_66413 = chunk__65880_66406.cljs$core$IIndexed$_nth$arity$2(null,i__65882_66408);
var k_66414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65900_66413,(0),null);
var v_66415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65900_66413,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_66414);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66414),v_66415);


var G__66424 = seq__65879_66405;
var G__66425 = chunk__65880_66406;
var G__66426 = count__65881_66407;
var G__66427 = (i__65882_66408 + (1));
seq__65879_66405 = G__66424;
chunk__65880_66406 = G__66425;
count__65881_66407 = G__66426;
i__65882_66408 = G__66427;
continue;
} else {
var temp__5753__auto___66432 = cljs.core.seq(seq__65879_66405);
if(temp__5753__auto___66432){
var seq__65879_66434__$1 = temp__5753__auto___66432;
if(cljs.core.chunked_seq_QMARK_(seq__65879_66434__$1)){
var c__4649__auto___66435 = cljs.core.chunk_first(seq__65879_66434__$1);
var G__66440 = cljs.core.chunk_rest(seq__65879_66434__$1);
var G__66441 = c__4649__auto___66435;
var G__66442 = cljs.core.count(c__4649__auto___66435);
var G__66443 = (0);
seq__65879_66405 = G__66440;
chunk__65880_66406 = G__66441;
count__65881_66407 = G__66442;
i__65882_66408 = G__66443;
continue;
} else {
var vec__65909_66444 = cljs.core.first(seq__65879_66434__$1);
var k_66445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65909_66444,(0),null);
var v_66446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65909_66444,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_66445);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_66445),v_66446);


var G__66454 = cljs.core.next(seq__65879_66434__$1);
var G__66455 = null;
var G__66456 = (0);
var G__66457 = (0);
seq__65879_66405 = G__66454;
chunk__65880_66406 = G__66455;
count__65881_66407 = G__66456;
i__65882_66408 = G__66457;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__65916 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65916,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65916,(1),null);
var seq__65919_66459 = cljs.core.seq(node_children);
var chunk__65921_66460 = null;
var count__65922_66461 = (0);
var i__65923_66462 = (0);
while(true){
if((i__65923_66462 < count__65922_66461)){
var child_struct_66463 = chunk__65921_66460.cljs$core$IIndexed$_nth$arity$2(null,i__65923_66462);
if((!((child_struct_66463 == null)))){
if(typeof child_struct_66463 === 'string'){
var text_66464 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66464),child_struct_66463].join(''));
} else {
var children_66465 = shadow.dom.svg_node(child_struct_66463);
if(cljs.core.seq_QMARK_(children_66465)){
var seq__65958_66468 = cljs.core.seq(children_66465);
var chunk__65960_66469 = null;
var count__65961_66470 = (0);
var i__65962_66471 = (0);
while(true){
if((i__65962_66471 < count__65961_66470)){
var child_66477 = chunk__65960_66469.cljs$core$IIndexed$_nth$arity$2(null,i__65962_66471);
if(cljs.core.truth_(child_66477)){
node.appendChild(child_66477);


var G__66478 = seq__65958_66468;
var G__66479 = chunk__65960_66469;
var G__66480 = count__65961_66470;
var G__66481 = (i__65962_66471 + (1));
seq__65958_66468 = G__66478;
chunk__65960_66469 = G__66479;
count__65961_66470 = G__66480;
i__65962_66471 = G__66481;
continue;
} else {
var G__66482 = seq__65958_66468;
var G__66483 = chunk__65960_66469;
var G__66484 = count__65961_66470;
var G__66485 = (i__65962_66471 + (1));
seq__65958_66468 = G__66482;
chunk__65960_66469 = G__66483;
count__65961_66470 = G__66484;
i__65962_66471 = G__66485;
continue;
}
} else {
var temp__5753__auto___66486 = cljs.core.seq(seq__65958_66468);
if(temp__5753__auto___66486){
var seq__65958_66488__$1 = temp__5753__auto___66486;
if(cljs.core.chunked_seq_QMARK_(seq__65958_66488__$1)){
var c__4649__auto___66489 = cljs.core.chunk_first(seq__65958_66488__$1);
var G__66490 = cljs.core.chunk_rest(seq__65958_66488__$1);
var G__66491 = c__4649__auto___66489;
var G__66492 = cljs.core.count(c__4649__auto___66489);
var G__66493 = (0);
seq__65958_66468 = G__66490;
chunk__65960_66469 = G__66491;
count__65961_66470 = G__66492;
i__65962_66471 = G__66493;
continue;
} else {
var child_66495 = cljs.core.first(seq__65958_66488__$1);
if(cljs.core.truth_(child_66495)){
node.appendChild(child_66495);


var G__66496 = cljs.core.next(seq__65958_66488__$1);
var G__66497 = null;
var G__66498 = (0);
var G__66499 = (0);
seq__65958_66468 = G__66496;
chunk__65960_66469 = G__66497;
count__65961_66470 = G__66498;
i__65962_66471 = G__66499;
continue;
} else {
var G__66500 = cljs.core.next(seq__65958_66488__$1);
var G__66501 = null;
var G__66502 = (0);
var G__66503 = (0);
seq__65958_66468 = G__66500;
chunk__65960_66469 = G__66501;
count__65961_66470 = G__66502;
i__65962_66471 = G__66503;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66465);
}
}


var G__66505 = seq__65919_66459;
var G__66506 = chunk__65921_66460;
var G__66507 = count__65922_66461;
var G__66508 = (i__65923_66462 + (1));
seq__65919_66459 = G__66505;
chunk__65921_66460 = G__66506;
count__65922_66461 = G__66507;
i__65923_66462 = G__66508;
continue;
} else {
var G__66511 = seq__65919_66459;
var G__66512 = chunk__65921_66460;
var G__66513 = count__65922_66461;
var G__66514 = (i__65923_66462 + (1));
seq__65919_66459 = G__66511;
chunk__65921_66460 = G__66512;
count__65922_66461 = G__66513;
i__65923_66462 = G__66514;
continue;
}
} else {
var temp__5753__auto___66515 = cljs.core.seq(seq__65919_66459);
if(temp__5753__auto___66515){
var seq__65919_66518__$1 = temp__5753__auto___66515;
if(cljs.core.chunked_seq_QMARK_(seq__65919_66518__$1)){
var c__4649__auto___66522 = cljs.core.chunk_first(seq__65919_66518__$1);
var G__66523 = cljs.core.chunk_rest(seq__65919_66518__$1);
var G__66524 = c__4649__auto___66522;
var G__66525 = cljs.core.count(c__4649__auto___66522);
var G__66526 = (0);
seq__65919_66459 = G__66523;
chunk__65921_66460 = G__66524;
count__65922_66461 = G__66525;
i__65923_66462 = G__66526;
continue;
} else {
var child_struct_66527 = cljs.core.first(seq__65919_66518__$1);
if((!((child_struct_66527 == null)))){
if(typeof child_struct_66527 === 'string'){
var text_66528 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_66528),child_struct_66527].join(''));
} else {
var children_66529 = shadow.dom.svg_node(child_struct_66527);
if(cljs.core.seq_QMARK_(children_66529)){
var seq__65980_66530 = cljs.core.seq(children_66529);
var chunk__65982_66531 = null;
var count__65983_66532 = (0);
var i__65984_66533 = (0);
while(true){
if((i__65984_66533 < count__65983_66532)){
var child_66534 = chunk__65982_66531.cljs$core$IIndexed$_nth$arity$2(null,i__65984_66533);
if(cljs.core.truth_(child_66534)){
node.appendChild(child_66534);


var G__66535 = seq__65980_66530;
var G__66536 = chunk__65982_66531;
var G__66537 = count__65983_66532;
var G__66538 = (i__65984_66533 + (1));
seq__65980_66530 = G__66535;
chunk__65982_66531 = G__66536;
count__65983_66532 = G__66537;
i__65984_66533 = G__66538;
continue;
} else {
var G__66539 = seq__65980_66530;
var G__66540 = chunk__65982_66531;
var G__66541 = count__65983_66532;
var G__66542 = (i__65984_66533 + (1));
seq__65980_66530 = G__66539;
chunk__65982_66531 = G__66540;
count__65983_66532 = G__66541;
i__65984_66533 = G__66542;
continue;
}
} else {
var temp__5753__auto___66543__$1 = cljs.core.seq(seq__65980_66530);
if(temp__5753__auto___66543__$1){
var seq__65980_66544__$1 = temp__5753__auto___66543__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65980_66544__$1)){
var c__4649__auto___66545 = cljs.core.chunk_first(seq__65980_66544__$1);
var G__66546 = cljs.core.chunk_rest(seq__65980_66544__$1);
var G__66547 = c__4649__auto___66545;
var G__66548 = cljs.core.count(c__4649__auto___66545);
var G__66549 = (0);
seq__65980_66530 = G__66546;
chunk__65982_66531 = G__66547;
count__65983_66532 = G__66548;
i__65984_66533 = G__66549;
continue;
} else {
var child_66552 = cljs.core.first(seq__65980_66544__$1);
if(cljs.core.truth_(child_66552)){
node.appendChild(child_66552);


var G__66555 = cljs.core.next(seq__65980_66544__$1);
var G__66556 = null;
var G__66557 = (0);
var G__66558 = (0);
seq__65980_66530 = G__66555;
chunk__65982_66531 = G__66556;
count__65983_66532 = G__66557;
i__65984_66533 = G__66558;
continue;
} else {
var G__66559 = cljs.core.next(seq__65980_66544__$1);
var G__66560 = null;
var G__66561 = (0);
var G__66562 = (0);
seq__65980_66530 = G__66559;
chunk__65982_66531 = G__66560;
count__65983_66532 = G__66561;
i__65984_66533 = G__66562;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_66529);
}
}


var G__66568 = cljs.core.next(seq__65919_66518__$1);
var G__66569 = null;
var G__66570 = (0);
var G__66571 = (0);
seq__65919_66459 = G__66568;
chunk__65921_66460 = G__66569;
count__65922_66461 = G__66570;
i__65923_66462 = G__66571;
continue;
} else {
var G__66573 = cljs.core.next(seq__65919_66518__$1);
var G__66574 = null;
var G__66575 = (0);
var G__66576 = (0);
seq__65919_66459 = G__66573;
chunk__65921_66460 = G__66574;
count__65922_66461 = G__66575;
i__65923_66462 = G__66576;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___66581 = arguments.length;
var i__4830__auto___66582 = (0);
while(true){
if((i__4830__auto___66582 < len__4829__auto___66581)){
args__4835__auto__.push((arguments[i__4830__auto___66582]));

var G__66585 = (i__4830__auto___66582 + (1));
i__4830__auto___66582 = G__66585;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65994){
var G__65995 = cljs.core.first(seq65994);
var seq65994__$1 = cljs.core.next(seq65994);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65995,seq65994__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__65999 = arguments.length;
switch (G__65999) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__61500__auto___66592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_66012){
var state_val_66013 = (state_66012[(1)]);
if((state_val_66013 === (1))){
var state_66012__$1 = state_66012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66012__$1,(2),once_or_cleanup);
} else {
if((state_val_66013 === (2))){
var inst_66009 = (state_66012[(2)]);
var inst_66010 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_66012__$1 = (function (){var statearr_66014 = state_66012;
(statearr_66014[(7)] = inst_66009);

return statearr_66014;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66012__$1,inst_66010);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__61183__auto__ = null;
var shadow$dom$state_machine__61183__auto____0 = (function (){
var statearr_66019 = [null,null,null,null,null,null,null,null];
(statearr_66019[(0)] = shadow$dom$state_machine__61183__auto__);

(statearr_66019[(1)] = (1));

return statearr_66019;
});
var shadow$dom$state_machine__61183__auto____1 = (function (state_66012){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_66012);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e66020){if((e66020 instanceof Object)){
var ex__61186__auto__ = e66020;
var statearr_66021_66594 = state_66012;
(statearr_66021_66594[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66020;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66596 = state_66012;
state_66012 = G__66596;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
shadow$dom$state_machine__61183__auto__ = function(state_66012){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__61183__auto____0.call(this);
case 1:
return shadow$dom$state_machine__61183__auto____1.call(this,state_66012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__61183__auto____0;
shadow$dom$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__61183__auto____1;
return shadow$dom$state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_66022 = f__61501__auto__();
(statearr_66022[(6)] = c__61500__auto___66592);

return statearr_66022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
