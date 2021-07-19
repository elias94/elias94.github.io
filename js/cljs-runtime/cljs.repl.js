goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__66332){
var map__66333 = p__66332;
var map__66333__$1 = cljs.core.__destructure_map(map__66333);
var m = map__66333__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66333__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66333__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
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
var seq__66338_66796 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66339_66797 = null;
var count__66340_66798 = (0);
var i__66341_66799 = (0);
while(true){
if((i__66341_66799 < count__66340_66798)){
var f_66802 = chunk__66339_66797.cljs$core$IIndexed$_nth$arity$2(null,i__66341_66799);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_66802], 0));


var G__66803 = seq__66338_66796;
var G__66804 = chunk__66339_66797;
var G__66805 = count__66340_66798;
var G__66806 = (i__66341_66799 + (1));
seq__66338_66796 = G__66803;
chunk__66339_66797 = G__66804;
count__66340_66798 = G__66805;
i__66341_66799 = G__66806;
continue;
} else {
var temp__5753__auto___66807 = cljs.core.seq(seq__66338_66796);
if(temp__5753__auto___66807){
var seq__66338_66808__$1 = temp__5753__auto___66807;
if(cljs.core.chunked_seq_QMARK_(seq__66338_66808__$1)){
var c__4649__auto___66809 = cljs.core.chunk_first(seq__66338_66808__$1);
var G__66810 = cljs.core.chunk_rest(seq__66338_66808__$1);
var G__66811 = c__4649__auto___66809;
var G__66812 = cljs.core.count(c__4649__auto___66809);
var G__66813 = (0);
seq__66338_66796 = G__66810;
chunk__66339_66797 = G__66811;
count__66340_66798 = G__66812;
i__66341_66799 = G__66813;
continue;
} else {
var f_66816 = cljs.core.first(seq__66338_66808__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_66816], 0));


var G__66818 = cljs.core.next(seq__66338_66808__$1);
var G__66819 = null;
var G__66820 = (0);
var G__66821 = (0);
seq__66338_66796 = G__66818;
chunk__66339_66797 = G__66819;
count__66340_66798 = G__66820;
i__66341_66799 = G__66821;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_66826 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_66826], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_66826)))?cljs.core.second(arglists_66826):arglists_66826)], 0));
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
var seq__66387_66829 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66388_66830 = null;
var count__66389_66831 = (0);
var i__66390_66832 = (0);
while(true){
if((i__66390_66832 < count__66389_66831)){
var vec__66450_66833 = chunk__66388_66830.cljs$core$IIndexed$_nth$arity$2(null,i__66390_66832);
var name_66834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66450_66833,(0),null);
var map__66453_66835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66450_66833,(1),null);
var map__66453_66836__$1 = cljs.core.__destructure_map(map__66453_66835);
var doc_66837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66453_66836__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66453_66836__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_66834], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_66838], 0));

if(cljs.core.truth_(doc_66837)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_66837], 0));
} else {
}


var G__66840 = seq__66387_66829;
var G__66841 = chunk__66388_66830;
var G__66842 = count__66389_66831;
var G__66843 = (i__66390_66832 + (1));
seq__66387_66829 = G__66840;
chunk__66388_66830 = G__66841;
count__66389_66831 = G__66842;
i__66390_66832 = G__66843;
continue;
} else {
var temp__5753__auto___66844 = cljs.core.seq(seq__66387_66829);
if(temp__5753__auto___66844){
var seq__66387_66845__$1 = temp__5753__auto___66844;
if(cljs.core.chunked_seq_QMARK_(seq__66387_66845__$1)){
var c__4649__auto___66846 = cljs.core.chunk_first(seq__66387_66845__$1);
var G__66847 = cljs.core.chunk_rest(seq__66387_66845__$1);
var G__66848 = c__4649__auto___66846;
var G__66849 = cljs.core.count(c__4649__auto___66846);
var G__66850 = (0);
seq__66387_66829 = G__66847;
chunk__66388_66830 = G__66848;
count__66389_66831 = G__66849;
i__66390_66832 = G__66850;
continue;
} else {
var vec__66473_66851 = cljs.core.first(seq__66387_66845__$1);
var name_66852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66473_66851,(0),null);
var map__66476_66853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66473_66851,(1),null);
var map__66476_66854__$1 = cljs.core.__destructure_map(map__66476_66853);
var doc_66855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66476_66854__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66476_66854__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_66852], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_66856], 0));

if(cljs.core.truth_(doc_66855)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_66855], 0));
} else {
}


var G__66857 = cljs.core.next(seq__66387_66845__$1);
var G__66858 = null;
var G__66859 = (0);
var G__66860 = (0);
seq__66387_66829 = G__66857;
chunk__66388_66830 = G__66858;
count__66389_66831 = G__66859;
i__66390_66832 = G__66860;
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

var seq__66516 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__66519 = null;
var count__66520 = (0);
var i__66521 = (0);
while(true){
if((i__66521 < count__66520)){
var role = chunk__66519.cljs$core$IIndexed$_nth$arity$2(null,i__66521);
var temp__5753__auto___66865__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___66865__$1)){
var spec_66866 = temp__5753__auto___66865__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_66866)], 0));
} else {
}


var G__66867 = seq__66516;
var G__66868 = chunk__66519;
var G__66869 = count__66520;
var G__66870 = (i__66521 + (1));
seq__66516 = G__66867;
chunk__66519 = G__66868;
count__66520 = G__66869;
i__66521 = G__66870;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__66516);
if(temp__5753__auto____$1){
var seq__66516__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__66516__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__66516__$1);
var G__66872 = cljs.core.chunk_rest(seq__66516__$1);
var G__66873 = c__4649__auto__;
var G__66874 = cljs.core.count(c__4649__auto__);
var G__66875 = (0);
seq__66516 = G__66872;
chunk__66519 = G__66873;
count__66520 = G__66874;
i__66521 = G__66875;
continue;
} else {
var role = cljs.core.first(seq__66516__$1);
var temp__5753__auto___66876__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___66876__$2)){
var spec_66877 = temp__5753__auto___66876__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_66877)], 0));
} else {
}


