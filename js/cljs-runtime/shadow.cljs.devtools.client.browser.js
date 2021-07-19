goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___68444 = arguments.length;
var i__4830__auto___68445 = (0);
while(true){
if((i__4830__auto___68445 < len__4829__auto___68444)){
args__4835__auto__.push((arguments[i__4830__auto___68445]));

var G__68446 = (i__4830__auto___68445 + (1));
i__4830__auto___68445 = G__68446;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq68173){
var G__68174 = cljs.core.first(seq68173);
var seq68173__$1 = cljs.core.next(seq68173);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68174,seq68173__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__68183 = cljs.core.seq(sources);
var chunk__68184 = null;
var count__68185 = (0);
var i__68186 = (0);
while(true){
if((i__68186 < count__68185)){
var map__68220 = chunk__68184.cljs$core$IIndexed$_nth$arity$2(null,i__68186);
var map__68220__$1 = cljs.core.__destructure_map(map__68220);
var src = map__68220__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68220__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68220__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68220__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68220__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e68221){var e_68456 = e68221;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_68456);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_68456.message)].join('')));
}

var G__68457 = seq__68183;
var G__68458 = chunk__68184;
var G__68459 = count__68185;
var G__68460 = (i__68186 + (1));
seq__68183 = G__68457;
chunk__68184 = G__68458;
count__68185 = G__68459;
i__68186 = G__68460;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__68183);
if(temp__5753__auto__){
var seq__68183__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68183__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__68183__$1);
var G__68461 = cljs.core.chunk_rest(seq__68183__$1);
var G__68462 = c__4649__auto__;
var G__68463 = cljs.core.count(c__4649__auto__);
var G__68464 = (0);
seq__68183 = G__68461;
chunk__68184 = G__68462;
count__68185 = G__68463;
i__68186 = G__68464;
continue;
} else {
var map__68228 = cljs.core.first(seq__68183__$1);
var map__68228__$1 = cljs.core.__destructure_map(map__68228);
var src = map__68228__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68228__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e68229){var e_68466 = e68229;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_68466);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_68466.message)].join('')));
}

var G__68467 = cljs.core.next(seq__68183__$1);
var G__68468 = null;
var G__68469 = (0);
var G__68470 = (0);
seq__68183 = G__68467;
chunk__68184 = G__68468;
count__68185 = G__68469;
i__68186 = G__68470;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__68248 = cljs.core.seq(js_requires);
var chunk__68249 = null;
var count__68250 = (0);
var i__68251 = (0);
while(true){
if((i__68251 < count__68250)){
var js_ns = chunk__68249.cljs$core$IIndexed$_nth$arity$2(null,i__68251);
var require_str_68480 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_68480);


var G__68481 = seq__68248;
var G__68482 = chunk__68249;
var G__68483 = count__68250;
var G__68484 = (i__68251 + (1));
seq__68248 = G__68481;
chunk__68249 = G__68482;
count__68250 = G__68483;
i__68251 = G__68484;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__68248);
if(temp__5753__auto__){
var seq__68248__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68248__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__68248__$1);
var G__68485 = cljs.core.chunk_rest(seq__68248__$1);
var G__68486 = c__4649__auto__;
var G__68487 = cljs.core.count(c__4649__auto__);
var G__68488 = (0);
seq__68248 = G__68485;
chunk__68249 = G__68486;
count__68250 = G__68487;
i__68251 = G__68488;
continue;
} else {
var js_ns = cljs.core.first(seq__68248__$1);
var require_str_68489 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_68489);


