goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37913 = arguments.length;
var i__4819__auto___37914 = (0);
while(true){
if((i__4819__auto___37914 < len__4818__auto___37913)){
args__4824__auto__.push((arguments[i__4819__auto___37914]));

var G__37915 = (i__4819__auto___37914 + (1));
i__4819__auto___37914 = G__37915;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37704){
var G__37705 = cljs.core.first(seq37704);
var seq37704__$1 = cljs.core.next(seq37704);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37705,seq37704__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37716 = cljs.core.seq(sources);
var chunk__37717 = null;
var count__37718 = (0);
var i__37719 = (0);
while(true){
if((i__37719 < count__37718)){
var map__37734 = chunk__37717.cljs$core$IIndexed$_nth$arity$2(null,i__37719);
var map__37734__$1 = cljs.core.__destructure_map(map__37734);
var src = map__37734__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37734__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37734__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37734__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37734__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37735){var e_37917 = e37735;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37917);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37917.message)].join('')));
}

var G__37922 = seq__37716;
var G__37923 = chunk__37717;
var G__37924 = count__37718;
var G__37925 = (i__37719 + (1));
seq__37716 = G__37922;
chunk__37717 = G__37923;
count__37718 = G__37924;
i__37719 = G__37925;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37716);
if(temp__5753__auto__){
var seq__37716__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37716__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37716__$1);
var G__37926 = cljs.core.chunk_rest(seq__37716__$1);
var G__37927 = c__4638__auto__;
var G__37928 = cljs.core.count(c__4638__auto__);
var G__37929 = (0);
seq__37716 = G__37926;
chunk__37717 = G__37927;
count__37718 = G__37928;
i__37719 = G__37929;
continue;
} else {
var map__37740 = cljs.core.first(seq__37716__$1);
var map__37740__$1 = cljs.core.__destructure_map(map__37740);
var src = map__37740__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37740__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37740__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37740__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37740__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37741){var e_37933 = e37741;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37933);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37933.message)].join('')));
}

var G__37934 = cljs.core.next(seq__37716__$1);
var G__37935 = null;
var G__37936 = (0);
var G__37937 = (0);
seq__37716 = G__37934;
chunk__37717 = G__37935;
count__37718 = G__37936;
i__37719 = G__37937;
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
var seq__37749 = cljs.core.seq(js_requires);
var chunk__37750 = null;
var count__37751 = (0);
var i__37752 = (0);
while(true){
if((i__37752 < count__37751)){
var js_ns = chunk__37750.cljs$core$IIndexed$_nth$arity$2(null,i__37752);
var require_str_37941 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37941);


var G__37942 = seq__37749;
var G__37943 = chunk__37750;
var G__37944 = count__37751;
var G__37945 = (i__37752 + (1));
seq__37749 = G__37942;
chunk__37750 = G__37943;
count__37751 = G__37944;
i__37752 = G__37945;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37749);
if(temp__5753__auto__){
var seq__37749__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37749__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37749__$1);
var G__37946 = cljs.core.chunk_rest(seq__37749__$1);
var G__37947 = c__4638__auto__;
var G__37948 = cljs.core.count(c__4638__auto__);
var G__37949 = (0);
seq__37749 = G__37946;
chunk__37750 = G__37947;
count__37751 = G__37948;
i__37752 = G__37949;
continue;
} else {
var js_ns = cljs.core.first(seq__37749__$1);
var require_str_37950 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37950);


