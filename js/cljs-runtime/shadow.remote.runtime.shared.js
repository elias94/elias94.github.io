goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__62889,res){
var map__62896 = p__62889;
var map__62896__$1 = cljs.core.__destructure_map(map__62896);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62896__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62896__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__62911 = res;
var G__62911__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62911,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__62911);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62911__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__62911__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__62919 = arguments.length;
switch (G__62919) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__62929,msg,handlers,timeout_after_ms){
var map__62930 = p__62929;
var map__62930__$1 = cljs.core.__destructure_map(map__62930);
var runtime = map__62930__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62930__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___63303 = arguments.length;
var i__4830__auto___63304 = (0);
while(true){
if((i__4830__auto___63304 < len__4829__auto___63303)){
args__4835__auto__.push((arguments[i__4830__auto___63304]));

var G__63305 = (i__4830__auto___63304 + (1));
i__4830__auto___63304 = G__63305;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__62963,ev,args){
var map__62968 = p__62963;
var map__62968__$1 = cljs.core.__destructure_map(map__62968);
var runtime = map__62968__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62968__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__62971 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__62978 = null;
var count__62979 = (0);
var i__62980 = (0);
while(true){
if((i__62980 < count__62979)){
var ext = chunk__62978.cljs$core$IIndexed$_nth$arity$2(null,i__62980);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__63308 = seq__62971;
var G__63309 = chunk__62978;
var G__63310 = count__62979;
var G__63311 = (i__62980 + (1));
seq__62971 = G__63308;
chunk__62978 = G__63309;
count__62979 = G__63310;
i__62980 = G__63311;
continue;
} else {
var G__63312 = seq__62971;
var G__63313 = chunk__62978;
var G__63314 = count__62979;
var G__63315 = (i__62980 + (1));
seq__62971 = G__63312;
chunk__62978 = G__63313;
count__62979 = G__63314;
i__62980 = G__63315;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62971);
if(temp__5753__auto__){
var seq__62971__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62971__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__62971__$1);
var G__63317 = cljs.core.chunk_rest(seq__62971__$1);
var G__63318 = c__4649__auto__;
var G__63319 = cljs.core.count(c__4649__auto__);
var G__63320 = (0);
seq__62971 = G__63317;
chunk__62978 = G__63318;
count__62979 = G__63319;
i__62980 = G__63320;
continue;
} else {
var ext = cljs.core.first(seq__62971__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__63323 = cljs.core.next(seq__62971__$1);
var G__63324 = null;
var G__63325 = (0);
var G__63326 = (0);
seq__62971 = G__63323;
chunk__62978 = G__63324;
count__62979 = G__63325;
i__62980 = G__63326;
continue;
} else {
var G__63327 = cljs.core.next(seq__62971__$1);
var G__63328 = null;
var G__63329 = (0);
var G__63330 = (0);
seq__62971 = G__63327;
chunk__62978 = G__63328;
count__62979 = G__63329;
i__62980 = G__63330;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq62934){
var G__62935 = cljs.core.first(seq62934);
var seq62934__$1 = cljs.core.next(seq62934);
var G__62936 = cljs.core.first(seq62934__$1);
var seq62934__$2 = cljs.core.next(seq62934__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62935,G__62936,seq62934__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__63049,p__63050){
var map__63052 = p__63049;
var map__63052__$1 = cljs.core.__destructure_map(map__63052);
var runtime = map__63052__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63052__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__63053 = p__63050;
var map__63053__$1 = cljs.core.__destructure_map(map__63053);
var msg = map__63053__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63053__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__63054 = cljs.core.deref(state_ref);
var map__63054__$1 = cljs.core.__destructure_map(map__63054);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63054__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63054__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__63059){
var map__63063 = p__63059;
var map__63063__$1 = cljs.core.__destructure_map(map__63063);
var runtime = map__63063__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63063__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__63077,msg){
var map__63078 = p__63077;
var map__63078__$1 = cljs.core.__destructure_map(map__63078);
var runtime = map__63078__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63078__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__63085,key,p__63086){
var map__63087 = p__63085;
var map__63087__$1 = cljs.core.__destructure_map(map__63087);
var state = map__63087__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63087__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__63088 = p__63086;
var map__63088__$1 = cljs.core.__destructure_map(map__63088);
var spec = map__63088__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63088__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__63091,key,spec){
var map__63093 = p__63091;
var map__63093__$1 = cljs.core.__destructure_map(map__63093);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63093__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__63098_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__63098_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__63099_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__63099_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__63100_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__63100_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__63101_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__63101_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__63102_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__63102_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__63116,key){
var map__63117 = p__63116;
var map__63117__$1 = cljs.core.__destructure_map(map__63117);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63117__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__63123,msg){
var map__63124 = p__63123;
var map__63124__$1 = cljs.core.__destructure_map(map__63124);
var runtime = map__63124__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63124__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__63158,p__63159){
var map__63164 = p__63158;
var map__63164__$1 = cljs.core.__destructure_map(map__63164);
var runtime = map__63164__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63164__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__63165 = p__63159;
var map__63165__$1 = cljs.core.__destructure_map(map__63165);
var msg = map__63165__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63165__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63165__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__63211 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__63214 = null;
var count__63215 = (0);
var i__63216 = (0);
while(true){
if((i__63216 < count__63215)){
var map__63290 = chunk__63214.cljs$core$IIndexed$_nth$arity$2(null,i__63216);
var map__63290__$1 = cljs.core.__destructure_map(map__63290);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63290__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__63384 = seq__63211;
var G__63385 = chunk__63214;
var G__63386 = count__63215;
var G__63387 = (i__63216 + (1));
seq__63211 = G__63384;
chunk__63214 = G__63385;
count__63215 = G__63386;
i__63216 = G__63387;
continue;
} else {
var G__63388 = seq__63211;
var G__63389 = chunk__63214;
var G__63390 = count__63215;
var G__63391 = (i__63216 + (1));
seq__63211 = G__63388;
chunk__63214 = G__63389;
count__63215 = G__63390;
i__63216 = G__63391;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63211);
if(temp__5753__auto__){
var seq__63211__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63211__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__63211__$1);
var G__63393 = cljs.core.chunk_rest(seq__63211__$1);
var G__63394 = c__4649__auto__;
var G__63395 = cljs.core.count(c__4649__auto__);
var G__63396 = (0);
seq__63211 = G__63393;
chunk__63214 = G__63394;
count__63215 = G__63395;
i__63216 = G__63396;
continue;
} else {
var map__63293 = cljs.core.first(seq__63211__$1);
var map__63293__$1 = cljs.core.__destructure_map(map__63293);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63293__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__63400 = cljs.core.next(seq__63211__$1);
var G__63401 = null;
var G__63402 = (0);
var G__63403 = (0);
seq__63211 = G__63400;
chunk__63214 = G__63401;
count__63215 = G__63402;
i__63216 = G__63403;
continue;
} else {
var G__63404 = cljs.core.next(seq__63211__$1);
var G__63405 = null;
var G__63406 = (0);
var G__63407 = (0);
seq__63211 = G__63404;
chunk__63214 = G__63405;
count__63215 = G__63406;
i__63216 = G__63407;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