var G__68490 = cljs.core.next(seq__68248__$1);
var G__68491 = null;
var G__68492 = (0);
var G__68493 = (0);
seq__68248 = G__68490;
chunk__68249 = G__68491;
count__68250 = G__68492;
i__68251 = G__68493;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__68256){
var map__68257 = p__68256;
var map__68257__$1 = cljs.core.__destructure_map(map__68257);
var msg = map__68257__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68257__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68257__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68258(s__68259){
return (new cljs.core.LazySeq(null,(function (){
var s__68259__$1 = s__68259;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__68259__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__68264 = cljs.core.first(xs__6308__auto__);
var map__68264__$1 = cljs.core.__destructure_map(map__68264);
var src = map__68264__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68264__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68264__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__68259__$1,map__68264,map__68264__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__68257,map__68257__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68258_$_iter__68260(s__68261){
return (new cljs.core.LazySeq(null,((function (s__68259__$1,map__68264,map__68264__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__68257,map__68257__$1,msg,info,reload_info){
return (function (){
var s__68261__$1 = s__68261;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__68261__$1);
if(temp__5753__auto____$1){
var s__68261__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68261__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__68261__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__68263 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__68262 = (0);
while(true){
if((i__68262 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__68262);
cljs.core.chunk_append(b__68263,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__68495 = (i__68262 + (1));
i__68262 = G__68495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68263),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68258_$_iter__68260(cljs.core.chunk_rest(s__68261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68263),null);
}
} else {
var warning = cljs.core.first(s__68261__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68258_$_iter__68260(cljs.core.rest(s__68261__$2)));
}
} else {
return null;
}
break;
}
});})(s__68259__$1,map__68264,map__68264__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__68257,map__68257__$1,msg,info,reload_info))
,null,null));
});})(s__68259__$1,map__68264,map__68264__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__68257,map__68257__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68258(cljs.core.rest(s__68259__$1)));
} else {
var G__68500 = cljs.core.rest(s__68259__$1);
s__68259__$1 = G__68500;
continue;
}
} else {
var G__68501 = cljs.core.rest(s__68259__$1);
s__68259__$1 = G__68501;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__68268_68502 = cljs.core.seq(warnings);
var chunk__68269_68503 = null;
var count__68270_68504 = (0);
var i__68271_68505 = (0);
while(true){
if((i__68271_68505 < count__68270_68504)){
var map__68274_68506 = chunk__68269_68503.cljs$core$IIndexed$_nth$arity$2(null,i__68271_68505);
var map__68274_68507__$1 = cljs.core.__destructure_map(map__68274_68506);
var w_68508 = map__68274_68507__$1;
var msg_68509__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68274_68507__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_68510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68274_68507__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68274_68507__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_68512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68274_68507__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_68512)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68510),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68511),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_68509__$1)].join(''));


var G__68513 = seq__68268_68502;
var G__68514 = chunk__68269_68503;
var G__68515 = count__68270_68504;
var G__68516 = (i__68271_68505 + (1));
seq__68268_68502 = G__68513;
chunk__68269_68503 = G__68514;
count__68270_68504 = G__68515;
i__68271_68505 = G__68516;
continue;
} else {
var temp__5753__auto___68518 = cljs.core.seq(seq__68268_68502);
if(temp__5753__auto___68518){
var seq__68268_68519__$1 = temp__5753__auto___68518;
if(cljs.core.chunked_seq_QMARK_(seq__68268_68519__$1)){
var c__4649__auto___68520 = cljs.core.chunk_first(seq__68268_68519__$1);
var G__68522 = cljs.core.chunk_rest(seq__68268_68519__$1);
var G__68523 = c__4649__auto___68520;
var G__68524 = cljs.core.count(c__4649__auto___68520);
var G__68525 = (0);
seq__68268_68502 = G__68522;
chunk__68269_68503 = G__68523;
count__68270_68504 = G__68524;
i__68271_68505 = G__68525;
continue;
} else {
var map__68275_68526 = cljs.core.first(seq__68268_68519__$1);
var map__68275_68527__$1 = cljs.core.__destructure_map(map__68275_68526);
var w_68528 = map__68275_68527__$1;
var msg_68529__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68275_68527__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_68530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68275_68527__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68275_68527__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_68532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68275_68527__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_68532)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68530),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68531),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_68529__$1)].join(''));


