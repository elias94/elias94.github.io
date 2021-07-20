goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36126){
var map__36128 = p__36126;
var map__36128__$1 = cljs.core.__destructure_map(map__36128);
var m = map__36128__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36128__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36128__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36129_36566 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36130_36567 = null;
var count__36131_36568 = (0);
var i__36132_36569 = (0);
while(true){
if((i__36132_36569 < count__36131_36568)){
var f_36571 = chunk__36130_36567.cljs$core$IIndexed$_nth$arity$2(null,i__36132_36569);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36571], 0));


var G__36572 = seq__36129_36566;
var G__36573 = chunk__36130_36567;
var G__36574 = count__36131_36568;
var G__36575 = (i__36132_36569 + (1));
seq__36129_36566 = G__36572;
chunk__36130_36567 = G__36573;
count__36131_36568 = G__36574;
i__36132_36569 = G__36575;
continue;
} else {
var temp__5753__auto___36576 = cljs.core.seq(seq__36129_36566);
if(temp__5753__auto___36576){
var seq__36129_36577__$1 = temp__5753__auto___36576;
if(cljs.core.chunked_seq_QMARK_(seq__36129_36577__$1)){
var c__4638__auto___36578 = cljs.core.chunk_first(seq__36129_36577__$1);
var G__36579 = cljs.core.chunk_rest(seq__36129_36577__$1);
var G__36580 = c__4638__auto___36578;
var G__36581 = cljs.core.count(c__4638__auto___36578);
var G__36582 = (0);
seq__36129_36566 = G__36579;
chunk__36130_36567 = G__36580;
count__36131_36568 = G__36581;
i__36132_36569 = G__36582;
continue;
} else {
var f_36583 = cljs.core.first(seq__36129_36577__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36583], 0));


var G__36584 = cljs.core.next(seq__36129_36577__$1);
var G__36585 = null;
var G__36586 = (0);
var G__36587 = (0);
seq__36129_36566 = G__36584;
chunk__36130_36567 = G__36585;
count__36131_36568 = G__36586;
i__36132_36569 = G__36587;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36588 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36588], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36588)))?cljs.core.second(arglists_36588):arglists_36588)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36149_36593 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36150_36594 = null;
var count__36151_36595 = (0);
var i__36152_36596 = (0);
while(true){
if((i__36152_36596 < count__36151_36595)){
var vec__36176_36597 = chunk__36150_36594.cljs$core$IIndexed$_nth$arity$2(null,i__36152_36596);
var name_36598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36176_36597,(0),null);
var map__36179_36599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36176_36597,(1),null);
var map__36179_36600__$1 = cljs.core.__destructure_map(map__36179_36599);
var doc_36601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36179_36600__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36179_36600__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36598], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36602], 0));

if(cljs.core.truth_(doc_36601)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36601], 0));
} else {
}


var G__36607 = seq__36149_36593;
var G__36608 = chunk__36150_36594;
var G__36609 = count__36151_36595;
var G__36610 = (i__36152_36596 + (1));
seq__36149_36593 = G__36607;
chunk__36150_36594 = G__36608;
count__36151_36595 = G__36609;
i__36152_36596 = G__36610;
continue;
} else {
var temp__5753__auto___36615 = cljs.core.seq(seq__36149_36593);
if(temp__5753__auto___36615){
var seq__36149_36616__$1 = temp__5753__auto___36615;
if(cljs.core.chunked_seq_QMARK_(seq__36149_36616__$1)){
var c__4638__auto___36617 = cljs.core.chunk_first(seq__36149_36616__$1);
var G__36619 = cljs.core.chunk_rest(seq__36149_36616__$1);
var G__36620 = c__4638__auto___36617;
var G__36621 = cljs.core.count(c__4638__auto___36617);
var G__36622 = (0);
seq__36149_36593 = G__36619;
chunk__36150_36594 = G__36620;
count__36151_36595 = G__36621;
i__36152_36596 = G__36622;
continue;
} else {
var vec__36201_36627 = cljs.core.first(seq__36149_36616__$1);
var name_36628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36201_36627,(0),null);
var map__36204_36629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36201_36627,(1),null);
var map__36204_36630__$1 = cljs.core.__destructure_map(map__36204_36629);
var doc_36631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36204_36630__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36204_36630__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36628], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36632], 0));

if(cljs.core.truth_(doc_36631)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36631], 0));
} else {
}


var G__36640 = cljs.core.next(seq__36149_36616__$1);
var G__36641 = null;
var G__36642 = (0);
var G__36643 = (0);
seq__36149_36593 = G__36640;
chunk__36150_36594 = G__36641;
count__36151_36595 = G__36642;
i__36152_36596 = G__36643;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36218 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36219 = null;
var count__36220 = (0);
var i__36221 = (0);
while(true){
if((i__36221 < count__36220)){
var role = chunk__36219.cljs$core$IIndexed$_nth$arity$2(null,i__36221);
var temp__5753__auto___36650__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36650__$1)){
var spec_36652 = temp__5753__auto___36650__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36652)], 0));
} else {
}