var G__66878 = cljs.core.next(seq__66516__$1);
var G__66879 = null;
var G__66880 = (0);
var G__66881 = (0);
seq__66516 = G__66878;
chunk__66519 = G__66879;
count__66520 = G__66880;
i__66521 = G__66881;
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
var G__66883 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__66884 = cljs.core.ex_cause(t);
via = G__66883;
t = G__66884;
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
var map__66629 = datafied_throwable;
var map__66629__$1 = cljs.core.__destructure_map(map__66629);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66629__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66629__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66629__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__66630 = cljs.core.last(via);
var map__66630__$1 = cljs.core.__destructure_map(map__66630);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66630__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66630__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66630__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__66631 = data;
var map__66631__$1 = cljs.core.__destructure_map(map__66631);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66631__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66631__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66631__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__66632 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__66632__$1 = cljs.core.__destructure_map(map__66632);
var top_data = map__66632__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66632__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__66663 = phase;
var G__66663__$1 = (((G__66663 instanceof cljs.core.Keyword))?G__66663.fqn:null);
switch (G__66663__$1) {
case "read-source":
var map__66676 = data;
var map__66676__$1 = cljs.core.__destructure_map(map__66676);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66676__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66676__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__66677 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__66677__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66677,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__66677);
var G__66677__$2 = (cljs.core.truth_((function (){var fexpr__66685 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__66685.cljs$core$IFn$_invoke$arity$1 ? fexpr__66685.cljs$core$IFn$_invoke$arity$1(source) : fexpr__66685.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__66677__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__66677__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66677__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__66677__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__66700 = top_data;
var G__66700__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66700,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__66700);
var G__66700__$2 = (cljs.core.truth_((function (){var fexpr__66701 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__66701.cljs$core$IFn$_invoke$arity$1 ? fexpr__66701.cljs$core$IFn$_invoke$arity$1(source) : fexpr__66701.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__66700__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__66700__$1);
var G__66700__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66700__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__66700__$2);
var G__66700__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66700__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__66700__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66700__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__66700__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__66714 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66714,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66714,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66714,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66714,(3),null);
var G__66717 = top_data;
var G__66717__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66717,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__66717);
var G__66717__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66717__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__66717__$1);
var G__66717__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66717__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__66717__$2);
var G__66717__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66717__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__66717__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66717__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__66717__$4;
}

break;
case "execution":
var vec__66723 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66723,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66723,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66723,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66723,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__66621_SHARP_){
var or__4223__auto__ = (p1__66621_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__66726 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__66726.cljs$core$IFn$_invoke$arity$1 ? fexpr__66726.cljs$core$IFn$_invoke$arity$1(p1__66621_SHARP_) : fexpr__66726.call(null,p1__66621_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__66728 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__66728__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66728,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__66728);
var G__66728__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66728__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__66728__$1);
var G__66728__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66728__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__66728__$2);
var G__66728__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66728__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__66728__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66728__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__66728__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66663__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__66736){
var map__66737 = p__66736;
var map__66737__$1 = cljs.core.__destructure_map(map__66737);
var triage_data = map__66737__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66737__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66737__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66737__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66737__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66737__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66737__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66737__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66737__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__66741 = phase;
var G__66741__$1 = (((G__66741 instanceof cljs.core.Keyword))?G__66741.fqn:null);
switch (G__66741__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__66742 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__66743 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66744 = loc;
var G__66745 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__66747_66908 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__66748_66909 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__66749_66910 = true;
var _STAR_print_fn_STAR__temp_val__66750_66911 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66749_66910);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66750_66911);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66734_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__66734_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66748_66909);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66747_66908);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__66742,G__66743,G__66744,G__66745) : format.call(null,G__66742,G__66743,G__66744,G__66745));

break;
case "macroexpansion":
var G__66753 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__66754 = cause_type;
var G__66755 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66756 = loc;
var G__66757 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66753,G__66754,G__66755,G__66756,G__66757) : format.call(null,G__66753,G__66754,G__66755,G__66756,G__66757));

break;
case "compile-syntax-check":
var G__66759 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__66760 = cause_type;
var G__66761 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66762 = loc;
var G__66763 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66759,G__66760,G__66761,G__66762,G__66763) : format.call(null,G__66759,G__66760,G__66761,G__66762,G__66763));

break;
case "compilation":
var G__66764 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__66765 = cause_type;
var G__66766 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66767 = loc;
var G__66768 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66764,G__66765,G__66766,G__66767,G__66768) : format.call(null,G__66764,G__66765,G__66766,G__66767,G__66768));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__66769 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__66770 = symbol;
var G__66771 = loc;
var G__66772 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__66773_66916 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__66774_66917 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__66775_66918 = true;
var _STAR_print_fn_STAR__temp_val__66776_66919 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66775_66918);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66776_66919);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66735_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__66735_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66774_66917);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66773_66916);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__66769,G__66770,G__66771,G__66772) : format.call(null,G__66769,G__66770,G__66771,G__66772));
} else {
var G__66778 = "Execution error%s at %s(%s).\n%s\n";
var G__66779 = cause_type;
var G__66780 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66781 = loc;
var G__66782 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66778,G__66779,G__66780,G__66781,G__66782) : format.call(null,G__66778,G__66779,G__66780,G__66781,G__66782));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66741__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