var G__37951 = cljs.core.next(seq__37749__$1);
var G__37952 = null;
var G__37953 = (0);
var G__37954 = (0);
seq__37749 = G__37951;
chunk__37750 = G__37952;
count__37751 = G__37953;
i__37752 = G__37954;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37763){
var map__37765 = p__37763;
var map__37765__$1 = cljs.core.__destructure_map(map__37765);
var msg = map__37765__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37765__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37765__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37767(s__37768){
return (new cljs.core.LazySeq(null,(function (){
var s__37768__$1 = s__37768;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37768__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37773 = cljs.core.first(xs__6308__auto__);
var map__37773__$1 = cljs.core.__destructure_map(map__37773);
var src = map__37773__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37773__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37773__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__37768__$1,map__37773,map__37773__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37765,map__37765__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37767_$_iter__37769(s__37770){
return (new cljs.core.LazySeq(null,((function (s__37768__$1,map__37773,map__37773__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37765,map__37765__$1,msg,info,reload_info){
return (function (){
var s__37770__$1 = s__37770;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37770__$1);
if(temp__5753__auto____$1){
var s__37770__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37770__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__37770__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__37772 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__37771 = (0);
while(true){
if((i__37771 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__37771);
cljs.core.chunk_append(b__37772,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37961 = (i__37771 + (1));
i__37771 = G__37961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37772),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37767_$_iter__37769(cljs.core.chunk_rest(s__37770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37772),null);
}
} else {
var warning = cljs.core.first(s__37770__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37767_$_iter__37769(cljs.core.rest(s__37770__$2)));
}
} else {
return null;
}
break;
}
});})(s__37768__$1,map__37773,map__37773__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37765,map__37765__$1,msg,info,reload_info))
,null,null));
});})(s__37768__$1,map__37773,map__37773__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37765,map__37765__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37767(cljs.core.rest(s__37768__$1)));
} else {
var G__37962 = cljs.core.rest(s__37768__$1);
s__37768__$1 = G__37962;
continue;
}
} else {
var G__37963 = cljs.core.rest(s__37768__$1);
s__37768__$1 = G__37963;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37778_37964 = cljs.core.seq(warnings);
var chunk__37779_37965 = null;
var count__37780_37966 = (0);
var i__37781_37967 = (0);
while(true){
if((i__37781_37967 < count__37780_37966)){
var map__37790_37968 = chunk__37779_37965.cljs$core$IIndexed$_nth$arity$2(null,i__37781_37967);
var map__37790_37969__$1 = cljs.core.__destructure_map(map__37790_37968);
var w_37970 = map__37790_37969__$1;
var msg_37971__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37790_37969__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37790_37969__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37790_37969__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37790_37969__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37974)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37972),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37973),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37971__$1)].join(''));


var G__37975 = seq__37778_37964;
var G__37976 = chunk__37779_37965;
var G__37977 = count__37780_37966;
var G__37978 = (i__37781_37967 + (1));
seq__37778_37964 = G__37975;
chunk__37779_37965 = G__37976;
count__37780_37966 = G__37977;
i__37781_37967 = G__37978;
continue;
} else {
var temp__5753__auto___37979 = cljs.core.seq(seq__37778_37964);
if(temp__5753__auto___37979){
var seq__37778_37980__$1 = temp__5753__auto___37979;
if(cljs.core.chunked_seq_QMARK_(seq__37778_37980__$1)){
var c__4638__auto___37981 = cljs.core.chunk_first(seq__37778_37980__$1);
var G__37982 = cljs.core.chunk_rest(seq__37778_37980__$1);
var G__37983 = c__4638__auto___37981;
var G__37984 = cljs.core.count(c__4638__auto___37981);
var G__37985 = (0);
seq__37778_37964 = G__37982;
chunk__37779_37965 = G__37983;
count__37780_37966 = G__37984;
i__37781_37967 = G__37985;
continue;
} else {
var map__37791_37986 = cljs.core.first(seq__37778_37980__$1);
var map__37791_37987__$1 = cljs.core.__destructure_map(map__37791_37986);
var w_37988 = map__37791_37987__$1;
var msg_37989__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37791_37987__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37791_37987__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37791_37987__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37791_37987__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37992)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37990),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37991),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37989__$1)].join(''));