var G__36654 = seq__36218;
var G__36655 = chunk__36219;
var G__36656 = count__36220;
var G__36657 = (i__36221 + (1));
seq__36218 = G__36654;
chunk__36219 = G__36655;
count__36220 = G__36656;
i__36221 = G__36657;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__36218);
if(temp__5753__auto____$1){
var seq__36218__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36218__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__36218__$1);
var G__36658 = cljs.core.chunk_rest(seq__36218__$1);
var G__36659 = c__4638__auto__;
var G__36660 = cljs.core.count(c__4638__auto__);
var G__36661 = (0);
seq__36218 = G__36658;
chunk__36219 = G__36659;
count__36220 = G__36660;
i__36221 = G__36661;
continue;
} else {
var role = cljs.core.first(seq__36218__$1);
var temp__5753__auto___36662__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36662__$2)){
var spec_36663 = temp__5753__auto___36662__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36663)], 0));
} else {
}


var G__36664 = cljs.core.next(seq__36218__$1);
var G__36665 = null;
var G__36666 = (0);
var G__36667 = (0);
seq__36218 = G__36664;
chunk__36219 = G__36665;
count__36220 = G__36666;
i__36221 = G__36667;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36672 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36673 = cljs.core.ex_cause(t);
via = G__36672;
t = G__36673;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36335 = datafied_throwable;
var map__36335__$1 = cljs.core.__destructure_map(map__36335);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36335__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36335__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36335__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36336 = cljs.core.last(via);
var map__36336__$1 = cljs.core.__destructure_map(map__36336);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36336__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36336__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36336__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36337 = data;
var map__36337__$1 = cljs.core.__destructure_map(map__36337);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36337__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36337__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36337__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36338 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36338__$1 = cljs.core.__destructure_map(map__36338);
var top_data = map__36338__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36338__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36349 = phase;
var G__36349__$1 = (((G__36349 instanceof cljs.core.Keyword))?G__36349.fqn:null);
switch (G__36349__$1) {
case "read-source":
var map__36350 = data;
var map__36350__$1 = cljs.core.__destructure_map(map__36350);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36350__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36350__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36353 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36353__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36353,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36353);
var G__36353__$2 = (cljs.core.truth_((function (){var fexpr__36355 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36355.cljs$core$IFn$_invoke$arity$1 ? fexpr__36355.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36355.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36353__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36353__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36353__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36353__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36357 = top_data;
var G__36357__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36357,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36357);
var G__36357__$2 = (cljs.core.truth_((function (){var fexpr__36358 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36358.cljs$core$IFn$_invoke$arity$1 ? fexpr__36358.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36358.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36357__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36357__$1);
var G__36357__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36357__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36357__$2);
var G__36357__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36357__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36357__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36357__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36357__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36372 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36372,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36372,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36372,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36372,(3),null);
var G__36385 = top_data;
var G__36385__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36385,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36385);
var G__36385__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36385__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36385__$1);
var G__36385__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36385__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36385__$2);
var G__36385__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36385__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36385__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36385__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36385__$4;
}

break;
case "execution":
var vec__36394 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36394,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36394,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36394,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36394,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36333_SHARP_){
var or__4212__auto__ = (p1__36333_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__36397 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36397.cljs$core$IFn$_invoke$arity$1 ? fexpr__36397.cljs$core$IFn$_invoke$arity$1(p1__36333_SHARP_) : fexpr__36397.call(null,p1__36333_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__36404 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36404__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36404,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36404);
var G__36404__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36404__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36404__$1);
var G__36404__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36404__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36404__$2);
var G__36404__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36404__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36404__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36404__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36404__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36349__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36444){
var map__36445 = p__36444;
var map__36445__$1 = cljs.core.__destructure_map(map__36445);
var triage_data = map__36445__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36445__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36445__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36445__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36445__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36445__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36445__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36445__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36445__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36468 = phase;
var G__36468__$1 = (((G__36468 instanceof cljs.core.Keyword))?G__36468.fqn:null);
switch (G__36468__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36470 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36471 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36472 = loc;
var G__36473 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36478_36716 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36479_36717 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36480_36718 = true;
var _STAR_print_fn_STAR__temp_val__36481_36719 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36480_36718);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36481_36719);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36442_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36442_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36479_36717);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36478_36716);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36470,G__36471,G__36472,G__36473) : format.call(null,G__36470,G__36471,G__36472,G__36473));

break;
case "macroexpansion":
var G__36493 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36494 = cause_type;
var G__36495 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36496 = loc;
var G__36497 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36493,G__36494,G__36495,G__36496,G__36497) : format.call(null,G__36493,G__36494,G__36495,G__36496,G__36497));

break;
case "compile-syntax-check":
var G__36501 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36502 = cause_type;
var G__36503 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36504 = loc;
var G__36505 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36501,G__36502,G__36503,G__36504,G__36505) : format.call(null,G__36501,G__36502,G__36503,G__36504,G__36505));

break;
case "compilation":
var G__36506 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36507 = cause_type;
var G__36508 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36509 = loc;
var G__36510 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36506,G__36507,G__36508,G__36509,G__36510) : format.call(null,G__36506,G__36507,G__36508,G__36509,G__36510));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36511 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36512 = symbol;
var G__36513 = loc;
var G__36514 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36515_36729 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36516_36730 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36517_36731 = true;
var _STAR_print_fn_STAR__temp_val__36518_36732 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36517_36731);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36518_36732);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36443_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36443_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36516_36730);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36515_36729);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36511,G__36512,G__36513,G__36514) : format.call(null,G__36511,G__36512,G__36513,G__36514));
} else {
var G__36524 = "Execution error%s at %s(%s).\n%s\n";
var G__36525 = cause_type;
var G__36526 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36527 = loc;
var G__36528 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36524,G__36525,G__36526,G__36527,G__36528) : format.call(null,G__36524,G__36525,G__36526,G__36527,G__36528));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36468__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
