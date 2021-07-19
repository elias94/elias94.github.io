goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__64598__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__64598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64613__i = 0, G__64613__a = new Array(arguments.length -  0);
while (G__64613__i < G__64613__a.length) {G__64613__a[G__64613__i] = arguments[G__64613__i + 0]; ++G__64613__i;}
  args = new cljs.core.IndexedSeq(G__64613__a,0,null);
} 
return G__64598__delegate.call(this,args);};
G__64598.cljs$lang$maxFixedArity = 0;
G__64598.cljs$lang$applyTo = (function (arglist__64614){
var args = cljs.core.seq(arglist__64614);
return G__64598__delegate(args);
});
G__64598.cljs$core$IFn$_invoke$arity$variadic = G__64598__delegate;
return G__64598;
})()
);

(o.error = (function() { 
var G__64617__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__64617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64618__i = 0, G__64618__a = new Array(arguments.length -  0);
while (G__64618__i < G__64618__a.length) {G__64618__a[G__64618__i] = arguments[G__64618__i + 0]; ++G__64618__i;}
  args = new cljs.core.IndexedSeq(G__64618__a,0,null);
} 
return G__64617__delegate.call(this,args);};
G__64617.cljs$lang$maxFixedArity = 0;
G__64617.cljs$lang$applyTo = (function (arglist__64619){
var args = cljs.core.seq(arglist__64619);
return G__64617__delegate(args);
});
G__64617.cljs$core$IFn$_invoke$arity$variadic = G__64617__delegate;
return G__64617;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
