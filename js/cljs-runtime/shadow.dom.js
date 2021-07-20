goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35776 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35776(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35780 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35780(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34664 = coll;
var G__34665 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34664,G__34665) : shadow.dom.lazy_native_coll_seq.call(null,G__34664,G__34665));
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
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
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
var G__34681 = arguments.length;
switch (G__34681) {
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
var G__34693 = arguments.length;
switch (G__34693) {
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
var G__34698 = arguments.length;
switch (G__34698) {
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
var G__34711 = arguments.length;
switch (G__34711) {
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
var G__34724 = arguments.length;
switch (G__34724) {
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
var G__34738 = arguments.length;
switch (G__34738) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34751){if((e34751 instanceof Object)){
var e = e34751;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34751;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34760 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34761 = null;
var count__34762 = (0);
var i__34763 = (0);
while(true){
if((i__34763 < count__34762)){
var el = chunk__34761.cljs$core$IIndexed$_nth$arity$2(null,i__34763);
var handler_35815__$1 = ((function (seq__34760,chunk__34761,count__34762,i__34763,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34760,chunk__34761,count__34762,i__34763,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35815__$1);


var G__35818 = seq__34760;
var G__35819 = chunk__34761;
var G__35820 = count__34762;
var G__35821 = (i__34763 + (1));
seq__34760 = G__35818;
chunk__34761 = G__35819;
count__34762 = G__35820;
i__34763 = G__35821;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34760);
if(temp__5753__auto__){
var seq__34760__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34760__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34760__$1);
var G__35828 = cljs.core.chunk_rest(seq__34760__$1);
var G__35829 = c__4638__auto__;
var G__35830 = cljs.core.count(c__4638__auto__);
var G__35831 = (0);
seq__34760 = G__35828;
chunk__34761 = G__35829;
count__34762 = G__35830;
i__34763 = G__35831;
continue;
} else {
var el = cljs.core.first(seq__34760__$1);
var handler_35835__$1 = ((function (seq__34760,chunk__34761,count__34762,i__34763,el,seq__34760__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34760,chunk__34761,count__34762,i__34763,el,seq__34760__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35835__$1);


var G__35836 = cljs.core.next(seq__34760__$1);
var G__35837 = null;
var G__35838 = (0);
var G__35839 = (0);
seq__34760 = G__35836;
chunk__34761 = G__35837;
count__34762 = G__35838;
i__34763 = G__35839;
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
var G__34783 = arguments.length;
switch (G__34783) {
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
var seq__34793 = cljs.core.seq(events);
var chunk__34794 = null;
var count__34795 = (0);
var i__34796 = (0);
while(true){
if((i__34796 < count__34795)){
var vec__34814 = chunk__34794.cljs$core$IIndexed$_nth$arity$2(null,i__34796);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34814,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34814,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35852 = seq__34793;
var G__35853 = chunk__34794;
var G__35854 = count__34795;
var G__35855 = (i__34796 + (1));
seq__34793 = G__35852;
chunk__34794 = G__35853;
count__34795 = G__35854;
i__34796 = G__35855;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34793);
if(temp__5753__auto__){
var seq__34793__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34793__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34793__$1);
var G__35856 = cljs.core.chunk_rest(seq__34793__$1);
var G__35857 = c__4638__auto__;
var G__35858 = cljs.core.count(c__4638__auto__);
var G__35859 = (0);
seq__34793 = G__35856;
chunk__34794 = G__35857;
count__34795 = G__35858;
i__34796 = G__35859;
continue;
} else {
var vec__34822 = cljs.core.first(seq__34793__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34822,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34822,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35860 = cljs.core.next(seq__34793__$1);
var G__35861 = null;
var G__35862 = (0);
var G__35863 = (0);
seq__34793 = G__35860;
chunk__34794 = G__35861;
count__34795 = G__35862;
i__34796 = G__35863;
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
var seq__34828 = cljs.core.seq(styles);
var chunk__34829 = null;
var count__34830 = (0);
var i__34831 = (0);
while(true){
if((i__34831 < count__34830)){
var vec__34843 = chunk__34829.cljs$core$IIndexed$_nth$arity$2(null,i__34831);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34843,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35864 = seq__34828;
var G__35865 = chunk__34829;
var G__35866 = count__34830;
var G__35867 = (i__34831 + (1));
seq__34828 = G__35864;
chunk__34829 = G__35865;
count__34830 = G__35866;
i__34831 = G__35867;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34828);
if(temp__5753__auto__){
var seq__34828__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34828__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34828__$1);
var G__35868 = cljs.core.chunk_rest(seq__34828__$1);
var G__35869 = c__4638__auto__;
var G__35870 = cljs.core.count(c__4638__auto__);
var G__35871 = (0);
seq__34828 = G__35868;
chunk__34829 = G__35869;
count__34830 = G__35870;
i__34831 = G__35871;
continue;
} else {
var vec__34848 = cljs.core.first(seq__34828__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34848,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34848,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35873 = cljs.core.next(seq__34828__$1);
var G__35874 = null;
var G__35875 = (0);
var G__35876 = (0);
seq__34828 = G__35873;
chunk__34829 = G__35874;
count__34830 = G__35875;
i__34831 = G__35876;
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
var G__34862_35883 = key;
var G__34862_35884__$1 = (((G__34862_35883 instanceof cljs.core.Keyword))?G__34862_35883.fqn:null);
switch (G__34862_35884__$1) {
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
var ks_35887 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_35887,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_35887,"aria-");
}
})())){
el.setAttribute(ks_35887,value);
} else {
(el[ks_35887] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34894){
var map__34896 = p__34894;
var map__34896__$1 = cljs.core.__destructure_map(map__34896);
var props = map__34896__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34896__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34899 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34899,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34899,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34899,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34903 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34903,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34903;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34905 = arguments.length;
switch (G__34905) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34936){
var vec__34938 = p__34936;
var seq__34939 = cljs.core.seq(vec__34938);
var first__34940 = cljs.core.first(seq__34939);
var seq__34939__$1 = cljs.core.next(seq__34939);
var nn = first__34940;
var first__34940__$1 = cljs.core.first(seq__34939__$1);
var seq__34939__$2 = cljs.core.next(seq__34939__$1);
var np = first__34940__$1;
var nc = seq__34939__$2;
var node = vec__34938;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34960 = nn;
var G__34961 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34960,G__34961) : create_fn.call(null,G__34960,G__34961));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34963 = nn;
var G__34964 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34963,G__34964) : create_fn.call(null,G__34963,G__34964));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34978 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34978,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34978,(1),null);
var seq__34982_35900 = cljs.core.seq(node_children);
var chunk__34983_35901 = null;
var count__34984_35902 = (0);
var i__34985_35903 = (0);
while(true){
if((i__34985_35903 < count__34984_35902)){
var child_struct_35907 = chunk__34983_35901.cljs$core$IIndexed$_nth$arity$2(null,i__34985_35903);
var children_35909 = shadow.dom.dom_node(child_struct_35907);
if(cljs.core.seq_QMARK_(children_35909)){
var seq__35015_35910 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35909));
var chunk__35017_35911 = null;
var count__35018_35912 = (0);
var i__35019_35913 = (0);
while(true){
if((i__35019_35913 < count__35018_35912)){
var child_35914 = chunk__35017_35911.cljs$core$IIndexed$_nth$arity$2(null,i__35019_35913);
if(cljs.core.truth_(child_35914)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35914);


var G__35915 = seq__35015_35910;
var G__35916 = chunk__35017_35911;
var G__35917 = count__35018_35912;
var G__35918 = (i__35019_35913 + (1));
seq__35015_35910 = G__35915;
chunk__35017_35911 = G__35916;
count__35018_35912 = G__35917;
i__35019_35913 = G__35918;
continue;
} else {
var G__35919 = seq__35015_35910;
var G__35920 = chunk__35017_35911;
var G__35921 = count__35018_35912;
var G__35922 = (i__35019_35913 + (1));
seq__35015_35910 = G__35919;
chunk__35017_35911 = G__35920;
count__35018_35912 = G__35921;
i__35019_35913 = G__35922;
continue;
}
} else {
var temp__5753__auto___35923 = cljs.core.seq(seq__35015_35910);
if(temp__5753__auto___35923){
var seq__35015_35924__$1 = temp__5753__auto___35923;
if(cljs.core.chunked_seq_QMARK_(seq__35015_35924__$1)){
var c__4638__auto___35925 = cljs.core.chunk_first(seq__35015_35924__$1);
var G__35926 = cljs.core.chunk_rest(seq__35015_35924__$1);
var G__35927 = c__4638__auto___35925;
var G__35928 = cljs.core.count(c__4638__auto___35925);
var G__35929 = (0);
seq__35015_35910 = G__35926;
chunk__35017_35911 = G__35927;
count__35018_35912 = G__35928;
i__35019_35913 = G__35929;
continue;
} else {
var child_35934 = cljs.core.first(seq__35015_35924__$1);
if(cljs.core.truth_(child_35934)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35934);


var G__35935 = cljs.core.next(seq__35015_35924__$1);
var G__35936 = null;
var G__35937 = (0);
var G__35938 = (0);
seq__35015_35910 = G__35935;
chunk__35017_35911 = G__35936;
count__35018_35912 = G__35937;
i__35019_35913 = G__35938;
continue;
} else {
var G__35939 = cljs.core.next(seq__35015_35924__$1);
var G__35940 = null;
var G__35941 = (0);
var G__35942 = (0);
seq__35015_35910 = G__35939;
chunk__35017_35911 = G__35940;
count__35018_35912 = G__35941;
i__35019_35913 = G__35942;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35909);
}


var G__35944 = seq__34982_35900;
var G__35945 = chunk__34983_35901;
var G__35946 = count__34984_35902;
var G__35947 = (i__34985_35903 + (1));
seq__34982_35900 = G__35944;
chunk__34983_35901 = G__35945;
count__34984_35902 = G__35946;
i__34985_35903 = G__35947;
continue;
} else {
var temp__5753__auto___35949 = cljs.core.seq(seq__34982_35900);
if(temp__5753__auto___35949){
var seq__34982_35950__$1 = temp__5753__auto___35949;
if(cljs.core.chunked_seq_QMARK_(seq__34982_35950__$1)){
var c__4638__auto___35951 = cljs.core.chunk_first(seq__34982_35950__$1);
var G__35952 = cljs.core.chunk_rest(seq__34982_35950__$1);
var G__35953 = c__4638__auto___35951;
var G__35954 = cljs.core.count(c__4638__auto___35951);
var G__35955 = (0);
seq__34982_35900 = G__35952;
chunk__34983_35901 = G__35953;
count__34984_35902 = G__35954;
i__34985_35903 = G__35955;
continue;
} else {
var child_struct_35957 = cljs.core.first(seq__34982_35950__$1);
var children_35958 = shadow.dom.dom_node(child_struct_35957);
if(cljs.core.seq_QMARK_(children_35958)){
var seq__35031_35960 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35958));
var chunk__35033_35961 = null;
var count__35034_35962 = (0);
var i__35035_35963 = (0);
while(true){
if((i__35035_35963 < count__35034_35962)){
var child_35965 = chunk__35033_35961.cljs$core$IIndexed$_nth$arity$2(null,i__35035_35963);
if(cljs.core.truth_(child_35965)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35965);


var G__35966 = seq__35031_35960;
var G__35967 = chunk__35033_35961;
var G__35968 = count__35034_35962;
var G__35969 = (i__35035_35963 + (1));
seq__35031_35960 = G__35966;
chunk__35033_35961 = G__35967;
count__35034_35962 = G__35968;
i__35035_35963 = G__35969;
continue;
} else {
var G__35970 = seq__35031_35960;
var G__35971 = chunk__35033_35961;
var G__35972 = count__35034_35962;
var G__35973 = (i__35035_35963 + (1));
seq__35031_35960 = G__35970;
chunk__35033_35961 = G__35971;
count__35034_35962 = G__35972;
i__35035_35963 = G__35973;
continue;
}
} else {
var temp__5753__auto___35974__$1 = cljs.core.seq(seq__35031_35960);
if(temp__5753__auto___35974__$1){
var seq__35031_35975__$1 = temp__5753__auto___35974__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35031_35975__$1)){
var c__4638__auto___35976 = cljs.core.chunk_first(seq__35031_35975__$1);
var G__35977 = cljs.core.chunk_rest(seq__35031_35975__$1);
var G__35978 = c__4638__auto___35976;
var G__35979 = cljs.core.count(c__4638__auto___35976);
var G__35980 = (0);
seq__35031_35960 = G__35977;
chunk__35033_35961 = G__35978;
count__35034_35962 = G__35979;
i__35035_35963 = G__35980;
continue;
} else {
var child_35981 = cljs.core.first(seq__35031_35975__$1);
if(cljs.core.truth_(child_35981)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35981);


var G__35982 = cljs.core.next(seq__35031_35975__$1);
var G__35983 = null;
var G__35984 = (0);
var G__35985 = (0);
seq__35031_35960 = G__35982;
chunk__35033_35961 = G__35983;
count__35034_35962 = G__35984;
i__35035_35963 = G__35985;
continue;
} else {
var G__35987 = cljs.core.next(seq__35031_35975__$1);
var G__35988 = null;
var G__35989 = (0);
var G__35990 = (0);
seq__35031_35960 = G__35987;
chunk__35033_35961 = G__35988;
count__35034_35962 = G__35989;
i__35035_35963 = G__35990;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35958);
}


var G__35991 = cljs.core.next(seq__34982_35950__$1);
var G__35992 = null;
var G__35993 = (0);
var G__35994 = (0);
seq__34982_35900 = G__35991;
chunk__34983_35901 = G__35992;
count__34984_35902 = G__35993;
i__34985_35903 = G__35994;
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
var seq__35067 = cljs.core.seq(node);
var chunk__35068 = null;
var count__35069 = (0);
var i__35070 = (0);
while(true){
if((i__35070 < count__35069)){
var n = chunk__35068.cljs$core$IIndexed$_nth$arity$2(null,i__35070);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35999 = seq__35067;
var G__36000 = chunk__35068;
var G__36001 = count__35069;
var G__36002 = (i__35070 + (1));
seq__35067 = G__35999;
chunk__35068 = G__36000;
count__35069 = G__36001;
i__35070 = G__36002;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35067);
if(temp__5753__auto__){
var seq__35067__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35067__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35067__$1);
var G__36003 = cljs.core.chunk_rest(seq__35067__$1);
var G__36004 = c__4638__auto__;
var G__36005 = cljs.core.count(c__4638__auto__);
var G__36006 = (0);
seq__35067 = G__36003;
chunk__35068 = G__36004;
count__35069 = G__36005;
i__35070 = G__36006;
continue;
} else {
var n = cljs.core.first(seq__35067__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36007 = cljs.core.next(seq__35067__$1);
var G__36008 = null;
var G__36009 = (0);
var G__36010 = (0);
seq__35067 = G__36007;
chunk__35068 = G__36008;
count__35069 = G__36009;
i__35070 = G__36010;
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
var G__35080 = arguments.length;
switch (G__35080) {
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
var G__35093 = arguments.length;
switch (G__35093) {
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
var G__35115 = arguments.length;
switch (G__35115) {
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
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
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
var args__4824__auto__ = [];
var len__4818__auto___36027 = arguments.length;
var i__4819__auto___36028 = (0);
while(true){
if((i__4819__auto___36028 < len__4818__auto___36027)){
args__4824__auto__.push((arguments[i__4819__auto___36028]));

var G__36029 = (i__4819__auto___36028 + (1));
i__4819__auto___36028 = G__36029;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35138_36030 = cljs.core.seq(nodes);
var chunk__35139_36031 = null;
var count__35140_36032 = (0);
var i__35141_36033 = (0);
while(true){
if((i__35141_36033 < count__35140_36032)){
var node_36034 = chunk__35139_36031.cljs$core$IIndexed$_nth$arity$2(null,i__35141_36033);
fragment.appendChild(shadow.dom._to_dom(node_36034));


var G__36035 = seq__35138_36030;
var G__36036 = chunk__35139_36031;
var G__36037 = count__35140_36032;
var G__36038 = (i__35141_36033 + (1));
seq__35138_36030 = G__36035;
chunk__35139_36031 = G__36036;
count__35140_36032 = G__36037;
i__35141_36033 = G__36038;
continue;
} else {
var temp__5753__auto___36039 = cljs.core.seq(seq__35138_36030);
if(temp__5753__auto___36039){
var seq__35138_36040__$1 = temp__5753__auto___36039;
if(cljs.core.chunked_seq_QMARK_(seq__35138_36040__$1)){
var c__4638__auto___36041 = cljs.core.chunk_first(seq__35138_36040__$1);
var G__36042 = cljs.core.chunk_rest(seq__35138_36040__$1);
var G__36043 = c__4638__auto___36041;
var G__36044 = cljs.core.count(c__4638__auto___36041);
var G__36045 = (0);
seq__35138_36030 = G__36042;
chunk__35139_36031 = G__36043;
count__35140_36032 = G__36044;
i__35141_36033 = G__36045;
continue;
} else {
var node_36050 = cljs.core.first(seq__35138_36040__$1);
fragment.appendChild(shadow.dom._to_dom(node_36050));


var G__36051 = cljs.core.next(seq__35138_36040__$1);
var G__36052 = null;
var G__36053 = (0);
var G__36054 = (0);
seq__35138_36030 = G__36051;
chunk__35139_36031 = G__36052;
count__35140_36032 = G__36053;
i__35141_36033 = G__36054;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35136){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35136));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35151_36055 = cljs.core.seq(scripts);
var chunk__35152_36056 = null;
var count__35153_36057 = (0);
var i__35154_36058 = (0);
while(true){
if((i__35154_36058 < count__35153_36057)){
var vec__35163_36059 = chunk__35152_36056.cljs$core$IIndexed$_nth$arity$2(null,i__35154_36058);
var script_tag_36060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35163_36059,(0),null);
var script_body_36061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35163_36059,(1),null);
eval(script_body_36061);


var G__36062 = seq__35151_36055;
var G__36063 = chunk__35152_36056;
var G__36064 = count__35153_36057;
var G__36065 = (i__35154_36058 + (1));
seq__35151_36055 = G__36062;
chunk__35152_36056 = G__36063;
count__35153_36057 = G__36064;
i__35154_36058 = G__36065;
continue;
} else {
var temp__5753__auto___36066 = cljs.core.seq(seq__35151_36055);
if(temp__5753__auto___36066){
var seq__35151_36067__$1 = temp__5753__auto___36066;
if(cljs.core.chunked_seq_QMARK_(seq__35151_36067__$1)){
var c__4638__auto___36068 = cljs.core.chunk_first(seq__35151_36067__$1);
var G__36069 = cljs.core.chunk_rest(seq__35151_36067__$1);
var G__36070 = c__4638__auto___36068;
var G__36071 = cljs.core.count(c__4638__auto___36068);
var G__36072 = (0);
seq__35151_36055 = G__36069;
chunk__35152_36056 = G__36070;
count__35153_36057 = G__36071;
i__35154_36058 = G__36072;
continue;
} else {
var vec__35176_36073 = cljs.core.first(seq__35151_36067__$1);
var script_tag_36074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35176_36073,(0),null);
var script_body_36075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35176_36073,(1),null);
eval(script_body_36075);


var G__36076 = cljs.core.next(seq__35151_36067__$1);
var G__36077 = null;
var G__36078 = (0);
var G__36079 = (0);
seq__35151_36055 = G__36076;
chunk__35152_36056 = G__36077;
count__35153_36057 = G__36078;
i__35154_36058 = G__36079;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35182){
var vec__35183 = p__35182;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35183,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35183,(1),null);
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
var G__35197 = arguments.length;
switch (G__35197) {
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
var seq__35230 = cljs.core.seq(style_keys);
var chunk__35231 = null;
var count__35232 = (0);
var i__35233 = (0);
while(true){
if((i__35233 < count__35232)){
var it = chunk__35231.cljs$core$IIndexed$_nth$arity$2(null,i__35233);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36087 = seq__35230;
var G__36088 = chunk__35231;
var G__36089 = count__35232;
var G__36090 = (i__35233 + (1));
seq__35230 = G__36087;
chunk__35231 = G__36088;
count__35232 = G__36089;
i__35233 = G__36090;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35230);
if(temp__5753__auto__){
var seq__35230__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35230__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35230__$1);
var G__36093 = cljs.core.chunk_rest(seq__35230__$1);
var G__36094 = c__4638__auto__;
var G__36095 = cljs.core.count(c__4638__auto__);
var G__36096 = (0);
seq__35230 = G__36093;
chunk__35231 = G__36094;
count__35232 = G__36095;
i__35233 = G__36096;
continue;
} else {
var it = cljs.core.first(seq__35230__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36097 = cljs.core.next(seq__35230__$1);
var G__36098 = null;
var G__36099 = (0);
var G__36100 = (0);
seq__35230 = G__36097;
chunk__35231 = G__36098;
count__35232 = G__36099;
i__35233 = G__36100;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k35241,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__35253 = k35241;
var G__35253__$1 = (((G__35253 instanceof cljs.core.Keyword))?G__35253.fqn:null);
switch (G__35253__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35241,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__35257){
var vec__35259 = p__35257;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35259,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35259,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35240){
var self__ = this;
var G__35240__$1 = this;
return (new cljs.core.RecordIter((0),G__35240__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35242,other35243){
var self__ = this;
var this35242__$1 = this;
return (((!((other35243 == null)))) && ((((this35242__$1.constructor === other35243.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35242__$1.x,other35243.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35242__$1.y,other35243.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35242__$1.__extmap,other35243.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k35241){
var self__ = this;
var this__4468__auto____$1 = this;
var G__35289 = k35241;
var G__35289__$1 = (((G__35289 instanceof cljs.core.Keyword))?G__35289.fqn:null);
switch (G__35289__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35241);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__35240){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__35291 = cljs.core.keyword_identical_QMARK_;
var expr__35292 = k__4470__auto__;
if(cljs.core.truth_((pred__35291.cljs$core$IFn$_invoke$arity$2 ? pred__35291.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35292) : pred__35291.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35292)))){
return (new shadow.dom.Coordinate(G__35240,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35291.cljs$core$IFn$_invoke$arity$2 ? pred__35291.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35292) : pred__35291.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35292)))){
return (new shadow.dom.Coordinate(self__.x,G__35240,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__35240),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__35240){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35240,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35246){
var extmap__4501__auto__ = (function (){var G__35298 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35246,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35246)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35298);
} else {
return G__35298;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35246),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35246),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k35314,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__35327 = k35314;
var G__35327__$1 = (((G__35327 instanceof cljs.core.Keyword))?G__35327.fqn:null);
switch (G__35327__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35314,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__35332){
var vec__35333 = p__35332;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35333,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35333,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35313){
var self__ = this;
var G__35313__$1 = this;
return (new cljs.core.RecordIter((0),G__35313__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35315,other35316){
var self__ = this;
var this35315__$1 = this;
return (((!((other35316 == null)))) && ((((this35315__$1.constructor === other35316.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35315__$1.w,other35316.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35315__$1.h,other35316.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35315__$1.__extmap,other35316.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k35314){
var self__ = this;
var this__4468__auto____$1 = this;
var G__35376 = k35314;
var G__35376__$1 = (((G__35376 instanceof cljs.core.Keyword))?G__35376.fqn:null);
switch (G__35376__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35314);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__35313){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__35383 = cljs.core.keyword_identical_QMARK_;
var expr__35384 = k__4470__auto__;
if(cljs.core.truth_((pred__35383.cljs$core$IFn$_invoke$arity$2 ? pred__35383.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35384) : pred__35383.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35384)))){
return (new shadow.dom.Size(G__35313,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35383.cljs$core$IFn$_invoke$arity$2 ? pred__35383.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35384) : pred__35383.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35384)))){
return (new shadow.dom.Size(self__.w,G__35313,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__35313),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__35313){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35313,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35318){
var extmap__4501__auto__ = (function (){var G__35420 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35318,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35318)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35420);
} else {
return G__35420;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35318),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35318),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__36140 = (i + (1));
var G__36141 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36140;
ret = G__36141;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35476){
var vec__35477 = p__35476;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35477,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35477,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35484 = arguments.length;
switch (G__35484) {
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
var G__36160 = ps;
var G__36161 = (i + (1));
el__$1 = G__36160;
i = G__36161;
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
var vec__35535 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35535,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35535,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35535,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35538_36169 = cljs.core.seq(props);
var chunk__35539_36170 = null;
var count__35540_36171 = (0);
var i__35541_36172 = (0);
while(true){
if((i__35541_36172 < count__35540_36171)){
var vec__35553_36180 = chunk__35539_36170.cljs$core$IIndexed$_nth$arity$2(null,i__35541_36172);
var k_36181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35553_36180,(0),null);
var v_36182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35553_36180,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36181);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36181),v_36182);


var G__36184 = seq__35538_36169;
var G__36185 = chunk__35539_36170;
var G__36186 = count__35540_36171;
var G__36187 = (i__35541_36172 + (1));
seq__35538_36169 = G__36184;
chunk__35539_36170 = G__36185;
count__35540_36171 = G__36186;
i__35541_36172 = G__36187;
continue;
} else {
var temp__5753__auto___36188 = cljs.core.seq(seq__35538_36169);
if(temp__5753__auto___36188){
var seq__35538_36189__$1 = temp__5753__auto___36188;
if(cljs.core.chunked_seq_QMARK_(seq__35538_36189__$1)){
var c__4638__auto___36190 = cljs.core.chunk_first(seq__35538_36189__$1);
var G__36191 = cljs.core.chunk_rest(seq__35538_36189__$1);
var G__36192 = c__4638__auto___36190;
var G__36193 = cljs.core.count(c__4638__auto___36190);
var G__36194 = (0);
seq__35538_36169 = G__36191;
chunk__35539_36170 = G__36192;
count__35540_36171 = G__36193;
i__35541_36172 = G__36194;
continue;
} else {
var vec__35557_36197 = cljs.core.first(seq__35538_36189__$1);
var k_36198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35557_36197,(0),null);
var v_36199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35557_36197,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36198);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36198),v_36199);


var G__36206 = cljs.core.next(seq__35538_36189__$1);
var G__36207 = null;
var G__36208 = (0);
var G__36209 = (0);
seq__35538_36169 = G__36206;
chunk__35539_36170 = G__36207;
count__35540_36171 = G__36208;
i__35541_36172 = G__36209;
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
var vec__35565 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35565,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35565,(1),null);
var seq__35568_36214 = cljs.core.seq(node_children);
var chunk__35570_36215 = null;
var count__35571_36216 = (0);
var i__35572_36217 = (0);
while(true){
if((i__35572_36217 < count__35571_36216)){
var child_struct_36222 = chunk__35570_36215.cljs$core$IIndexed$_nth$arity$2(null,i__35572_36217);
if((!((child_struct_36222 == null)))){
if(typeof child_struct_36222 === 'string'){
var text_36223 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36223),child_struct_36222].join(''));
} else {
var children_36224 = shadow.dom.svg_node(child_struct_36222);
if(cljs.core.seq_QMARK_(children_36224)){
var seq__35639_36225 = cljs.core.seq(children_36224);
var chunk__35641_36226 = null;
var count__35642_36227 = (0);
var i__35643_36228 = (0);
while(true){
if((i__35643_36228 < count__35642_36227)){
var child_36230 = chunk__35641_36226.cljs$core$IIndexed$_nth$arity$2(null,i__35643_36228);
if(cljs.core.truth_(child_36230)){
node.appendChild(child_36230);


var G__36231 = seq__35639_36225;
var G__36232 = chunk__35641_36226;
var G__36233 = count__35642_36227;
var G__36234 = (i__35643_36228 + (1));
seq__35639_36225 = G__36231;
chunk__35641_36226 = G__36232;
count__35642_36227 = G__36233;
i__35643_36228 = G__36234;
continue;
} else {
var G__36235 = seq__35639_36225;
var G__36236 = chunk__35641_36226;
var G__36237 = count__35642_36227;
var G__36238 = (i__35643_36228 + (1));
seq__35639_36225 = G__36235;
chunk__35641_36226 = G__36236;
count__35642_36227 = G__36237;
i__35643_36228 = G__36238;
continue;
}
} else {
var temp__5753__auto___36239 = cljs.core.seq(seq__35639_36225);
if(temp__5753__auto___36239){
var seq__35639_36240__$1 = temp__5753__auto___36239;
if(cljs.core.chunked_seq_QMARK_(seq__35639_36240__$1)){
var c__4638__auto___36241 = cljs.core.chunk_first(seq__35639_36240__$1);
var G__36242 = cljs.core.chunk_rest(seq__35639_36240__$1);
var G__36243 = c__4638__auto___36241;
var G__36244 = cljs.core.count(c__4638__auto___36241);
var G__36245 = (0);
seq__35639_36225 = G__36242;
chunk__35641_36226 = G__36243;
count__35642_36227 = G__36244;
i__35643_36228 = G__36245;
continue;
} else {
var child_36246 = cljs.core.first(seq__35639_36240__$1);
if(cljs.core.truth_(child_36246)){
node.appendChild(child_36246);


var G__36248 = cljs.core.next(seq__35639_36240__$1);
var G__36249 = null;
var G__36250 = (0);
var G__36251 = (0);
seq__35639_36225 = G__36248;
chunk__35641_36226 = G__36249;
count__35642_36227 = G__36250;
i__35643_36228 = G__36251;
continue;
} else {
var G__36252 = cljs.core.next(seq__35639_36240__$1);
var G__36253 = null;
var G__36254 = (0);
var G__36255 = (0);
seq__35639_36225 = G__36252;
chunk__35641_36226 = G__36253;
count__35642_36227 = G__36254;
i__35643_36228 = G__36255;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36224);
}
}


var G__36256 = seq__35568_36214;
var G__36257 = chunk__35570_36215;
var G__36258 = count__35571_36216;
var G__36259 = (i__35572_36217 + (1));
seq__35568_36214 = G__36256;
chunk__35570_36215 = G__36257;
count__35571_36216 = G__36258;
i__35572_36217 = G__36259;
continue;
} else {
var G__36260 = seq__35568_36214;
var G__36261 = chunk__35570_36215;
var G__36262 = count__35571_36216;
var G__36263 = (i__35572_36217 + (1));
seq__35568_36214 = G__36260;
chunk__35570_36215 = G__36261;
count__35571_36216 = G__36262;
i__35572_36217 = G__36263;
continue;
}
} else {
var temp__5753__auto___36264 = cljs.core.seq(seq__35568_36214);
if(temp__5753__auto___36264){
var seq__35568_36265__$1 = temp__5753__auto___36264;
if(cljs.core.chunked_seq_QMARK_(seq__35568_36265__$1)){
var c__4638__auto___36266 = cljs.core.chunk_first(seq__35568_36265__$1);
var G__36267 = cljs.core.chunk_rest(seq__35568_36265__$1);
var G__36268 = c__4638__auto___36266;
var G__36269 = cljs.core.count(c__4638__auto___36266);
var G__36270 = (0);
seq__35568_36214 = G__36267;
chunk__35570_36215 = G__36268;
count__35571_36216 = G__36269;
i__35572_36217 = G__36270;
continue;
} else {
var child_struct_36271 = cljs.core.first(seq__35568_36265__$1);
if((!((child_struct_36271 == null)))){
if(typeof child_struct_36271 === 'string'){
var text_36272 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36272),child_struct_36271].join(''));
} else {
var children_36273 = shadow.dom.svg_node(child_struct_36271);
if(cljs.core.seq_QMARK_(children_36273)){
var seq__35670_36276 = cljs.core.seq(children_36273);
var chunk__35672_36277 = null;
var count__35673_36278 = (0);
var i__35674_36279 = (0);
while(true){
if((i__35674_36279 < count__35673_36278)){
var child_36280 = chunk__35672_36277.cljs$core$IIndexed$_nth$arity$2(null,i__35674_36279);
if(cljs.core.truth_(child_36280)){
node.appendChild(child_36280);


var G__36281 = seq__35670_36276;
var G__36282 = chunk__35672_36277;
var G__36283 = count__35673_36278;
var G__36284 = (i__35674_36279 + (1));
seq__35670_36276 = G__36281;
chunk__35672_36277 = G__36282;
count__35673_36278 = G__36283;
i__35674_36279 = G__36284;
continue;
} else {
var G__36285 = seq__35670_36276;
var G__36286 = chunk__35672_36277;
var G__36287 = count__35673_36278;
var G__36288 = (i__35674_36279 + (1));
seq__35670_36276 = G__36285;
chunk__35672_36277 = G__36286;
count__35673_36278 = G__36287;
i__35674_36279 = G__36288;
continue;
}
} else {
var temp__5753__auto___36289__$1 = cljs.core.seq(seq__35670_36276);
if(temp__5753__auto___36289__$1){
var seq__35670_36290__$1 = temp__5753__auto___36289__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35670_36290__$1)){
var c__4638__auto___36291 = cljs.core.chunk_first(seq__35670_36290__$1);
var G__36292 = cljs.core.chunk_rest(seq__35670_36290__$1);
var G__36293 = c__4638__auto___36291;
var G__36294 = cljs.core.count(c__4638__auto___36291);
var G__36295 = (0);
seq__35670_36276 = G__36292;
chunk__35672_36277 = G__36293;
count__35673_36278 = G__36294;
i__35674_36279 = G__36295;
continue;
} else {
var child_36297 = cljs.core.first(seq__35670_36290__$1);
if(cljs.core.truth_(child_36297)){
node.appendChild(child_36297);


var G__36300 = cljs.core.next(seq__35670_36290__$1);
var G__36301 = null;
var G__36302 = (0);
var G__36303 = (0);
seq__35670_36276 = G__36300;
chunk__35672_36277 = G__36301;
count__35673_36278 = G__36302;
i__35674_36279 = G__36303;
continue;
} else {
var G__36305 = cljs.core.next(seq__35670_36290__$1);
var G__36306 = null;
var G__36307 = (0);
var G__36308 = (0);
seq__35670_36276 = G__36305;
chunk__35672_36277 = G__36306;
count__35673_36278 = G__36307;
i__35674_36279 = G__36308;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36273);
}
}


var G__36310 = cljs.core.next(seq__35568_36265__$1);
var G__36311 = null;
var G__36312 = (0);
var G__36313 = (0);
seq__35568_36214 = G__36310;
chunk__35570_36215 = G__36311;
count__35571_36216 = G__36312;
i__35572_36217 = G__36313;
continue;
} else {
var G__36316 = cljs.core.next(seq__35568_36265__$1);
var G__36317 = null;
var G__36318 = (0);
var G__36319 = (0);
seq__35568_36214 = G__36316;
chunk__35570_36215 = G__36317;
count__35571_36216 = G__36318;
i__35572_36217 = G__36319;
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
var args__4824__auto__ = [];
var len__4818__auto___36320 = arguments.length;
var i__4819__auto___36321 = (0);
while(true){
if((i__4819__auto___36321 < len__4818__auto___36320)){
args__4824__auto__.push((arguments[i__4819__auto___36321]));

var G__36324 = (i__4819__auto___36321 + (1));
i__4819__auto___36321 = G__36324;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35703){
var G__35704 = cljs.core.first(seq35703);
var seq35703__$1 = cljs.core.next(seq35703);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35704,seq35703__$1);
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
var G__35724 = arguments.length;
switch (G__35724) {
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

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__31144__auto___36330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_35744){
var state_val_35745 = (state_35744[(1)]);
if((state_val_35745 === (1))){
var state_35744__$1 = state_35744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35744__$1,(2),once_or_cleanup);
} else {
if((state_val_35745 === (2))){
var inst_35740 = (state_35744[(2)]);
var inst_35742 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35744__$1 = (function (){var statearr_35752 = state_35744;
(statearr_35752[(7)] = inst_35740);

return statearr_35752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35744__$1,inst_35742);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__31050__auto__ = null;
var shadow$dom$state_machine__31050__auto____0 = (function (){
var statearr_35755 = [null,null,null,null,null,null,null,null];
(statearr_35755[(0)] = shadow$dom$state_machine__31050__auto__);

(statearr_35755[(1)] = (1));

return statearr_35755;
});
var shadow$dom$state_machine__31050__auto____1 = (function (state_35744){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_35744);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e35757){var ex__31053__auto__ = e35757;
var statearr_35758_36343 = state_35744;
(statearr_35758_36343[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_35744[(4)]))){
var statearr_35760_36345 = state_35744;
(statearr_35760_36345[(1)] = cljs.core.first((state_35744[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36348 = state_35744;
state_35744 = G__36348;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
shadow$dom$state_machine__31050__auto__ = function(state_35744){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31050__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31050__auto____1.call(this,state_35744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31050__auto____0;
shadow$dom$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31050__auto____1;
return shadow$dom$state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_35763 = f__31146__auto__();
(statearr_35763[(6)] = c__31144__auto___36330);

return statearr_35763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