var G__37993 = cljs.core.next(seq__37778_37980__$1);
var G__37994 = null;
var G__37995 = (0);
var G__37996 = (0);
seq__37778_37964 = G__37993;
chunk__37779_37965 = G__37994;
count__37780_37966 = G__37995;
i__37781_37967 = G__37996;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37761_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37761_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37793){
var map__37794 = p__37793;
var map__37794__$1 = cljs.core.__destructure_map(map__37794);
var msg = map__37794__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37794__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37795 = cljs.core.seq(updates);
var chunk__37797 = null;
var count__37798 = (0);
var i__37799 = (0);
while(true){
if((i__37799 < count__37798)){
var path = chunk__37797.cljs$core$IIndexed$_nth$arity$2(null,i__37799);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37833_37998 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37837_37999 = null;
var count__37838_38000 = (0);
var i__37839_38001 = (0);
while(true){
if((i__37839_38001 < count__37838_38000)){
var node_38002 = chunk__37837_37999.cljs$core$IIndexed$_nth$arity$2(null,i__37839_38001);
if(cljs.core.not(node_38002.shadow$old)){
var path_match_38003 = shadow.cljs.devtools.client.browser.match_paths(node_38002.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38003)){
var new_link_38004 = (function (){var G__37849 = node_38002.cloneNode(true);
G__37849.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38003),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37849;
})();
(node_38002.shadow$old = true);

(new_link_38004.onload = ((function (seq__37833_37998,chunk__37837_37999,count__37838_38000,i__37839_38001,seq__37795,chunk__37797,count__37798,i__37799,new_link_38004,path_match_38003,node_38002,path,map__37794,map__37794__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38002);
});})(seq__37833_37998,chunk__37837_37999,count__37838_38000,i__37839_38001,seq__37795,chunk__37797,count__37798,i__37799,new_link_38004,path_match_38003,node_38002,path,map__37794,map__37794__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38003], 0));

goog.dom.insertSiblingAfter(new_link_38004,node_38002);


var G__38005 = seq__37833_37998;
var G__38006 = chunk__37837_37999;
var G__38007 = count__37838_38000;
var G__38008 = (i__37839_38001 + (1));
seq__37833_37998 = G__38005;
chunk__37837_37999 = G__38006;
count__37838_38000 = G__38007;
i__37839_38001 = G__38008;
continue;
} else {
var G__38009 = seq__37833_37998;
var G__38010 = chunk__37837_37999;
var G__38011 = count__37838_38000;
var G__38012 = (i__37839_38001 + (1));
seq__37833_37998 = G__38009;
chunk__37837_37999 = G__38010;
count__37838_38000 = G__38011;
i__37839_38001 = G__38012;
continue;
}
} else {
var G__38013 = seq__37833_37998;
var G__38014 = chunk__37837_37999;
var G__38015 = count__37838_38000;
var G__38016 = (i__37839_38001 + (1));
seq__37833_37998 = G__38013;
chunk__37837_37999 = G__38014;
count__37838_38000 = G__38015;
i__37839_38001 = G__38016;
continue;
}
} else {
var temp__5753__auto___38017 = cljs.core.seq(seq__37833_37998);
if(temp__5753__auto___38017){
var seq__37833_38018__$1 = temp__5753__auto___38017;
if(cljs.core.chunked_seq_QMARK_(seq__37833_38018__$1)){
var c__4638__auto___38019 = cljs.core.chunk_first(seq__37833_38018__$1);
var G__38020 = cljs.core.chunk_rest(seq__37833_38018__$1);
var G__38021 = c__4638__auto___38019;
var G__38022 = cljs.core.count(c__4638__auto___38019);
var G__38023 = (0);
seq__37833_37998 = G__38020;
chunk__37837_37999 = G__38021;
count__37838_38000 = G__38022;
i__37839_38001 = G__38023;
continue;
} else {
var node_38024 = cljs.core.first(seq__37833_38018__$1);
if(cljs.core.not(node_38024.shadow$old)){
var path_match_38025 = shadow.cljs.devtools.client.browser.match_paths(node_38024.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38025)){
var new_link_38026 = (function (){var G__37853 = node_38024.cloneNode(true);
G__37853.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38025),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37853;
})();
(node_38024.shadow$old = true);

(new_link_38026.onload = ((function (seq__37833_37998,chunk__37837_37999,count__37838_38000,i__37839_38001,seq__37795,chunk__37797,count__37798,i__37799,new_link_38026,path_match_38025,node_38024,seq__37833_38018__$1,temp__5753__auto___38017,path,map__37794,map__37794__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38024);
});})(seq__37833_37998,chunk__37837_37999,count__37838_38000,i__37839_38001,seq__37795,chunk__37797,count__37798,i__37799,new_link_38026,path_match_38025,node_38024,seq__37833_38018__$1,temp__5753__auto___38017,path,map__37794,map__37794__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38025], 0));

goog.dom.insertSiblingAfter(new_link_38026,node_38024);


var G__38027 = cljs.core.next(seq__37833_38018__$1);
var G__38028 = null;
var G__38029 = (0);
var G__38030 = (0);
seq__37833_37998 = G__38027;
chunk__37837_37999 = G__38028;
count__37838_38000 = G__38029;
i__37839_38001 = G__38030;
continue;
} else {
var G__38031 = cljs.core.next(seq__37833_38018__$1);
var G__38032 = null;
var G__38033 = (0);
var G__38034 = (0);
seq__37833_37998 = G__38031;
chunk__37837_37999 = G__38032;
count__37838_38000 = G__38033;
i__37839_38001 = G__38034;
continue;
}
} else {
var G__38035 = cljs.core.next(seq__37833_38018__$1);
var G__38036 = null;
var G__38037 = (0);
var G__38038 = (0);
seq__37833_37998 = G__38035;
chunk__37837_37999 = G__38036;
count__37838_38000 = G__38037;
i__37839_38001 = G__38038;
continue;
}
}
} else {
}
}
break;
}