var G__68537 = cljs.core.next(seq__68268_68519__$1);
var G__68538 = null;
var G__68539 = (0);
var G__68540 = (0);
seq__68268_68502 = G__68537;
chunk__68269_68503 = G__68538;
count__68270_68504 = G__68539;
i__68271_68505 = G__68540;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__68255_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__68255_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__68289){
var map__68290 = p__68289;
var map__68290__$1 = cljs.core.__destructure_map(map__68290);
var msg = map__68290__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68290__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__68291 = cljs.core.seq(updates);
var chunk__68293 = null;
var count__68294 = (0);
var i__68295 = (0);
while(true){
if((i__68295 < count__68294)){
var path = chunk__68293.cljs$core$IIndexed$_nth$arity$2(null,i__68295);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__68333_68545 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__68337_68546 = null;
var count__68338_68547 = (0);
var i__68339_68548 = (0);
while(true){
if((i__68339_68548 < count__68338_68547)){
var node_68549 = chunk__68337_68546.cljs$core$IIndexed$_nth$arity$2(null,i__68339_68548);
if(cljs.core.not(node_68549.shadow$old)){
var path_match_68551 = shadow.cljs.devtools.client.browser.match_paths(node_68549.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68551)){
var new_link_68552 = (function (){var G__68352 = node_68549.cloneNode(true);
G__68352.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68551),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68352;
})();
(node_68549.shadow$old = true);

(new_link_68552.onload = ((function (seq__68333_68545,chunk__68337_68546,count__68338_68547,i__68339_68548,seq__68291,chunk__68293,count__68294,i__68295,new_link_68552,path_match_68551,node_68549,path,map__68290,map__68290__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_68549);
});})(seq__68333_68545,chunk__68337_68546,count__68338_68547,i__68339_68548,seq__68291,chunk__68293,count__68294,i__68295,new_link_68552,path_match_68551,node_68549,path,map__68290,map__68290__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68551], 0));

goog.dom.insertSiblingAfter(new_link_68552,node_68549);


var G__68554 = seq__68333_68545;
var G__68555 = chunk__68337_68546;
var G__68556 = count__68338_68547;
var G__68557 = (i__68339_68548 + (1));
seq__68333_68545 = G__68554;
chunk__68337_68546 = G__68555;
count__68338_68547 = G__68556;
i__68339_68548 = G__68557;
continue;
} else {
var G__68560 = seq__68333_68545;
var G__68562 = chunk__68337_68546;
var G__68563 = count__68338_68547;
var G__68564 = (i__68339_68548 + (1));
seq__68333_68545 = G__68560;
chunk__68337_68546 = G__68562;
count__68338_68547 = G__68563;
i__68339_68548 = G__68564;
continue;
}
} else {
var G__68565 = seq__68333_68545;
var G__68566 = chunk__68337_68546;
var G__68567 = count__68338_68547;
var G__68568 = (i__68339_68548 + (1));
seq__68333_68545 = G__68565;
chunk__68337_68546 = G__68566;
count__68338_68547 = G__68567;
i__68339_68548 = G__68568;
continue;
}
} else {
var temp__5753__auto___68570 = cljs.core.seq(seq__68333_68545);
if(temp__5753__auto___68570){
var seq__68333_68571__$1 = temp__5753__auto___68570;
if(cljs.core.chunked_seq_QMARK_(seq__68333_68571__$1)){
var c__4649__auto___68572 = cljs.core.chunk_first(seq__68333_68571__$1);
var G__68573 = cljs.core.chunk_rest(seq__68333_68571__$1);
var G__68574 = c__4649__auto___68572;
var G__68575 = cljs.core.count(c__4649__auto___68572);
var G__68576 = (0);
seq__68333_68545 = G__68573;
chunk__68337_68546 = G__68574;
count__68338_68547 = G__68575;
i__68339_68548 = G__68576;
continue;
} else {
var node_68577 = cljs.core.first(seq__68333_68571__$1);
if(cljs.core.not(node_68577.shadow$old)){
var path_match_68578 = shadow.cljs.devtools.client.browser.match_paths(node_68577.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68578)){
var new_link_68579 = (function (){var G__68355 = node_68577.cloneNode(true);
G__68355.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68578),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68355;
})();
(node_68577.shadow$old = true);

(new_link_68579.onload = ((function (seq__68333_68545,chunk__68337_68546,count__68338_68547,i__68339_68548,seq__68291,chunk__68293,count__68294,i__68295,new_link_68579,path_match_68578,node_68577,seq__68333_68571__$1,temp__5753__auto___68570,path,map__68290,map__68290__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_68577);
});})(seq__68333_68545,chunk__68337_68546,count__68338_68547,i__68339_68548,seq__68291,chunk__68293,count__68294,i__68295,new_link_68579,path_match_68578,node_68577,seq__68333_68571__$1,temp__5753__auto___68570,path,map__68290,map__68290__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68578], 0));

goog.dom.insertSiblingAfter(new_link_68579,node_68577);


var G__68585 = cljs.core.next(seq__68333_68571__$1);
var G__68586 = null;
var G__68587 = (0);
var G__68588 = (0);
seq__68333_68545 = G__68585;
chunk__68337_68546 = G__68586;
count__68338_68547 = G__68587;
i__68339_68548 = G__68588;
continue;
} else {
var G__68589 = cljs.core.next(seq__68333_68571__$1);
var G__68590 = null;
var G__68591 = (0);
var G__68592 = (0);
seq__68333_68545 = G__68589;
chunk__68337_68546 = G__68590;
count__68338_68547 = G__68591;
i__68339_68548 = G__68592;
continue;
}
} else {
var G__68595 = cljs.core.next(seq__68333_68571__$1);
var G__68596 = null;
var G__68597 = (0);
var G__68598 = (0);
seq__68333_68545 = G__68595;
chunk__68337_68546 = G__68596;
count__68338_68547 = G__68597;
i__68339_68548 = G__68598;
continue;
}
}
} else {
}
}
break;
}


