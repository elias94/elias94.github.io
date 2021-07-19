goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__61603 = arguments.length;
switch (G__61603) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61617 = (function (f,blockable,meta61618){
this.f = f;
this.blockable = blockable;
this.meta61618 = meta61618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61619,meta61618__$1){
var self__ = this;
var _61619__$1 = this;
return (new cljs.core.async.t_cljs$core$async61617(self__.f,self__.blockable,meta61618__$1));
}));

(cljs.core.async.t_cljs$core$async61617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61619){
var self__ = this;
var _61619__$1 = this;
return self__.meta61618;
}));

(cljs.core.async.t_cljs$core$async61617.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61617.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61617.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async61617.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async61617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta61618","meta61618",-1081915183,null)], null);
}));

(cljs.core.async.t_cljs$core$async61617.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61617");

(cljs.core.async.t_cljs$core$async61617.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async61617");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61617.
 */
cljs.core.async.__GT_t_cljs$core$async61617 = (function cljs$core$async$__GT_t_cljs$core$async61617(f__$1,blockable__$1,meta61618){
return (new cljs.core.async.t_cljs$core$async61617(f__$1,blockable__$1,meta61618));
});

}

return (new cljs.core.async.t_cljs$core$async61617(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__61662 = arguments.length;
switch (G__61662) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__61682 = arguments.length;
switch (G__61682) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__61700 = arguments.length;
switch (G__61700) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_64882 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64882) : fn1.call(null,val_64882));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_64882) : fn1.call(null,val_64882));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__61716 = arguments.length;
switch (G__61716) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___64888 = n;
var x_64889 = (0);
while(true){
if((x_64889 < n__4706__auto___64888)){
(a[x_64889] = (0));

var G__64890 = (x_64889 + (1));
x_64889 = G__64890;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__64891 = (i + (1));
i = G__64891;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61726 = (function (flag,meta61727){
this.flag = flag;
this.meta61727 = meta61727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61728,meta61727__$1){
var self__ = this;
var _61728__$1 = this;
return (new cljs.core.async.t_cljs$core$async61726(self__.flag,meta61727__$1));
}));

(cljs.core.async.t_cljs$core$async61726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61728){
var self__ = this;
var _61728__$1 = this;
return self__.meta61727;
}));

(cljs.core.async.t_cljs$core$async61726.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61726.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async61726.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61726.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async61726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta61727","meta61727",-43239766,null)], null);
}));

(cljs.core.async.t_cljs$core$async61726.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61726");

(cljs.core.async.t_cljs$core$async61726.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async61726");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61726.
 */
cljs.core.async.__GT_t_cljs$core$async61726 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async61726(flag__$1,meta61727){
return (new cljs.core.async.t_cljs$core$async61726(flag__$1,meta61727));
});

}

return (new cljs.core.async.t_cljs$core$async61726(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61785 = (function (flag,cb,meta61786){
this.flag = flag;
this.cb = cb;
this.meta61786 = meta61786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61787,meta61786__$1){
var self__ = this;
var _61787__$1 = this;
return (new cljs.core.async.t_cljs$core$async61785(self__.flag,self__.cb,meta61786__$1));
}));

(cljs.core.async.t_cljs$core$async61785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61787){
var self__ = this;
var _61787__$1 = this;
return self__.meta61786;
}));

(cljs.core.async.t_cljs$core$async61785.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async61785.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async61785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta61786","meta61786",-1804252476,null)], null);
}));

(cljs.core.async.t_cljs$core$async61785.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61785");

(cljs.core.async.t_cljs$core$async61785.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async61785");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61785.
 */
cljs.core.async.__GT_t_cljs$core$async61785 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async61785(flag__$1,cb__$1,meta61786){
return (new cljs.core.async.t_cljs$core$async61785(flag__$1,cb__$1,meta61786));
});

}

