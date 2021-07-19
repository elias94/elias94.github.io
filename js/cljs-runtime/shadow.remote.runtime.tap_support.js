goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__67171,p__67172){
var map__67174 = p__67171;
var map__67174__$1 = cljs.core.__destructure_map(map__67174);
var svc = map__67174__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67174__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67174__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67174__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__67175 = p__67172;
var map__67175__$1 = cljs.core.__destructure_map(map__67175);
var msg = map__67175__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67175__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67175__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67175__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67175__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__67191,p__67192){
var map__67193 = p__67191;
var map__67193__$1 = cljs.core.__destructure_map(map__67193);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67193__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__67194 = p__67192;
var map__67194__$1 = cljs.core.__destructure_map(map__67194);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67194__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__67203,p__67204){
var map__67205 = p__67203;
var map__67205__$1 = cljs.core.__destructure_map(map__67205);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67205__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67205__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__67206 = p__67204;
var map__67206__$1 = cljs.core.__destructure_map(map__67206);
var msg = map__67206__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67206__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__67210,tid){
var map__67211 = p__67210;
var map__67211__$1 = cljs.core.__destructure_map(map__67211);
var svc = map__67211__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67211__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__67236 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__67237 = null;
var count__67238 = (0);
var i__67239 = (0);
while(true){
if((i__67239 < count__67238)){
var vec__67299 = chunk__67237.cljs$core$IIndexed$_nth$arity$2(null,i__67239);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67299,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67299,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__67399 = seq__67236;
var G__67400 = chunk__67237;
var G__67401 = count__67238;
var G__67402 = (i__67239 + (1));
seq__67236 = G__67399;
chunk__67237 = G__67400;
count__67238 = G__67401;
i__67239 = G__67402;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__67236);
if(temp__5753__auto__){
var seq__67236__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67236__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__67236__$1);
var G__67403 = cljs.core.chunk_rest(seq__67236__$1);
var G__67404 = c__4649__auto__;
var G__67405 = cljs.core.count(c__4649__auto__);
var G__67406 = (0);
seq__67236 = G__67403;
chunk__67237 = G__67404;
count__67238 = G__67405;
i__67239 = G__67406;
continue;
} else {
var vec__67325 = cljs.core.first(seq__67236__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67325,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67325,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__67415 = cljs.core.next(seq__67236__$1);
var G__67416 = null;
var G__67417 = (0);
var G__67418 = (0);
seq__67236 = G__67415;
chunk__67237 = G__67416;
count__67238 = G__67417;
i__67239 = G__67418;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__67219_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__67219_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__67220_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__67220_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__67221_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__67221_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__67223_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__67223_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__67357){
var map__67358 = p__67357;
var map__67358__$1 = cljs.core.__destructure_map(map__67358);
var svc = map__67358__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67358__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67358__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