var G__68599 = seq__68291;
var G__68600 = chunk__68293;
var G__68601 = count__68294;
var G__68602 = (i__68295 + (1));
seq__68291 = G__68599;
chunk__68293 = G__68600;
count__68294 = G__68601;
i__68295 = G__68602;
continue;
} else {
var G__68606 = seq__68291;
var G__68607 = chunk__68293;
var G__68608 = count__68294;
var G__68609 = (i__68295 + (1));
seq__68291 = G__68606;
chunk__68293 = G__68607;
count__68294 = G__68608;
i__68295 = G__68609;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__68291);
if(temp__5753__auto__){
var seq__68291__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68291__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__68291__$1);
var G__68610 = cljs.core.chunk_rest(seq__68291__$1);
var G__68611 = c__4649__auto__;
var G__68612 = cljs.core.count(c__4649__auto__);
var G__68613 = (0);
seq__68291 = G__68610;
chunk__68293 = G__68611;
count__68294 = G__68612;
i__68295 = G__68613;
continue;
} else {
var path = cljs.core.first(seq__68291__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__68365_68615 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__68369_68616 = null;
var count__68370_68617 = (0);
var i__68371_68618 = (0);
while(true){
if((i__68371_68618 < count__68370_68617)){
var node_68619 = chunk__68369_68616.cljs$core$IIndexed$_nth$arity$2(null,i__68371_68618);
if(cljs.core.not(node_68619.shadow$old)){
var path_match_68620 = shadow.cljs.devtools.client.browser.match_paths(node_68619.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68620)){
var new_link_68621 = (function (){var G__68390 = node_68619.cloneNode(true);
G__68390.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68620),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68390;
})();
(node_68619.shadow$old = true);

(new_link_68621.onload = ((function (seq__68365_68615,chunk__68369_68616,count__68370_68617,i__68371_68618,seq__68291,chunk__68293,count__68294,i__68295,new_link_68621,path_match_68620,node_68619,path,seq__68291__$1,temp__5753__auto__,map__68290,map__68290__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_68619);
});})(seq__68365_68615,chunk__68369_68616,count__68370_68617,i__68371_68618,seq__68291,chunk__68293,count__68294,i__68295,new_link_68621,path_match_68620,node_68619,path,seq__68291__$1,temp__5753__auto__,map__68290,map__68290__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68620], 0));

goog.dom.insertSiblingAfter(new_link_68621,node_68619);


var G__68623 = seq__68365_68615;
var G__68624 = chunk__68369_68616;
var G__68625 = count__68370_68617;
var G__68626 = (i__68371_68618 + (1));
seq__68365_68615 = G__68623;
chunk__68369_68616 = G__68624;
count__68370_68617 = G__68625;
i__68371_68618 = G__68626;
continue;
} else {
var G__68627 = seq__68365_68615;
var G__68628 = chunk__68369_68616;
var G__68629 = count__68370_68617;
var G__68630 = (i__68371_68618 + (1));
seq__68365_68615 = G__68627;
chunk__68369_68616 = G__68628;
count__68370_68617 = G__68629;
i__68371_68618 = G__68630;
continue;
}
} else {
var G__68631 = seq__68365_68615;
var G__68632 = chunk__68369_68616;
var G__68633 = count__68370_68617;
var G__68634 = (i__68371_68618 + (1));
seq__68365_68615 = G__68631;
chunk__68369_68616 = G__68632;
count__68370_68617 = G__68633;
i__68371_68618 = G__68634;
continue;
}
} else {
var temp__5753__auto___68635__$1 = cljs.core.seq(seq__68365_68615);
if(temp__5753__auto___68635__$1){
var seq__68365_68636__$1 = temp__5753__auto___68635__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68365_68636__$1)){
var c__4649__auto___68637 = cljs.core.chunk_first(seq__68365_68636__$1);
var G__68638 = cljs.core.chunk_rest(seq__68365_68636__$1);
var G__68639 = c__4649__auto___68637;
var G__68640 = cljs.core.count(c__4649__auto___68637);
var G__68641 = (0);
seq__68365_68615 = G__68638;
chunk__68369_68616 = G__68639;
count__68370_68617 = G__68640;
i__68371_68618 = G__68641;
continue;
} else {
var node_68642 = cljs.core.first(seq__68365_68636__$1);
if(cljs.core.not(node_68642.shadow$old)){
var path_match_68643 = shadow.cljs.devtools.client.browser.match_paths(node_68642.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68643)){
var new_link_68645 = (function (){var G__68398 = node_68642.cloneNode(true);
G__68398.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68643),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68398;
})();
(node_68642.shadow$old = true);

(new_link_68645.onload = ((function (seq__68365_68615,chunk__68369_68616,count__68370_68617,i__68371_68618,seq__68291,chunk__68293,count__68294,i__68295,new_link_68645,path_match_68643,node_68642,seq__68365_68636__$1,temp__5753__auto___68635__$1,path,seq__68291__$1,temp__5753__auto__,map__68290,map__68290__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_68642);
});})(seq__68365_68615,chunk__68369_68616,count__68370_68617,i__68371_68618,seq__68291,chunk__68293,count__68294,i__68295,new_link_68645,path_match_68643,node_68642,seq__68365_68636__$1,temp__5753__auto___68635__$1,path,seq__68291__$1,temp__5753__auto__,map__68290,map__68290__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68643], 0));

