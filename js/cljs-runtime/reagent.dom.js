goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__67213 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__67214 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__67214);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__67217 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__67218 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__67218);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__67217);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__67213);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__67251 = arguments.length;
switch (G__67251) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__67278 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67278,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67278,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__67335_67407 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__67336_67408 = null;
var count__67337_67409 = (0);
var i__67338_67410 = (0);
while(true){
if((i__67338_67410 < count__67337_67409)){
var vec__67364_67411 = chunk__67336_67408.cljs$core$IIndexed$_nth$arity$2(null,i__67338_67410);
var container_67412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67364_67411,(0),null);
var comp_67413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67364_67411,(1),null);
reagent.dom.re_render_component(comp_67413,container_67412);


var G__67419 = seq__67335_67407;
var G__67420 = chunk__67336_67408;
var G__67421 = count__67337_67409;
var G__67422 = (i__67338_67410 + (1));
seq__67335_67407 = G__67419;
chunk__67336_67408 = G__67420;
count__67337_67409 = G__67421;
i__67338_67410 = G__67422;
continue;
} else {
var temp__5753__auto___67424 = cljs.core.seq(seq__67335_67407);
if(temp__5753__auto___67424){
var seq__67335_67425__$1 = temp__5753__auto___67424;
if(cljs.core.chunked_seq_QMARK_(seq__67335_67425__$1)){
var c__4649__auto___67426 = cljs.core.chunk_first(seq__67335_67425__$1);
var G__67427 = cljs.core.chunk_rest(seq__67335_67425__$1);
var G__67428 = c__4649__auto___67426;
var G__67429 = cljs.core.count(c__4649__auto___67426);
var G__67430 = (0);
seq__67335_67407 = G__67427;
chunk__67336_67408 = G__67428;
count__67337_67409 = G__67429;
i__67338_67410 = G__67430;
continue;
} else {
var vec__67377_67431 = cljs.core.first(seq__67335_67425__$1);
var container_67432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67377_67431,(0),null);
var comp_67433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67377_67431,(1),null);
reagent.dom.re_render_component(comp_67433,container_67432);


var G__67434 = cljs.core.next(seq__67335_67425__$1);
var G__67435 = null;
var G__67436 = (0);
var G__67437 = (0);
seq__67335_67407 = G__67434;
chunk__67336_67408 = G__67435;
count__67337_67409 = G__67436;
i__67338_67410 = G__67437;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