return (new cljs.core.async.t_cljs$core$async61785(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61833_SHARP_){
var G__61846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61833_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61846) : fret.call(null,G__61846));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61834_SHARP_){
var G__61848 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61834_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61848) : fret.call(null,G__61848));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__64902 = (i + (1));
i = G__64902;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___64904 = arguments.length;
var i__4830__auto___64905 = (0);
while(true){
if((i__4830__auto___64905 < len__4829__auto___64904)){
args__4835__auto__.push((arguments[i__4830__auto___64905]));

var G__64906 = (i__4830__auto___64905 + (1));
i__4830__auto___64905 = G__64906;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__61886){
var map__61889 = p__61886;
var map__61889__$1 = cljs.core.__destructure_map(map__61889);
var opts = map__61889__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq61875){
var G__61876 = cljs.core.first(seq61875);
var seq61875__$1 = cljs.core.next(seq61875);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61876,seq61875__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__61918 = arguments.length;
switch (G__61918) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__61500__auto___64910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_61996){
var state_val_61997 = (state_61996[(1)]);
if((state_val_61997 === (7))){
var inst_61982 = (state_61996[(2)]);
var state_61996__$1 = state_61996;
var statearr_62006_64911 = state_61996__$1;
(statearr_62006_64911[(2)] = inst_61982);

(statearr_62006_64911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61997 === (1))){
var state_61996__$1 = state_61996;
var statearr_62009_64912 = state_61996__$1;
(statearr_62009_64912[(2)] = null);

(statearr_62009_64912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61997 === (4))){
var inst_61950 = (state_61996[(7)]);
var inst_61950__$1 = (state_61996[(2)]);
var inst_61954 = (inst_61950__$1 == null);
var state_61996__$1 = (function (){var statearr_62012 = state_61996;
(statearr_62012[(7)] = inst_61950__$1);

return statearr_62012;
})();
if(cljs.core.truth_(inst_61954)){
var statearr_62013_64913 = state_61996__$1;
(statearr_62013_64913[(1)] = (5));

} else {
var statearr_62014_64914 = state_61996__$1;
(statearr_62014_64914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61997 === (13))){
var state_61996__$1 = state_61996;
var statearr_62018_64915 = state_61996__$1;
(statearr_62018_64915[(2)] = null);

(statearr_62018_64915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61997 === (6))){
var inst_61950 = (state_61996[(7)]);
var state_61996__$1 = state_61996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61996__$1,(11),to,inst_61950);
} else {
if((state_val_61997 === (3))){
var inst_61984 = (state_61996[(2)]);
var state_61996__$1 = state_61996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61996__$1,inst_61984);
} else {
if((state_val_61997 === (12))){
var state_61996__$1 = state_61996;
var statearr_62033_64918 = state_61996__$1;
(statearr_62033_64918[(2)] = null);

(statearr_62033_64918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61997 === (2))){
var state_61996__$1 = state_61996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61996__$1,(4),from);
} else {
if((state_val_61997 === (11))){
var inst_61969 = (state_61996[(2)]);
var state_61996__$1 = state_61996;
if(cljs.core.truth_(inst_61969)){
var statearr_62040_64919 = state_61996__$1;
(statearr_62040_64919[(1)] = (12));

} else {
var statearr_62042_64920 = state_61996__$1;
(statearr_62042_64920[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61997 === (9))){
var state_61996__$1 = state_61996;
var statearr_62043_64923 = state_61996__$1;
(statearr_62043_64923[(2)] = null);

(statearr_62043_64923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61997 === (5))){
var state_61996__$1 = state_61996;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62050_64926 = state_61996__$1;
(statearr_62050_64926[(1)] = (8));

} else {
var statearr_62052_64927 = state_61996__$1;
(statearr_62052_64927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61997 === (14))){
var inst_61980 = (state_61996[(2)]);
var state_61996__$1 = state_61996;
var statearr_62058_64929 = state_61996__$1;
(statearr_62058_64929[(2)] = inst_61980);

(statearr_62058_64929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61997 === (10))){
var inst_61965 = (state_61996[(2)]);
var state_61996__$1 = state_61996;
var statearr_62067_64931 = state_61996__$1;
(statearr_62067_64931[(2)] = inst_61965);

(statearr_62067_64931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61997 === (8))){
var inst_61962 = cljs.core.async.close_BANG_(to);
var state_61996__$1 = state_61996;
var statearr_62076_64933 = state_61996__$1;
(statearr_62076_64933[(2)] = inst_61962);

(statearr_62076_64933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61183__auto__ = null;
var cljs$core$async$state_machine__61183__auto____0 = (function (){
var statearr_62083 = [null,null,null,null,null,null,null,null];
(statearr_62083[(0)] = cljs$core$async$state_machine__61183__auto__);

(statearr_62083[(1)] = (1));

return statearr_62083;
});
var cljs$core$async$state_machine__61183__auto____1 = (function (state_61996){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_61996);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e62085){if((e62085 instanceof Object)){
var ex__61186__auto__ = e62085;
var statearr_62086_64940 = state_61996;
(statearr_62086_64940[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62085;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64942 = state_61996;
state_61996 = G__64942;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$state_machine__61183__auto__ = function(state_61996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61183__auto____1.call(this,state_61996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61183__auto____0;
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61183__auto____1;
return cljs$core$async$state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_62099 = f__61501__auto__();
(statearr_62099[(6)] = c__61500__auto___64910);

return statearr_62099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__62125){
var vec__62127 = p__62125;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62127,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62127,(1),null);
var job = vec__62127;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__61500__auto___64943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_62138){
var state_val_62139 = (state_62138[(1)]);
if((state_val_62139 === (1))){
var state_62138__$1 = state_62138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62138__$1,(2),res,v);
} else {
if((state_val_62139 === (2))){
var inst_62135 = (state_62138[(2)]);
var inst_62136 = cljs.core.async.close_BANG_(res);
var state_62138__$1 = (function (){var statearr_62142 = state_62138;
(statearr_62142[(7)] = inst_62135);

return statearr_62142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62138__$1,inst_62136);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____0 = (function (){
var statearr_62143 = [null,null,null,null,null,null,null,null];
(statearr_62143[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__);

(statearr_62143[(1)] = (1));

return statearr_62143;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____1 = (function (state_62138){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_62138);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e62149){if((e62149 instanceof Object)){
var ex__61186__auto__ = e62149;
var statearr_62152_64948 = state_62138;
(statearr_62152_64948[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64949 = state_62138;
state_62138 = G__64949;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__ = function(state_62138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____1.call(this,state_62138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_62157 = f__61501__auto__();
(statearr_62157[(6)] = c__61500__auto___64943);

return statearr_62157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__62162){
var vec__62163 = p__62162;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62163,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62163,(1),null);
var job = vec__62163;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___64953 = n;
var __64954 = (0);
while(true){
if((__64954 < n__4706__auto___64953)){
var G__62174_64955 = type;
var G__62174_64956__$1 = (((G__62174_64955 instanceof cljs.core.Keyword))?G__62174_64955.fqn:null);
switch (G__62174_64956__$1) {
case "compute":
var c__61500__auto___64958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64954,c__61500__auto___64958,G__62174_64955,G__62174_64956__$1,n__4706__auto___64953,jobs,results,process,async){
return (function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = ((function (__64954,c__61500__auto___64958,G__62174_64955,G__62174_64956__$1,n__4706__auto___64953,jobs,results,process,async){
return (function (state_62194){
var state_val_62195 = (state_62194[(1)]);
if((state_val_62195 === (1))){
var state_62194__$1 = state_62194;
var statearr_62202_64959 = state_62194__$1;
(statearr_62202_64959[(2)] = null);

(statearr_62202_64959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62195 === (2))){
var state_62194__$1 = state_62194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62194__$1,(4),jobs);
} else {
if((state_val_62195 === (3))){
var inst_62191 = (state_62194[(2)]);
var state_62194__$1 = state_62194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62194__$1,inst_62191);
} else {
if((state_val_62195 === (4))){
var inst_62182 = (state_62194[(2)]);
var inst_62184 = process(inst_62182);
var state_62194__$1 = state_62194;
if(cljs.core.truth_(inst_62184)){
var statearr_62208_64960 = state_62194__$1;
(statearr_62208_64960[(1)] = (5));

} else {
var statearr_62209_64962 = state_62194__$1;
(statearr_62209_64962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62195 === (5))){
var state_62194__$1 = state_62194;
var statearr_62210_64963 = state_62194__$1;
(statearr_62210_64963[(2)] = null);

(statearr_62210_64963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62195 === (6))){
var state_62194__$1 = state_62194;
var statearr_62213_64965 = state_62194__$1;
(statearr_62213_64965[(2)] = null);

(statearr_62213_64965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62195 === (7))){
var inst_62189 = (state_62194[(2)]);
var state_62194__$1 = state_62194;
var statearr_62218_64966 = state_62194__$1;
(statearr_62218_64966[(2)] = inst_62189);

(statearr_62218_64966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__64954,c__61500__auto___64958,G__62174_64955,G__62174_64956__$1,n__4706__auto___64953,jobs,results,process,async))
;
return ((function (__64954,switch__61182__auto__,c__61500__auto___64958,G__62174_64955,G__62174_64956__$1,n__4706__auto___64953,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____0 = (function (){
var statearr_62222 = [null,null,null,null,null,null,null];
(statearr_62222[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__);

(statearr_62222[(1)] = (1));

return statearr_62222;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____1 = (function (state_62194){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_62194);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e62223){if((e62223 instanceof Object)){
var ex__61186__auto__ = e62223;
var statearr_62224_64967 = state_62194;
(statearr_62224_64967[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62223;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64970 = state_62194;
state_62194 = G__64970;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__ = function(state_62194){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____1.call(this,state_62194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__;
})()
;})(__64954,switch__61182__auto__,c__61500__auto___64958,G__62174_64955,G__62174_64956__$1,n__4706__auto___64953,jobs,results,process,async))
})();
var state__61502__auto__ = (function (){var statearr_62230 = f__61501__auto__();
(statearr_62230[(6)] = c__61500__auto___64958);

return statearr_62230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
});})(__64954,c__61500__auto___64958,G__62174_64955,G__62174_64956__$1,n__4706__auto___64953,jobs,results,process,async))
);


break;
case "async":
var c__61500__auto___64971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64954,c__61500__auto___64971,G__62174_64955,G__62174_64956__$1,n__4706__auto___64953,jobs,results,process,async){
return (function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = ((function (__64954,c__61500__auto___64971,G__62174_64955,G__62174_64956__$1,n__4706__auto___64953,jobs,results,process,async){
return (function (state_62245){
var state_val_62246 = (state_62245[(1)]);
if((state_val_62246 === (1))){
var state_62245__$1 = state_62245;
var statearr_62251_64972 = state_62245__$1;
(statearr_62251_64972[(2)] = null);

(statearr_62251_64972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62246 === (2))){
var state_62245__$1 = state_62245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62245__$1,(4),jobs);
} else {
if((state_val_62246 === (3))){
var inst_62243 = (state_62245[(2)]);
var state_62245__$1 = state_62245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62245__$1,inst_62243);
} else {
if((state_val_62246 === (4))){
var inst_62235 = (state_62245[(2)]);
var inst_62236 = async(inst_62235);
var state_62245__$1 = state_62245;
if(cljs.core.truth_(inst_62236)){
var statearr_62252_64973 = state_62245__$1;
(statearr_62252_64973[(1)] = (5));

} else {
var statearr_62253_64974 = state_62245__$1;
(statearr_62253_64974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62246 === (5))){
var state_62245__$1 = state_62245;
var statearr_62258_64975 = state_62245__$1;
(statearr_62258_64975[(2)] = null);

(statearr_62258_64975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62246 === (6))){
var state_62245__$1 = state_62245;
var statearr_62259_64976 = state_62245__$1;
(statearr_62259_64976[(2)] = null);

(statearr_62259_64976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62246 === (7))){
var inst_62241 = (state_62245[(2)]);
var state_62245__$1 = state_62245;
var statearr_62260_64977 = state_62245__$1;
(statearr_62260_64977[(2)] = inst_62241);

(statearr_62260_64977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__64954,c__61500__auto___64971,G__62174_64955,G__62174_64956__$1,n__4706__auto___64953,jobs,results,process,async))
;
return ((function (__64954,switch__61182__auto__,c__61500__auto___64971,G__62174_64955,G__62174_64956__$1,n__4706__auto___64953,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____0 = (function (){
var statearr_62263 = [null,null,null,null,null,null,null];
(statearr_62263[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__);

(statearr_62263[(1)] = (1));

return statearr_62263;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____1 = (function (state_62245){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_62245);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e62264){if((e62264 instanceof Object)){
var ex__61186__auto__ = e62264;
var statearr_62266_64984 = state_62245;
(statearr_62266_64984[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62264;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64985 = state_62245;
state_62245 = G__64985;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__ = function(state_62245){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____1.call(this,state_62245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__;
})()
;})(__64954,switch__61182__auto__,c__61500__auto___64971,G__62174_64955,G__62174_64956__$1,n__4706__auto___64953,jobs,results,process,async))
})();
var state__61502__auto__ = (function (){var statearr_62272 = f__61501__auto__();
(statearr_62272[(6)] = c__61500__auto___64971);

return statearr_62272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
});})(__64954,c__61500__auto___64971,G__62174_64955,G__62174_64956__$1,n__4706__auto___64953,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62174_64956__$1)].join('')));

}

var G__64986 = (__64954 + (1));
__64954 = G__64986;
continue;
} else {
}
break;
}

var c__61500__auto___64987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_62297){
var state_val_62298 = (state_62297[(1)]);
if((state_val_62298 === (7))){
var inst_62293 = (state_62297[(2)]);
var state_62297__$1 = state_62297;
var statearr_62303_64989 = state_62297__$1;
(statearr_62303_64989[(2)] = inst_62293);

(statearr_62303_64989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62298 === (1))){
var state_62297__$1 = state_62297;
var statearr_62304_64990 = state_62297__$1;
(statearr_62304_64990[(2)] = null);

(statearr_62304_64990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62298 === (4))){
var inst_62276 = (state_62297[(7)]);
var inst_62276__$1 = (state_62297[(2)]);
var inst_62278 = (inst_62276__$1 == null);
var state_62297__$1 = (function (){var statearr_62305 = state_62297;
(statearr_62305[(7)] = inst_62276__$1);

return statearr_62305;
})();
if(cljs.core.truth_(inst_62278)){
var statearr_62307_64991 = state_62297__$1;
(statearr_62307_64991[(1)] = (5));

} else {
var statearr_62311_64993 = state_62297__$1;
(statearr_62311_64993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62298 === (6))){
var inst_62282 = (state_62297[(8)]);
var inst_62276 = (state_62297[(7)]);
var inst_62282__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_62284 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62285 = [inst_62276,inst_62282__$1];
var inst_62286 = (new cljs.core.PersistentVector(null,2,(5),inst_62284,inst_62285,null));
var state_62297__$1 = (function (){var statearr_62315 = state_62297;
(statearr_62315[(8)] = inst_62282__$1);

return statearr_62315;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62297__$1,(8),jobs,inst_62286);
} else {
if((state_val_62298 === (3))){
var inst_62295 = (state_62297[(2)]);
var state_62297__$1 = state_62297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62297__$1,inst_62295);
} else {
if((state_val_62298 === (2))){
var state_62297__$1 = state_62297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62297__$1,(4),from);
} else {
if((state_val_62298 === (9))){
var inst_62290 = (state_62297[(2)]);
var state_62297__$1 = (function (){var statearr_62319 = state_62297;
(statearr_62319[(9)] = inst_62290);

return statearr_62319;
})();
var statearr_62322_64997 = state_62297__$1;
(statearr_62322_64997[(2)] = null);

(statearr_62322_64997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62298 === (5))){
var inst_62280 = cljs.core.async.close_BANG_(jobs);
var state_62297__$1 = state_62297;
var statearr_62326_64999 = state_62297__$1;
(statearr_62326_64999[(2)] = inst_62280);

(statearr_62326_64999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62298 === (8))){
var inst_62282 = (state_62297[(8)]);
var inst_62288 = (state_62297[(2)]);
var state_62297__$1 = (function (){var statearr_62327 = state_62297;
(statearr_62327[(10)] = inst_62288);

return statearr_62327;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62297__$1,(9),results,inst_62282);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____0 = (function (){
var statearr_62329 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62329[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__);

(statearr_62329[(1)] = (1));

return statearr_62329;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____1 = (function (state_62297){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_62297);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e62331){if((e62331 instanceof Object)){
var ex__61186__auto__ = e62331;
var statearr_62332_65002 = state_62297;
(statearr_62332_65002[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65003 = state_62297;
state_62297 = G__65003;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__ = function(state_62297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____1.call(this,state_62297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_62336 = f__61501__auto__();
(statearr_62336[(6)] = c__61500__auto___64987);

return statearr_62336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));


var c__61500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_62422){
var state_val_62423 = (state_62422[(1)]);
if((state_val_62423 === (7))){
var inst_62408 = (state_62422[(2)]);
var state_62422__$1 = state_62422;
var statearr_62431_65004 = state_62422__$1;
(statearr_62431_65004[(2)] = inst_62408);

(statearr_62431_65004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62423 === (20))){
var state_62422__$1 = state_62422;
var statearr_62434_65005 = state_62422__$1;
(statearr_62434_65005[(2)] = null);

(statearr_62434_65005[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62423 === (1))){
var state_62422__$1 = state_62422;
var statearr_62436_65007 = state_62422__$1;
(statearr_62436_65007[(2)] = null);

(statearr_62436_65007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62423 === (4))){
var inst_62346 = (state_62422[(7)]);
var inst_62346__$1 = (state_62422[(2)]);
var inst_62349 = (inst_62346__$1 == null);
var state_62422__$1 = (function (){var statearr_62441 = state_62422;
(statearr_62441[(7)] = inst_62346__$1);

return statearr_62441;
})();
if(cljs.core.truth_(inst_62349)){
var statearr_62442_65008 = state_62422__$1;
(statearr_62442_65008[(1)] = (5));

} else {
var statearr_62443_65009 = state_62422__$1;
(statearr_62443_65009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62423 === (15))){
var inst_62376 = (state_62422[(8)]);
var state_62422__$1 = state_62422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62422__$1,(18),to,inst_62376);
} else {
if((state_val_62423 === (21))){
var inst_62402 = (state_62422[(2)]);
var state_62422__$1 = state_62422;
var statearr_62446_65010 = state_62422__$1;
(statearr_62446_65010[(2)] = inst_62402);

(statearr_62446_65010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62423 === (13))){
var inst_62404 = (state_62422[(2)]);
var state_62422__$1 = (function (){var statearr_62447 = state_62422;
(statearr_62447[(9)] = inst_62404);

return statearr_62447;
})();
var statearr_62449_65016 = state_62422__$1;
(statearr_62449_65016[(2)] = null);

(statearr_62449_65016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62423 === (6))){
var inst_62346 = (state_62422[(7)]);
var state_62422__$1 = state_62422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62422__$1,(11),inst_62346);
} else {
if((state_val_62423 === (17))){
var inst_62393 = (state_62422[(2)]);
var state_62422__$1 = state_62422;
if(cljs.core.truth_(inst_62393)){
var statearr_62451_65017 = state_62422__$1;
(statearr_62451_65017[(1)] = (19));

} else {
var statearr_62454_65018 = state_62422__$1;
(statearr_62454_65018[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62423 === (3))){
var inst_62410 = (state_62422[(2)]);
var state_62422__$1 = state_62422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62422__$1,inst_62410);
} else {
if((state_val_62423 === (12))){
var inst_62366 = (state_62422[(10)]);
var state_62422__$1 = state_62422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62422__$1,(14),inst_62366);
} else {
if((state_val_62423 === (2))){
var state_62422__$1 = state_62422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62422__$1,(4),results);
} else {
if((state_val_62423 === (19))){
var state_62422__$1 = state_62422;
var statearr_62463_65024 = state_62422__$1;
(statearr_62463_65024[(2)] = null);

(statearr_62463_65024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62423 === (11))){
var inst_62366 = (state_62422[(2)]);
var state_62422__$1 = (function (){var statearr_62465 = state_62422;
(statearr_62465[(10)] = inst_62366);

return statearr_62465;
})();
var statearr_62466_65025 = state_62422__$1;
(statearr_62466_65025[(2)] = null);

(statearr_62466_65025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62423 === (9))){
var state_62422__$1 = state_62422;
var statearr_62467_65026 = state_62422__$1;
(statearr_62467_65026[(2)] = null);

(statearr_62467_65026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62423 === (5))){
var state_62422__$1 = state_62422;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62468_65027 = state_62422__$1;
(statearr_62468_65027[(1)] = (8));

} else {
var statearr_62469_65028 = state_62422__$1;
(statearr_62469_65028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62423 === (14))){
var inst_62376 = (state_62422[(8)]);
var inst_62382 = (state_62422[(11)]);
var inst_62376__$1 = (state_62422[(2)]);
var inst_62381 = (inst_62376__$1 == null);
var inst_62382__$1 = cljs.core.not(inst_62381);
var state_62422__$1 = (function (){var statearr_62470 = state_62422;
(statearr_62470[(8)] = inst_62376__$1);

(statearr_62470[(11)] = inst_62382__$1);

return statearr_62470;
})();
if(inst_62382__$1){
var statearr_62471_65029 = state_62422__$1;
(statearr_62471_65029[(1)] = (15));

} else {
var statearr_62472_65030 = state_62422__$1;
(statearr_62472_65030[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62423 === (16))){
var inst_62382 = (state_62422[(11)]);
var state_62422__$1 = state_62422;
var statearr_62473_65031 = state_62422__$1;
(statearr_62473_65031[(2)] = inst_62382);

(statearr_62473_65031[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62423 === (10))){
var inst_62361 = (state_62422[(2)]);
var state_62422__$1 = state_62422;
var statearr_62483_65032 = state_62422__$1;
(statearr_62483_65032[(2)] = inst_62361);

(statearr_62483_65032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62423 === (18))){
var inst_62390 = (state_62422[(2)]);
var state_62422__$1 = state_62422;
var statearr_62486_65033 = state_62422__$1;
(statearr_62486_65033[(2)] = inst_62390);

(statearr_62486_65033[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62423 === (8))){
var inst_62358 = cljs.core.async.close_BANG_(to);
var state_62422__$1 = state_62422;
var statearr_62488_65037 = state_62422__$1;
(statearr_62488_65037[(2)] = inst_62358);

(statearr_62488_65037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____0 = (function (){
var statearr_62495 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62495[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__);

(statearr_62495[(1)] = (1));

return statearr_62495;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____1 = (function (state_62422){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_62422);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e62498){if((e62498 instanceof Object)){
var ex__61186__auto__ = e62498;
var statearr_62501_65038 = state_62422;
(statearr_62501_65038[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62498;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65039 = state_62422;
state_62422 = G__65039;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__ = function(state_62422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____1.call(this,state_62422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61183__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_62506 = f__61501__auto__();
(statearr_62506[(6)] = c__61500__auto__);

return statearr_62506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));

return c__61500__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__62522 = arguments.length;
switch (G__62522) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__62540 = arguments.length;
switch (G__62540) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__62559 = arguments.length;
switch (G__62559) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__61500__auto___65045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_62613){
var state_val_62614 = (state_62613[(1)]);
if((state_val_62614 === (7))){
var inst_62604 = (state_62613[(2)]);
var state_62613__$1 = state_62613;
var statearr_62622_65046 = state_62613__$1;
(statearr_62622_65046[(2)] = inst_62604);

(statearr_62622_65046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62614 === (1))){
var state_62613__$1 = state_62613;
var statearr_62625_65047 = state_62613__$1;
(statearr_62625_65047[(2)] = null);

(statearr_62625_65047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62614 === (4))){
var inst_62579 = (state_62613[(7)]);
var inst_62579__$1 = (state_62613[(2)]);
var inst_62582 = (inst_62579__$1 == null);
var state_62613__$1 = (function (){var statearr_62630 = state_62613;
(statearr_62630[(7)] = inst_62579__$1);

return statearr_62630;
})();
if(cljs.core.truth_(inst_62582)){
var statearr_62633_65048 = state_62613__$1;
(statearr_62633_65048[(1)] = (5));

} else {
var statearr_62637_65049 = state_62613__$1;
(statearr_62637_65049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62614 === (13))){
var state_62613__$1 = state_62613;
var statearr_62641_65050 = state_62613__$1;
(statearr_62641_65050[(2)] = null);

(statearr_62641_65050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62614 === (6))){
var inst_62579 = (state_62613[(7)]);
var inst_62591 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_62579) : p.call(null,inst_62579));
var state_62613__$1 = state_62613;
if(cljs.core.truth_(inst_62591)){
var statearr_62643_65052 = state_62613__$1;
(statearr_62643_65052[(1)] = (9));

} else {
var statearr_62645_65053 = state_62613__$1;
(statearr_62645_65053[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62614 === (3))){
var inst_62610 = (state_62613[(2)]);
var state_62613__$1 = state_62613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62613__$1,inst_62610);
} else {
if((state_val_62614 === (12))){
var state_62613__$1 = state_62613;
var statearr_62654_65058 = state_62613__$1;
(statearr_62654_65058[(2)] = null);

(statearr_62654_65058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62614 === (2))){
var state_62613__$1 = state_62613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62613__$1,(4),ch);
} else {
if((state_val_62614 === (11))){
var inst_62579 = (state_62613[(7)]);
var inst_62595 = (state_62613[(2)]);
var state_62613__$1 = state_62613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62613__$1,(8),inst_62595,inst_62579);
} else {
if((state_val_62614 === (9))){
var state_62613__$1 = state_62613;
var statearr_62663_65062 = state_62613__$1;
(statearr_62663_65062[(2)] = tc);

(statearr_62663_65062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62614 === (5))){
var inst_62585 = cljs.core.async.close_BANG_(tc);
var inst_62586 = cljs.core.async.close_BANG_(fc);
var state_62613__$1 = (function (){var statearr_62664 = state_62613;
(statearr_62664[(8)] = inst_62585);

return statearr_62664;
})();
var statearr_62669_65063 = state_62613__$1;
(statearr_62669_65063[(2)] = inst_62586);

(statearr_62669_65063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62614 === (14))){
var inst_62602 = (state_62613[(2)]);
var state_62613__$1 = state_62613;
var statearr_62673_65064 = state_62613__$1;
(statearr_62673_65064[(2)] = inst_62602);

(statearr_62673_65064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62614 === (10))){
var state_62613__$1 = state_62613;
var statearr_62676_65065 = state_62613__$1;
(statearr_62676_65065[(2)] = fc);

(statearr_62676_65065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62614 === (8))){
var inst_62597 = (state_62613[(2)]);
var state_62613__$1 = state_62613;
if(cljs.core.truth_(inst_62597)){
var statearr_62680_65069 = state_62613__$1;
(statearr_62680_65069[(1)] = (12));

} else {
var statearr_62681_65070 = state_62613__$1;
(statearr_62681_65070[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61183__auto__ = null;
var cljs$core$async$state_machine__61183__auto____0 = (function (){
var statearr_62689 = [null,null,null,null,null,null,null,null,null];
(statearr_62689[(0)] = cljs$core$async$state_machine__61183__auto__);

(statearr_62689[(1)] = (1));

return statearr_62689;
});
var cljs$core$async$state_machine__61183__auto____1 = (function (state_62613){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_62613);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e62691){if((e62691 instanceof Object)){
var ex__61186__auto__ = e62691;
var statearr_62693_65074 = state_62613;
(statearr_62693_65074[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62691;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65075 = state_62613;
state_62613 = G__65075;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$state_machine__61183__auto__ = function(state_62613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61183__auto____1.call(this,state_62613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61183__auto____0;
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61183__auto____1;
return cljs$core$async$state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_62702 = f__61501__auto__();
(statearr_62702[(6)] = c__61500__auto___65045);

return statearr_62702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__61500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_62732){
var state_val_62737 = (state_62732[(1)]);
if((state_val_62737 === (7))){
var inst_62728 = (state_62732[(2)]);
var state_62732__$1 = state_62732;
var statearr_62744_65079 = state_62732__$1;
(statearr_62744_65079[(2)] = inst_62728);

(statearr_62744_65079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62737 === (1))){
var inst_62712 = init;
var state_62732__$1 = (function (){var statearr_62748 = state_62732;
(statearr_62748[(7)] = inst_62712);

return statearr_62748;
})();
var statearr_62749_65080 = state_62732__$1;
(statearr_62749_65080[(2)] = null);

(statearr_62749_65080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62737 === (4))){
var inst_62715 = (state_62732[(8)]);
var inst_62715__$1 = (state_62732[(2)]);
var inst_62716 = (inst_62715__$1 == null);
var state_62732__$1 = (function (){var statearr_62754 = state_62732;
(statearr_62754[(8)] = inst_62715__$1);

return statearr_62754;
})();
if(cljs.core.truth_(inst_62716)){
var statearr_62757_65082 = state_62732__$1;
(statearr_62757_65082[(1)] = (5));

} else {
var statearr_62758_65083 = state_62732__$1;
(statearr_62758_65083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62737 === (6))){
var inst_62712 = (state_62732[(7)]);
var inst_62715 = (state_62732[(8)]);
var inst_62719 = (state_62732[(9)]);
var inst_62719__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_62712,inst_62715) : f.call(null,inst_62712,inst_62715));
var inst_62720 = cljs.core.reduced_QMARK_(inst_62719__$1);
var state_62732__$1 = (function (){var statearr_62763 = state_62732;
(statearr_62763[(9)] = inst_62719__$1);

return statearr_62763;
})();
if(inst_62720){
var statearr_62764_65091 = state_62732__$1;
(statearr_62764_65091[(1)] = (8));

} else {
var statearr_62767_65092 = state_62732__$1;
(statearr_62767_65092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62737 === (3))){
var inst_62730 = (state_62732[(2)]);
var state_62732__$1 = state_62732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62732__$1,inst_62730);
} else {
if((state_val_62737 === (2))){
var state_62732__$1 = state_62732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62732__$1,(4),ch);
} else {
if((state_val_62737 === (9))){
var inst_62719 = (state_62732[(9)]);
var inst_62712 = inst_62719;
var state_62732__$1 = (function (){var statearr_62775 = state_62732;
(statearr_62775[(7)] = inst_62712);

return statearr_62775;
})();
var statearr_62777_65093 = state_62732__$1;
(statearr_62777_65093[(2)] = null);

(statearr_62777_65093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62737 === (5))){
var inst_62712 = (state_62732[(7)]);
var state_62732__$1 = state_62732;
var statearr_62781_65094 = state_62732__$1;
(statearr_62781_65094[(2)] = inst_62712);

(statearr_62781_65094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62737 === (10))){
var inst_62726 = (state_62732[(2)]);
var state_62732__$1 = state_62732;
var statearr_62784_65098 = state_62732__$1;
(statearr_62784_65098[(2)] = inst_62726);

(statearr_62784_65098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62737 === (8))){
var inst_62719 = (state_62732[(9)]);
var inst_62722 = cljs.core.deref(inst_62719);
var state_62732__$1 = state_62732;
var statearr_62787_65099 = state_62732__$1;
(statearr_62787_65099[(2)] = inst_62722);

(statearr_62787_65099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__61183__auto__ = null;
var cljs$core$async$reduce_$_state_machine__61183__auto____0 = (function (){
var statearr_62793 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62793[(0)] = cljs$core$async$reduce_$_state_machine__61183__auto__);

(statearr_62793[(1)] = (1));

return statearr_62793;
});
var cljs$core$async$reduce_$_state_machine__61183__auto____1 = (function (state_62732){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_62732);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e62794){if((e62794 instanceof Object)){
var ex__61186__auto__ = e62794;
var statearr_62797_65103 = state_62732;
(statearr_62797_65103[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65104 = state_62732;
state_62732 = G__65104;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__61183__auto__ = function(state_62732){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__61183__auto____1.call(this,state_62732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__61183__auto____0;
cljs$core$async$reduce_$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__61183__auto____1;
return cljs$core$async$reduce_$_state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_62803 = f__61501__auto__();
(statearr_62803[(6)] = c__61500__auto__);

return statearr_62803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));

return c__61500__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__61500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_62820){
var state_val_62822 = (state_62820[(1)]);
if((state_val_62822 === (1))){
var inst_62813 = cljs.core.async.reduce(f__$1,init,ch);
var state_62820__$1 = state_62820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62820__$1,(2),inst_62813);
} else {
if((state_val_62822 === (2))){
var inst_62815 = (state_62820[(2)]);
var inst_62817 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_62815) : f__$1.call(null,inst_62815));
var state_62820__$1 = state_62820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62820__$1,inst_62817);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__61183__auto__ = null;
var cljs$core$async$transduce_$_state_machine__61183__auto____0 = (function (){
var statearr_62838 = [null,null,null,null,null,null,null];
(statearr_62838[(0)] = cljs$core$async$transduce_$_state_machine__61183__auto__);

(statearr_62838[(1)] = (1));

return statearr_62838;
});
var cljs$core$async$transduce_$_state_machine__61183__auto____1 = (function (state_62820){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_62820);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e62839){if((e62839 instanceof Object)){
var ex__61186__auto__ = e62839;
var statearr_62840_65109 = state_62820;
(statearr_62840_65109[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65111 = state_62820;
state_62820 = G__65111;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__61183__auto__ = function(state_62820){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__61183__auto____1.call(this,state_62820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__61183__auto____0;
cljs$core$async$transduce_$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__61183__auto____1;
return cljs$core$async$transduce_$_state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_62851 = f__61501__auto__();
(statearr_62851[(6)] = c__61500__auto__);

return statearr_62851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));

return c__61500__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__62862 = arguments.length;
switch (G__62862) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__61500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_62912){
var state_val_62913 = (state_62912[(1)]);
if((state_val_62913 === (7))){
var inst_62892 = (state_62912[(2)]);
var state_62912__$1 = state_62912;
var statearr_62918_65114 = state_62912__$1;
(statearr_62918_65114[(2)] = inst_62892);

(statearr_62918_65114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62913 === (1))){
var inst_62885 = cljs.core.seq(coll);
var inst_62886 = inst_62885;
var state_62912__$1 = (function (){var statearr_62920 = state_62912;
(statearr_62920[(7)] = inst_62886);

return statearr_62920;
})();
var statearr_62922_65115 = state_62912__$1;
(statearr_62922_65115[(2)] = null);

(statearr_62922_65115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62913 === (4))){
var inst_62886 = (state_62912[(7)]);
var inst_62890 = cljs.core.first(inst_62886);
var state_62912__$1 = state_62912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62912__$1,(7),ch,inst_62890);
} else {
if((state_val_62913 === (13))){
var inst_62905 = (state_62912[(2)]);
var state_62912__$1 = state_62912;
var statearr_62931_65116 = state_62912__$1;
(statearr_62931_65116[(2)] = inst_62905);

(statearr_62931_65116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62913 === (6))){
var inst_62895 = (state_62912[(2)]);
var state_62912__$1 = state_62912;
if(cljs.core.truth_(inst_62895)){
var statearr_62932_65117 = state_62912__$1;
(statearr_62932_65117[(1)] = (8));

} else {
var statearr_62933_65118 = state_62912__$1;
(statearr_62933_65118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62913 === (3))){
var inst_62909 = (state_62912[(2)]);
var state_62912__$1 = state_62912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62912__$1,inst_62909);
} else {
if((state_val_62913 === (12))){
var state_62912__$1 = state_62912;
var statearr_62937_65119 = state_62912__$1;
(statearr_62937_65119[(2)] = null);

(statearr_62937_65119[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62913 === (2))){
var inst_62886 = (state_62912[(7)]);
var state_62912__$1 = state_62912;
if(cljs.core.truth_(inst_62886)){
var statearr_62943_65120 = state_62912__$1;
(statearr_62943_65120[(1)] = (4));

} else {
var statearr_62945_65121 = state_62912__$1;
(statearr_62945_65121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62913 === (11))){
var inst_62902 = cljs.core.async.close_BANG_(ch);
var state_62912__$1 = state_62912;
var statearr_62958_65122 = state_62912__$1;
(statearr_62958_65122[(2)] = inst_62902);

(statearr_62958_65122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62913 === (9))){
var state_62912__$1 = state_62912;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62969_65126 = state_62912__$1;
(statearr_62969_65126[(1)] = (11));

} else {
var statearr_62970_65127 = state_62912__$1;
(statearr_62970_65127[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62913 === (5))){
var inst_62886 = (state_62912[(7)]);
var state_62912__$1 = state_62912;
var statearr_62988_65128 = state_62912__$1;
(statearr_62988_65128[(2)] = inst_62886);

(statearr_62988_65128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62913 === (10))){
var inst_62907 = (state_62912[(2)]);
var state_62912__$1 = state_62912;
var statearr_62992_65129 = state_62912__$1;
(statearr_62992_65129[(2)] = inst_62907);

(statearr_62992_65129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62913 === (8))){
var inst_62886 = (state_62912[(7)]);
var inst_62898 = cljs.core.next(inst_62886);
var inst_62886__$1 = inst_62898;
var state_62912__$1 = (function (){var statearr_63002 = state_62912;
(statearr_63002[(7)] = inst_62886__$1);

return statearr_63002;
})();
var statearr_63006_65130 = state_62912__$1;
(statearr_63006_65130[(2)] = null);

(statearr_63006_65130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61183__auto__ = null;
var cljs$core$async$state_machine__61183__auto____0 = (function (){
var statearr_63023 = [null,null,null,null,null,null,null,null];
(statearr_63023[(0)] = cljs$core$async$state_machine__61183__auto__);

(statearr_63023[(1)] = (1));

return statearr_63023;
});
var cljs$core$async$state_machine__61183__auto____1 = (function (state_62912){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_62912);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e63031){if((e63031 instanceof Object)){
var ex__61186__auto__ = e63031;
var statearr_63038_65131 = state_62912;
(statearr_63038_65131[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63031;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65132 = state_62912;
state_62912 = G__65132;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$state_machine__61183__auto__ = function(state_62912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61183__auto____1.call(this,state_62912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61183__auto____0;
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61183__auto____1;
return cljs$core$async$state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_63048 = f__61501__auto__();
(statearr_63048[(6)] = c__61500__auto__);

return statearr_63048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));

return c__61500__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_65133 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_65133(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_65142 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_65142(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_65143 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_65143(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_65144 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_65144(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63103 = (function (ch,cs,meta63104){
this.ch = ch;
this.cs = cs;
this.meta63104 = meta63104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63105,meta63104__$1){
var self__ = this;
var _63105__$1 = this;
return (new cljs.core.async.t_cljs$core$async63103(self__.ch,self__.cs,meta63104__$1));
}));

(cljs.core.async.t_cljs$core$async63103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63105){
var self__ = this;
var _63105__$1 = this;
return self__.meta63104;
}));

(cljs.core.async.t_cljs$core$async63103.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63103.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63103.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63103.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async63103.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async63103.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async63103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta63104","meta63104",-301808189,null)], null);
}));

(cljs.core.async.t_cljs$core$async63103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63103");

(cljs.core.async.t_cljs$core$async63103.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async63103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63103.
 */
cljs.core.async.__GT_t_cljs$core$async63103 = (function cljs$core$async$mult_$___GT_t_cljs$core$async63103(ch__$1,cs__$1,meta63104){
return (new cljs.core.async.t_cljs$core$async63103(ch__$1,cs__$1,meta63104));
});

}

return (new cljs.core.async.t_cljs$core$async63103(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__61500__auto___65159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_63291){
var state_val_63292 = (state_63291[(1)]);
if((state_val_63292 === (7))){
var inst_63285 = (state_63291[(2)]);
var state_63291__$1 = state_63291;
var statearr_63294_65164 = state_63291__$1;
(statearr_63294_65164[(2)] = inst_63285);

(statearr_63294_65164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (20))){
var inst_63177 = (state_63291[(7)]);
var inst_63189 = cljs.core.first(inst_63177);
var inst_63190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63189,(0),null);
var inst_63191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63189,(1),null);
var state_63291__$1 = (function (){var statearr_63295 = state_63291;
(statearr_63295[(8)] = inst_63190);

return statearr_63295;
})();
if(cljs.core.truth_(inst_63191)){
var statearr_63296_65165 = state_63291__$1;
(statearr_63296_65165[(1)] = (22));

} else {
var statearr_63297_65166 = state_63291__$1;
(statearr_63297_65166[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (27))){
var inst_63225 = (state_63291[(9)]);
var inst_63137 = (state_63291[(10)]);
var inst_63227 = (state_63291[(11)]);
var inst_63235 = (state_63291[(12)]);
var inst_63235__$1 = cljs.core._nth(inst_63225,inst_63227);
var inst_63237 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63235__$1,inst_63137,done);
var state_63291__$1 = (function (){var statearr_63299 = state_63291;
(statearr_63299[(12)] = inst_63235__$1);

return statearr_63299;
})();
if(cljs.core.truth_(inst_63237)){
var statearr_63300_65168 = state_63291__$1;
(statearr_63300_65168[(1)] = (30));

} else {
var statearr_63301_65169 = state_63291__$1;
(statearr_63301_65169[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (1))){
var state_63291__$1 = state_63291;
var statearr_63302_65170 = state_63291__$1;
(statearr_63302_65170[(2)] = null);

(statearr_63302_65170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (24))){
var inst_63177 = (state_63291[(7)]);
var inst_63196 = (state_63291[(2)]);
var inst_63197 = cljs.core.next(inst_63177);
var inst_63151 = inst_63197;
var inst_63152 = null;
var inst_63153 = (0);
var inst_63154 = (0);
var state_63291__$1 = (function (){var statearr_63306 = state_63291;
(statearr_63306[(13)] = inst_63152);

(statearr_63306[(14)] = inst_63151);

(statearr_63306[(15)] = inst_63154);

(statearr_63306[(16)] = inst_63153);

(statearr_63306[(17)] = inst_63196);

return statearr_63306;
})();
var statearr_63307_65171 = state_63291__$1;
(statearr_63307_65171[(2)] = null);

(statearr_63307_65171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (39))){
var state_63291__$1 = state_63291;
var statearr_63331_65184 = state_63291__$1;
(statearr_63331_65184[(2)] = null);

(statearr_63331_65184[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (4))){
var inst_63137 = (state_63291[(10)]);
var inst_63137__$1 = (state_63291[(2)]);
var inst_63138 = (inst_63137__$1 == null);
var state_63291__$1 = (function (){var statearr_63336 = state_63291;
(statearr_63336[(10)] = inst_63137__$1);

return statearr_63336;
})();
if(cljs.core.truth_(inst_63138)){
var statearr_63337_65194 = state_63291__$1;
(statearr_63337_65194[(1)] = (5));

} else {
var statearr_63338_65195 = state_63291__$1;
(statearr_63338_65195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (15))){
var inst_63152 = (state_63291[(13)]);
var inst_63151 = (state_63291[(14)]);
var inst_63154 = (state_63291[(15)]);
var inst_63153 = (state_63291[(16)]);
var inst_63173 = (state_63291[(2)]);
var inst_63174 = (inst_63154 + (1));
var tmp63316 = inst_63152;
var tmp63321 = inst_63151;
var tmp63322 = inst_63153;
var inst_63151__$1 = tmp63321;
var inst_63152__$1 = tmp63316;
var inst_63153__$1 = tmp63322;
var inst_63154__$1 = inst_63174;
var state_63291__$1 = (function (){var statearr_63339 = state_63291;
(statearr_63339[(13)] = inst_63152__$1);

(statearr_63339[(18)] = inst_63173);

(statearr_63339[(14)] = inst_63151__$1);

(statearr_63339[(15)] = inst_63154__$1);

(statearr_63339[(16)] = inst_63153__$1);

return statearr_63339;
})();
var statearr_63342_65204 = state_63291__$1;
(statearr_63342_65204[(2)] = null);

(statearr_63342_65204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (21))){
var inst_63200 = (state_63291[(2)]);
var state_63291__$1 = state_63291;
var statearr_63347_65207 = state_63291__$1;
(statearr_63347_65207[(2)] = inst_63200);

(statearr_63347_65207[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (31))){
var inst_63235 = (state_63291[(12)]);
var inst_63240 = done(null);
var inst_63241 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63235);
var state_63291__$1 = (function (){var statearr_63348 = state_63291;
(statearr_63348[(19)] = inst_63240);

return statearr_63348;
})();
var statearr_63351_65208 = state_63291__$1;
(statearr_63351_65208[(2)] = inst_63241);

(statearr_63351_65208[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (32))){
var inst_63226 = (state_63291[(20)]);
var inst_63225 = (state_63291[(9)]);
var inst_63224 = (state_63291[(21)]);
var inst_63227 = (state_63291[(11)]);
var inst_63243 = (state_63291[(2)]);
var inst_63244 = (inst_63227 + (1));
var tmp63344 = inst_63226;
var tmp63345 = inst_63225;
var tmp63346 = inst_63224;
var inst_63224__$1 = tmp63346;
var inst_63225__$1 = tmp63345;
var inst_63226__$1 = tmp63344;
var inst_63227__$1 = inst_63244;
var state_63291__$1 = (function (){var statearr_63356 = state_63291;
(statearr_63356[(20)] = inst_63226__$1);

(statearr_63356[(9)] = inst_63225__$1);

(statearr_63356[(21)] = inst_63224__$1);

(statearr_63356[(11)] = inst_63227__$1);

(statearr_63356[(22)] = inst_63243);

return statearr_63356;
})();
var statearr_63359_65218 = state_63291__$1;
(statearr_63359_65218[(2)] = null);

(statearr_63359_65218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (40))){
var inst_63257 = (state_63291[(23)]);
var inst_63261 = done(null);
var inst_63262 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63257);
var state_63291__$1 = (function (){var statearr_63366 = state_63291;
(statearr_63366[(24)] = inst_63261);

return statearr_63366;
})();
var statearr_63370_65231 = state_63291__$1;
(statearr_63370_65231[(2)] = inst_63262);

(statearr_63370_65231[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (33))){
var inst_63247 = (state_63291[(25)]);
var inst_63249 = cljs.core.chunked_seq_QMARK_(inst_63247);
var state_63291__$1 = state_63291;
if(inst_63249){
var statearr_63372_65232 = state_63291__$1;
(statearr_63372_65232[(1)] = (36));

} else {
var statearr_63375_65233 = state_63291__$1;
(statearr_63375_65233[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (13))){
var inst_63167 = (state_63291[(26)]);
var inst_63170 = cljs.core.async.close_BANG_(inst_63167);
var state_63291__$1 = state_63291;
var statearr_63381_65240 = state_63291__$1;
(statearr_63381_65240[(2)] = inst_63170);

(statearr_63381_65240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (22))){
var inst_63190 = (state_63291[(8)]);
var inst_63193 = cljs.core.async.close_BANG_(inst_63190);
var state_63291__$1 = state_63291;
var statearr_63398_65247 = state_63291__$1;
(statearr_63398_65247[(2)] = inst_63193);

(statearr_63398_65247[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (36))){
var inst_63247 = (state_63291[(25)]);
var inst_63251 = cljs.core.chunk_first(inst_63247);
var inst_63252 = cljs.core.chunk_rest(inst_63247);
var inst_63253 = cljs.core.count(inst_63251);
var inst_63224 = inst_63252;
var inst_63225 = inst_63251;
var inst_63226 = inst_63253;
var inst_63227 = (0);
var state_63291__$1 = (function (){var statearr_63415 = state_63291;
(statearr_63415[(20)] = inst_63226);

(statearr_63415[(9)] = inst_63225);

(statearr_63415[(21)] = inst_63224);

(statearr_63415[(11)] = inst_63227);

return statearr_63415;
})();
var statearr_63417_65248 = state_63291__$1;
(statearr_63417_65248[(2)] = null);

(statearr_63417_65248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (41))){
var inst_63247 = (state_63291[(25)]);
var inst_63264 = (state_63291[(2)]);
var inst_63265 = cljs.core.next(inst_63247);
var inst_63224 = inst_63265;
var inst_63225 = null;
var inst_63226 = (0);
var inst_63227 = (0);
var state_63291__$1 = (function (){var statearr_63427 = state_63291;
(statearr_63427[(20)] = inst_63226);

(statearr_63427[(9)] = inst_63225);

(statearr_63427[(21)] = inst_63224);

(statearr_63427[(27)] = inst_63264);

(statearr_63427[(11)] = inst_63227);

return statearr_63427;
})();
var statearr_63428_65251 = state_63291__$1;
(statearr_63428_65251[(2)] = null);

(statearr_63428_65251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (43))){
var state_63291__$1 = state_63291;
var statearr_63431_65252 = state_63291__$1;
(statearr_63431_65252[(2)] = null);

(statearr_63431_65252[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (29))){
var inst_63273 = (state_63291[(2)]);
var state_63291__$1 = state_63291;
var statearr_63436_65253 = state_63291__$1;
(statearr_63436_65253[(2)] = inst_63273);

(statearr_63436_65253[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (44))){
var inst_63282 = (state_63291[(2)]);
var state_63291__$1 = (function (){var statearr_63440 = state_63291;
(statearr_63440[(28)] = inst_63282);

return statearr_63440;
})();
var statearr_63441_65254 = state_63291__$1;
(statearr_63441_65254[(2)] = null);

(statearr_63441_65254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (6))){
var inst_63210 = (state_63291[(29)]);
var inst_63209 = cljs.core.deref(cs);
var inst_63210__$1 = cljs.core.keys(inst_63209);
var inst_63213 = cljs.core.count(inst_63210__$1);
var inst_63217 = cljs.core.reset_BANG_(dctr,inst_63213);
var inst_63223 = cljs.core.seq(inst_63210__$1);
var inst_63224 = inst_63223;
var inst_63225 = null;
var inst_63226 = (0);
var inst_63227 = (0);
var state_63291__$1 = (function (){var statearr_63443 = state_63291;
(statearr_63443[(20)] = inst_63226);

(statearr_63443[(29)] = inst_63210__$1);

(statearr_63443[(9)] = inst_63225);

(statearr_63443[(21)] = inst_63224);

(statearr_63443[(30)] = inst_63217);

(statearr_63443[(11)] = inst_63227);

return statearr_63443;
})();
var statearr_63445_65256 = state_63291__$1;
(statearr_63445_65256[(2)] = null);

(statearr_63445_65256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (28))){
var inst_63224 = (state_63291[(21)]);
var inst_63247 = (state_63291[(25)]);
var inst_63247__$1 = cljs.core.seq(inst_63224);
var state_63291__$1 = (function (){var statearr_63447 = state_63291;
(statearr_63447[(25)] = inst_63247__$1);

return statearr_63447;
})();
if(inst_63247__$1){
var statearr_63448_65257 = state_63291__$1;
(statearr_63448_65257[(1)] = (33));

} else {
var statearr_63449_65258 = state_63291__$1;
(statearr_63449_65258[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (25))){
var inst_63226 = (state_63291[(20)]);
var inst_63227 = (state_63291[(11)]);
var inst_63231 = (inst_63227 < inst_63226);
var inst_63232 = inst_63231;
var state_63291__$1 = state_63291;
if(cljs.core.truth_(inst_63232)){
var statearr_63452_65259 = state_63291__$1;
(statearr_63452_65259[(1)] = (27));

} else {
var statearr_63454_65260 = state_63291__$1;
(statearr_63454_65260[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (34))){
var state_63291__$1 = state_63291;
var statearr_63456_65261 = state_63291__$1;
(statearr_63456_65261[(2)] = null);

(statearr_63456_65261[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (17))){
var state_63291__$1 = state_63291;
var statearr_63457_65262 = state_63291__$1;
(statearr_63457_65262[(2)] = null);

(statearr_63457_65262[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (3))){
var inst_63287 = (state_63291[(2)]);
var state_63291__$1 = state_63291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63291__$1,inst_63287);
} else {
if((state_val_63292 === (12))){
var inst_63205 = (state_63291[(2)]);
var state_63291__$1 = state_63291;
var statearr_63464_65269 = state_63291__$1;
(statearr_63464_65269[(2)] = inst_63205);

(statearr_63464_65269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (2))){
var state_63291__$1 = state_63291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63291__$1,(4),ch);
} else {
if((state_val_63292 === (23))){
var state_63291__$1 = state_63291;
var statearr_63465_65270 = state_63291__$1;
(statearr_63465_65270[(2)] = null);

(statearr_63465_65270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (35))){
var inst_63271 = (state_63291[(2)]);
var state_63291__$1 = state_63291;
var statearr_63467_65274 = state_63291__$1;
(statearr_63467_65274[(2)] = inst_63271);

(statearr_63467_65274[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (19))){
var inst_63177 = (state_63291[(7)]);
var inst_63181 = cljs.core.chunk_first(inst_63177);
var inst_63182 = cljs.core.chunk_rest(inst_63177);
var inst_63183 = cljs.core.count(inst_63181);
var inst_63151 = inst_63182;
var inst_63152 = inst_63181;
var inst_63153 = inst_63183;
var inst_63154 = (0);
var state_63291__$1 = (function (){var statearr_63471 = state_63291;
(statearr_63471[(13)] = inst_63152);

(statearr_63471[(14)] = inst_63151);

(statearr_63471[(15)] = inst_63154);

(statearr_63471[(16)] = inst_63153);

return statearr_63471;
})();
var statearr_63472_65275 = state_63291__$1;
(statearr_63472_65275[(2)] = null);

(statearr_63472_65275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (11))){
var inst_63177 = (state_63291[(7)]);
var inst_63151 = (state_63291[(14)]);
var inst_63177__$1 = cljs.core.seq(inst_63151);
var state_63291__$1 = (function (){var statearr_63474 = state_63291;
(statearr_63474[(7)] = inst_63177__$1);

return statearr_63474;
})();
if(inst_63177__$1){
var statearr_63475_65276 = state_63291__$1;
(statearr_63475_65276[(1)] = (16));

} else {
var statearr_63476_65277 = state_63291__$1;
(statearr_63476_65277[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (9))){
var inst_63207 = (state_63291[(2)]);
var state_63291__$1 = state_63291;
var statearr_63477_65278 = state_63291__$1;
(statearr_63477_65278[(2)] = inst_63207);

(statearr_63477_65278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (5))){
var inst_63149 = cljs.core.deref(cs);
var inst_63150 = cljs.core.seq(inst_63149);
var inst_63151 = inst_63150;
var inst_63152 = null;
var inst_63153 = (0);
var inst_63154 = (0);
var state_63291__$1 = (function (){var statearr_63481 = state_63291;
(statearr_63481[(13)] = inst_63152);

(statearr_63481[(14)] = inst_63151);

(statearr_63481[(15)] = inst_63154);

(statearr_63481[(16)] = inst_63153);

return statearr_63481;
})();
var statearr_63487_65279 = state_63291__$1;
(statearr_63487_65279[(2)] = null);

(statearr_63487_65279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (14))){
var state_63291__$1 = state_63291;
var statearr_63488_65280 = state_63291__$1;
(statearr_63488_65280[(2)] = null);

(statearr_63488_65280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (45))){
var inst_63279 = (state_63291[(2)]);
var state_63291__$1 = state_63291;
var statearr_63489_65281 = state_63291__$1;
(statearr_63489_65281[(2)] = inst_63279);

(statearr_63489_65281[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (26))){
var inst_63210 = (state_63291[(29)]);
var inst_63275 = (state_63291[(2)]);
var inst_63276 = cljs.core.seq(inst_63210);
var state_63291__$1 = (function (){var statearr_63490 = state_63291;
(statearr_63490[(31)] = inst_63275);

return statearr_63490;
})();
if(inst_63276){
var statearr_63491_65282 = state_63291__$1;
(statearr_63491_65282[(1)] = (42));

} else {
var statearr_63492_65283 = state_63291__$1;
(statearr_63492_65283[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (16))){
var inst_63177 = (state_63291[(7)]);
var inst_63179 = cljs.core.chunked_seq_QMARK_(inst_63177);
var state_63291__$1 = state_63291;
if(inst_63179){
var statearr_63497_65284 = state_63291__$1;
(statearr_63497_65284[(1)] = (19));

} else {
var statearr_63499_65285 = state_63291__$1;
(statearr_63499_65285[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (38))){
var inst_63268 = (state_63291[(2)]);
var state_63291__$1 = state_63291;
var statearr_63500_65286 = state_63291__$1;
(statearr_63500_65286[(2)] = inst_63268);

(statearr_63500_65286[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (30))){
var state_63291__$1 = state_63291;
var statearr_63502_65287 = state_63291__$1;
(statearr_63502_65287[(2)] = null);

(statearr_63502_65287[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (10))){
var inst_63152 = (state_63291[(13)]);
var inst_63154 = (state_63291[(15)]);
var inst_63166 = cljs.core._nth(inst_63152,inst_63154);
var inst_63167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63166,(0),null);
var inst_63168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63166,(1),null);
var state_63291__$1 = (function (){var statearr_63505 = state_63291;
(statearr_63505[(26)] = inst_63167);

return statearr_63505;
})();
if(cljs.core.truth_(inst_63168)){
var statearr_63509_65288 = state_63291__$1;
(statearr_63509_65288[(1)] = (13));

} else {
var statearr_63511_65289 = state_63291__$1;
(statearr_63511_65289[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (18))){
var inst_63203 = (state_63291[(2)]);
var state_63291__$1 = state_63291;
var statearr_63512_65296 = state_63291__$1;
(statearr_63512_65296[(2)] = inst_63203);

(statearr_63512_65296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (42))){
var state_63291__$1 = state_63291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63291__$1,(45),dchan);
} else {
if((state_val_63292 === (37))){
var inst_63257 = (state_63291[(23)]);
var inst_63137 = (state_63291[(10)]);
var inst_63247 = (state_63291[(25)]);
var inst_63257__$1 = cljs.core.first(inst_63247);
var inst_63258 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63257__$1,inst_63137,done);
var state_63291__$1 = (function (){var statearr_63513 = state_63291;
(statearr_63513[(23)] = inst_63257__$1);

return statearr_63513;
})();
if(cljs.core.truth_(inst_63258)){
var statearr_63514_65297 = state_63291__$1;
(statearr_63514_65297[(1)] = (39));

} else {
var statearr_63515_65298 = state_63291__$1;
(statearr_63515_65298[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63292 === (8))){
var inst_63154 = (state_63291[(15)]);
var inst_63153 = (state_63291[(16)]);
var inst_63156 = (inst_63154 < inst_63153);
var inst_63157 = inst_63156;
var state_63291__$1 = state_63291;
if(cljs.core.truth_(inst_63157)){
var statearr_63524_65299 = state_63291__$1;
(statearr_63524_65299[(1)] = (10));

} else {
var statearr_63527_65300 = state_63291__$1;
(statearr_63527_65300[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__61183__auto__ = null;
var cljs$core$async$mult_$_state_machine__61183__auto____0 = (function (){
var statearr_63544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63544[(0)] = cljs$core$async$mult_$_state_machine__61183__auto__);

(statearr_63544[(1)] = (1));

return statearr_63544;
});
var cljs$core$async$mult_$_state_machine__61183__auto____1 = (function (state_63291){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_63291);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e63545){if((e63545 instanceof Object)){
var ex__61186__auto__ = e63545;
var statearr_63546_65301 = state_63291;
(statearr_63546_65301[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63545;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65302 = state_63291;
state_63291 = G__65302;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__61183__auto__ = function(state_63291){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__61183__auto____1.call(this,state_63291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__61183__auto____0;
cljs$core$async$mult_$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__61183__auto____1;
return cljs$core$async$mult_$_state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_63552 = f__61501__auto__();
(statearr_63552[(6)] = c__61500__auto___65159);

return statearr_63552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__63557 = arguments.length;
switch (G__63557) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_65304 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_65304(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_65305 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_65305(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_65312 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_65312(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_65313 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_65313(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_65314 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_65314(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___65315 = arguments.length;
var i__4830__auto___65316 = (0);
while(true){
if((i__4830__auto___65316 < len__4829__auto___65315)){
args__4835__auto__.push((arguments[i__4830__auto___65316]));

var G__65317 = (i__4830__auto___65316 + (1));
i__4830__auto___65316 = G__65317;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__63581){
var map__63582 = p__63581;
var map__63582__$1 = cljs.core.__destructure_map(map__63582);
var opts = map__63582__$1;
var statearr_63583_65318 = state;
(statearr_63583_65318[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_63584_65319 = state;
(statearr_63584_65319[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_63585_65320 = state;
(statearr_63585_65320[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq63576){
var G__63577 = cljs.core.first(seq63576);
var seq63576__$1 = cljs.core.next(seq63576);
var G__63578 = cljs.core.first(seq63576__$1);
var seq63576__$2 = cljs.core.next(seq63576__$1);
var G__63579 = cljs.core.first(seq63576__$2);
var seq63576__$3 = cljs.core.next(seq63576__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63577,G__63578,G__63579,seq63576__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63591 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta63592){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta63592 = meta63592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63593,meta63592__$1){
var self__ = this;
var _63593__$1 = this;
return (new cljs.core.async.t_cljs$core$async63591(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta63592__$1));
}));

(cljs.core.async.t_cljs$core$async63591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63593){
var self__ = this;
var _63593__$1 = this;
return self__.meta63592;
}));

(cljs.core.async.t_cljs$core$async63591.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63591.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async63591.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63591.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63591.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63591.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63591.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63591.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async63591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta63592","meta63592",-1915410620,null)], null);
}));

(cljs.core.async.t_cljs$core$async63591.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63591");

(cljs.core.async.t_cljs$core$async63591.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async63591");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63591.
 */
cljs.core.async.__GT_t_cljs$core$async63591 = (function cljs$core$async$mix_$___GT_t_cljs$core$async63591(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63592){
return (new cljs.core.async.t_cljs$core$async63591(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63592));
});

}

return (new cljs.core.async.t_cljs$core$async63591(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__61500__auto___65333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_63666){
var state_val_63667 = (state_63666[(1)]);
if((state_val_63667 === (7))){
var inst_63626 = (state_63666[(2)]);
var state_63666__$1 = state_63666;
if(cljs.core.truth_(inst_63626)){
var statearr_63668_65338 = state_63666__$1;
(statearr_63668_65338[(1)] = (8));

} else {
var statearr_63669_65339 = state_63666__$1;
(statearr_63669_65339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (20))){
var inst_63618 = (state_63666[(7)]);
var state_63666__$1 = state_63666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63666__$1,(23),out,inst_63618);
} else {
if((state_val_63667 === (1))){
var inst_63600 = calc_state();
var inst_63601 = cljs.core.__destructure_map(inst_63600);
var inst_63603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63601,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63601,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63601,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_63606 = inst_63600;
var state_63666__$1 = (function (){var statearr_63671 = state_63666;
(statearr_63671[(8)] = inst_63603);

(statearr_63671[(9)] = inst_63604);

(statearr_63671[(10)] = inst_63605);

(statearr_63671[(11)] = inst_63606);

return statearr_63671;
})();
var statearr_63673_65340 = state_63666__$1;
(statearr_63673_65340[(2)] = null);

(statearr_63673_65340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (24))){
var inst_63609 = (state_63666[(12)]);
var inst_63606 = inst_63609;
var state_63666__$1 = (function (){var statearr_63674 = state_63666;
(statearr_63674[(11)] = inst_63606);

return statearr_63674;
})();
var statearr_63675_65341 = state_63666__$1;
(statearr_63675_65341[(2)] = null);

(statearr_63675_65341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (4))){
var inst_63620 = (state_63666[(13)]);
var inst_63618 = (state_63666[(7)]);
var inst_63617 = (state_63666[(2)]);
var inst_63618__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63617,(0),null);
var inst_63619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63617,(1),null);
var inst_63620__$1 = (inst_63618__$1 == null);
var state_63666__$1 = (function (){var statearr_63676 = state_63666;
(statearr_63676[(14)] = inst_63619);

(statearr_63676[(13)] = inst_63620__$1);

(statearr_63676[(7)] = inst_63618__$1);

return statearr_63676;
})();
if(cljs.core.truth_(inst_63620__$1)){
var statearr_63677_65342 = state_63666__$1;
(statearr_63677_65342[(1)] = (5));

} else {
var statearr_63678_65343 = state_63666__$1;
(statearr_63678_65343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (15))){
var inst_63640 = (state_63666[(15)]);
var inst_63610 = (state_63666[(16)]);
var inst_63640__$1 = cljs.core.empty_QMARK_(inst_63610);
var state_63666__$1 = (function (){var statearr_63680 = state_63666;
(statearr_63680[(15)] = inst_63640__$1);

return statearr_63680;
})();
if(inst_63640__$1){
var statearr_63681_65344 = state_63666__$1;
(statearr_63681_65344[(1)] = (17));

} else {
var statearr_63682_65345 = state_63666__$1;
(statearr_63682_65345[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (21))){
var inst_63609 = (state_63666[(12)]);
var inst_63606 = inst_63609;
var state_63666__$1 = (function (){var statearr_63683 = state_63666;
(statearr_63683[(11)] = inst_63606);

return statearr_63683;
})();
var statearr_63684_65346 = state_63666__$1;
(statearr_63684_65346[(2)] = null);

(statearr_63684_65346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (13))){
var inst_63633 = (state_63666[(2)]);
var inst_63634 = calc_state();
var inst_63606 = inst_63634;
var state_63666__$1 = (function (){var statearr_63685 = state_63666;
(statearr_63685[(17)] = inst_63633);

(statearr_63685[(11)] = inst_63606);

return statearr_63685;
})();
var statearr_63686_65347 = state_63666__$1;
(statearr_63686_65347[(2)] = null);

(statearr_63686_65347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (22))){
var inst_63660 = (state_63666[(2)]);
var state_63666__$1 = state_63666;
var statearr_63687_65348 = state_63666__$1;
(statearr_63687_65348[(2)] = inst_63660);

(statearr_63687_65348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (6))){
var inst_63619 = (state_63666[(14)]);
var inst_63624 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63619,change);
var state_63666__$1 = state_63666;
var statearr_63688_65349 = state_63666__$1;
(statearr_63688_65349[(2)] = inst_63624);

(statearr_63688_65349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (25))){
var state_63666__$1 = state_63666;
var statearr_63689_65351 = state_63666__$1;
(statearr_63689_65351[(2)] = null);

(statearr_63689_65351[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (17))){
var inst_63619 = (state_63666[(14)]);
var inst_63611 = (state_63666[(18)]);
var inst_63642 = (inst_63611.cljs$core$IFn$_invoke$arity$1 ? inst_63611.cljs$core$IFn$_invoke$arity$1(inst_63619) : inst_63611.call(null,inst_63619));
var inst_63643 = cljs.core.not(inst_63642);
var state_63666__$1 = state_63666;
var statearr_63691_65353 = state_63666__$1;
(statearr_63691_65353[(2)] = inst_63643);

(statearr_63691_65353[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (3))){
var inst_63664 = (state_63666[(2)]);
var state_63666__$1 = state_63666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63666__$1,inst_63664);
} else {
if((state_val_63667 === (12))){
var state_63666__$1 = state_63666;
var statearr_63692_65354 = state_63666__$1;
(statearr_63692_65354[(2)] = null);

(statearr_63692_65354[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (2))){
var inst_63609 = (state_63666[(12)]);
var inst_63606 = (state_63666[(11)]);
var inst_63609__$1 = cljs.core.__destructure_map(inst_63606);
var inst_63610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63609__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63609__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63609__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_63666__$1 = (function (){var statearr_63693 = state_63666;
(statearr_63693[(16)] = inst_63610);

(statearr_63693[(18)] = inst_63611);

(statearr_63693[(12)] = inst_63609__$1);

return statearr_63693;
})();
return cljs.core.async.ioc_alts_BANG_(state_63666__$1,(4),inst_63612);
} else {
if((state_val_63667 === (23))){
var inst_63651 = (state_63666[(2)]);
var state_63666__$1 = state_63666;
if(cljs.core.truth_(inst_63651)){
var statearr_63694_65355 = state_63666__$1;
(statearr_63694_65355[(1)] = (24));

} else {
var statearr_63695_65356 = state_63666__$1;
(statearr_63695_65356[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (19))){
var inst_63646 = (state_63666[(2)]);
var state_63666__$1 = state_63666;
var statearr_63697_65357 = state_63666__$1;
(statearr_63697_65357[(2)] = inst_63646);

(statearr_63697_65357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (11))){
var inst_63619 = (state_63666[(14)]);
var inst_63630 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_63619);
var state_63666__$1 = state_63666;
var statearr_63698_65360 = state_63666__$1;
(statearr_63698_65360[(2)] = inst_63630);

(statearr_63698_65360[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (9))){
var inst_63619 = (state_63666[(14)]);
var inst_63610 = (state_63666[(16)]);
var inst_63637 = (state_63666[(19)]);
var inst_63637__$1 = (inst_63610.cljs$core$IFn$_invoke$arity$1 ? inst_63610.cljs$core$IFn$_invoke$arity$1(inst_63619) : inst_63610.call(null,inst_63619));
var state_63666__$1 = (function (){var statearr_63699 = state_63666;
(statearr_63699[(19)] = inst_63637__$1);

return statearr_63699;
})();
if(cljs.core.truth_(inst_63637__$1)){
var statearr_63700_65363 = state_63666__$1;
(statearr_63700_65363[(1)] = (14));

} else {
var statearr_63701_65364 = state_63666__$1;
(statearr_63701_65364[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (5))){
var inst_63620 = (state_63666[(13)]);
var state_63666__$1 = state_63666;
var statearr_63702_65367 = state_63666__$1;
(statearr_63702_65367[(2)] = inst_63620);

(statearr_63702_65367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (14))){
var inst_63637 = (state_63666[(19)]);
var state_63666__$1 = state_63666;
var statearr_63706_65368 = state_63666__$1;
(statearr_63706_65368[(2)] = inst_63637);

(statearr_63706_65368[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (26))){
var inst_63656 = (state_63666[(2)]);
var state_63666__$1 = state_63666;
var statearr_63707_65369 = state_63666__$1;
(statearr_63707_65369[(2)] = inst_63656);

(statearr_63707_65369[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (16))){
var inst_63648 = (state_63666[(2)]);
var state_63666__$1 = state_63666;
if(cljs.core.truth_(inst_63648)){
var statearr_63712_65372 = state_63666__$1;
(statearr_63712_65372[(1)] = (20));

} else {
var statearr_63714_65374 = state_63666__$1;
(statearr_63714_65374[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (10))){
var inst_63662 = (state_63666[(2)]);
var state_63666__$1 = state_63666;
var statearr_63718_65375 = state_63666__$1;
(statearr_63718_65375[(2)] = inst_63662);

(statearr_63718_65375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (18))){
var inst_63640 = (state_63666[(15)]);
var state_63666__$1 = state_63666;
var statearr_63719_65376 = state_63666__$1;
(statearr_63719_65376[(2)] = inst_63640);

(statearr_63719_65376[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63667 === (8))){
var inst_63618 = (state_63666[(7)]);
var inst_63628 = (inst_63618 == null);
var state_63666__$1 = state_63666;
if(cljs.core.truth_(inst_63628)){
var statearr_63720_65378 = state_63666__$1;
(statearr_63720_65378[(1)] = (11));

} else {
var statearr_63721_65380 = state_63666__$1;
(statearr_63721_65380[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__61183__auto__ = null;
var cljs$core$async$mix_$_state_machine__61183__auto____0 = (function (){
var statearr_63724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63724[(0)] = cljs$core$async$mix_$_state_machine__61183__auto__);

(statearr_63724[(1)] = (1));

return statearr_63724;
});
var cljs$core$async$mix_$_state_machine__61183__auto____1 = (function (state_63666){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_63666);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e63725){if((e63725 instanceof Object)){
var ex__61186__auto__ = e63725;
var statearr_63726_65382 = state_63666;
(statearr_63726_65382[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65383 = state_63666;
state_63666 = G__65383;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__61183__auto__ = function(state_63666){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__61183__auto____1.call(this,state_63666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__61183__auto____0;
cljs$core$async$mix_$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__61183__auto____1;
return cljs$core$async$mix_$_state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_63728 = f__61501__auto__();
(statearr_63728[(6)] = c__61500__auto___65333);

return statearr_63728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_65386 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_65386(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_65389 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_65389(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_65390 = (function() {
var G__65391 = null;
var G__65391__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__65391__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__65391 = function(p,v){
switch(arguments.length){
case 1:
return G__65391__1.call(this,p);
case 2:
return G__65391__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65391.cljs$core$IFn$_invoke$arity$1 = G__65391__1;
G__65391.cljs$core$IFn$_invoke$arity$2 = G__65391__2;
return G__65391;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__63740 = arguments.length;
switch (G__63740) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_65390(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_65390(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__63747 = arguments.length;
switch (G__63747) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__63745_SHARP_){
if(cljs.core.truth_((p1__63745_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__63745_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__63745_SHARP_.call(null,topic)))){
return p1__63745_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63745_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63749 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta63750){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta63750 = meta63750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63751,meta63750__$1){
var self__ = this;
var _63751__$1 = this;
return (new cljs.core.async.t_cljs$core$async63749(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta63750__$1));
}));

(cljs.core.async.t_cljs$core$async63749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63751){
var self__ = this;
var _63751__$1 = this;
return self__.meta63750;
}));

(cljs.core.async.t_cljs$core$async63749.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63749.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63749.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async63749.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async63749.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async63749.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async63749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta63750","meta63750",-2010733445,null)], null);
}));

(cljs.core.async.t_cljs$core$async63749.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63749");

(cljs.core.async.t_cljs$core$async63749.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async63749");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63749.
 */
cljs.core.async.__GT_t_cljs$core$async63749 = (function cljs$core$async$__GT_t_cljs$core$async63749(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63750){
return (new cljs.core.async.t_cljs$core$async63749(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63750));
});

}

return (new cljs.core.async.t_cljs$core$async63749(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__61500__auto___65408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_63826){
var state_val_63827 = (state_63826[(1)]);
if((state_val_63827 === (7))){
var inst_63822 = (state_63826[(2)]);
var state_63826__$1 = state_63826;
var statearr_63828_65409 = state_63826__$1;
(statearr_63828_65409[(2)] = inst_63822);

(statearr_63828_65409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (20))){
var state_63826__$1 = state_63826;
var statearr_63829_65410 = state_63826__$1;
(statearr_63829_65410[(2)] = null);

(statearr_63829_65410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (1))){
var state_63826__$1 = state_63826;
var statearr_63831_65411 = state_63826__$1;
(statearr_63831_65411[(2)] = null);

(statearr_63831_65411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (24))){
var inst_63805 = (state_63826[(7)]);
var inst_63814 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_63805);
var state_63826__$1 = state_63826;
var statearr_63832_65412 = state_63826__$1;
(statearr_63832_65412[(2)] = inst_63814);

(statearr_63832_65412[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (4))){
var inst_63756 = (state_63826[(8)]);
var inst_63756__$1 = (state_63826[(2)]);
var inst_63757 = (inst_63756__$1 == null);
var state_63826__$1 = (function (){var statearr_63833 = state_63826;
(statearr_63833[(8)] = inst_63756__$1);

return statearr_63833;
})();
if(cljs.core.truth_(inst_63757)){
var statearr_63834_65413 = state_63826__$1;
(statearr_63834_65413[(1)] = (5));

} else {
var statearr_63835_65414 = state_63826__$1;
(statearr_63835_65414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (15))){
var inst_63799 = (state_63826[(2)]);
var state_63826__$1 = state_63826;
var statearr_63836_65417 = state_63826__$1;
(statearr_63836_65417[(2)] = inst_63799);

(statearr_63836_65417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (21))){
var inst_63819 = (state_63826[(2)]);
var state_63826__$1 = (function (){var statearr_63837 = state_63826;
(statearr_63837[(9)] = inst_63819);

return statearr_63837;
})();
var statearr_63838_65419 = state_63826__$1;
(statearr_63838_65419[(2)] = null);

(statearr_63838_65419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (13))){
var inst_63780 = (state_63826[(10)]);
var inst_63782 = cljs.core.chunked_seq_QMARK_(inst_63780);
var state_63826__$1 = state_63826;
if(inst_63782){
var statearr_63839_65422 = state_63826__$1;
(statearr_63839_65422[(1)] = (16));

} else {
var statearr_63840_65423 = state_63826__$1;
(statearr_63840_65423[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (22))){
var inst_63811 = (state_63826[(2)]);
var state_63826__$1 = state_63826;
if(cljs.core.truth_(inst_63811)){
var statearr_63841_65428 = state_63826__$1;
(statearr_63841_65428[(1)] = (23));

} else {
var statearr_63842_65429 = state_63826__$1;
(statearr_63842_65429[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (6))){
var inst_63756 = (state_63826[(8)]);
var inst_63805 = (state_63826[(7)]);
var inst_63807 = (state_63826[(11)]);
var inst_63805__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_63756) : topic_fn.call(null,inst_63756));
var inst_63806 = cljs.core.deref(mults);
var inst_63807__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63806,inst_63805__$1);
var state_63826__$1 = (function (){var statearr_63844 = state_63826;
(statearr_63844[(7)] = inst_63805__$1);

(statearr_63844[(11)] = inst_63807__$1);

return statearr_63844;
})();
if(cljs.core.truth_(inst_63807__$1)){
var statearr_63845_65437 = state_63826__$1;
(statearr_63845_65437[(1)] = (19));

} else {
var statearr_63846_65439 = state_63826__$1;
(statearr_63846_65439[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (25))){
var inst_63816 = (state_63826[(2)]);
var state_63826__$1 = state_63826;
var statearr_63847_65445 = state_63826__$1;
(statearr_63847_65445[(2)] = inst_63816);

(statearr_63847_65445[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (17))){
var inst_63780 = (state_63826[(10)]);
var inst_63789 = cljs.core.first(inst_63780);
var inst_63791 = cljs.core.async.muxch_STAR_(inst_63789);
var inst_63792 = cljs.core.async.close_BANG_(inst_63791);
var inst_63793 = cljs.core.next(inst_63780);
var inst_63766 = inst_63793;
var inst_63767 = null;
var inst_63768 = (0);
var inst_63769 = (0);
var state_63826__$1 = (function (){var statearr_63848 = state_63826;
(statearr_63848[(12)] = inst_63792);

(statearr_63848[(13)] = inst_63767);

(statearr_63848[(14)] = inst_63769);

(statearr_63848[(15)] = inst_63768);

(statearr_63848[(16)] = inst_63766);

return statearr_63848;
})();
var statearr_63849_65454 = state_63826__$1;
(statearr_63849_65454[(2)] = null);

(statearr_63849_65454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (3))){
var inst_63824 = (state_63826[(2)]);
var state_63826__$1 = state_63826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63826__$1,inst_63824);
} else {
if((state_val_63827 === (12))){
var inst_63801 = (state_63826[(2)]);
var state_63826__$1 = state_63826;
var statearr_63851_65455 = state_63826__$1;
(statearr_63851_65455[(2)] = inst_63801);

(statearr_63851_65455[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (2))){
var state_63826__$1 = state_63826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63826__$1,(4),ch);
} else {
if((state_val_63827 === (23))){
var state_63826__$1 = state_63826;
var statearr_63852_65456 = state_63826__$1;
(statearr_63852_65456[(2)] = null);

(statearr_63852_65456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (19))){
var inst_63756 = (state_63826[(8)]);
var inst_63807 = (state_63826[(11)]);
var inst_63809 = cljs.core.async.muxch_STAR_(inst_63807);
var state_63826__$1 = state_63826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63826__$1,(22),inst_63809,inst_63756);
} else {
if((state_val_63827 === (11))){
var inst_63780 = (state_63826[(10)]);
var inst_63766 = (state_63826[(16)]);
var inst_63780__$1 = cljs.core.seq(inst_63766);
var state_63826__$1 = (function (){var statearr_63853 = state_63826;
(statearr_63853[(10)] = inst_63780__$1);

return statearr_63853;
})();
if(inst_63780__$1){
var statearr_63854_65469 = state_63826__$1;
(statearr_63854_65469[(1)] = (13));

} else {
var statearr_63855_65471 = state_63826__$1;
(statearr_63855_65471[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (9))){
var inst_63803 = (state_63826[(2)]);
var state_63826__$1 = state_63826;
var statearr_63856_65477 = state_63826__$1;
(statearr_63856_65477[(2)] = inst_63803);

(statearr_63856_65477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (5))){
var inst_63763 = cljs.core.deref(mults);
var inst_63764 = cljs.core.vals(inst_63763);
var inst_63765 = cljs.core.seq(inst_63764);
var inst_63766 = inst_63765;
var inst_63767 = null;
var inst_63768 = (0);
var inst_63769 = (0);
var state_63826__$1 = (function (){var statearr_63858 = state_63826;
(statearr_63858[(13)] = inst_63767);

(statearr_63858[(14)] = inst_63769);

(statearr_63858[(15)] = inst_63768);

(statearr_63858[(16)] = inst_63766);

return statearr_63858;
})();
var statearr_63859_65481 = state_63826__$1;
(statearr_63859_65481[(2)] = null);

(statearr_63859_65481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (14))){
var state_63826__$1 = state_63826;
var statearr_63863_65482 = state_63826__$1;
(statearr_63863_65482[(2)] = null);

(statearr_63863_65482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (16))){
var inst_63780 = (state_63826[(10)]);
var inst_63784 = cljs.core.chunk_first(inst_63780);
var inst_63785 = cljs.core.chunk_rest(inst_63780);
var inst_63786 = cljs.core.count(inst_63784);
var inst_63766 = inst_63785;
var inst_63767 = inst_63784;
var inst_63768 = inst_63786;
var inst_63769 = (0);
var state_63826__$1 = (function (){var statearr_63864 = state_63826;
(statearr_63864[(13)] = inst_63767);

(statearr_63864[(14)] = inst_63769);

(statearr_63864[(15)] = inst_63768);

(statearr_63864[(16)] = inst_63766);

return statearr_63864;
})();
var statearr_63865_65486 = state_63826__$1;
(statearr_63865_65486[(2)] = null);

(statearr_63865_65486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (10))){
var inst_63767 = (state_63826[(13)]);
var inst_63769 = (state_63826[(14)]);
var inst_63768 = (state_63826[(15)]);
var inst_63766 = (state_63826[(16)]);
var inst_63774 = cljs.core._nth(inst_63767,inst_63769);
var inst_63775 = cljs.core.async.muxch_STAR_(inst_63774);
var inst_63776 = cljs.core.async.close_BANG_(inst_63775);
var inst_63777 = (inst_63769 + (1));
var tmp63860 = inst_63767;
var tmp63861 = inst_63768;
var tmp63862 = inst_63766;
var inst_63766__$1 = tmp63862;
var inst_63767__$1 = tmp63860;
var inst_63768__$1 = tmp63861;
var inst_63769__$1 = inst_63777;
var state_63826__$1 = (function (){var statearr_63867 = state_63826;
(statearr_63867[(13)] = inst_63767__$1);

(statearr_63867[(14)] = inst_63769__$1);

(statearr_63867[(15)] = inst_63768__$1);

(statearr_63867[(16)] = inst_63766__$1);

(statearr_63867[(17)] = inst_63776);

return statearr_63867;
})();
var statearr_63868_65500 = state_63826__$1;
(statearr_63868_65500[(2)] = null);

(statearr_63868_65500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (18))){
var inst_63796 = (state_63826[(2)]);
var state_63826__$1 = state_63826;
var statearr_63869_65504 = state_63826__$1;
(statearr_63869_65504[(2)] = inst_63796);

(statearr_63869_65504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63827 === (8))){
var inst_63769 = (state_63826[(14)]);
var inst_63768 = (state_63826[(15)]);
var inst_63771 = (inst_63769 < inst_63768);
var inst_63772 = inst_63771;
var state_63826__$1 = state_63826;
if(cljs.core.truth_(inst_63772)){
var statearr_63870_65512 = state_63826__$1;
(statearr_63870_65512[(1)] = (10));

} else {
var statearr_63871_65517 = state_63826__$1;
(statearr_63871_65517[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61183__auto__ = null;
var cljs$core$async$state_machine__61183__auto____0 = (function (){
var statearr_63872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63872[(0)] = cljs$core$async$state_machine__61183__auto__);

(statearr_63872[(1)] = (1));

return statearr_63872;
});
var cljs$core$async$state_machine__61183__auto____1 = (function (state_63826){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_63826);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e63874){if((e63874 instanceof Object)){
var ex__61186__auto__ = e63874;
var statearr_63875_65521 = state_63826;
(statearr_63875_65521[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65522 = state_63826;
state_63826 = G__65522;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$state_machine__61183__auto__ = function(state_63826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61183__auto____1.call(this,state_63826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61183__auto____0;
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61183__auto____1;
return cljs$core$async$state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_63876 = f__61501__auto__();
(statearr_63876[(6)] = c__61500__auto___65408);

return statearr_63876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__63878 = arguments.length;
switch (G__63878) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__63881 = arguments.length;
switch (G__63881) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__63884 = arguments.length;
switch (G__63884) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__61500__auto___65539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_63928){
var state_val_63929 = (state_63928[(1)]);
if((state_val_63929 === (7))){
var state_63928__$1 = state_63928;
var statearr_63930_65542 = state_63928__$1;
(statearr_63930_65542[(2)] = null);

(statearr_63930_65542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63929 === (1))){
var state_63928__$1 = state_63928;
var statearr_63931_65544 = state_63928__$1;
(statearr_63931_65544[(2)] = null);

(statearr_63931_65544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63929 === (4))){
var inst_63890 = (state_63928[(7)]);
var inst_63892 = (inst_63890 < cnt);
var state_63928__$1 = state_63928;
if(cljs.core.truth_(inst_63892)){
var statearr_63932_65546 = state_63928__$1;
(statearr_63932_65546[(1)] = (6));

} else {
var statearr_63933_65547 = state_63928__$1;
(statearr_63933_65547[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63929 === (15))){
var inst_63922 = (state_63928[(2)]);
var state_63928__$1 = state_63928;
var statearr_63934_65548 = state_63928__$1;
(statearr_63934_65548[(2)] = inst_63922);

(statearr_63934_65548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63929 === (13))){
var inst_63915 = cljs.core.async.close_BANG_(out);
var state_63928__$1 = state_63928;
var statearr_63935_65549 = state_63928__$1;
(statearr_63935_65549[(2)] = inst_63915);

(statearr_63935_65549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63929 === (6))){
var state_63928__$1 = state_63928;
var statearr_63936_65553 = state_63928__$1;
(statearr_63936_65553[(2)] = null);

(statearr_63936_65553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63929 === (3))){
var inst_63924 = (state_63928[(2)]);
var state_63928__$1 = state_63928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63928__$1,inst_63924);
} else {
if((state_val_63929 === (12))){
var inst_63912 = (state_63928[(8)]);
var inst_63912__$1 = (state_63928[(2)]);
var inst_63913 = cljs.core.some(cljs.core.nil_QMARK_,inst_63912__$1);
var state_63928__$1 = (function (){var statearr_63937 = state_63928;
(statearr_63937[(8)] = inst_63912__$1);

return statearr_63937;
})();
if(cljs.core.truth_(inst_63913)){
var statearr_63938_65556 = state_63928__$1;
(statearr_63938_65556[(1)] = (13));

} else {
var statearr_63939_65557 = state_63928__$1;
(statearr_63939_65557[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63929 === (2))){
var inst_63889 = cljs.core.reset_BANG_(dctr,cnt);
var inst_63890 = (0);
var state_63928__$1 = (function (){var statearr_63940 = state_63928;
(statearr_63940[(7)] = inst_63890);

(statearr_63940[(9)] = inst_63889);

return statearr_63940;
})();
var statearr_63942_65558 = state_63928__$1;
(statearr_63942_65558[(2)] = null);

(statearr_63942_65558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63929 === (11))){
var inst_63890 = (state_63928[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_63928,(10),Object,null,(9));
var inst_63899 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_63890) : chs__$1.call(null,inst_63890));
var inst_63900 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_63890) : done.call(null,inst_63890));
var inst_63901 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_63899,inst_63900);
var state_63928__$1 = state_63928;
var statearr_63944_65559 = state_63928__$1;
(statearr_63944_65559[(2)] = inst_63901);


cljs.core.async.impl.ioc_helpers.process_exception(state_63928__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63929 === (9))){
var inst_63890 = (state_63928[(7)]);
var inst_63903 = (state_63928[(2)]);
var inst_63904 = (inst_63890 + (1));
var inst_63890__$1 = inst_63904;
var state_63928__$1 = (function (){var statearr_63945 = state_63928;
(statearr_63945[(7)] = inst_63890__$1);

(statearr_63945[(10)] = inst_63903);

return statearr_63945;
})();
var statearr_63946_65560 = state_63928__$1;
(statearr_63946_65560[(2)] = null);

(statearr_63946_65560[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63929 === (5))){
var inst_63910 = (state_63928[(2)]);
var state_63928__$1 = (function (){var statearr_63947 = state_63928;
(statearr_63947[(11)] = inst_63910);

return statearr_63947;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63928__$1,(12),dchan);
} else {
if((state_val_63929 === (14))){
var inst_63912 = (state_63928[(8)]);
var inst_63917 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_63912);
var state_63928__$1 = state_63928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63928__$1,(16),out,inst_63917);
} else {
if((state_val_63929 === (16))){
var inst_63919 = (state_63928[(2)]);
var state_63928__$1 = (function (){var statearr_63948 = state_63928;
(statearr_63948[(12)] = inst_63919);

return statearr_63948;
})();
var statearr_63949_65563 = state_63928__$1;
(statearr_63949_65563[(2)] = null);

(statearr_63949_65563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63929 === (10))){
var inst_63894 = (state_63928[(2)]);
var inst_63895 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_63928__$1 = (function (){var statearr_63950 = state_63928;
(statearr_63950[(13)] = inst_63894);

return statearr_63950;
})();
var statearr_63951_65564 = state_63928__$1;
(statearr_63951_65564[(2)] = inst_63895);


cljs.core.async.impl.ioc_helpers.process_exception(state_63928__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63929 === (8))){
var inst_63908 = (state_63928[(2)]);
var state_63928__$1 = state_63928;
var statearr_63952_65565 = state_63928__$1;
(statearr_63952_65565[(2)] = inst_63908);

(statearr_63952_65565[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61183__auto__ = null;
var cljs$core$async$state_machine__61183__auto____0 = (function (){
var statearr_63953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63953[(0)] = cljs$core$async$state_machine__61183__auto__);

(statearr_63953[(1)] = (1));

return statearr_63953;
});
var cljs$core$async$state_machine__61183__auto____1 = (function (state_63928){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_63928);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e63954){if((e63954 instanceof Object)){
var ex__61186__auto__ = e63954;
var statearr_63955_65574 = state_63928;
(statearr_63955_65574[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65575 = state_63928;
state_63928 = G__65575;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$state_machine__61183__auto__ = function(state_63928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61183__auto____1.call(this,state_63928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61183__auto____0;
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61183__auto____1;
return cljs$core$async$state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_63956 = f__61501__auto__();
(statearr_63956[(6)] = c__61500__auto___65539);

return statearr_63956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__63965 = arguments.length;
switch (G__63965) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61500__auto___65577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_64004){
var state_val_64005 = (state_64004[(1)]);
if((state_val_64005 === (7))){
var inst_63980 = (state_64004[(7)]);
var inst_63979 = (state_64004[(8)]);
var inst_63979__$1 = (state_64004[(2)]);
var inst_63980__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63979__$1,(0),null);
var inst_63981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63979__$1,(1),null);
var inst_63982 = (inst_63980__$1 == null);
var state_64004__$1 = (function (){var statearr_64011 = state_64004;
(statearr_64011[(9)] = inst_63981);

(statearr_64011[(7)] = inst_63980__$1);

(statearr_64011[(8)] = inst_63979__$1);

return statearr_64011;
})();
if(cljs.core.truth_(inst_63982)){
var statearr_64012_65578 = state_64004__$1;
(statearr_64012_65578[(1)] = (8));

} else {
var statearr_64015_65579 = state_64004__$1;
(statearr_64015_65579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (1))){
var inst_63969 = cljs.core.vec(chs);
var inst_63970 = inst_63969;
var state_64004__$1 = (function (){var statearr_64017 = state_64004;
(statearr_64017[(10)] = inst_63970);

return statearr_64017;
})();
var statearr_64018_65580 = state_64004__$1;
(statearr_64018_65580[(2)] = null);

(statearr_64018_65580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (4))){
var inst_63970 = (state_64004[(10)]);
var state_64004__$1 = state_64004;
return cljs.core.async.ioc_alts_BANG_(state_64004__$1,(7),inst_63970);
} else {
if((state_val_64005 === (6))){
var inst_63999 = (state_64004[(2)]);
var state_64004__$1 = state_64004;
var statearr_64023_65581 = state_64004__$1;
(statearr_64023_65581[(2)] = inst_63999);

(statearr_64023_65581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (3))){
var inst_64001 = (state_64004[(2)]);
var state_64004__$1 = state_64004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64004__$1,inst_64001);
} else {
if((state_val_64005 === (2))){
var inst_63970 = (state_64004[(10)]);
var inst_63972 = cljs.core.count(inst_63970);
var inst_63973 = (inst_63972 > (0));
var state_64004__$1 = state_64004;
if(cljs.core.truth_(inst_63973)){
var statearr_64029_65588 = state_64004__$1;
(statearr_64029_65588[(1)] = (4));

} else {
var statearr_64030_65589 = state_64004__$1;
(statearr_64030_65589[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (11))){
var inst_63970 = (state_64004[(10)]);
var inst_63990 = (state_64004[(2)]);
var tmp64024 = inst_63970;
var inst_63970__$1 = tmp64024;
var state_64004__$1 = (function (){var statearr_64032 = state_64004;
(statearr_64032[(10)] = inst_63970__$1);

(statearr_64032[(11)] = inst_63990);

return statearr_64032;
})();
var statearr_64034_65591 = state_64004__$1;
(statearr_64034_65591[(2)] = null);

(statearr_64034_65591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (9))){
var inst_63980 = (state_64004[(7)]);
var state_64004__$1 = state_64004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64004__$1,(11),out,inst_63980);
} else {
if((state_val_64005 === (5))){
var inst_63997 = cljs.core.async.close_BANG_(out);
var state_64004__$1 = state_64004;
var statearr_64041_65592 = state_64004__$1;
(statearr_64041_65592[(2)] = inst_63997);

(statearr_64041_65592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (10))){
var inst_63993 = (state_64004[(2)]);
var state_64004__$1 = state_64004;
var statearr_64043_65593 = state_64004__$1;
(statearr_64043_65593[(2)] = inst_63993);

(statearr_64043_65593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (8))){
var inst_63970 = (state_64004[(10)]);
var inst_63981 = (state_64004[(9)]);
var inst_63980 = (state_64004[(7)]);
var inst_63979 = (state_64004[(8)]);
var inst_63985 = (function (){var cs = inst_63970;
var vec__63975 = inst_63979;
var v = inst_63980;
var c = inst_63981;
return (function (p1__63960_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__63960_SHARP_);
});
})();
var inst_63986 = cljs.core.filterv(inst_63985,inst_63970);
var inst_63970__$1 = inst_63986;
var state_64004__$1 = (function (){var statearr_64048 = state_64004;
(statearr_64048[(10)] = inst_63970__$1);

return statearr_64048;
})();
var statearr_64049_65606 = state_64004__$1;
(statearr_64049_65606[(2)] = null);

(statearr_64049_65606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61183__auto__ = null;
var cljs$core$async$state_machine__61183__auto____0 = (function (){
var statearr_64053 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64053[(0)] = cljs$core$async$state_machine__61183__auto__);

(statearr_64053[(1)] = (1));

return statearr_64053;
});
var cljs$core$async$state_machine__61183__auto____1 = (function (state_64004){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_64004);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e64055){if((e64055 instanceof Object)){
var ex__61186__auto__ = e64055;
var statearr_64058_65607 = state_64004;
(statearr_64058_65607[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65608 = state_64004;
state_64004 = G__65608;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$state_machine__61183__auto__ = function(state_64004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61183__auto____1.call(this,state_64004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61183__auto____0;
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61183__auto____1;
return cljs$core$async$state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_64061 = f__61501__auto__();
(statearr_64061[(6)] = c__61500__auto___65577);

return statearr_64061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__64070 = arguments.length;
switch (G__64070) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61500__auto___65618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_64103){
var state_val_64104 = (state_64103[(1)]);
if((state_val_64104 === (7))){
var inst_64081 = (state_64103[(7)]);
var inst_64081__$1 = (state_64103[(2)]);
var inst_64082 = (inst_64081__$1 == null);
var inst_64083 = cljs.core.not(inst_64082);
var state_64103__$1 = (function (){var statearr_64109 = state_64103;
(statearr_64109[(7)] = inst_64081__$1);

return statearr_64109;
})();
if(inst_64083){
var statearr_64110_65619 = state_64103__$1;
(statearr_64110_65619[(1)] = (8));

} else {
var statearr_64112_65620 = state_64103__$1;
(statearr_64112_65620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64104 === (1))){
var inst_64076 = (0);
var state_64103__$1 = (function (){var statearr_64113 = state_64103;
(statearr_64113[(8)] = inst_64076);

return statearr_64113;
})();
var statearr_64114_65621 = state_64103__$1;
(statearr_64114_65621[(2)] = null);

(statearr_64114_65621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64104 === (4))){
var state_64103__$1 = state_64103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64103__$1,(7),ch);
} else {
if((state_val_64104 === (6))){
var inst_64097 = (state_64103[(2)]);
var state_64103__$1 = state_64103;
var statearr_64120_65622 = state_64103__$1;
(statearr_64120_65622[(2)] = inst_64097);

(statearr_64120_65622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64104 === (3))){
var inst_64099 = (state_64103[(2)]);
var inst_64100 = cljs.core.async.close_BANG_(out);
var state_64103__$1 = (function (){var statearr_64124 = state_64103;
(statearr_64124[(9)] = inst_64099);

return statearr_64124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64103__$1,inst_64100);
} else {
if((state_val_64104 === (2))){
var inst_64076 = (state_64103[(8)]);
var inst_64078 = (inst_64076 < n);
var state_64103__$1 = state_64103;
if(cljs.core.truth_(inst_64078)){
var statearr_64126_65623 = state_64103__$1;
(statearr_64126_65623[(1)] = (4));

} else {
var statearr_64127_65624 = state_64103__$1;
(statearr_64127_65624[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64104 === (11))){
var inst_64076 = (state_64103[(8)]);
var inst_64088 = (state_64103[(2)]);
var inst_64089 = (inst_64076 + (1));
var inst_64076__$1 = inst_64089;
var state_64103__$1 = (function (){var statearr_64132 = state_64103;
(statearr_64132[(10)] = inst_64088);

(statearr_64132[(8)] = inst_64076__$1);

return statearr_64132;
})();
var statearr_64133_65625 = state_64103__$1;
(statearr_64133_65625[(2)] = null);

(statearr_64133_65625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64104 === (9))){
var state_64103__$1 = state_64103;
var statearr_64135_65626 = state_64103__$1;
(statearr_64135_65626[(2)] = null);

(statearr_64135_65626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64104 === (5))){
var state_64103__$1 = state_64103;
var statearr_64137_65627 = state_64103__$1;
(statearr_64137_65627[(2)] = null);

(statearr_64137_65627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64104 === (10))){
var inst_64093 = (state_64103[(2)]);
var state_64103__$1 = state_64103;
var statearr_64140_65628 = state_64103__$1;
(statearr_64140_65628[(2)] = inst_64093);

(statearr_64140_65628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64104 === (8))){
var inst_64081 = (state_64103[(7)]);
var state_64103__$1 = state_64103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64103__$1,(11),out,inst_64081);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61183__auto__ = null;
var cljs$core$async$state_machine__61183__auto____0 = (function (){
var statearr_64145 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64145[(0)] = cljs$core$async$state_machine__61183__auto__);

(statearr_64145[(1)] = (1));

return statearr_64145;
});
var cljs$core$async$state_machine__61183__auto____1 = (function (state_64103){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_64103);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e64146){if((e64146 instanceof Object)){
var ex__61186__auto__ = e64146;
var statearr_64148_65629 = state_64103;
(statearr_64148_65629[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65630 = state_64103;
state_64103 = G__65630;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$state_machine__61183__auto__ = function(state_64103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61183__auto____1.call(this,state_64103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61183__auto____0;
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61183__auto____1;
return cljs$core$async$state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_64152 = f__61501__auto__();
(statearr_64152[(6)] = c__61500__auto___65618);

return statearr_64152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64159 = (function (f,ch,meta64160){
this.f = f;
this.ch = ch;
this.meta64160 = meta64160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64161,meta64160__$1){
var self__ = this;
var _64161__$1 = this;
return (new cljs.core.async.t_cljs$core$async64159(self__.f,self__.ch,meta64160__$1));
}));

(cljs.core.async.t_cljs$core$async64159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64161){
var self__ = this;
var _64161__$1 = this;
return self__.meta64160;
}));

(cljs.core.async.t_cljs$core$async64159.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64159.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64159.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64159.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64159.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64174 = (function (f,ch,meta64160,_,fn1,meta64175){
this.f = f;
this.ch = ch;
this.meta64160 = meta64160;
this._ = _;
this.fn1 = fn1;
this.meta64175 = meta64175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64176,meta64175__$1){
var self__ = this;
var _64176__$1 = this;
return (new cljs.core.async.t_cljs$core$async64174(self__.f,self__.ch,self__.meta64160,self__._,self__.fn1,meta64175__$1));
}));

(cljs.core.async.t_cljs$core$async64174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64176){
var self__ = this;
var _64176__$1 = this;
return self__.meta64175;
}));

(cljs.core.async.t_cljs$core$async64174.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async64174.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async64174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__64155_SHARP_){
var G__64190 = (((p1__64155_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__64155_SHARP_) : self__.f.call(null,p1__64155_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__64190) : f1.call(null,G__64190));
});
}));

(cljs.core.async.t_cljs$core$async64174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64160","meta64160",-719764840,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async64159","cljs.core.async/t_cljs$core$async64159",1118255205,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta64175","meta64175",184229739,null)], null);
}));

(cljs.core.async.t_cljs$core$async64174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64174");

(cljs.core.async.t_cljs$core$async64174.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async64174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64174.
 */
cljs.core.async.__GT_t_cljs$core$async64174 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async64174(f__$1,ch__$1,meta64160__$1,___$2,fn1__$1,meta64175){
return (new cljs.core.async.t_cljs$core$async64174(f__$1,ch__$1,meta64160__$1,___$2,fn1__$1,meta64175));
});

}

return (new cljs.core.async.t_cljs$core$async64174(self__.f,self__.ch,self__.meta64160,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__64199 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__64199) : self__.f.call(null,G__64199));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async64159.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64159.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async64159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64160","meta64160",-719764840,null)], null);
}));

(cljs.core.async.t_cljs$core$async64159.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64159");

(cljs.core.async.t_cljs$core$async64159.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async64159");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64159.
 */
cljs.core.async.__GT_t_cljs$core$async64159 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async64159(f__$1,ch__$1,meta64160){
return (new cljs.core.async.t_cljs$core$async64159(f__$1,ch__$1,meta64160));
});

}

return (new cljs.core.async.t_cljs$core$async64159(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64211 = (function (f,ch,meta64212){
this.f = f;
this.ch = ch;
this.meta64212 = meta64212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64213,meta64212__$1){
var self__ = this;
var _64213__$1 = this;
return (new cljs.core.async.t_cljs$core$async64211(self__.f,self__.ch,meta64212__$1));
}));

(cljs.core.async.t_cljs$core$async64211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64213){
var self__ = this;
var _64213__$1 = this;
return self__.meta64212;
}));

(cljs.core.async.t_cljs$core$async64211.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64211.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64211.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64211.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async64211.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64211.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async64211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64212","meta64212",2005473753,null)], null);
}));

(cljs.core.async.t_cljs$core$async64211.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64211");

(cljs.core.async.t_cljs$core$async64211.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async64211");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64211.
 */
cljs.core.async.__GT_t_cljs$core$async64211 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async64211(f__$1,ch__$1,meta64212){
return (new cljs.core.async.t_cljs$core$async64211(f__$1,ch__$1,meta64212));
});

}

return (new cljs.core.async.t_cljs$core$async64211(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64234 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64234 = (function (p,ch,meta64235){
this.p = p;
this.ch = ch;
this.meta64235 = meta64235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64236,meta64235__$1){
var self__ = this;
var _64236__$1 = this;
return (new cljs.core.async.t_cljs$core$async64234(self__.p,self__.ch,meta64235__$1));
}));

(cljs.core.async.t_cljs$core$async64234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64236){
var self__ = this;
var _64236__$1 = this;
return self__.meta64235;
}));

(cljs.core.async.t_cljs$core$async64234.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64234.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64234.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64234.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64234.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async64234.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64234.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async64234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64235","meta64235",-630856758,null)], null);
}));

(cljs.core.async.t_cljs$core$async64234.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64234");

(cljs.core.async.t_cljs$core$async64234.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async64234");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64234.
 */
cljs.core.async.__GT_t_cljs$core$async64234 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async64234(p__$1,ch__$1,meta64235){
return (new cljs.core.async.t_cljs$core$async64234(p__$1,ch__$1,meta64235));
});

}

return (new cljs.core.async.t_cljs$core$async64234(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__64260 = arguments.length;
switch (G__64260) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61500__auto___65655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_64282){
var state_val_64284 = (state_64282[(1)]);
if((state_val_64284 === (7))){
var inst_64277 = (state_64282[(2)]);
var state_64282__$1 = state_64282;
var statearr_64289_65657 = state_64282__$1;
(statearr_64289_65657[(2)] = inst_64277);

(statearr_64289_65657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64284 === (1))){
var state_64282__$1 = state_64282;
var statearr_64294_65658 = state_64282__$1;
(statearr_64294_65658[(2)] = null);

(statearr_64294_65658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64284 === (4))){
var inst_64263 = (state_64282[(7)]);
var inst_64263__$1 = (state_64282[(2)]);
var inst_64264 = (inst_64263__$1 == null);
var state_64282__$1 = (function (){var statearr_64295 = state_64282;
(statearr_64295[(7)] = inst_64263__$1);

return statearr_64295;
})();
if(cljs.core.truth_(inst_64264)){
var statearr_64297_65659 = state_64282__$1;
(statearr_64297_65659[(1)] = (5));

} else {
var statearr_64298_65660 = state_64282__$1;
(statearr_64298_65660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64284 === (6))){
var inst_64263 = (state_64282[(7)]);
var inst_64268 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_64263) : p.call(null,inst_64263));
var state_64282__$1 = state_64282;
if(cljs.core.truth_(inst_64268)){
var statearr_64299_65661 = state_64282__$1;
(statearr_64299_65661[(1)] = (8));

} else {
var statearr_64300_65662 = state_64282__$1;
(statearr_64300_65662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64284 === (3))){
var inst_64279 = (state_64282[(2)]);
var state_64282__$1 = state_64282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64282__$1,inst_64279);
} else {
if((state_val_64284 === (2))){
var state_64282__$1 = state_64282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64282__$1,(4),ch);
} else {
if((state_val_64284 === (11))){
var inst_64271 = (state_64282[(2)]);
var state_64282__$1 = state_64282;
var statearr_64301_65663 = state_64282__$1;
(statearr_64301_65663[(2)] = inst_64271);

(statearr_64301_65663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64284 === (9))){
var state_64282__$1 = state_64282;
var statearr_64302_65664 = state_64282__$1;
(statearr_64302_65664[(2)] = null);

(statearr_64302_65664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64284 === (5))){
var inst_64266 = cljs.core.async.close_BANG_(out);
var state_64282__$1 = state_64282;
var statearr_64310_65665 = state_64282__$1;
(statearr_64310_65665[(2)] = inst_64266);

(statearr_64310_65665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64284 === (10))){
var inst_64274 = (state_64282[(2)]);
var state_64282__$1 = (function (){var statearr_64312 = state_64282;
(statearr_64312[(8)] = inst_64274);

return statearr_64312;
})();
var statearr_64313_65666 = state_64282__$1;
(statearr_64313_65666[(2)] = null);

(statearr_64313_65666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64284 === (8))){
var inst_64263 = (state_64282[(7)]);
var state_64282__$1 = state_64282;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64282__$1,(11),out,inst_64263);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61183__auto__ = null;
var cljs$core$async$state_machine__61183__auto____0 = (function (){
var statearr_64314 = [null,null,null,null,null,null,null,null,null];
(statearr_64314[(0)] = cljs$core$async$state_machine__61183__auto__);

(statearr_64314[(1)] = (1));

return statearr_64314;
});
var cljs$core$async$state_machine__61183__auto____1 = (function (state_64282){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_64282);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e64315){if((e64315 instanceof Object)){
var ex__61186__auto__ = e64315;
var statearr_64316_65671 = state_64282;
(statearr_64316_65671[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64315;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65673 = state_64282;
state_64282 = G__65673;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$state_machine__61183__auto__ = function(state_64282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61183__auto____1.call(this,state_64282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61183__auto____0;
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61183__auto____1;
return cljs$core$async$state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_64320 = f__61501__auto__();
(statearr_64320[(6)] = c__61500__auto___65655);

return statearr_64320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__64323 = arguments.length;
switch (G__64323) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__61500__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_64400){
var state_val_64401 = (state_64400[(1)]);
if((state_val_64401 === (7))){
var inst_64396 = (state_64400[(2)]);
var state_64400__$1 = state_64400;
var statearr_64413_65676 = state_64400__$1;
(statearr_64413_65676[(2)] = inst_64396);

(statearr_64413_65676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (20))){
var inst_64364 = (state_64400[(7)]);
var inst_64377 = (state_64400[(2)]);
var inst_64378 = cljs.core.next(inst_64364);
var inst_64348 = inst_64378;
var inst_64349 = null;
var inst_64350 = (0);
var inst_64351 = (0);
var state_64400__$1 = (function (){var statearr_64415 = state_64400;
(statearr_64415[(8)] = inst_64348);

(statearr_64415[(9)] = inst_64351);

(statearr_64415[(10)] = inst_64377);

(statearr_64415[(11)] = inst_64350);

(statearr_64415[(12)] = inst_64349);

return statearr_64415;
})();
var statearr_64417_65677 = state_64400__$1;
(statearr_64417_65677[(2)] = null);

(statearr_64417_65677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (1))){
var state_64400__$1 = state_64400;
var statearr_64420_65678 = state_64400__$1;
(statearr_64420_65678[(2)] = null);

(statearr_64420_65678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (4))){
var inst_64336 = (state_64400[(13)]);
var inst_64336__$1 = (state_64400[(2)]);
var inst_64337 = (inst_64336__$1 == null);
var state_64400__$1 = (function (){var statearr_64423 = state_64400;
(statearr_64423[(13)] = inst_64336__$1);

return statearr_64423;
})();
if(cljs.core.truth_(inst_64337)){
var statearr_64424_65685 = state_64400__$1;
(statearr_64424_65685[(1)] = (5));

} else {
var statearr_64425_65686 = state_64400__$1;
(statearr_64425_65686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (15))){
var state_64400__$1 = state_64400;
var statearr_64433_65687 = state_64400__$1;
(statearr_64433_65687[(2)] = null);

(statearr_64433_65687[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (21))){
var state_64400__$1 = state_64400;
var statearr_64436_65688 = state_64400__$1;
(statearr_64436_65688[(2)] = null);

(statearr_64436_65688[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (13))){
var inst_64348 = (state_64400[(8)]);
var inst_64351 = (state_64400[(9)]);
var inst_64350 = (state_64400[(11)]);
var inst_64349 = (state_64400[(12)]);
var inst_64359 = (state_64400[(2)]);
var inst_64361 = (inst_64351 + (1));
var tmp64427 = inst_64348;
var tmp64428 = inst_64350;
var tmp64429 = inst_64349;
var inst_64348__$1 = tmp64427;
var inst_64349__$1 = tmp64429;
var inst_64350__$1 = tmp64428;
var inst_64351__$1 = inst_64361;
var state_64400__$1 = (function (){var statearr_64440 = state_64400;
(statearr_64440[(8)] = inst_64348__$1);

(statearr_64440[(9)] = inst_64351__$1);

(statearr_64440[(14)] = inst_64359);

(statearr_64440[(11)] = inst_64350__$1);

(statearr_64440[(12)] = inst_64349__$1);

return statearr_64440;
})();
var statearr_64446_65690 = state_64400__$1;
(statearr_64446_65690[(2)] = null);

(statearr_64446_65690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (22))){
var state_64400__$1 = state_64400;
var statearr_64451_65691 = state_64400__$1;
(statearr_64451_65691[(2)] = null);

(statearr_64451_65691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (6))){
var inst_64336 = (state_64400[(13)]);
var inst_64346 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_64336) : f.call(null,inst_64336));
var inst_64347 = cljs.core.seq(inst_64346);
var inst_64348 = inst_64347;
var inst_64349 = null;
var inst_64350 = (0);
var inst_64351 = (0);
var state_64400__$1 = (function (){var statearr_64459 = state_64400;
(statearr_64459[(8)] = inst_64348);

(statearr_64459[(9)] = inst_64351);

(statearr_64459[(11)] = inst_64350);

(statearr_64459[(12)] = inst_64349);

return statearr_64459;
})();
var statearr_64462_65693 = state_64400__$1;
(statearr_64462_65693[(2)] = null);

(statearr_64462_65693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (17))){
var inst_64364 = (state_64400[(7)]);
var inst_64370 = cljs.core.chunk_first(inst_64364);
var inst_64371 = cljs.core.chunk_rest(inst_64364);
var inst_64372 = cljs.core.count(inst_64370);
var inst_64348 = inst_64371;
var inst_64349 = inst_64370;
var inst_64350 = inst_64372;
var inst_64351 = (0);
var state_64400__$1 = (function (){var statearr_64465 = state_64400;
(statearr_64465[(8)] = inst_64348);

(statearr_64465[(9)] = inst_64351);

(statearr_64465[(11)] = inst_64350);

(statearr_64465[(12)] = inst_64349);

return statearr_64465;
})();
var statearr_64468_65694 = state_64400__$1;
(statearr_64468_65694[(2)] = null);

(statearr_64468_65694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (3))){
var inst_64398 = (state_64400[(2)]);
var state_64400__$1 = state_64400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64400__$1,inst_64398);
} else {
if((state_val_64401 === (12))){
var inst_64386 = (state_64400[(2)]);
var state_64400__$1 = state_64400;
var statearr_64472_65695 = state_64400__$1;
(statearr_64472_65695[(2)] = inst_64386);

(statearr_64472_65695[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (2))){
var state_64400__$1 = state_64400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64400__$1,(4),in$);
} else {
if((state_val_64401 === (23))){
var inst_64394 = (state_64400[(2)]);
var state_64400__$1 = state_64400;
var statearr_64484_65696 = state_64400__$1;
(statearr_64484_65696[(2)] = inst_64394);

(statearr_64484_65696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (19))){
var inst_64381 = (state_64400[(2)]);
var state_64400__$1 = state_64400;
var statearr_64487_65697 = state_64400__$1;
(statearr_64487_65697[(2)] = inst_64381);

(statearr_64487_65697[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (11))){
var inst_64364 = (state_64400[(7)]);
var inst_64348 = (state_64400[(8)]);
var inst_64364__$1 = cljs.core.seq(inst_64348);
var state_64400__$1 = (function (){var statearr_64489 = state_64400;
(statearr_64489[(7)] = inst_64364__$1);

return statearr_64489;
})();
if(inst_64364__$1){
var statearr_64495_65698 = state_64400__$1;
(statearr_64495_65698[(1)] = (14));

} else {
var statearr_64497_65699 = state_64400__$1;
(statearr_64497_65699[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (9))){
var inst_64388 = (state_64400[(2)]);
var inst_64389 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_64400__$1 = (function (){var statearr_64500 = state_64400;
(statearr_64500[(15)] = inst_64388);

return statearr_64500;
})();
if(cljs.core.truth_(inst_64389)){
var statearr_64502_65703 = state_64400__$1;
(statearr_64502_65703[(1)] = (21));

} else {
var statearr_64508_65705 = state_64400__$1;
(statearr_64508_65705[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (5))){
var inst_64339 = cljs.core.async.close_BANG_(out);
var state_64400__$1 = state_64400;
var statearr_64514_65713 = state_64400__$1;
(statearr_64514_65713[(2)] = inst_64339);

(statearr_64514_65713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (14))){
var inst_64364 = (state_64400[(7)]);
var inst_64367 = cljs.core.chunked_seq_QMARK_(inst_64364);
var state_64400__$1 = state_64400;
if(inst_64367){
var statearr_64515_65714 = state_64400__$1;
(statearr_64515_65714[(1)] = (17));

} else {
var statearr_64517_65715 = state_64400__$1;
(statearr_64517_65715[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (16))){
var inst_64384 = (state_64400[(2)]);
var state_64400__$1 = state_64400;
var statearr_64521_65716 = state_64400__$1;
(statearr_64521_65716[(2)] = inst_64384);

(statearr_64521_65716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64401 === (10))){
var inst_64351 = (state_64400[(9)]);
var inst_64349 = (state_64400[(12)]);
var inst_64357 = cljs.core._nth(inst_64349,inst_64351);
var state_64400__$1 = state_64400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64400__$1,(13),out,inst_64357);
} else {
if((state_val_64401 === (18))){
var inst_64364 = (state_64400[(7)]);
var inst_64375 = cljs.core.first(inst_64364);
var state_64400__$1 = state_64400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64400__$1,(20),out,inst_64375);
} else {
if((state_val_64401 === (8))){
var inst_64351 = (state_64400[(9)]);
var inst_64350 = (state_64400[(11)]);
var inst_64354 = (inst_64351 < inst_64350);
var inst_64355 = inst_64354;
var state_64400__$1 = state_64400;
if(cljs.core.truth_(inst_64355)){
var statearr_64528_65718 = state_64400__$1;
(statearr_64528_65718[(1)] = (10));

} else {
var statearr_64531_65719 = state_64400__$1;
(statearr_64531_65719[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__61183__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__61183__auto____0 = (function (){
var statearr_64535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64535[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__61183__auto__);

(statearr_64535[(1)] = (1));

return statearr_64535;
});
var cljs$core$async$mapcat_STAR__$_state_machine__61183__auto____1 = (function (state_64400){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_64400);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e64537){if((e64537 instanceof Object)){
var ex__61186__auto__ = e64537;
var statearr_64540_65731 = state_64400;
(statearr_64540_65731[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64537;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65733 = state_64400;
state_64400 = G__65733;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__61183__auto__ = function(state_64400){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__61183__auto____1.call(this,state_64400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__61183__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__61183__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_64548 = f__61501__auto__();
(statearr_64548[(6)] = c__61500__auto__);

return statearr_64548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));

return c__61500__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__64558 = arguments.length;
switch (G__64558) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__64578 = arguments.length;
switch (G__64578) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__64584 = arguments.length;
switch (G__64584) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61500__auto___65751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_64615){
var state_val_64616 = (state_64615[(1)]);
if((state_val_64616 === (7))){
var inst_64608 = (state_64615[(2)]);
var state_64615__$1 = state_64615;
var statearr_64621_65755 = state_64615__$1;
(statearr_64621_65755[(2)] = inst_64608);

(statearr_64621_65755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64616 === (1))){
var inst_64585 = null;
var state_64615__$1 = (function (){var statearr_64622 = state_64615;
(statearr_64622[(7)] = inst_64585);

return statearr_64622;
})();
var statearr_64623_65756 = state_64615__$1;
(statearr_64623_65756[(2)] = null);

(statearr_64623_65756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64616 === (4))){
var inst_64592 = (state_64615[(8)]);
var inst_64592__$1 = (state_64615[(2)]);
var inst_64593 = (inst_64592__$1 == null);
var inst_64594 = cljs.core.not(inst_64593);
var state_64615__$1 = (function (){var statearr_64624 = state_64615;
(statearr_64624[(8)] = inst_64592__$1);

return statearr_64624;
})();
if(inst_64594){
var statearr_64625_65758 = state_64615__$1;
(statearr_64625_65758[(1)] = (5));

} else {
var statearr_64626_65759 = state_64615__$1;
(statearr_64626_65759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64616 === (6))){
var state_64615__$1 = state_64615;
var statearr_64627_65760 = state_64615__$1;
(statearr_64627_65760[(2)] = null);

(statearr_64627_65760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64616 === (3))){
var inst_64610 = (state_64615[(2)]);
var inst_64611 = cljs.core.async.close_BANG_(out);
var state_64615__$1 = (function (){var statearr_64628 = state_64615;
(statearr_64628[(9)] = inst_64610);

return statearr_64628;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64615__$1,inst_64611);
} else {
if((state_val_64616 === (2))){
var state_64615__$1 = state_64615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64615__$1,(4),ch);
} else {
if((state_val_64616 === (11))){
var inst_64592 = (state_64615[(8)]);
var inst_64602 = (state_64615[(2)]);
var inst_64585 = inst_64592;
var state_64615__$1 = (function (){var statearr_64630 = state_64615;
(statearr_64630[(7)] = inst_64585);

(statearr_64630[(10)] = inst_64602);

return statearr_64630;
})();
var statearr_64632_65761 = state_64615__$1;
(statearr_64632_65761[(2)] = null);

(statearr_64632_65761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64616 === (9))){
var inst_64592 = (state_64615[(8)]);
var state_64615__$1 = state_64615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64615__$1,(11),out,inst_64592);
} else {
if((state_val_64616 === (5))){
var inst_64592 = (state_64615[(8)]);
var inst_64585 = (state_64615[(7)]);
var inst_64596 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64592,inst_64585);
var state_64615__$1 = state_64615;
if(inst_64596){
var statearr_64634_65764 = state_64615__$1;
(statearr_64634_65764[(1)] = (8));

} else {
var statearr_64635_65765 = state_64615__$1;
(statearr_64635_65765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64616 === (10))){
var inst_64605 = (state_64615[(2)]);
var state_64615__$1 = state_64615;
var statearr_64636_65767 = state_64615__$1;
(statearr_64636_65767[(2)] = inst_64605);

(statearr_64636_65767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64616 === (8))){
var inst_64585 = (state_64615[(7)]);
var tmp64633 = inst_64585;
var inst_64585__$1 = tmp64633;
var state_64615__$1 = (function (){var statearr_64637 = state_64615;
(statearr_64637[(7)] = inst_64585__$1);

return statearr_64637;
})();
var statearr_64638_65771 = state_64615__$1;
(statearr_64638_65771[(2)] = null);

(statearr_64638_65771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61183__auto__ = null;
var cljs$core$async$state_machine__61183__auto____0 = (function (){
var statearr_64639 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64639[(0)] = cljs$core$async$state_machine__61183__auto__);

(statearr_64639[(1)] = (1));

return statearr_64639;
});
var cljs$core$async$state_machine__61183__auto____1 = (function (state_64615){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_64615);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e64640){if((e64640 instanceof Object)){
var ex__61186__auto__ = e64640;
var statearr_64641_65774 = state_64615;
(statearr_64641_65774[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64640;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65775 = state_64615;
state_64615 = G__65775;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$state_machine__61183__auto__ = function(state_64615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61183__auto____1.call(this,state_64615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61183__auto____0;
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61183__auto____1;
return cljs$core$async$state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_64642 = f__61501__auto__();
(statearr_64642[(6)] = c__61500__auto___65751);

return statearr_64642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__64644 = arguments.length;
switch (G__64644) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61500__auto___65778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_64682){
var state_val_64683 = (state_64682[(1)]);
if((state_val_64683 === (7))){
var inst_64678 = (state_64682[(2)]);
var state_64682__$1 = state_64682;
var statearr_64684_65779 = state_64682__$1;
(statearr_64684_65779[(2)] = inst_64678);

(statearr_64684_65779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64683 === (1))){
var inst_64645 = (new Array(n));
var inst_64646 = inst_64645;
var inst_64647 = (0);
var state_64682__$1 = (function (){var statearr_64685 = state_64682;
(statearr_64685[(7)] = inst_64647);

(statearr_64685[(8)] = inst_64646);

return statearr_64685;
})();
var statearr_64686_65783 = state_64682__$1;
(statearr_64686_65783[(2)] = null);

(statearr_64686_65783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64683 === (4))){
var inst_64650 = (state_64682[(9)]);
var inst_64650__$1 = (state_64682[(2)]);
var inst_64651 = (inst_64650__$1 == null);
var inst_64652 = cljs.core.not(inst_64651);
var state_64682__$1 = (function (){var statearr_64687 = state_64682;
(statearr_64687[(9)] = inst_64650__$1);

return statearr_64687;
})();
if(inst_64652){
var statearr_64688_65785 = state_64682__$1;
(statearr_64688_65785[(1)] = (5));

} else {
var statearr_64689_65786 = state_64682__$1;
(statearr_64689_65786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64683 === (15))){
var inst_64672 = (state_64682[(2)]);
var state_64682__$1 = state_64682;
var statearr_64690_65787 = state_64682__$1;
(statearr_64690_65787[(2)] = inst_64672);

(statearr_64690_65787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64683 === (13))){
var state_64682__$1 = state_64682;
var statearr_64691_65788 = state_64682__$1;
(statearr_64691_65788[(2)] = null);

(statearr_64691_65788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64683 === (6))){
var inst_64647 = (state_64682[(7)]);
var inst_64668 = (inst_64647 > (0));
var state_64682__$1 = state_64682;
if(cljs.core.truth_(inst_64668)){
var statearr_64692_65789 = state_64682__$1;
(statearr_64692_65789[(1)] = (12));

} else {
var statearr_64694_65790 = state_64682__$1;
(statearr_64694_65790[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64683 === (3))){
var inst_64680 = (state_64682[(2)]);
var state_64682__$1 = state_64682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64682__$1,inst_64680);
} else {
if((state_val_64683 === (12))){
var inst_64646 = (state_64682[(8)]);
var inst_64670 = cljs.core.vec(inst_64646);
var state_64682__$1 = state_64682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64682__$1,(15),out,inst_64670);
} else {
if((state_val_64683 === (2))){
var state_64682__$1 = state_64682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64682__$1,(4),ch);
} else {
if((state_val_64683 === (11))){
var inst_64662 = (state_64682[(2)]);
var inst_64663 = (new Array(n));
var inst_64646 = inst_64663;
var inst_64647 = (0);
var state_64682__$1 = (function (){var statearr_64696 = state_64682;
(statearr_64696[(7)] = inst_64647);

(statearr_64696[(8)] = inst_64646);

(statearr_64696[(10)] = inst_64662);

return statearr_64696;
})();
var statearr_64697_65791 = state_64682__$1;
(statearr_64697_65791[(2)] = null);

(statearr_64697_65791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64683 === (9))){
var inst_64646 = (state_64682[(8)]);
var inst_64660 = cljs.core.vec(inst_64646);
var state_64682__$1 = state_64682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64682__$1,(11),out,inst_64660);
} else {
if((state_val_64683 === (5))){
var inst_64647 = (state_64682[(7)]);
var inst_64650 = (state_64682[(9)]);
var inst_64646 = (state_64682[(8)]);
var inst_64655 = (state_64682[(11)]);
var inst_64654 = (inst_64646[inst_64647] = inst_64650);
var inst_64655__$1 = (inst_64647 + (1));
var inst_64656 = (inst_64655__$1 < n);
var state_64682__$1 = (function (){var statearr_64698 = state_64682;
(statearr_64698[(12)] = inst_64654);

(statearr_64698[(11)] = inst_64655__$1);

return statearr_64698;
})();
if(cljs.core.truth_(inst_64656)){
var statearr_64699_65796 = state_64682__$1;
(statearr_64699_65796[(1)] = (8));

} else {
var statearr_64700_65797 = state_64682__$1;
(statearr_64700_65797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64683 === (14))){
var inst_64675 = (state_64682[(2)]);
var inst_64676 = cljs.core.async.close_BANG_(out);
var state_64682__$1 = (function (){var statearr_64704 = state_64682;
(statearr_64704[(13)] = inst_64675);

return statearr_64704;
})();
var statearr_64705_65802 = state_64682__$1;
(statearr_64705_65802[(2)] = inst_64676);

(statearr_64705_65802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64683 === (10))){
var inst_64666 = (state_64682[(2)]);
var state_64682__$1 = state_64682;
var statearr_64706_65811 = state_64682__$1;
(statearr_64706_65811[(2)] = inst_64666);

(statearr_64706_65811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64683 === (8))){
var inst_64646 = (state_64682[(8)]);
var inst_64655 = (state_64682[(11)]);
var tmp64702 = inst_64646;
var inst_64646__$1 = tmp64702;
var inst_64647 = inst_64655;
var state_64682__$1 = (function (){var statearr_64707 = state_64682;
(statearr_64707[(7)] = inst_64647);

(statearr_64707[(8)] = inst_64646__$1);

return statearr_64707;
})();
var statearr_64708_65813 = state_64682__$1;
(statearr_64708_65813[(2)] = null);

(statearr_64708_65813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61183__auto__ = null;
var cljs$core$async$state_machine__61183__auto____0 = (function (){
var statearr_64709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64709[(0)] = cljs$core$async$state_machine__61183__auto__);

(statearr_64709[(1)] = (1));

return statearr_64709;
});
var cljs$core$async$state_machine__61183__auto____1 = (function (state_64682){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_64682);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e64710){if((e64710 instanceof Object)){
var ex__61186__auto__ = e64710;
var statearr_64711_65819 = state_64682;
(statearr_64711_65819[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65820 = state_64682;
state_64682 = G__65820;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$state_machine__61183__auto__ = function(state_64682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61183__auto____1.call(this,state_64682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61183__auto____0;
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61183__auto____1;
return cljs$core$async$state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_64714 = f__61501__auto__();
(statearr_64714[(6)] = c__61500__auto___65778);

return statearr_64714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__64716 = arguments.length;
switch (G__64716) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61500__auto___65824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61501__auto__ = (function (){var switch__61182__auto__ = (function (state_64767){
var state_val_64768 = (state_64767[(1)]);
if((state_val_64768 === (7))){
var inst_64763 = (state_64767[(2)]);
var state_64767__$1 = state_64767;
var statearr_64770_65825 = state_64767__$1;
(statearr_64770_65825[(2)] = inst_64763);

(statearr_64770_65825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64768 === (1))){
var inst_64720 = [];
var inst_64721 = inst_64720;
var inst_64722 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_64767__$1 = (function (){var statearr_64772 = state_64767;
(statearr_64772[(7)] = inst_64721);

(statearr_64772[(8)] = inst_64722);

return statearr_64772;
})();
var statearr_64774_65828 = state_64767__$1;
(statearr_64774_65828[(2)] = null);

(statearr_64774_65828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64768 === (4))){
var inst_64725 = (state_64767[(9)]);
var inst_64725__$1 = (state_64767[(2)]);
var inst_64726 = (inst_64725__$1 == null);
var inst_64727 = cljs.core.not(inst_64726);
var state_64767__$1 = (function (){var statearr_64775 = state_64767;
(statearr_64775[(9)] = inst_64725__$1);

return statearr_64775;
})();
if(inst_64727){
var statearr_64776_65831 = state_64767__$1;
(statearr_64776_65831[(1)] = (5));

} else {
var statearr_64777_65832 = state_64767__$1;
(statearr_64777_65832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64768 === (15))){
var inst_64721 = (state_64767[(7)]);
var inst_64755 = cljs.core.vec(inst_64721);
var state_64767__$1 = state_64767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64767__$1,(18),out,inst_64755);
} else {
if((state_val_64768 === (13))){
var inst_64750 = (state_64767[(2)]);
var state_64767__$1 = state_64767;
var statearr_64782_65833 = state_64767__$1;
(statearr_64782_65833[(2)] = inst_64750);

(statearr_64782_65833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64768 === (6))){
var inst_64721 = (state_64767[(7)]);
var inst_64752 = inst_64721.length;
var inst_64753 = (inst_64752 > (0));
var state_64767__$1 = state_64767;
if(cljs.core.truth_(inst_64753)){
var statearr_64783_65836 = state_64767__$1;
(statearr_64783_65836[(1)] = (15));

} else {
var statearr_64784_65837 = state_64767__$1;
(statearr_64784_65837[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64768 === (17))){
var inst_64760 = (state_64767[(2)]);
var inst_64761 = cljs.core.async.close_BANG_(out);
var state_64767__$1 = (function (){var statearr_64786 = state_64767;
(statearr_64786[(10)] = inst_64760);

return statearr_64786;
})();
var statearr_64788_65838 = state_64767__$1;
(statearr_64788_65838[(2)] = inst_64761);

(statearr_64788_65838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64768 === (3))){
var inst_64765 = (state_64767[(2)]);
var state_64767__$1 = state_64767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64767__$1,inst_64765);
} else {
if((state_val_64768 === (12))){
var inst_64721 = (state_64767[(7)]);
var inst_64740 = cljs.core.vec(inst_64721);
var state_64767__$1 = state_64767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64767__$1,(14),out,inst_64740);
} else {
if((state_val_64768 === (2))){
var state_64767__$1 = state_64767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64767__$1,(4),ch);
} else {
if((state_val_64768 === (11))){
var inst_64721 = (state_64767[(7)]);
var inst_64729 = (state_64767[(11)]);
var inst_64725 = (state_64767[(9)]);
var inst_64737 = inst_64721.push(inst_64725);
var tmp64790 = inst_64721;
var inst_64721__$1 = tmp64790;
var inst_64722 = inst_64729;
var state_64767__$1 = (function (){var statearr_64793 = state_64767;
(statearr_64793[(7)] = inst_64721__$1);

(statearr_64793[(12)] = inst_64737);

(statearr_64793[(8)] = inst_64722);

return statearr_64793;
})();
var statearr_64794_65839 = state_64767__$1;
(statearr_64794_65839[(2)] = null);

(statearr_64794_65839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64768 === (9))){
var inst_64722 = (state_64767[(8)]);
var inst_64733 = cljs.core.keyword_identical_QMARK_(inst_64722,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_64767__$1 = state_64767;
var statearr_64797_65841 = state_64767__$1;
(statearr_64797_65841[(2)] = inst_64733);

(statearr_64797_65841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64768 === (5))){
var inst_64730 = (state_64767[(13)]);
var inst_64722 = (state_64767[(8)]);
var inst_64729 = (state_64767[(11)]);
var inst_64725 = (state_64767[(9)]);
var inst_64729__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_64725) : f.call(null,inst_64725));
var inst_64730__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64729__$1,inst_64722);
var state_64767__$1 = (function (){var statearr_64798 = state_64767;
(statearr_64798[(13)] = inst_64730__$1);

(statearr_64798[(11)] = inst_64729__$1);

return statearr_64798;
})();
if(inst_64730__$1){
var statearr_64799_65842 = state_64767__$1;
(statearr_64799_65842[(1)] = (8));

} else {
var statearr_64800_65843 = state_64767__$1;
(statearr_64800_65843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64768 === (14))){
var inst_64729 = (state_64767[(11)]);
var inst_64725 = (state_64767[(9)]);
var inst_64742 = (state_64767[(2)]);
var inst_64743 = [];
var inst_64744 = inst_64743.push(inst_64725);
var inst_64721 = inst_64743;
var inst_64722 = inst_64729;
var state_64767__$1 = (function (){var statearr_64804 = state_64767;
(statearr_64804[(7)] = inst_64721);

(statearr_64804[(14)] = inst_64742);

(statearr_64804[(8)] = inst_64722);

(statearr_64804[(15)] = inst_64744);

return statearr_64804;
})();
var statearr_64805_65847 = state_64767__$1;
(statearr_64805_65847[(2)] = null);

(statearr_64805_65847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64768 === (16))){
var state_64767__$1 = state_64767;
var statearr_64806_65848 = state_64767__$1;
(statearr_64806_65848[(2)] = null);

(statearr_64806_65848[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64768 === (10))){
var inst_64735 = (state_64767[(2)]);
var state_64767__$1 = state_64767;
if(cljs.core.truth_(inst_64735)){
var statearr_64807_65849 = state_64767__$1;
(statearr_64807_65849[(1)] = (11));

} else {
var statearr_64808_65850 = state_64767__$1;
(statearr_64808_65850[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64768 === (18))){
var inst_64757 = (state_64767[(2)]);
var state_64767__$1 = state_64767;
var statearr_64809_65851 = state_64767__$1;
(statearr_64809_65851[(2)] = inst_64757);

(statearr_64809_65851[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64768 === (8))){
var inst_64730 = (state_64767[(13)]);
var state_64767__$1 = state_64767;
var statearr_64810_65852 = state_64767__$1;
(statearr_64810_65852[(2)] = inst_64730);

(statearr_64810_65852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61183__auto__ = null;
var cljs$core$async$state_machine__61183__auto____0 = (function (){
var statearr_64811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64811[(0)] = cljs$core$async$state_machine__61183__auto__);

(statearr_64811[(1)] = (1));

return statearr_64811;
});
var cljs$core$async$state_machine__61183__auto____1 = (function (state_64767){
while(true){
var ret_value__61184__auto__ = (function (){try{while(true){
var result__61185__auto__ = switch__61182__auto__(state_64767);
if(cljs.core.keyword_identical_QMARK_(result__61185__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61185__auto__;
}
break;
}
}catch (e64812){if((e64812 instanceof Object)){
var ex__61186__auto__ = e64812;
var statearr_64813_65853 = state_64767;
(statearr_64813_65853[(5)] = ex__61186__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64812;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65854 = state_64767;
state_64767 = G__65854;
continue;
} else {
return ret_value__61184__auto__;
}
break;
}
});
cljs$core$async$state_machine__61183__auto__ = function(state_64767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61183__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61183__auto____1.call(this,state_64767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61183__auto____0;
cljs$core$async$state_machine__61183__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61183__auto____1;
return cljs$core$async$state_machine__61183__auto__;
})()
})();
var state__61502__auto__ = (function (){var statearr_64827 = f__61501__auto__();
(statearr_64827[(6)] = c__61500__auto___65824);

return statearr_64827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61502__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