var G__38039 = seq__37795;
var G__38040 = chunk__37797;
var G__38041 = count__37798;
var G__38042 = (i__37799 + (1));
seq__37795 = G__38039;
chunk__37797 = G__38040;
count__37798 = G__38041;
i__37799 = G__38042;
continue;
} else {
var G__38043 = seq__37795;
var G__38044 = chunk__37797;
var G__38045 = count__37798;
var G__38046 = (i__37799 + (1));
seq__37795 = G__38043;
chunk__37797 = G__38044;
count__37798 = G__38045;
i__37799 = G__38046;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37795);
if(temp__5753__auto__){
var seq__37795__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37795__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__37795__$1);
var G__38047 = cljs.core.chunk_rest(seq__37795__$1);
var G__38048 = c__4638__auto__;
var G__38049 = cljs.core.count(c__4638__auto__);
var G__38050 = (0);
seq__37795 = G__38047;
chunk__37797 = G__38048;
count__37798 = G__38049;
i__37799 = G__38050;
continue;
} else {
var path = cljs.core.first(seq__37795__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37855_38051 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37859_38052 = null;
var count__37860_38053 = (0);
var i__37861_38054 = (0);
while(true){
if((i__37861_38054 < count__37860_38053)){
var node_38055 = chunk__37859_38052.cljs$core$IIndexed$_nth$arity$2(null,i__37861_38054);
if(cljs.core.not(node_38055.shadow$old)){
var path_match_38056 = shadow.cljs.devtools.client.browser.match_paths(node_38055.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38056)){
var new_link_38057 = (function (){var G__37872 = node_38055.cloneNode(true);
G__37872.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38056),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37872;
})();
(node_38055.shadow$old = true);

(new_link_38057.onload = ((function (seq__37855_38051,chunk__37859_38052,count__37860_38053,i__37861_38054,seq__37795,chunk__37797,count__37798,i__37799,new_link_38057,path_match_38056,node_38055,path,seq__37795__$1,temp__5753__auto__,map__37794,map__37794__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38055);
});})(seq__37855_38051,chunk__37859_38052,count__37860_38053,i__37861_38054,seq__37795,chunk__37797,count__37798,i__37799,new_link_38057,path_match_38056,node_38055,path,seq__37795__$1,temp__5753__auto__,map__37794,map__37794__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38056], 0));

goog.dom.insertSiblingAfter(new_link_38057,node_38055);


var G__38058 = seq__37855_38051;
var G__38059 = chunk__37859_38052;
var G__38060 = count__37860_38053;
var G__38061 = (i__37861_38054 + (1));
seq__37855_38051 = G__38058;
chunk__37859_38052 = G__38059;
count__37860_38053 = G__38060;
i__37861_38054 = G__38061;
continue;
} else {
var G__38062 = seq__37855_38051;
var G__38063 = chunk__37859_38052;
var G__38064 = count__37860_38053;
var G__38065 = (i__37861_38054 + (1));
seq__37855_38051 = G__38062;
chunk__37859_38052 = G__38063;
count__37860_38053 = G__38064;
i__37861_38054 = G__38065;
continue;
}
} else {
var G__38066 = seq__37855_38051;
var G__38067 = chunk__37859_38052;
var G__38068 = count__37860_38053;
var G__38069 = (i__37861_38054 + (1));
seq__37855_38051 = G__38066;
chunk__37859_38052 = G__38067;
count__37860_38053 = G__38068;
i__37861_38054 = G__38069;
continue;
}
} else {
var temp__5753__auto___38070__$1 = cljs.core.seq(seq__37855_38051);
if(temp__5753__auto___38070__$1){
var seq__37855_38071__$1 = temp__5753__auto___38070__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37855_38071__$1)){
var c__4638__auto___38072 = cljs.core.chunk_first(seq__37855_38071__$1);
var G__38073 = cljs.core.chunk_rest(seq__37855_38071__$1);
var G__38074 = c__4638__auto___38072;
var G__38075 = cljs.core.count(c__4638__auto___38072);
var G__38076 = (0);
seq__37855_38051 = G__38073;
chunk__37859_38052 = G__38074;
count__37860_38053 = G__38075;
i__37861_38054 = G__38076;
continue;
} else {
var node_38077 = cljs.core.first(seq__37855_38071__$1);
if(cljs.core.not(node_38077.shadow$old)){
var path_match_38078 = shadow.cljs.devtools.client.browser.match_paths(node_38077.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38078)){
var new_link_38079 = (function (){var G__37878 = node_38077.cloneNode(true);
G__37878.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38078),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37878;
})();
(node_38077.shadow$old = true);

(new_link_38079.onload = ((function (seq__37855_38051,chunk__37859_38052,count__37860_38053,i__37861_38054,seq__37795,chunk__37797,count__37798,i__37799,new_link_38079,path_match_38078,node_38077,seq__37855_38071__$1,temp__5753__auto___38070__$1,path,seq__37795__$1,temp__5753__auto__,map__37794,map__37794__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38077);
});})(seq__37855_38051,chunk__37859_38052,count__37860_38053,i__37861_38054,seq__37795,chunk__37797,count__37798,i__37799,new_link_38079,path_match_38078,node_38077,seq__37855_38071__$1,temp__5753__auto___38070__$1,path,seq__37795__$1,temp__5753__auto__,map__37794,map__37794__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38078], 0));