goog.dom.insertSiblingAfter(new_link_68645,node_68642);


var G__68653 = cljs.core.next(seq__68365_68636__$1);
var G__68654 = null;
var G__68655 = (0);
var G__68656 = (0);
seq__68365_68615 = G__68653;
chunk__68369_68616 = G__68654;
count__68370_68617 = G__68655;
i__68371_68618 = G__68656;
continue;
} else {
var G__68657 = cljs.core.next(seq__68365_68636__$1);
var G__68658 = null;
var G__68659 = (0);
var G__68660 = (0);
seq__68365_68615 = G__68657;
chunk__68369_68616 = G__68658;
count__68370_68617 = G__68659;
i__68371_68618 = G__68660;
continue;
}
} else {
var G__68661 = cljs.core.next(seq__68365_68636__$1);
var G__68662 = null;
var G__68663 = (0);
var G__68664 = (0);
seq__68365_68615 = G__68661;
chunk__68369_68616 = G__68662;
count__68370_68617 = G__68663;
i__68371_68618 = G__68664;
continue;
}
}
} else {
}
}
break;
}


var G__68665 = cljs.core.next(seq__68291__$1);
var G__68666 = null;
var G__68667 = (0);
var G__68668 = (0);
seq__68291 = G__68665;
chunk__68293 = G__68666;
count__68294 = G__68667;
i__68295 = G__68668;
continue;
} else {
var G__68669 = cljs.core.next(seq__68291__$1);
var G__68670 = null;
var G__68671 = (0);
var G__68672 = (0);
seq__68291 = G__68669;
chunk__68293 = G__68670;
count__68294 = G__68671;
i__68295 = G__68672;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__68405){
var map__68406 = p__68405;
var map__68406__$1 = cljs.core.__destructure_map(map__68406);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68406__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__68411){
var map__68412 = p__68411;
var map__68412__$1 = cljs.core.__destructure_map(map__68412);
var _ = map__68412__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68412__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__68413,done,error){
var map__68414 = p__68413;
var map__68414__$1 = cljs.core.__destructure_map(map__68414);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68414__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__68415,done,error){
var map__68416 = p__68415;
var map__68416__$1 = cljs.core.__destructure_map(map__68416);
var msg = map__68416__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68416__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68416__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68416__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__68417){
var map__68418 = p__68417;
var map__68418__$1 = cljs.core.__destructure_map(map__68418);
var src = map__68418__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68418__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__68419 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__68419) : done.call(null,G__68419));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__68420){
var map__68421 = p__68420;
var map__68421__$1 = cljs.core.__destructure_map(map__68421);
var msg__$1 = map__68421__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68421__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e68422){var ex = e68422;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__68424){
var map__68425 = p__68424;
var map__68425__$1 = cljs.core.__destructure_map(map__68425);
var env = map__68425__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68425__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__68427){
var map__68428 = p__68427;
var map__68428__$1 = cljs.core.__destructure_map(map__68428);
var msg = map__68428__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68428__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__68430){
var map__68432 = p__68430;
var map__68432__$1 = cljs.core.__destructure_map(map__68432);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68432__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68432__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__68436){
var map__68437 = p__68436;
var map__68437__$1 = cljs.core.__destructure_map(map__68437);
var svc = map__68437__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68437__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