goog.dom.insertSiblingAfter(new_link_38079,node_38077);


var G__38080 = cljs.core.next(seq__37855_38071__$1);
var G__38081 = null;
var G__38082 = (0);
var G__38083 = (0);
seq__37855_38051 = G__38080;
chunk__37859_38052 = G__38081;
count__37860_38053 = G__38082;
i__37861_38054 = G__38083;
continue;
} else {
var G__38084 = cljs.core.next(seq__37855_38071__$1);
var G__38085 = null;
var G__38086 = (0);
var G__38087 = (0);
seq__37855_38051 = G__38084;
chunk__37859_38052 = G__38085;
count__37860_38053 = G__38086;
i__37861_38054 = G__38087;
continue;
}
} else {
var G__38088 = cljs.core.next(seq__37855_38071__$1);
var G__38089 = null;
var G__38090 = (0);
var G__38091 = (0);
seq__37855_38051 = G__38088;
chunk__37859_38052 = G__38089;
count__37860_38053 = G__38090;
i__37861_38054 = G__38091;
continue;
}
}
} else {
}
}
break;
}


var G__38092 = cljs.core.next(seq__37795__$1);
var G__38093 = null;
var G__38094 = (0);
var G__38095 = (0);
seq__37795 = G__38092;
chunk__37797 = G__38093;
count__37798 = G__38094;
i__37799 = G__38095;
continue;
} else {
var G__38096 = cljs.core.next(seq__37795__$1);
var G__38097 = null;
var G__38098 = (0);
var G__38099 = (0);
seq__37795 = G__38096;
chunk__37797 = G__38097;
count__37798 = G__38098;
i__37799 = G__38099;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37879){
var map__37880 = p__37879;
var map__37880__$1 = cljs.core.__destructure_map(map__37880);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37880__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37883){
var map__37884 = p__37883;
var map__37884__$1 = cljs.core.__destructure_map(map__37884);
var _ = map__37884__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37884__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37885,done,error){
var map__37886 = p__37885;
var map__37886__$1 = cljs.core.__destructure_map(map__37886);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37886__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37893,done,error){
var map__37894 = p__37893;
var map__37894__$1 = cljs.core.__destructure_map(map__37894);
var msg = map__37894__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37895){
var map__37896 = p__37895;
var map__37896__$1 = cljs.core.__destructure_map(map__37896);
var src = map__37896__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37896__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37897 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37897) : done.call(null,G__37897));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37898){
var map__37899 = p__37898;
var map__37899__$1 = cljs.core.__destructure_map(map__37899);
var msg__$1 = map__37899__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37899__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37900){var ex = e37900;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37901){
var map__37902 = p__37901;
var map__37902__$1 = cljs.core.__destructure_map(map__37902);
var env = map__37902__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37902__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37903){
var map__37904 = p__37903;
var map__37904__$1 = cljs.core.__destructure_map(map__37904);
var msg = map__37904__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37904__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37906){
var map__37907 = p__37906;
var map__37907__$1 = cljs.core.__destructure_map(map__37907);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37907__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37907__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__37908){
var map__37909 = p__37908;
var map__37909__$1 = cljs.core.__destructure_map(map__37909);
var svc = map__37909__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37909__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
