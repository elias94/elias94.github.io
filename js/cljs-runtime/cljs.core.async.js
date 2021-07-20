goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31277 = arguments.length;
switch (G__31277) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31290 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31290 = (function (f,blockable,meta31291){
this.f = f;
this.blockable = blockable;
this.meta31291 = meta31291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31292,meta31291__$1){
var self__ = this;
var _31292__$1 = this;
return (new cljs.core.async.t_cljs$core$async31290(self__.f,self__.blockable,meta31291__$1));
}));

(cljs.core.async.t_cljs$core$async31290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31292){
var self__ = this;
var _31292__$1 = this;
return self__.meta31291;
}));

(cljs.core.async.t_cljs$core$async31290.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31290.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31290.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31290.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31291","meta31291",169672488,null)], null);
}));

(cljs.core.async.t_cljs$core$async31290.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31290");

(cljs.core.async.t_cljs$core$async31290.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31290");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31290.
 */
cljs.core.async.__GT_t_cljs$core$async31290 = (function cljs$core$async$__GT_t_cljs$core$async31290(f__$1,blockable__$1,meta31291){
return (new cljs.core.async.t_cljs$core$async31290(f__$1,blockable__$1,meta31291));
});

}

return (new cljs.core.async.t_cljs$core$async31290(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31344 = arguments.length;
switch (G__31344) {
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
var G__31382 = arguments.length;
switch (G__31382) {
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
var G__31452 = arguments.length;
switch (G__31452) {
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
var val_34671 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34671) : fn1.call(null,val_34671));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34671) : fn1.call(null,val_34671));
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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31492 = arguments.length;
switch (G__31492) {
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
var n__4695__auto___34674 = n;
var x_34675 = (0);
while(true){
if((x_34675 < n__4695__auto___34674)){
(a[x_34675] = x_34675);

var G__34676 = (x_34675 + (1));
x_34675 = G__34676;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31524 = (function (flag,meta31525){
this.flag = flag;
this.meta31525 = meta31525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31526,meta31525__$1){
var self__ = this;
var _31526__$1 = this;
return (new cljs.core.async.t_cljs$core$async31524(self__.flag,meta31525__$1));
}));

(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31526){
var self__ = this;
var _31526__$1 = this;
return self__.meta31525;
}));

(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31525","meta31525",2098903993,null)], null);
}));

(cljs.core.async.t_cljs$core$async31524.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31524");

(cljs.core.async.t_cljs$core$async31524.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31524");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31524.
 */
cljs.core.async.__GT_t_cljs$core$async31524 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31524(flag__$1,meta31525){
return (new cljs.core.async.t_cljs$core$async31524(flag__$1,meta31525));
});

}

return (new cljs.core.async.t_cljs$core$async31524(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31543 = (function (flag,cb,meta31544){
this.flag = flag;
this.cb = cb;
this.meta31544 = meta31544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31545,meta31544__$1){
var self__ = this;
var _31545__$1 = this;
return (new cljs.core.async.t_cljs$core$async31543(self__.flag,self__.cb,meta31544__$1));
}));

(cljs.core.async.t_cljs$core$async31543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31545){
var self__ = this;
var _31545__$1 = this;
return self__.meta31544;
}));

(cljs.core.async.t_cljs$core$async31543.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31543.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31544","meta31544",75493774,null)], null);
}));

(cljs.core.async.t_cljs$core$async31543.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31543");

(cljs.core.async.t_cljs$core$async31543.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31543");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31543.
 */
cljs.core.async.__GT_t_cljs$core$async31543 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31543(flag__$1,cb__$1,meta31544){
return (new cljs.core.async.t_cljs$core$async31543(flag__$1,cb__$1,meta31544));
});

}

return (new cljs.core.async.t_cljs$core$async31543(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

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
return (function (p1__31571_SHARP_){
var G__31579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31571_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31579) : fret.call(null,G__31579));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31572_SHARP_){
var G__31580 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31572_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31580) : fret.call(null,G__31580));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34687 = (i + (1));
i = G__34687;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
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
var args__4824__auto__ = [];
var len__4818__auto___34691 = arguments.length;
var i__4819__auto___34692 = (0);
while(true){
if((i__4819__auto___34692 < len__4818__auto___34691)){
args__4824__auto__.push((arguments[i__4819__auto___34692]));

var G__34694 = (i__4819__auto___34692 + (1));
i__4819__auto___34692 = G__34694;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31600){
var map__31601 = p__31600;
var map__31601__$1 = cljs.core.__destructure_map(map__31601);
var opts = map__31601__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31590){
var G__31591 = cljs.core.first(seq31590);
var seq31590__$1 = cljs.core.next(seq31590);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31591,seq31590__$1);
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
var G__31609 = arguments.length;
switch (G__31609) {
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
var c__31144__auto___34699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_31641){
var state_val_31644 = (state_31641[(1)]);
if((state_val_31644 === (7))){
var inst_31635 = (state_31641[(2)]);
var state_31641__$1 = state_31641;
var statearr_31650_34701 = state_31641__$1;
(statearr_31650_34701[(2)] = inst_31635);

(statearr_31650_34701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (1))){
var state_31641__$1 = state_31641;
var statearr_31655_34702 = state_31641__$1;
(statearr_31655_34702[(2)] = null);

(statearr_31655_34702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (4))){
var inst_31618 = (state_31641[(7)]);
var inst_31618__$1 = (state_31641[(2)]);
var inst_31619 = (inst_31618__$1 == null);
var state_31641__$1 = (function (){var statearr_31662 = state_31641;
(statearr_31662[(7)] = inst_31618__$1);

return statearr_31662;
})();
if(cljs.core.truth_(inst_31619)){
var statearr_31663_34706 = state_31641__$1;
(statearr_31663_34706[(1)] = (5));

} else {
var statearr_31664_34707 = state_31641__$1;
(statearr_31664_34707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (13))){
var state_31641__$1 = state_31641;
var statearr_31667_34708 = state_31641__$1;
(statearr_31667_34708[(2)] = null);

(statearr_31667_34708[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (6))){
var inst_31618 = (state_31641[(7)]);
var state_31641__$1 = state_31641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31641__$1,(11),to,inst_31618);
} else {
if((state_val_31644 === (3))){
var inst_31637 = (state_31641[(2)]);
var state_31641__$1 = state_31641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31641__$1,inst_31637);
} else {
if((state_val_31644 === (12))){
var state_31641__$1 = state_31641;
var statearr_31674_34710 = state_31641__$1;
(statearr_31674_34710[(2)] = null);

(statearr_31674_34710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (2))){
var state_31641__$1 = state_31641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31641__$1,(4),from);
} else {
if((state_val_31644 === (11))){
var inst_31628 = (state_31641[(2)]);
var state_31641__$1 = state_31641;
if(cljs.core.truth_(inst_31628)){
var statearr_31675_34712 = state_31641__$1;
(statearr_31675_34712[(1)] = (12));

} else {
var statearr_31676_34713 = state_31641__$1;
(statearr_31676_34713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (9))){
var state_31641__$1 = state_31641;
var statearr_31677_34714 = state_31641__$1;
(statearr_31677_34714[(2)] = null);

(statearr_31677_34714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (5))){
var state_31641__$1 = state_31641;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31679_34715 = state_31641__$1;
(statearr_31679_34715[(1)] = (8));

} else {
var statearr_31680_34716 = state_31641__$1;
(statearr_31680_34716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (14))){
var inst_31633 = (state_31641[(2)]);
var state_31641__$1 = state_31641;
var statearr_31682_34717 = state_31641__$1;
(statearr_31682_34717[(2)] = inst_31633);

(statearr_31682_34717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (10))){
var inst_31625 = (state_31641[(2)]);
var state_31641__$1 = state_31641;
var statearr_31683_34718 = state_31641__$1;
(statearr_31683_34718[(2)] = inst_31625);

(statearr_31683_34718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (8))){
var inst_31622 = cljs.core.async.close_BANG_(to);
var state_31641__$1 = state_31641;
var statearr_31684_34719 = state_31641__$1;
(statearr_31684_34719[(2)] = inst_31622);

(statearr_31684_34719[(1)] = (10));


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
var cljs$core$async$state_machine__31050__auto__ = null;
var cljs$core$async$state_machine__31050__auto____0 = (function (){
var statearr_31685 = [null,null,null,null,null,null,null,null];
(statearr_31685[(0)] = cljs$core$async$state_machine__31050__auto__);

(statearr_31685[(1)] = (1));

return statearr_31685;
});
var cljs$core$async$state_machine__31050__auto____1 = (function (state_31641){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_31641);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e31686){var ex__31053__auto__ = e31686;
var statearr_31687_34720 = state_31641;
(statearr_31687_34720[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_31641[(4)]))){
var statearr_31689_34721 = state_31641;
(statearr_31689_34721[(1)] = cljs.core.first((state_31641[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34723 = state_31641;
state_31641 = G__34723;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$state_machine__31050__auto__ = function(state_31641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31050__auto____1.call(this,state_31641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31050__auto____0;
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31050__auto____1;
return cljs$core$async$state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_31691 = f__31146__auto__();
(statearr_31691[(6)] = c__31144__auto___34699);

return statearr_31691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
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
var process = (function (p__31700){
var vec__31701 = p__31700;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31701,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31701,(1),null);
var job = vec__31701;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31144__auto___34725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_31713){
var state_val_31714 = (state_31713[(1)]);
if((state_val_31714 === (1))){
var state_31713__$1 = state_31713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31713__$1,(2),res,v);
} else {
if((state_val_31714 === (2))){
var inst_31709 = (state_31713[(2)]);
var inst_31710 = cljs.core.async.close_BANG_(res);
var state_31713__$1 = (function (){var statearr_31722 = state_31713;
(statearr_31722[(7)] = inst_31709);

return statearr_31722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31713__$1,inst_31710);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____0 = (function (){
var statearr_31725 = [null,null,null,null,null,null,null,null];
(statearr_31725[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__);

(statearr_31725[(1)] = (1));

return statearr_31725;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____1 = (function (state_31713){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_31713);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e31728){var ex__31053__auto__ = e31728;
var statearr_31730_34730 = state_31713;
(statearr_31730_34730[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_31713[(4)]))){
var statearr_31733_34731 = state_31713;
(statearr_31733_34731[(1)] = cljs.core.first((state_31713[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34732 = state_31713;
state_31713 = G__34732;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__ = function(state_31713){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____1.call(this,state_31713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_31742 = f__31146__auto__();
(statearr_31742[(6)] = c__31144__auto___34725);

return statearr_31742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31744){
var vec__31745 = p__31744;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31745,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31745,(1),null);
var job = vec__31745;
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
var n__4695__auto___34739 = n;
var __34740 = (0);
while(true){
if((__34740 < n__4695__auto___34739)){
var G__31750_34741 = type;
var G__31750_34742__$1 = (((G__31750_34741 instanceof cljs.core.Keyword))?G__31750_34741.fqn:null);
switch (G__31750_34742__$1) {
case "compute":
var c__31144__auto___34744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34740,c__31144__auto___34744,G__31750_34741,G__31750_34742__$1,n__4695__auto___34739,jobs,results,process,async){
return (function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = ((function (__34740,c__31144__auto___34744,G__31750_34741,G__31750_34742__$1,n__4695__auto___34739,jobs,results,process,async){
return (function (state_31767){
var state_val_31768 = (state_31767[(1)]);
if((state_val_31768 === (1))){
var state_31767__$1 = state_31767;
var statearr_31771_34745 = state_31767__$1;
(statearr_31771_34745[(2)] = null);

(statearr_31771_34745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (2))){
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31767__$1,(4),jobs);
} else {
if((state_val_31768 === (3))){
var inst_31765 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31767__$1,inst_31765);
} else {
if((state_val_31768 === (4))){
var inst_31756 = (state_31767[(2)]);
var inst_31758 = process(inst_31756);
var state_31767__$1 = state_31767;
if(cljs.core.truth_(inst_31758)){
var statearr_31777_34746 = state_31767__$1;
(statearr_31777_34746[(1)] = (5));

} else {
var statearr_31778_34747 = state_31767__$1;
(statearr_31778_34747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (5))){
var state_31767__$1 = state_31767;
var statearr_31781_34748 = state_31767__$1;
(statearr_31781_34748[(2)] = null);

(statearr_31781_34748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (6))){
var state_31767__$1 = state_31767;
var statearr_31784_34749 = state_31767__$1;
(statearr_31784_34749[(2)] = null);

(statearr_31784_34749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (7))){
var inst_31763 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31792_34750 = state_31767__$1;
(statearr_31792_34750[(2)] = inst_31763);

(statearr_31792_34750[(1)] = (3));


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
});})(__34740,c__31144__auto___34744,G__31750_34741,G__31750_34742__$1,n__4695__auto___34739,jobs,results,process,async))
;
return ((function (__34740,switch__31049__auto__,c__31144__auto___34744,G__31750_34741,G__31750_34742__$1,n__4695__auto___34739,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____0 = (function (){
var statearr_31802 = [null,null,null,null,null,null,null];
(statearr_31802[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__);

(statearr_31802[(1)] = (1));

return statearr_31802;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____1 = (function (state_31767){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_31767);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e31808){var ex__31053__auto__ = e31808;
var statearr_31810_34752 = state_31767;
(statearr_31810_34752[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_31767[(4)]))){
var statearr_31817_34753 = state_31767;
(statearr_31817_34753[(1)] = cljs.core.first((state_31767[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34754 = state_31767;
state_31767 = G__34754;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__ = function(state_31767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____1.call(this,state_31767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__;
})()
;})(__34740,switch__31049__auto__,c__31144__auto___34744,G__31750_34741,G__31750_34742__$1,n__4695__auto___34739,jobs,results,process,async))
})();
var state__31147__auto__ = (function (){var statearr_31826 = f__31146__auto__();
(statearr_31826[(6)] = c__31144__auto___34744);

return statearr_31826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
});})(__34740,c__31144__auto___34744,G__31750_34741,G__31750_34742__$1,n__4695__auto___34739,jobs,results,process,async))
);


break;
case "async":
var c__31144__auto___34755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34740,c__31144__auto___34755,G__31750_34741,G__31750_34742__$1,n__4695__auto___34739,jobs,results,process,async){
return (function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = ((function (__34740,c__31144__auto___34755,G__31750_34741,G__31750_34742__$1,n__4695__auto___34739,jobs,results,process,async){
return (function (state_31847){
var state_val_31848 = (state_31847[(1)]);
if((state_val_31848 === (1))){
var state_31847__$1 = state_31847;
var statearr_31859_34756 = state_31847__$1;
(statearr_31859_34756[(2)] = null);

(statearr_31859_34756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (2))){
var state_31847__$1 = state_31847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31847__$1,(4),jobs);
} else {
if((state_val_31848 === (3))){
var inst_31845 = (state_31847[(2)]);
var state_31847__$1 = state_31847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31847__$1,inst_31845);
} else {
if((state_val_31848 === (4))){
var inst_31833 = (state_31847[(2)]);
var inst_31834 = async(inst_31833);
var state_31847__$1 = state_31847;
if(cljs.core.truth_(inst_31834)){
var statearr_31883_34757 = state_31847__$1;
(statearr_31883_34757[(1)] = (5));

} else {
var statearr_31885_34759 = state_31847__$1;
(statearr_31885_34759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (5))){
var state_31847__$1 = state_31847;
var statearr_31894_34765 = state_31847__$1;
(statearr_31894_34765[(2)] = null);

(statearr_31894_34765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (6))){
var state_31847__$1 = state_31847;
var statearr_31899_34766 = state_31847__$1;
(statearr_31899_34766[(2)] = null);

(statearr_31899_34766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (7))){
var inst_31839 = (state_31847[(2)]);
var state_31847__$1 = state_31847;
var statearr_31903_34767 = state_31847__$1;
(statearr_31903_34767[(2)] = inst_31839);

(statearr_31903_34767[(1)] = (3));


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
});})(__34740,c__31144__auto___34755,G__31750_34741,G__31750_34742__$1,n__4695__auto___34739,jobs,results,process,async))
;
return ((function (__34740,switch__31049__auto__,c__31144__auto___34755,G__31750_34741,G__31750_34742__$1,n__4695__auto___34739,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____0 = (function (){
var statearr_31913 = [null,null,null,null,null,null,null];
(statearr_31913[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__);

(statearr_31913[(1)] = (1));

return statearr_31913;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____1 = (function (state_31847){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_31847);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e31916){var ex__31053__auto__ = e31916;
var statearr_31917_34768 = state_31847;
(statearr_31917_34768[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_31847[(4)]))){
var statearr_31920_34769 = state_31847;
(statearr_31920_34769[(1)] = cljs.core.first((state_31847[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34773 = state_31847;
state_31847 = G__34773;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__ = function(state_31847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____1.call(this,state_31847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__;
})()
;})(__34740,switch__31049__auto__,c__31144__auto___34755,G__31750_34741,G__31750_34742__$1,n__4695__auto___34739,jobs,results,process,async))
})();
var state__31147__auto__ = (function (){var statearr_31921 = f__31146__auto__();
(statearr_31921[(6)] = c__31144__auto___34755);

return statearr_31921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
});})(__34740,c__31144__auto___34755,G__31750_34741,G__31750_34742__$1,n__4695__auto___34739,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31750_34742__$1)].join('')));

}

var G__34774 = (__34740 + (1));
__34740 = G__34774;
continue;
} else {
}
break;
}

var c__31144__auto___34775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_31967){
var state_val_31968 = (state_31967[(1)]);
if((state_val_31968 === (7))){
var inst_31963 = (state_31967[(2)]);
var state_31967__$1 = state_31967;
var statearr_31975_34776 = state_31967__$1;
(statearr_31975_34776[(2)] = inst_31963);

(statearr_31975_34776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (1))){
var state_31967__$1 = state_31967;
var statearr_31980_34777 = state_31967__$1;
(statearr_31980_34777[(2)] = null);

(statearr_31980_34777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (4))){
var inst_31945 = (state_31967[(7)]);
var inst_31945__$1 = (state_31967[(2)]);
var inst_31946 = (inst_31945__$1 == null);
var state_31967__$1 = (function (){var statearr_31981 = state_31967;
(statearr_31981[(7)] = inst_31945__$1);

return statearr_31981;
})();
if(cljs.core.truth_(inst_31946)){
var statearr_31983_34778 = state_31967__$1;
(statearr_31983_34778[(1)] = (5));

} else {
var statearr_31984_34779 = state_31967__$1;
(statearr_31984_34779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (6))){
var inst_31945 = (state_31967[(7)]);
var inst_31950 = (state_31967[(8)]);
var inst_31950__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31954 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31955 = [inst_31945,inst_31950__$1];
var inst_31956 = (new cljs.core.PersistentVector(null,2,(5),inst_31954,inst_31955,null));
var state_31967__$1 = (function (){var statearr_31988 = state_31967;
(statearr_31988[(8)] = inst_31950__$1);

return statearr_31988;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31967__$1,(8),jobs,inst_31956);
} else {
if((state_val_31968 === (3))){
var inst_31965 = (state_31967[(2)]);
var state_31967__$1 = state_31967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31967__$1,inst_31965);
} else {
if((state_val_31968 === (2))){
var state_31967__$1 = state_31967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31967__$1,(4),from);
} else {
if((state_val_31968 === (9))){
var inst_31960 = (state_31967[(2)]);
var state_31967__$1 = (function (){var statearr_31992 = state_31967;
(statearr_31992[(9)] = inst_31960);

return statearr_31992;
})();
var statearr_31996_34780 = state_31967__$1;
(statearr_31996_34780[(2)] = null);

(statearr_31996_34780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (5))){
var inst_31948 = cljs.core.async.close_BANG_(jobs);
var state_31967__$1 = state_31967;
var statearr_31998_34781 = state_31967__$1;
(statearr_31998_34781[(2)] = inst_31948);

(statearr_31998_34781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31968 === (8))){
var inst_31950 = (state_31967[(8)]);
var inst_31958 = (state_31967[(2)]);
var state_31967__$1 = (function (){var statearr_32000 = state_31967;
(statearr_32000[(10)] = inst_31958);

return statearr_32000;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31967__$1,(9),results,inst_31950);
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
var cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____0 = (function (){
var statearr_32006 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32006[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__);

(statearr_32006[(1)] = (1));

return statearr_32006;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____1 = (function (state_31967){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_31967);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e32009){var ex__31053__auto__ = e32009;
var statearr_32010_34784 = state_31967;
(statearr_32010_34784[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_31967[(4)]))){
var statearr_32011_34785 = state_31967;
(statearr_32011_34785[(1)] = cljs.core.first((state_31967[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34786 = state_31967;
state_31967 = G__34786;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__ = function(state_31967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____1.call(this,state_31967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_32012 = f__31146__auto__();
(statearr_32012[(6)] = c__31144__auto___34775);

return statearr_32012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
}));


var c__31144__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_32063){
var state_val_32064 = (state_32063[(1)]);
if((state_val_32064 === (7))){
var inst_32059 = (state_32063[(2)]);
var state_32063__$1 = state_32063;
var statearr_32069_34787 = state_32063__$1;
(statearr_32069_34787[(2)] = inst_32059);

(statearr_32069_34787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (20))){
var state_32063__$1 = state_32063;
var statearr_32070_34788 = state_32063__$1;
(statearr_32070_34788[(2)] = null);

(statearr_32070_34788[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (1))){
var state_32063__$1 = state_32063;
var statearr_32073_34789 = state_32063__$1;
(statearr_32073_34789[(2)] = null);

(statearr_32073_34789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (4))){
var inst_32024 = (state_32063[(7)]);
var inst_32024__$1 = (state_32063[(2)]);
var inst_32025 = (inst_32024__$1 == null);
var state_32063__$1 = (function (){var statearr_32075 = state_32063;
(statearr_32075[(7)] = inst_32024__$1);

return statearr_32075;
})();
if(cljs.core.truth_(inst_32025)){
var statearr_32077_34790 = state_32063__$1;
(statearr_32077_34790[(1)] = (5));

} else {
var statearr_32081_34791 = state_32063__$1;
(statearr_32081_34791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (15))){
var inst_32041 = (state_32063[(8)]);
var state_32063__$1 = state_32063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32063__$1,(18),to,inst_32041);
} else {
if((state_val_32064 === (21))){
var inst_32054 = (state_32063[(2)]);
var state_32063__$1 = state_32063;
var statearr_32085_34792 = state_32063__$1;
(statearr_32085_34792[(2)] = inst_32054);

(statearr_32085_34792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (13))){
var inst_32056 = (state_32063[(2)]);
var state_32063__$1 = (function (){var statearr_32089 = state_32063;
(statearr_32089[(9)] = inst_32056);

return statearr_32089;
})();
var statearr_32091_34797 = state_32063__$1;
(statearr_32091_34797[(2)] = null);

(statearr_32091_34797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (6))){
var inst_32024 = (state_32063[(7)]);
var state_32063__$1 = state_32063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32063__$1,(11),inst_32024);
} else {
if((state_val_32064 === (17))){
var inst_32049 = (state_32063[(2)]);
var state_32063__$1 = state_32063;
if(cljs.core.truth_(inst_32049)){
var statearr_32093_34801 = state_32063__$1;
(statearr_32093_34801[(1)] = (19));

} else {
var statearr_32095_34802 = state_32063__$1;
(statearr_32095_34802[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (3))){
var inst_32061 = (state_32063[(2)]);
var state_32063__$1 = state_32063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32063__$1,inst_32061);
} else {
if((state_val_32064 === (12))){
var inst_32038 = (state_32063[(10)]);
var state_32063__$1 = state_32063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32063__$1,(14),inst_32038);
} else {
if((state_val_32064 === (2))){
var state_32063__$1 = state_32063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32063__$1,(4),results);
} else {
if((state_val_32064 === (19))){
var state_32063__$1 = state_32063;
var statearr_32102_34803 = state_32063__$1;
(statearr_32102_34803[(2)] = null);

(statearr_32102_34803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (11))){
var inst_32038 = (state_32063[(2)]);
var state_32063__$1 = (function (){var statearr_32108 = state_32063;
(statearr_32108[(10)] = inst_32038);

return statearr_32108;
})();
var statearr_32111_34811 = state_32063__$1;
(statearr_32111_34811[(2)] = null);

(statearr_32111_34811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (9))){
var state_32063__$1 = state_32063;
var statearr_32114_34813 = state_32063__$1;
(statearr_32114_34813[(2)] = null);

(statearr_32114_34813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (5))){
var state_32063__$1 = state_32063;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32117_34817 = state_32063__$1;
(statearr_32117_34817[(1)] = (8));

} else {
var statearr_32118_34818 = state_32063__$1;
(statearr_32118_34818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (14))){
var inst_32043 = (state_32063[(11)]);
var inst_32041 = (state_32063[(8)]);
var inst_32041__$1 = (state_32063[(2)]);
var inst_32042 = (inst_32041__$1 == null);
var inst_32043__$1 = cljs.core.not(inst_32042);
var state_32063__$1 = (function (){var statearr_32120 = state_32063;
(statearr_32120[(11)] = inst_32043__$1);

(statearr_32120[(8)] = inst_32041__$1);

return statearr_32120;
})();
if(inst_32043__$1){
var statearr_32124_34819 = state_32063__$1;
(statearr_32124_34819[(1)] = (15));

} else {
var statearr_32126_34820 = state_32063__$1;
(statearr_32126_34820[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (16))){
var inst_32043 = (state_32063[(11)]);
var state_32063__$1 = state_32063;
var statearr_32128_34821 = state_32063__$1;
(statearr_32128_34821[(2)] = inst_32043);

(statearr_32128_34821[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (10))){
var inst_32031 = (state_32063[(2)]);
var state_32063__$1 = state_32063;
var statearr_32131_34825 = state_32063__$1;
(statearr_32131_34825[(2)] = inst_32031);

(statearr_32131_34825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (18))){
var inst_32046 = (state_32063[(2)]);
var state_32063__$1 = state_32063;
var statearr_32133_34826 = state_32063__$1;
(statearr_32133_34826[(2)] = inst_32046);

(statearr_32133_34826[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (8))){
var inst_32028 = cljs.core.async.close_BANG_(to);
var state_32063__$1 = state_32063;
var statearr_32134_34827 = state_32063__$1;
(statearr_32134_34827[(2)] = inst_32028);

(statearr_32134_34827[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____0 = (function (){
var statearr_32142 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__);

(statearr_32142[(1)] = (1));

return statearr_32142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____1 = (function (state_32063){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_32063);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e32145){var ex__31053__auto__ = e32145;
var statearr_32146_34835 = state_32063;
(statearr_32146_34835[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_32063[(4)]))){
var statearr_32154_34836 = state_32063;
(statearr_32154_34836[(1)] = cljs.core.first((state_32063[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34837 = state_32063;
state_32063 = G__34837;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__ = function(state_32063){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____1.call(this,state_32063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31050__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_32167 = f__31146__auto__();
(statearr_32167[(6)] = c__31144__auto__);

return statearr_32167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
}));

return c__31144__auto__;
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
var G__32175 = arguments.length;
switch (G__32175) {
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
var G__32192 = arguments.length;
switch (G__32192) {
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
var G__32205 = arguments.length;
switch (G__32205) {
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
var c__31144__auto___34851 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_32245){
var state_val_32246 = (state_32245[(1)]);
if((state_val_32246 === (7))){
var inst_32237 = (state_32245[(2)]);
var state_32245__$1 = state_32245;
var statearr_32258_34852 = state_32245__$1;
(statearr_32258_34852[(2)] = inst_32237);

(statearr_32258_34852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32246 === (1))){
var state_32245__$1 = state_32245;
var statearr_32259_34854 = state_32245__$1;
(statearr_32259_34854[(2)] = null);

(statearr_32259_34854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32246 === (4))){
var inst_32214 = (state_32245[(7)]);
var inst_32214__$1 = (state_32245[(2)]);
var inst_32216 = (inst_32214__$1 == null);
var state_32245__$1 = (function (){var statearr_32264 = state_32245;
(statearr_32264[(7)] = inst_32214__$1);

return statearr_32264;
})();
if(cljs.core.truth_(inst_32216)){
var statearr_32265_34859 = state_32245__$1;
(statearr_32265_34859[(1)] = (5));

} else {
var statearr_32266_34860 = state_32245__$1;
(statearr_32266_34860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32246 === (13))){
var state_32245__$1 = state_32245;
var statearr_32268_34861 = state_32245__$1;
(statearr_32268_34861[(2)] = null);

(statearr_32268_34861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32246 === (6))){
var inst_32214 = (state_32245[(7)]);
var inst_32223 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32214) : p.call(null,inst_32214));
var state_32245__$1 = state_32245;
if(cljs.core.truth_(inst_32223)){
var statearr_32271_34863 = state_32245__$1;
(statearr_32271_34863[(1)] = (9));

} else {
var statearr_32272_34864 = state_32245__$1;
(statearr_32272_34864[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32246 === (3))){
var inst_32240 = (state_32245[(2)]);
var state_32245__$1 = state_32245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32245__$1,inst_32240);
} else {
if((state_val_32246 === (12))){
var state_32245__$1 = state_32245;
var statearr_32276_34865 = state_32245__$1;
(statearr_32276_34865[(2)] = null);

(statearr_32276_34865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32246 === (2))){
var state_32245__$1 = state_32245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32245__$1,(4),ch);
} else {
if((state_val_32246 === (11))){
var inst_32214 = (state_32245[(7)]);
var inst_32227 = (state_32245[(2)]);
var state_32245__$1 = state_32245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32245__$1,(8),inst_32227,inst_32214);
} else {
if((state_val_32246 === (9))){
var state_32245__$1 = state_32245;
var statearr_32280_34869 = state_32245__$1;
(statearr_32280_34869[(2)] = tc);

(statearr_32280_34869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32246 === (5))){
var inst_32218 = cljs.core.async.close_BANG_(tc);
var inst_32219 = cljs.core.async.close_BANG_(fc);
var state_32245__$1 = (function (){var statearr_32284 = state_32245;
(statearr_32284[(8)] = inst_32218);

return statearr_32284;
})();
var statearr_32285_34870 = state_32245__$1;
(statearr_32285_34870[(2)] = inst_32219);

(statearr_32285_34870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32246 === (14))){
var inst_32235 = (state_32245[(2)]);
var state_32245__$1 = state_32245;
var statearr_32289_34871 = state_32245__$1;
(statearr_32289_34871[(2)] = inst_32235);

(statearr_32289_34871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32246 === (10))){
var state_32245__$1 = state_32245;
var statearr_32291_34872 = state_32245__$1;
(statearr_32291_34872[(2)] = fc);

(statearr_32291_34872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32246 === (8))){
var inst_32230 = (state_32245[(2)]);
var state_32245__$1 = state_32245;
if(cljs.core.truth_(inst_32230)){
var statearr_32292_34873 = state_32245__$1;
(statearr_32292_34873[(1)] = (12));

} else {
var statearr_32293_34874 = state_32245__$1;
(statearr_32293_34874[(1)] = (13));

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
var cljs$core$async$state_machine__31050__auto__ = null;
var cljs$core$async$state_machine__31050__auto____0 = (function (){
var statearr_32298 = [null,null,null,null,null,null,null,null,null];
(statearr_32298[(0)] = cljs$core$async$state_machine__31050__auto__);

(statearr_32298[(1)] = (1));

return statearr_32298;
});
var cljs$core$async$state_machine__31050__auto____1 = (function (state_32245){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_32245);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e32300){var ex__31053__auto__ = e32300;
var statearr_32303_34875 = state_32245;
(statearr_32303_34875[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_32245[(4)]))){
var statearr_32304_34876 = state_32245;
(statearr_32304_34876[(1)] = cljs.core.first((state_32245[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34877 = state_32245;
state_32245 = G__34877;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$state_machine__31050__auto__ = function(state_32245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31050__auto____1.call(this,state_32245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31050__auto____0;
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31050__auto____1;
return cljs$core$async$state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_32311 = f__31146__auto__();
(statearr_32311[(6)] = c__31144__auto___34851);

return statearr_32311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
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
var c__31144__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_32349){
var state_val_32350 = (state_32349[(1)]);
if((state_val_32350 === (7))){
var inst_32342 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
var statearr_32363_34882 = state_32349__$1;
(statearr_32363_34882[(2)] = inst_32342);

(statearr_32363_34882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (1))){
var inst_32322 = init;
var inst_32323 = inst_32322;
var state_32349__$1 = (function (){var statearr_32368 = state_32349;
(statearr_32368[(7)] = inst_32323);

return statearr_32368;
})();
var statearr_32369_34883 = state_32349__$1;
(statearr_32369_34883[(2)] = null);

(statearr_32369_34883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (4))){
var inst_32328 = (state_32349[(8)]);
var inst_32328__$1 = (state_32349[(2)]);
var inst_32329 = (inst_32328__$1 == null);
var state_32349__$1 = (function (){var statearr_32371 = state_32349;
(statearr_32371[(8)] = inst_32328__$1);

return statearr_32371;
})();
if(cljs.core.truth_(inst_32329)){
var statearr_32377_34886 = state_32349__$1;
(statearr_32377_34886[(1)] = (5));

} else {
var statearr_32378_34887 = state_32349__$1;
(statearr_32378_34887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (6))){
var inst_32332 = (state_32349[(9)]);
var inst_32328 = (state_32349[(8)]);
var inst_32323 = (state_32349[(7)]);
var inst_32332__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32323,inst_32328) : f.call(null,inst_32323,inst_32328));
var inst_32333 = cljs.core.reduced_QMARK_(inst_32332__$1);
var state_32349__$1 = (function (){var statearr_32386 = state_32349;
(statearr_32386[(9)] = inst_32332__$1);

return statearr_32386;
})();
if(inst_32333){
var statearr_32388_34888 = state_32349__$1;
(statearr_32388_34888[(1)] = (8));

} else {
var statearr_32391_34889 = state_32349__$1;
(statearr_32391_34889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (3))){
var inst_32344 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32349__$1,inst_32344);
} else {
if((state_val_32350 === (2))){
var state_32349__$1 = state_32349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32349__$1,(4),ch);
} else {
if((state_val_32350 === (9))){
var inst_32332 = (state_32349[(9)]);
var inst_32323 = inst_32332;
var state_32349__$1 = (function (){var statearr_32401 = state_32349;
(statearr_32401[(7)] = inst_32323);

return statearr_32401;
})();
var statearr_32402_34890 = state_32349__$1;
(statearr_32402_34890[(2)] = null);

(statearr_32402_34890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (5))){
var inst_32323 = (state_32349[(7)]);
var state_32349__$1 = state_32349;
var statearr_32408_34891 = state_32349__$1;
(statearr_32408_34891[(2)] = inst_32323);

(statearr_32408_34891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (10))){
var inst_32340 = (state_32349[(2)]);
var state_32349__$1 = state_32349;
var statearr_32413_34892 = state_32349__$1;
(statearr_32413_34892[(2)] = inst_32340);

(statearr_32413_34892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32350 === (8))){
var inst_32332 = (state_32349[(9)]);
var inst_32336 = cljs.core.deref(inst_32332);
var state_32349__$1 = state_32349;
var statearr_32424_34893 = state_32349__$1;
(statearr_32424_34893[(2)] = inst_32336);

(statearr_32424_34893[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__31050__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31050__auto____0 = (function (){
var statearr_32429 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32429[(0)] = cljs$core$async$reduce_$_state_machine__31050__auto__);

(statearr_32429[(1)] = (1));

return statearr_32429;
});
var cljs$core$async$reduce_$_state_machine__31050__auto____1 = (function (state_32349){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_32349);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e32431){var ex__31053__auto__ = e32431;
var statearr_32436_34895 = state_32349;
(statearr_32436_34895[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_32349[(4)]))){
var statearr_32437_34897 = state_32349;
(statearr_32437_34897[(1)] = cljs.core.first((state_32349[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34902 = state_32349;
state_32349 = G__34902;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31050__auto__ = function(state_32349){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31050__auto____1.call(this,state_32349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31050__auto____0;
cljs$core$async$reduce_$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31050__auto____1;
return cljs$core$async$reduce_$_state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_32442 = f__31146__auto__();
(statearr_32442[(6)] = c__31144__auto__);

return statearr_32442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
}));

return c__31144__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31144__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_32463){
var state_val_32464 = (state_32463[(1)]);
if((state_val_32464 === (1))){
var inst_32453 = cljs.core.async.reduce(f__$1,init,ch);
var state_32463__$1 = state_32463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32463__$1,(2),inst_32453);
} else {
if((state_val_32464 === (2))){
var inst_32459 = (state_32463[(2)]);
var inst_32460 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32459) : f__$1.call(null,inst_32459));
var state_32463__$1 = state_32463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32463__$1,inst_32460);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31050__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31050__auto____0 = (function (){
var statearr_32472 = [null,null,null,null,null,null,null];
(statearr_32472[(0)] = cljs$core$async$transduce_$_state_machine__31050__auto__);

(statearr_32472[(1)] = (1));

return statearr_32472;
});
var cljs$core$async$transduce_$_state_machine__31050__auto____1 = (function (state_32463){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_32463);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e32479){var ex__31053__auto__ = e32479;
var statearr_32480_34906 = state_32463;
(statearr_32480_34906[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_32463[(4)]))){
var statearr_32485_34907 = state_32463;
(statearr_32485_34907[(1)] = cljs.core.first((state_32463[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34909 = state_32463;
state_32463 = G__34909;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31050__auto__ = function(state_32463){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31050__auto____1.call(this,state_32463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31050__auto____0;
cljs$core$async$transduce_$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31050__auto____1;
return cljs$core$async$transduce_$_state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_32495 = f__31146__auto__();
(statearr_32495[(6)] = c__31144__auto__);

return statearr_32495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
}));

return c__31144__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32501 = arguments.length;
switch (G__32501) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31144__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_32541){
var state_val_32542 = (state_32541[(1)]);
if((state_val_32542 === (7))){
var inst_32517 = (state_32541[(2)]);
var state_32541__$1 = state_32541;
var statearr_32552_34929 = state_32541__$1;
(statearr_32552_34929[(2)] = inst_32517);

(statearr_32552_34929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (1))){
var inst_32507 = cljs.core.seq(coll);
var inst_32508 = inst_32507;
var state_32541__$1 = (function (){var statearr_32556 = state_32541;
(statearr_32556[(7)] = inst_32508);

return statearr_32556;
})();
var statearr_32557_34933 = state_32541__$1;
(statearr_32557_34933[(2)] = null);

(statearr_32557_34933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (4))){
var inst_32508 = (state_32541[(7)]);
var inst_32514 = cljs.core.first(inst_32508);
var state_32541__$1 = state_32541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32541__$1,(7),ch,inst_32514);
} else {
if((state_val_32542 === (13))){
var inst_32530 = (state_32541[(2)]);
var state_32541__$1 = state_32541;
var statearr_32560_34935 = state_32541__$1;
(statearr_32560_34935[(2)] = inst_32530);

(statearr_32560_34935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (6))){
var inst_32520 = (state_32541[(2)]);
var state_32541__$1 = state_32541;
if(cljs.core.truth_(inst_32520)){
var statearr_32561_34937 = state_32541__$1;
(statearr_32561_34937[(1)] = (8));

} else {
var statearr_32564_34941 = state_32541__$1;
(statearr_32564_34941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (3))){
var inst_32534 = (state_32541[(2)]);
var state_32541__$1 = state_32541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32541__$1,inst_32534);
} else {
if((state_val_32542 === (12))){
var state_32541__$1 = state_32541;
var statearr_32567_34943 = state_32541__$1;
(statearr_32567_34943[(2)] = null);

(statearr_32567_34943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (2))){
var inst_32508 = (state_32541[(7)]);
var state_32541__$1 = state_32541;
if(cljs.core.truth_(inst_32508)){
var statearr_32569_34952 = state_32541__$1;
(statearr_32569_34952[(1)] = (4));

} else {
var statearr_32570_34953 = state_32541__$1;
(statearr_32570_34953[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (11))){
var inst_32527 = cljs.core.async.close_BANG_(ch);
var state_32541__$1 = state_32541;
var statearr_32575_34962 = state_32541__$1;
(statearr_32575_34962[(2)] = inst_32527);

(statearr_32575_34962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (9))){
var state_32541__$1 = state_32541;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32576_34966 = state_32541__$1;
(statearr_32576_34966[(1)] = (11));

} else {
var statearr_32577_34969 = state_32541__$1;
(statearr_32577_34969[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (5))){
var inst_32508 = (state_32541[(7)]);
var state_32541__$1 = state_32541;
var statearr_32578_34976 = state_32541__$1;
(statearr_32578_34976[(2)] = inst_32508);

(statearr_32578_34976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (10))){
var inst_32532 = (state_32541[(2)]);
var state_32541__$1 = state_32541;
var statearr_32583_34977 = state_32541__$1;
(statearr_32583_34977[(2)] = inst_32532);

(statearr_32583_34977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32542 === (8))){
var inst_32508 = (state_32541[(7)]);
var inst_32523 = cljs.core.next(inst_32508);
var inst_32508__$1 = inst_32523;
var state_32541__$1 = (function (){var statearr_32587 = state_32541;
(statearr_32587[(7)] = inst_32508__$1);

return statearr_32587;
})();
var statearr_32592_34981 = state_32541__$1;
(statearr_32592_34981[(2)] = null);

(statearr_32592_34981[(1)] = (2));


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
var cljs$core$async$state_machine__31050__auto__ = null;
var cljs$core$async$state_machine__31050__auto____0 = (function (){
var statearr_32603 = [null,null,null,null,null,null,null,null];
(statearr_32603[(0)] = cljs$core$async$state_machine__31050__auto__);

(statearr_32603[(1)] = (1));

return statearr_32603;
});
var cljs$core$async$state_machine__31050__auto____1 = (function (state_32541){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_32541);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e32607){var ex__31053__auto__ = e32607;
var statearr_32612_34994 = state_32541;
(statearr_32612_34994[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_32541[(4)]))){
var statearr_32617_34995 = state_32541;
(statearr_32617_34995[(1)] = cljs.core.first((state_32541[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34996 = state_32541;
state_32541 = G__34996;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$state_machine__31050__auto__ = function(state_32541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31050__auto____1.call(this,state_32541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31050__auto____0;
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31050__auto____1;
return cljs$core$async$state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_32628 = f__31146__auto__();
(statearr_32628[(6)] = c__31144__auto__);

return statearr_32628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
}));

return c__31144__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32648 = arguments.length;
switch (G__32648) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34999 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34999(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35003 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35003(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35010 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35010(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35011 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35011(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32724 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32724 = (function (ch,cs,meta32725){
this.ch = ch;
this.cs = cs;
this.meta32725 = meta32725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32726,meta32725__$1){
var self__ = this;
var _32726__$1 = this;
return (new cljs.core.async.t_cljs$core$async32724(self__.ch,self__.cs,meta32725__$1));
}));

(cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32726){
var self__ = this;
var _32726__$1 = this;
return self__.meta32725;
}));

(cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32725","meta32725",-1885153004,null)], null);
}));

(cljs.core.async.t_cljs$core$async32724.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32724");

(cljs.core.async.t_cljs$core$async32724.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32724");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32724.
 */
cljs.core.async.__GT_t_cljs$core$async32724 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32724(ch__$1,cs__$1,meta32725){
return (new cljs.core.async.t_cljs$core$async32724(ch__$1,cs__$1,meta32725));
});

}

return (new cljs.core.async.t_cljs$core$async32724(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31144__auto___35013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_32970){
var state_val_32971 = (state_32970[(1)]);
if((state_val_32971 === (7))){
var inst_32961 = (state_32970[(2)]);
var state_32970__$1 = state_32970;
var statearr_32973_35014 = state_32970__$1;
(statearr_32973_35014[(2)] = inst_32961);

(statearr_32973_35014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (20))){
var inst_32822 = (state_32970[(7)]);
var inst_32842 = cljs.core.first(inst_32822);
var inst_32847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32842,(0),null);
var inst_32848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32842,(1),null);
var state_32970__$1 = (function (){var statearr_32974 = state_32970;
(statearr_32974[(8)] = inst_32847);

return statearr_32974;
})();
if(cljs.core.truth_(inst_32848)){
var statearr_32975_35021 = state_32970__$1;
(statearr_32975_35021[(1)] = (22));

} else {
var statearr_32976_35022 = state_32970__$1;
(statearr_32976_35022[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (27))){
var inst_32783 = (state_32970[(9)]);
var inst_32881 = (state_32970[(10)]);
var inst_32888 = (state_32970[(11)]);
var inst_32883 = (state_32970[(12)]);
var inst_32888__$1 = cljs.core._nth(inst_32881,inst_32883);
var inst_32889 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32888__$1,inst_32783,done);
var state_32970__$1 = (function (){var statearr_32980 = state_32970;
(statearr_32980[(11)] = inst_32888__$1);

return statearr_32980;
})();
if(cljs.core.truth_(inst_32889)){
var statearr_32981_35023 = state_32970__$1;
(statearr_32981_35023[(1)] = (30));

} else {
var statearr_32982_35024 = state_32970__$1;
(statearr_32982_35024[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (1))){
var state_32970__$1 = state_32970;
var statearr_32984_35026 = state_32970__$1;
(statearr_32984_35026[(2)] = null);

(statearr_32984_35026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (24))){
var inst_32822 = (state_32970[(7)]);
var inst_32854 = (state_32970[(2)]);
var inst_32855 = cljs.core.next(inst_32822);
var inst_32795 = inst_32855;
var inst_32796 = null;
var inst_32797 = (0);
var inst_32798 = (0);
var state_32970__$1 = (function (){var statearr_32987 = state_32970;
(statearr_32987[(13)] = inst_32854);

(statearr_32987[(14)] = inst_32798);

(statearr_32987[(15)] = inst_32797);

(statearr_32987[(16)] = inst_32795);

(statearr_32987[(17)] = inst_32796);

return statearr_32987;
})();
var statearr_32989_35027 = state_32970__$1;
(statearr_32989_35027[(2)] = null);

(statearr_32989_35027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (39))){
var state_32970__$1 = state_32970;
var statearr_32993_35028 = state_32970__$1;
(statearr_32993_35028[(2)] = null);

(statearr_32993_35028[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (4))){
var inst_32783 = (state_32970[(9)]);
var inst_32783__$1 = (state_32970[(2)]);
var inst_32787 = (inst_32783__$1 == null);
var state_32970__$1 = (function (){var statearr_32995 = state_32970;
(statearr_32995[(9)] = inst_32783__$1);

return statearr_32995;
})();
if(cljs.core.truth_(inst_32787)){
var statearr_33000_35029 = state_32970__$1;
(statearr_33000_35029[(1)] = (5));

} else {
var statearr_33003_35030 = state_32970__$1;
(statearr_33003_35030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (15))){
var inst_32798 = (state_32970[(14)]);
var inst_32797 = (state_32970[(15)]);
var inst_32795 = (state_32970[(16)]);
var inst_32796 = (state_32970[(17)]);
var inst_32814 = (state_32970[(2)]);
var inst_32816 = (inst_32798 + (1));
var tmp32990 = inst_32797;
var tmp32991 = inst_32795;
var tmp32992 = inst_32796;
var inst_32795__$1 = tmp32991;
var inst_32796__$1 = tmp32992;
var inst_32797__$1 = tmp32990;
var inst_32798__$1 = inst_32816;
var state_32970__$1 = (function (){var statearr_33015 = state_32970;
(statearr_33015[(14)] = inst_32798__$1);

(statearr_33015[(18)] = inst_32814);

(statearr_33015[(15)] = inst_32797__$1);

(statearr_33015[(16)] = inst_32795__$1);

(statearr_33015[(17)] = inst_32796__$1);

return statearr_33015;
})();
var statearr_33016_35037 = state_32970__$1;
(statearr_33016_35037[(2)] = null);

(statearr_33016_35037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (21))){
var inst_32862 = (state_32970[(2)]);
var state_32970__$1 = state_32970;
var statearr_33022_35039 = state_32970__$1;
(statearr_33022_35039[(2)] = inst_32862);

(statearr_33022_35039[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (31))){
var inst_32888 = (state_32970[(11)]);
var inst_32892 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32888);
var state_32970__$1 = state_32970;
var statearr_33025_35040 = state_32970__$1;
(statearr_33025_35040[(2)] = inst_32892);

(statearr_33025_35040[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (32))){
var inst_32882 = (state_32970[(19)]);
var inst_32881 = (state_32970[(10)]);
var inst_32883 = (state_32970[(12)]);
var inst_32880 = (state_32970[(20)]);
var inst_32894 = (state_32970[(2)]);
var inst_32899 = (inst_32883 + (1));
var tmp33017 = inst_32882;
var tmp33018 = inst_32881;
var tmp33019 = inst_32880;
var inst_32880__$1 = tmp33019;
var inst_32881__$1 = tmp33018;
var inst_32882__$1 = tmp33017;
var inst_32883__$1 = inst_32899;
var state_32970__$1 = (function (){var statearr_33032 = state_32970;
(statearr_33032[(19)] = inst_32882__$1);

(statearr_33032[(10)] = inst_32881__$1);

(statearr_33032[(21)] = inst_32894);

(statearr_33032[(12)] = inst_32883__$1);

(statearr_33032[(20)] = inst_32880__$1);

return statearr_33032;
})();
var statearr_33033_35041 = state_32970__$1;
(statearr_33033_35041[(2)] = null);

(statearr_33033_35041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (40))){
var inst_32929 = (state_32970[(22)]);
var inst_32937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32929);
var state_32970__$1 = state_32970;
var statearr_33035_35042 = state_32970__$1;
(statearr_33035_35042[(2)] = inst_32937);

(statearr_33035_35042[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (33))){
var inst_32902 = (state_32970[(23)]);
var inst_32913 = cljs.core.chunked_seq_QMARK_(inst_32902);
var state_32970__$1 = state_32970;
if(inst_32913){
var statearr_33038_35043 = state_32970__$1;
(statearr_33038_35043[(1)] = (36));

} else {
var statearr_33041_35044 = state_32970__$1;
(statearr_33041_35044[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (13))){
var inst_32807 = (state_32970[(24)]);
var inst_32811 = cljs.core.async.close_BANG_(inst_32807);
var state_32970__$1 = state_32970;
var statearr_33042_35045 = state_32970__$1;
(statearr_33042_35045[(2)] = inst_32811);

(statearr_33042_35045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (22))){
var inst_32847 = (state_32970[(8)]);
var inst_32851 = cljs.core.async.close_BANG_(inst_32847);
var state_32970__$1 = state_32970;
var statearr_33045_35046 = state_32970__$1;
(statearr_33045_35046[(2)] = inst_32851);

(statearr_33045_35046[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (36))){
var inst_32902 = (state_32970[(23)]);
var inst_32916 = cljs.core.chunk_first(inst_32902);
var inst_32919 = cljs.core.chunk_rest(inst_32902);
var inst_32924 = cljs.core.count(inst_32916);
var inst_32880 = inst_32919;
var inst_32881 = inst_32916;
var inst_32882 = inst_32924;
var inst_32883 = (0);
var state_32970__$1 = (function (){var statearr_33050 = state_32970;
(statearr_33050[(19)] = inst_32882);

(statearr_33050[(10)] = inst_32881);

(statearr_33050[(12)] = inst_32883);

(statearr_33050[(20)] = inst_32880);

return statearr_33050;
})();
var statearr_33051_35047 = state_32970__$1;
(statearr_33051_35047[(2)] = null);

(statearr_33051_35047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (41))){
var inst_32902 = (state_32970[(23)]);
var inst_32939 = (state_32970[(2)]);
var inst_32941 = cljs.core.next(inst_32902);
var inst_32880 = inst_32941;
var inst_32881 = null;
var inst_32882 = (0);
var inst_32883 = (0);
var state_32970__$1 = (function (){var statearr_33058 = state_32970;
(statearr_33058[(19)] = inst_32882);

(statearr_33058[(10)] = inst_32881);

(statearr_33058[(12)] = inst_32883);

(statearr_33058[(25)] = inst_32939);

(statearr_33058[(20)] = inst_32880);

return statearr_33058;
})();
var statearr_33061_35048 = state_32970__$1;
(statearr_33061_35048[(2)] = null);

(statearr_33061_35048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (43))){
var state_32970__$1 = state_32970;
var statearr_33064_35049 = state_32970__$1;
(statearr_33064_35049[(2)] = null);

(statearr_33064_35049[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (29))){
var inst_32949 = (state_32970[(2)]);
var state_32970__$1 = state_32970;
var statearr_33072_35050 = state_32970__$1;
(statearr_33072_35050[(2)] = inst_32949);

(statearr_33072_35050[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (44))){
var inst_32958 = (state_32970[(2)]);
var state_32970__$1 = (function (){var statearr_33077 = state_32970;
(statearr_33077[(26)] = inst_32958);

return statearr_33077;
})();
var statearr_33078_35055 = state_32970__$1;
(statearr_33078_35055[(2)] = null);

(statearr_33078_35055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (6))){
var inst_32872 = (state_32970[(27)]);
var inst_32871 = cljs.core.deref(cs);
var inst_32872__$1 = cljs.core.keys(inst_32871);
var inst_32873 = cljs.core.count(inst_32872__$1);
var inst_32874 = cljs.core.reset_BANG_(dctr,inst_32873);
var inst_32879 = cljs.core.seq(inst_32872__$1);
var inst_32880 = inst_32879;
var inst_32881 = null;
var inst_32882 = (0);
var inst_32883 = (0);
var state_32970__$1 = (function (){var statearr_33085 = state_32970;
(statearr_33085[(19)] = inst_32882);

(statearr_33085[(10)] = inst_32881);

(statearr_33085[(12)] = inst_32883);

(statearr_33085[(28)] = inst_32874);

(statearr_33085[(27)] = inst_32872__$1);

(statearr_33085[(20)] = inst_32880);

return statearr_33085;
})();
var statearr_33090_35063 = state_32970__$1;
(statearr_33090_35063[(2)] = null);

(statearr_33090_35063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (28))){
var inst_32902 = (state_32970[(23)]);
var inst_32880 = (state_32970[(20)]);
var inst_32902__$1 = cljs.core.seq(inst_32880);
var state_32970__$1 = (function (){var statearr_33092 = state_32970;
(statearr_33092[(23)] = inst_32902__$1);

return statearr_33092;
})();
if(inst_32902__$1){
var statearr_33099_35065 = state_32970__$1;
(statearr_33099_35065[(1)] = (33));

} else {
var statearr_33102_35066 = state_32970__$1;
(statearr_33102_35066[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (25))){
var inst_32882 = (state_32970[(19)]);
var inst_32883 = (state_32970[(12)]);
var inst_32885 = (inst_32883 < inst_32882);
var inst_32886 = inst_32885;
var state_32970__$1 = state_32970;
if(cljs.core.truth_(inst_32886)){
var statearr_33108_35071 = state_32970__$1;
(statearr_33108_35071[(1)] = (27));

} else {
var statearr_33109_35072 = state_32970__$1;
(statearr_33109_35072[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (34))){
var state_32970__$1 = state_32970;
var statearr_33114_35073 = state_32970__$1;
(statearr_33114_35073[(2)] = null);

(statearr_33114_35073[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (17))){
var state_32970__$1 = state_32970;
var statearr_33121_35074 = state_32970__$1;
(statearr_33121_35074[(2)] = null);

(statearr_33121_35074[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (3))){
var inst_32963 = (state_32970[(2)]);
var state_32970__$1 = state_32970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32970__$1,inst_32963);
} else {
if((state_val_32971 === (12))){
var inst_32867 = (state_32970[(2)]);
var state_32970__$1 = state_32970;
var statearr_33127_35075 = state_32970__$1;
(statearr_33127_35075[(2)] = inst_32867);

(statearr_33127_35075[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (2))){
var state_32970__$1 = state_32970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32970__$1,(4),ch);
} else {
if((state_val_32971 === (23))){
var state_32970__$1 = state_32970;
var statearr_33132_35076 = state_32970__$1;
(statearr_33132_35076[(2)] = null);

(statearr_33132_35076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (35))){
var inst_32947 = (state_32970[(2)]);
var state_32970__$1 = state_32970;
var statearr_33137_35077 = state_32970__$1;
(statearr_33137_35077[(2)] = inst_32947);

(statearr_33137_35077[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (19))){
var inst_32822 = (state_32970[(7)]);
var inst_32832 = cljs.core.chunk_first(inst_32822);
var inst_32833 = cljs.core.chunk_rest(inst_32822);
var inst_32834 = cljs.core.count(inst_32832);
var inst_32795 = inst_32833;
var inst_32796 = inst_32832;
var inst_32797 = inst_32834;
var inst_32798 = (0);
var state_32970__$1 = (function (){var statearr_33138 = state_32970;
(statearr_33138[(14)] = inst_32798);

(statearr_33138[(15)] = inst_32797);

(statearr_33138[(16)] = inst_32795);

(statearr_33138[(17)] = inst_32796);

return statearr_33138;
})();
var statearr_33140_35079 = state_32970__$1;
(statearr_33140_35079[(2)] = null);

(statearr_33140_35079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (11))){
var inst_32795 = (state_32970[(16)]);
var inst_32822 = (state_32970[(7)]);
var inst_32822__$1 = cljs.core.seq(inst_32795);
var state_32970__$1 = (function (){var statearr_33142 = state_32970;
(statearr_33142[(7)] = inst_32822__$1);

return statearr_33142;
})();
if(inst_32822__$1){
var statearr_33143_35081 = state_32970__$1;
(statearr_33143_35081[(1)] = (16));

} else {
var statearr_33144_35082 = state_32970__$1;
(statearr_33144_35082[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (9))){
var inst_32869 = (state_32970[(2)]);
var state_32970__$1 = state_32970;
var statearr_33145_35084 = state_32970__$1;
(statearr_33145_35084[(2)] = inst_32869);

(statearr_33145_35084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (5))){
var inst_32793 = cljs.core.deref(cs);
var inst_32794 = cljs.core.seq(inst_32793);
var inst_32795 = inst_32794;
var inst_32796 = null;
var inst_32797 = (0);
var inst_32798 = (0);
var state_32970__$1 = (function (){var statearr_33146 = state_32970;
(statearr_33146[(14)] = inst_32798);

(statearr_33146[(15)] = inst_32797);

(statearr_33146[(16)] = inst_32795);

(statearr_33146[(17)] = inst_32796);

return statearr_33146;
})();
var statearr_33148_35088 = state_32970__$1;
(statearr_33148_35088[(2)] = null);

(statearr_33148_35088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (14))){
var state_32970__$1 = state_32970;
var statearr_33149_35089 = state_32970__$1;
(statearr_33149_35089[(2)] = null);

(statearr_33149_35089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (45))){
var inst_32955 = (state_32970[(2)]);
var state_32970__$1 = state_32970;
var statearr_33156_35092 = state_32970__$1;
(statearr_33156_35092[(2)] = inst_32955);

(statearr_33156_35092[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (26))){
var inst_32872 = (state_32970[(27)]);
var inst_32951 = (state_32970[(2)]);
var inst_32952 = cljs.core.seq(inst_32872);
var state_32970__$1 = (function (){var statearr_33158 = state_32970;
(statearr_33158[(29)] = inst_32951);

return statearr_33158;
})();
if(inst_32952){
var statearr_33162_35095 = state_32970__$1;
(statearr_33162_35095[(1)] = (42));

} else {
var statearr_33163_35096 = state_32970__$1;
(statearr_33163_35096[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (16))){
var inst_32822 = (state_32970[(7)]);
var inst_32829 = cljs.core.chunked_seq_QMARK_(inst_32822);
var state_32970__$1 = state_32970;
if(inst_32829){
var statearr_33164_35099 = state_32970__$1;
(statearr_33164_35099[(1)] = (19));

} else {
var statearr_33173_35100 = state_32970__$1;
(statearr_33173_35100[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (38))){
var inst_32944 = (state_32970[(2)]);
var state_32970__$1 = state_32970;
var statearr_33186_35101 = state_32970__$1;
(statearr_33186_35101[(2)] = inst_32944);

(statearr_33186_35101[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (30))){
var state_32970__$1 = state_32970;
var statearr_33192_35103 = state_32970__$1;
(statearr_33192_35103[(2)] = null);

(statearr_33192_35103[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (10))){
var inst_32798 = (state_32970[(14)]);
var inst_32796 = (state_32970[(17)]);
var inst_32806 = cljs.core._nth(inst_32796,inst_32798);
var inst_32807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32806,(0),null);
var inst_32808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32806,(1),null);
var state_32970__$1 = (function (){var statearr_33196 = state_32970;
(statearr_33196[(24)] = inst_32807);

return statearr_33196;
})();
if(cljs.core.truth_(inst_32808)){
var statearr_33197_35108 = state_32970__$1;
(statearr_33197_35108[(1)] = (13));

} else {
var statearr_33198_35109 = state_32970__$1;
(statearr_33198_35109[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (18))){
var inst_32865 = (state_32970[(2)]);
var state_32970__$1 = state_32970;
var statearr_33199_35111 = state_32970__$1;
(statearr_33199_35111[(2)] = inst_32865);

(statearr_33199_35111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (42))){
var state_32970__$1 = state_32970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32970__$1,(45),dchan);
} else {
if((state_val_32971 === (37))){
var inst_32783 = (state_32970[(9)]);
var inst_32902 = (state_32970[(23)]);
var inst_32929 = (state_32970[(22)]);
var inst_32929__$1 = cljs.core.first(inst_32902);
var inst_32934 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32929__$1,inst_32783,done);
var state_32970__$1 = (function (){var statearr_33204 = state_32970;
(statearr_33204[(22)] = inst_32929__$1);

return statearr_33204;
})();
if(cljs.core.truth_(inst_32934)){
var statearr_33205_35116 = state_32970__$1;
(statearr_33205_35116[(1)] = (39));

} else {
var statearr_33208_35117 = state_32970__$1;
(statearr_33208_35117[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32971 === (8))){
var inst_32798 = (state_32970[(14)]);
var inst_32797 = (state_32970[(15)]);
var inst_32800 = (inst_32798 < inst_32797);
var inst_32801 = inst_32800;
var state_32970__$1 = state_32970;
if(cljs.core.truth_(inst_32801)){
var statearr_33213_35122 = state_32970__$1;
(statearr_33213_35122[(1)] = (10));

} else {
var statearr_33214_35123 = state_32970__$1;
(statearr_33214_35123[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__31050__auto__ = null;
var cljs$core$async$mult_$_state_machine__31050__auto____0 = (function (){
var statearr_33217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33217[(0)] = cljs$core$async$mult_$_state_machine__31050__auto__);

(statearr_33217[(1)] = (1));

return statearr_33217;
});
var cljs$core$async$mult_$_state_machine__31050__auto____1 = (function (state_32970){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_32970);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e33218){var ex__31053__auto__ = e33218;
var statearr_33219_35125 = state_32970;
(statearr_33219_35125[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_32970[(4)]))){
var statearr_33220_35126 = state_32970;
(statearr_33220_35126[(1)] = cljs.core.first((state_32970[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35130 = state_32970;
state_32970 = G__35130;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31050__auto__ = function(state_32970){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31050__auto____1.call(this,state_32970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31050__auto____0;
cljs$core$async$mult_$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31050__auto____1;
return cljs$core$async$mult_$_state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_33221 = f__31146__auto__();
(statearr_33221[(6)] = c__31144__auto___35013);

return statearr_33221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
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
var G__33224 = arguments.length;
switch (G__33224) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35134 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35134(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35135 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35135(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35137 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35137(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35142 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35142(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35143 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35143(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35144 = arguments.length;
var i__4819__auto___35145 = (0);
while(true){
if((i__4819__auto___35145 < len__4818__auto___35144)){
args__4824__auto__.push((arguments[i__4819__auto___35145]));

var G__35146 = (i__4819__auto___35145 + (1));
i__4819__auto___35145 = G__35146;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33307){
var map__33310 = p__33307;
var map__33310__$1 = cljs.core.__destructure_map(map__33310);
var opts = map__33310__$1;
var statearr_33312_35150 = state;
(statearr_33312_35150[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33313_35155 = state;
(statearr_33313_35155[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33314_35159 = state;
(statearr_33314_35159[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33302){
var G__33303 = cljs.core.first(seq33302);
var seq33302__$1 = cljs.core.next(seq33302);
var G__33304 = cljs.core.first(seq33302__$1);
var seq33302__$2 = cljs.core.next(seq33302__$1);
var G__33305 = cljs.core.first(seq33302__$2);
var seq33302__$3 = cljs.core.next(seq33302__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33303,G__33304,G__33305,seq33302__$3);
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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33322 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33322 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33323){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33323 = meta33323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33324,meta33323__$1){
var self__ = this;
var _33324__$1 = this;
return (new cljs.core.async.t_cljs$core$async33322(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33323__$1));
}));

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33324){
var self__ = this;
var _33324__$1 = this;
return self__.meta33323;
}));

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33322.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33323","meta33323",-2040083733,null)], null);
}));

(cljs.core.async.t_cljs$core$async33322.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33322");

(cljs.core.async.t_cljs$core$async33322.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33322");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33322.
 */
cljs.core.async.__GT_t_cljs$core$async33322 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33322(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33323){
return (new cljs.core.async.t_cljs$core$async33322(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33323));
});

}

return (new cljs.core.async.t_cljs$core$async33322(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31144__auto___35198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_33406){
var state_val_33407 = (state_33406[(1)]);
if((state_val_33407 === (7))){
var inst_33363 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
if(cljs.core.truth_(inst_33363)){
var statearr_33408_35199 = state_33406__$1;
(statearr_33408_35199[(1)] = (8));

} else {
var statearr_33410_35203 = state_33406__$1;
(statearr_33410_35203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (20))){
var inst_33353 = (state_33406[(7)]);
var state_33406__$1 = state_33406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33406__$1,(23),out,inst_33353);
} else {
if((state_val_33407 === (1))){
var inst_33333 = calc_state();
var inst_33334 = cljs.core.__destructure_map(inst_33333);
var inst_33335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33334,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33334,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33334,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33338 = inst_33333;
var state_33406__$1 = (function (){var statearr_33416 = state_33406;
(statearr_33416[(8)] = inst_33337);

(statearr_33416[(9)] = inst_33335);

(statearr_33416[(10)] = inst_33336);

(statearr_33416[(11)] = inst_33338);

return statearr_33416;
})();
var statearr_33421_35211 = state_33406__$1;
(statearr_33421_35211[(2)] = null);

(statearr_33421_35211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (24))){
var inst_33343 = (state_33406[(12)]);
var inst_33338 = inst_33343;
var state_33406__$1 = (function (){var statearr_33427 = state_33406;
(statearr_33427[(11)] = inst_33338);

return statearr_33427;
})();
var statearr_33428_35215 = state_33406__$1;
(statearr_33428_35215[(2)] = null);

(statearr_33428_35215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (4))){
var inst_33353 = (state_33406[(7)]);
var inst_33357 = (state_33406[(13)]);
var inst_33351 = (state_33406[(2)]);
var inst_33353__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33351,(0),null);
var inst_33354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33351,(1),null);
var inst_33357__$1 = (inst_33353__$1 == null);
var state_33406__$1 = (function (){var statearr_33429 = state_33406;
(statearr_33429[(7)] = inst_33353__$1);

(statearr_33429[(14)] = inst_33354);

(statearr_33429[(13)] = inst_33357__$1);

return statearr_33429;
})();
if(cljs.core.truth_(inst_33357__$1)){
var statearr_33430_35220 = state_33406__$1;
(statearr_33430_35220[(1)] = (5));

} else {
var statearr_33431_35221 = state_33406__$1;
(statearr_33431_35221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (15))){
var inst_33344 = (state_33406[(15)]);
var inst_33378 = (state_33406[(16)]);
var inst_33378__$1 = cljs.core.empty_QMARK_(inst_33344);
var state_33406__$1 = (function (){var statearr_33433 = state_33406;
(statearr_33433[(16)] = inst_33378__$1);

return statearr_33433;
})();
if(inst_33378__$1){
var statearr_33434_35224 = state_33406__$1;
(statearr_33434_35224[(1)] = (17));

} else {
var statearr_33435_35225 = state_33406__$1;
(statearr_33435_35225[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (21))){
var inst_33343 = (state_33406[(12)]);
var inst_33338 = inst_33343;
var state_33406__$1 = (function (){var statearr_33436 = state_33406;
(statearr_33436[(11)] = inst_33338);

return statearr_33436;
})();
var statearr_33437_35226 = state_33406__$1;
(statearr_33437_35226[(2)] = null);

(statearr_33437_35226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (13))){
var inst_33371 = (state_33406[(2)]);
var inst_33372 = calc_state();
var inst_33338 = inst_33372;
var state_33406__$1 = (function (){var statearr_33438 = state_33406;
(statearr_33438[(17)] = inst_33371);

(statearr_33438[(11)] = inst_33338);

return statearr_33438;
})();
var statearr_33439_35227 = state_33406__$1;
(statearr_33439_35227[(2)] = null);

(statearr_33439_35227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (22))){
var inst_33398 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
var statearr_33443_35228 = state_33406__$1;
(statearr_33443_35228[(2)] = inst_33398);

(statearr_33443_35228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (6))){
var inst_33354 = (state_33406[(14)]);
var inst_33360 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33354,change);
var state_33406__$1 = state_33406;
var statearr_33444_35229 = state_33406__$1;
(statearr_33444_35229[(2)] = inst_33360);

(statearr_33444_35229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (25))){
var state_33406__$1 = state_33406;
var statearr_33446_35234 = state_33406__$1;
(statearr_33446_35234[(2)] = null);

(statearr_33446_35234[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (17))){
var inst_33354 = (state_33406[(14)]);
var inst_33345 = (state_33406[(18)]);
var inst_33380 = (inst_33345.cljs$core$IFn$_invoke$arity$1 ? inst_33345.cljs$core$IFn$_invoke$arity$1(inst_33354) : inst_33345.call(null,inst_33354));
var inst_33381 = cljs.core.not(inst_33380);
var state_33406__$1 = state_33406;
var statearr_33448_35235 = state_33406__$1;
(statearr_33448_35235[(2)] = inst_33381);

(statearr_33448_35235[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (3))){
var inst_33402 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33406__$1,inst_33402);
} else {
if((state_val_33407 === (12))){
var state_33406__$1 = state_33406;
var statearr_33452_35236 = state_33406__$1;
(statearr_33452_35236[(2)] = null);

(statearr_33452_35236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (2))){
var inst_33338 = (state_33406[(11)]);
var inst_33343 = (state_33406[(12)]);
var inst_33343__$1 = cljs.core.__destructure_map(inst_33338);
var inst_33344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33343__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33343__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33343__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33406__$1 = (function (){var statearr_33460 = state_33406;
(statearr_33460[(15)] = inst_33344);

(statearr_33460[(18)] = inst_33345);

(statearr_33460[(12)] = inst_33343__$1);

return statearr_33460;
})();
return cljs.core.async.ioc_alts_BANG_(state_33406__$1,(4),inst_33346);
} else {
if((state_val_33407 === (23))){
var inst_33389 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
if(cljs.core.truth_(inst_33389)){
var statearr_33461_35237 = state_33406__$1;
(statearr_33461_35237[(1)] = (24));

} else {
var statearr_33462_35238 = state_33406__$1;
(statearr_33462_35238[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (19))){
var inst_33384 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
var statearr_33463_35239 = state_33406__$1;
(statearr_33463_35239[(2)] = inst_33384);

(statearr_33463_35239[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (11))){
var inst_33354 = (state_33406[(14)]);
var inst_33368 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33354);
var state_33406__$1 = state_33406;
var statearr_33464_35244 = state_33406__$1;
(statearr_33464_35244[(2)] = inst_33368);

(statearr_33464_35244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (9))){
var inst_33375 = (state_33406[(19)]);
var inst_33354 = (state_33406[(14)]);
var inst_33344 = (state_33406[(15)]);
var inst_33375__$1 = (inst_33344.cljs$core$IFn$_invoke$arity$1 ? inst_33344.cljs$core$IFn$_invoke$arity$1(inst_33354) : inst_33344.call(null,inst_33354));
var state_33406__$1 = (function (){var statearr_33466 = state_33406;
(statearr_33466[(19)] = inst_33375__$1);

return statearr_33466;
})();
if(cljs.core.truth_(inst_33375__$1)){
var statearr_33468_35245 = state_33406__$1;
(statearr_33468_35245[(1)] = (14));

} else {
var statearr_33469_35247 = state_33406__$1;
(statearr_33469_35247[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (5))){
var inst_33357 = (state_33406[(13)]);
var state_33406__$1 = state_33406;
var statearr_33470_35248 = state_33406__$1;
(statearr_33470_35248[(2)] = inst_33357);

(statearr_33470_35248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (14))){
var inst_33375 = (state_33406[(19)]);
var state_33406__$1 = state_33406;
var statearr_33471_35249 = state_33406__$1;
(statearr_33471_35249[(2)] = inst_33375);

(statearr_33471_35249[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (26))){
var inst_33394 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
var statearr_33473_35250 = state_33406__$1;
(statearr_33473_35250[(2)] = inst_33394);

(statearr_33473_35250[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (16))){
var inst_33386 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
if(cljs.core.truth_(inst_33386)){
var statearr_33475_35251 = state_33406__$1;
(statearr_33475_35251[(1)] = (20));

} else {
var statearr_33476_35252 = state_33406__$1;
(statearr_33476_35252[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (10))){
var inst_33400 = (state_33406[(2)]);
var state_33406__$1 = state_33406;
var statearr_33478_35254 = state_33406__$1;
(statearr_33478_35254[(2)] = inst_33400);

(statearr_33478_35254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (18))){
var inst_33378 = (state_33406[(16)]);
var state_33406__$1 = state_33406;
var statearr_33479_35255 = state_33406__$1;
(statearr_33479_35255[(2)] = inst_33378);

(statearr_33479_35255[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33407 === (8))){
var inst_33353 = (state_33406[(7)]);
var inst_33365 = (inst_33353 == null);
var state_33406__$1 = state_33406;
if(cljs.core.truth_(inst_33365)){
var statearr_33480_35256 = state_33406__$1;
(statearr_33480_35256[(1)] = (11));

} else {
var statearr_33481_35258 = state_33406__$1;
(statearr_33481_35258[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__31050__auto__ = null;
var cljs$core$async$mix_$_state_machine__31050__auto____0 = (function (){
var statearr_33483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33483[(0)] = cljs$core$async$mix_$_state_machine__31050__auto__);

(statearr_33483[(1)] = (1));

return statearr_33483;
});
var cljs$core$async$mix_$_state_machine__31050__auto____1 = (function (state_33406){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_33406);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e33484){var ex__31053__auto__ = e33484;
var statearr_33486_35263 = state_33406;
(statearr_33486_35263[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_33406[(4)]))){
var statearr_33488_35264 = state_33406;
(statearr_33488_35264[(1)] = cljs.core.first((state_33406[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35266 = state_33406;
state_33406 = G__35266;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31050__auto__ = function(state_33406){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31050__auto____1.call(this,state_33406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31050__auto____0;
cljs$core$async$mix_$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31050__auto____1;
return cljs$core$async$mix_$_state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_33490 = f__31146__auto__();
(statearr_33490[(6)] = c__31144__auto___35198);

return statearr_33490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35270 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35270(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35272 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35272(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35274 = (function() {
var G__35276 = null;
var G__35276__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35276__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35276 = function(p,v){
switch(arguments.length){
case 1:
return G__35276__1.call(this,p);
case 2:
return G__35276__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35276.cljs$core$IFn$_invoke$arity$1 = G__35276__1;
G__35276.cljs$core$IFn$_invoke$arity$2 = G__35276__2;
return G__35276;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33502 = arguments.length;
switch (G__33502) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35274(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35274(p,v);
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
var G__33507 = arguments.length;
switch (G__33507) {
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
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33504_SHARP_){
if(cljs.core.truth_((p1__33504_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33504_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33504_SHARP_.call(null,topic)))){
return p1__33504_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33504_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33509 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33509 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33510){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33510 = meta33510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33511,meta33510__$1){
var self__ = this;
var _33511__$1 = this;
return (new cljs.core.async.t_cljs$core$async33509(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33510__$1));
}));

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33511){
var self__ = this;
var _33511__$1 = this;
return self__.meta33510;
}));

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33510","meta33510",-736632437,null)], null);
}));

(cljs.core.async.t_cljs$core$async33509.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33509");

(cljs.core.async.t_cljs$core$async33509.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33509");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33509.
 */
cljs.core.async.__GT_t_cljs$core$async33509 = (function cljs$core$async$__GT_t_cljs$core$async33509(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33510){
return (new cljs.core.async.t_cljs$core$async33509(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33510));
});

}

return (new cljs.core.async.t_cljs$core$async33509(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31144__auto___35294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_33586){
var state_val_33587 = (state_33586[(1)]);
if((state_val_33587 === (7))){
var inst_33582 = (state_33586[(2)]);
var state_33586__$1 = state_33586;
var statearr_33588_35295 = state_33586__$1;
(statearr_33588_35295[(2)] = inst_33582);

(statearr_33588_35295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (20))){
var state_33586__$1 = state_33586;
var statearr_33590_35296 = state_33586__$1;
(statearr_33590_35296[(2)] = null);

(statearr_33590_35296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (1))){
var state_33586__$1 = state_33586;
var statearr_33591_35297 = state_33586__$1;
(statearr_33591_35297[(2)] = null);

(statearr_33591_35297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (24))){
var inst_33565 = (state_33586[(7)]);
var inst_33574 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33565);
var state_33586__$1 = state_33586;
var statearr_33592_35299 = state_33586__$1;
(statearr_33592_35299[(2)] = inst_33574);

(statearr_33592_35299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (4))){
var inst_33516 = (state_33586[(8)]);
var inst_33516__$1 = (state_33586[(2)]);
var inst_33517 = (inst_33516__$1 == null);
var state_33586__$1 = (function (){var statearr_33593 = state_33586;
(statearr_33593[(8)] = inst_33516__$1);

return statearr_33593;
})();
if(cljs.core.truth_(inst_33517)){
var statearr_33594_35300 = state_33586__$1;
(statearr_33594_35300[(1)] = (5));

} else {
var statearr_33595_35301 = state_33586__$1;
(statearr_33595_35301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (15))){
var inst_33559 = (state_33586[(2)]);
var state_33586__$1 = state_33586;
var statearr_33596_35302 = state_33586__$1;
(statearr_33596_35302[(2)] = inst_33559);

(statearr_33596_35302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (21))){
var inst_33579 = (state_33586[(2)]);
var state_33586__$1 = (function (){var statearr_33597 = state_33586;
(statearr_33597[(9)] = inst_33579);

return statearr_33597;
})();
var statearr_33598_35303 = state_33586__$1;
(statearr_33598_35303[(2)] = null);

(statearr_33598_35303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (13))){
var inst_33540 = (state_33586[(10)]);
var inst_33542 = cljs.core.chunked_seq_QMARK_(inst_33540);
var state_33586__$1 = state_33586;
if(inst_33542){
var statearr_33600_35304 = state_33586__$1;
(statearr_33600_35304[(1)] = (16));

} else {
var statearr_33601_35305 = state_33586__$1;
(statearr_33601_35305[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (22))){
var inst_33571 = (state_33586[(2)]);
var state_33586__$1 = state_33586;
if(cljs.core.truth_(inst_33571)){
var statearr_33602_35306 = state_33586__$1;
(statearr_33602_35306[(1)] = (23));

} else {
var statearr_33603_35307 = state_33586__$1;
(statearr_33603_35307[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (6))){
var inst_33565 = (state_33586[(7)]);
var inst_33567 = (state_33586[(11)]);
var inst_33516 = (state_33586[(8)]);
var inst_33565__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33516) : topic_fn.call(null,inst_33516));
var inst_33566 = cljs.core.deref(mults);
var inst_33567__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33566,inst_33565__$1);
var state_33586__$1 = (function (){var statearr_33604 = state_33586;
(statearr_33604[(7)] = inst_33565__$1);

(statearr_33604[(11)] = inst_33567__$1);

return statearr_33604;
})();
if(cljs.core.truth_(inst_33567__$1)){
var statearr_33605_35310 = state_33586__$1;
(statearr_33605_35310[(1)] = (19));

} else {
var statearr_33606_35311 = state_33586__$1;
(statearr_33606_35311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (25))){
var inst_33576 = (state_33586[(2)]);
var state_33586__$1 = state_33586;
var statearr_33607_35312 = state_33586__$1;
(statearr_33607_35312[(2)] = inst_33576);

(statearr_33607_35312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (17))){
var inst_33540 = (state_33586[(10)]);
var inst_33550 = cljs.core.first(inst_33540);
var inst_33551 = cljs.core.async.muxch_STAR_(inst_33550);
var inst_33552 = cljs.core.async.close_BANG_(inst_33551);
var inst_33553 = cljs.core.next(inst_33540);
var inst_33526 = inst_33553;
var inst_33527 = null;
var inst_33528 = (0);
var inst_33529 = (0);
var state_33586__$1 = (function (){var statearr_33609 = state_33586;
(statearr_33609[(12)] = inst_33552);

(statearr_33609[(13)] = inst_33526);

(statearr_33609[(14)] = inst_33527);

(statearr_33609[(15)] = inst_33528);

(statearr_33609[(16)] = inst_33529);

return statearr_33609;
})();
var statearr_33610_35317 = state_33586__$1;
(statearr_33610_35317[(2)] = null);

(statearr_33610_35317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (3))){
var inst_33584 = (state_33586[(2)]);
var state_33586__$1 = state_33586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33586__$1,inst_33584);
} else {
if((state_val_33587 === (12))){
var inst_33561 = (state_33586[(2)]);
var state_33586__$1 = state_33586;
var statearr_33611_35322 = state_33586__$1;
(statearr_33611_35322[(2)] = inst_33561);

(statearr_33611_35322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (2))){
var state_33586__$1 = state_33586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33586__$1,(4),ch);
} else {
if((state_val_33587 === (23))){
var state_33586__$1 = state_33586;
var statearr_33612_35324 = state_33586__$1;
(statearr_33612_35324[(2)] = null);

(statearr_33612_35324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (19))){
var inst_33567 = (state_33586[(11)]);
var inst_33516 = (state_33586[(8)]);
var inst_33569 = cljs.core.async.muxch_STAR_(inst_33567);
var state_33586__$1 = state_33586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33586__$1,(22),inst_33569,inst_33516);
} else {
if((state_val_33587 === (11))){
var inst_33540 = (state_33586[(10)]);
var inst_33526 = (state_33586[(13)]);
var inst_33540__$1 = cljs.core.seq(inst_33526);
var state_33586__$1 = (function (){var statearr_33614 = state_33586;
(statearr_33614[(10)] = inst_33540__$1);

return statearr_33614;
})();
if(inst_33540__$1){
var statearr_33615_35329 = state_33586__$1;
(statearr_33615_35329[(1)] = (13));

} else {
var statearr_33616_35330 = state_33586__$1;
(statearr_33616_35330[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (9))){
var inst_33563 = (state_33586[(2)]);
var state_33586__$1 = state_33586;
var statearr_33617_35331 = state_33586__$1;
(statearr_33617_35331[(2)] = inst_33563);

(statearr_33617_35331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (5))){
var inst_33523 = cljs.core.deref(mults);
var inst_33524 = cljs.core.vals(inst_33523);
var inst_33525 = cljs.core.seq(inst_33524);
var inst_33526 = inst_33525;
var inst_33527 = null;
var inst_33528 = (0);
var inst_33529 = (0);
var state_33586__$1 = (function (){var statearr_33618 = state_33586;
(statearr_33618[(13)] = inst_33526);

(statearr_33618[(14)] = inst_33527);

(statearr_33618[(15)] = inst_33528);

(statearr_33618[(16)] = inst_33529);

return statearr_33618;
})();
var statearr_33619_35336 = state_33586__$1;
(statearr_33619_35336[(2)] = null);

(statearr_33619_35336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (14))){
var state_33586__$1 = state_33586;
var statearr_33623_35346 = state_33586__$1;
(statearr_33623_35346[(2)] = null);

(statearr_33623_35346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (16))){
var inst_33540 = (state_33586[(10)]);
var inst_33544 = cljs.core.chunk_first(inst_33540);
var inst_33545 = cljs.core.chunk_rest(inst_33540);
var inst_33547 = cljs.core.count(inst_33544);
var inst_33526 = inst_33545;
var inst_33527 = inst_33544;
var inst_33528 = inst_33547;
var inst_33529 = (0);
var state_33586__$1 = (function (){var statearr_33625 = state_33586;
(statearr_33625[(13)] = inst_33526);

(statearr_33625[(14)] = inst_33527);

(statearr_33625[(15)] = inst_33528);

(statearr_33625[(16)] = inst_33529);

return statearr_33625;
})();
var statearr_33626_35351 = state_33586__$1;
(statearr_33626_35351[(2)] = null);

(statearr_33626_35351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (10))){
var inst_33526 = (state_33586[(13)]);
var inst_33527 = (state_33586[(14)]);
var inst_33528 = (state_33586[(15)]);
var inst_33529 = (state_33586[(16)]);
var inst_33534 = cljs.core._nth(inst_33527,inst_33529);
var inst_33535 = cljs.core.async.muxch_STAR_(inst_33534);
var inst_33536 = cljs.core.async.close_BANG_(inst_33535);
var inst_33537 = (inst_33529 + (1));
var tmp33620 = inst_33526;
var tmp33621 = inst_33527;
var tmp33622 = inst_33528;
var inst_33526__$1 = tmp33620;
var inst_33527__$1 = tmp33621;
var inst_33528__$1 = tmp33622;
var inst_33529__$1 = inst_33537;
var state_33586__$1 = (function (){var statearr_33627 = state_33586;
(statearr_33627[(13)] = inst_33526__$1);

(statearr_33627[(17)] = inst_33536);

(statearr_33627[(14)] = inst_33527__$1);

(statearr_33627[(15)] = inst_33528__$1);

(statearr_33627[(16)] = inst_33529__$1);

return statearr_33627;
})();
var statearr_33628_35355 = state_33586__$1;
(statearr_33628_35355[(2)] = null);

(statearr_33628_35355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (18))){
var inst_33556 = (state_33586[(2)]);
var state_33586__$1 = state_33586;
var statearr_33629_35357 = state_33586__$1;
(statearr_33629_35357[(2)] = inst_33556);

(statearr_33629_35357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (8))){
var inst_33528 = (state_33586[(15)]);
var inst_33529 = (state_33586[(16)]);
var inst_33531 = (inst_33529 < inst_33528);
var inst_33532 = inst_33531;
var state_33586__$1 = state_33586;
if(cljs.core.truth_(inst_33532)){
var statearr_33630_35361 = state_33586__$1;
(statearr_33630_35361[(1)] = (10));

} else {
var statearr_33631_35362 = state_33586__$1;
(statearr_33631_35362[(1)] = (11));

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
var cljs$core$async$state_machine__31050__auto__ = null;
var cljs$core$async$state_machine__31050__auto____0 = (function (){
var statearr_33633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33633[(0)] = cljs$core$async$state_machine__31050__auto__);

(statearr_33633[(1)] = (1));

return statearr_33633;
});
var cljs$core$async$state_machine__31050__auto____1 = (function (state_33586){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_33586);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e33634){var ex__31053__auto__ = e33634;
var statearr_33635_35363 = state_33586;
(statearr_33635_35363[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_33586[(4)]))){
var statearr_33636_35364 = state_33586;
(statearr_33636_35364[(1)] = cljs.core.first((state_33586[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35366 = state_33586;
state_33586 = G__35366;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$state_machine__31050__auto__ = function(state_33586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31050__auto____1.call(this,state_33586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31050__auto____0;
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31050__auto____1;
return cljs$core$async$state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_33637 = f__31146__auto__();
(statearr_33637[(6)] = c__31144__auto___35294);

return statearr_33637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
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
var G__33639 = arguments.length;
switch (G__33639) {
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
var G__33642 = arguments.length;
switch (G__33642) {
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
var G__33645 = arguments.length;
switch (G__33645) {
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
var c__31144__auto___35387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_33690){
var state_val_33691 = (state_33690[(1)]);
if((state_val_33691 === (7))){
var state_33690__$1 = state_33690;
var statearr_33693_35390 = state_33690__$1;
(statearr_33693_35390[(2)] = null);

(statearr_33693_35390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (1))){
var state_33690__$1 = state_33690;
var statearr_33694_35391 = state_33690__$1;
(statearr_33694_35391[(2)] = null);

(statearr_33694_35391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (4))){
var inst_33649 = (state_33690[(7)]);
var inst_33650 = (state_33690[(8)]);
var inst_33652 = (inst_33650 < inst_33649);
var state_33690__$1 = state_33690;
if(cljs.core.truth_(inst_33652)){
var statearr_33695_35392 = state_33690__$1;
(statearr_33695_35392[(1)] = (6));

} else {
var statearr_33696_35393 = state_33690__$1;
(statearr_33696_35393[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (15))){
var inst_33676 = (state_33690[(9)]);
var inst_33681 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33676);
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33690__$1,(17),out,inst_33681);
} else {
if((state_val_33691 === (13))){
var inst_33676 = (state_33690[(9)]);
var inst_33676__$1 = (state_33690[(2)]);
var inst_33677 = cljs.core.some(cljs.core.nil_QMARK_,inst_33676__$1);
var state_33690__$1 = (function (){var statearr_33697 = state_33690;
(statearr_33697[(9)] = inst_33676__$1);

return statearr_33697;
})();
if(cljs.core.truth_(inst_33677)){
var statearr_33698_35400 = state_33690__$1;
(statearr_33698_35400[(1)] = (14));

} else {
var statearr_33699_35403 = state_33690__$1;
(statearr_33699_35403[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (6))){
var state_33690__$1 = state_33690;
var statearr_33701_35404 = state_33690__$1;
(statearr_33701_35404[(2)] = null);

(statearr_33701_35404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (17))){
var inst_33683 = (state_33690[(2)]);
var state_33690__$1 = (function (){var statearr_33703 = state_33690;
(statearr_33703[(10)] = inst_33683);

return statearr_33703;
})();
var statearr_33704_35406 = state_33690__$1;
(statearr_33704_35406[(2)] = null);

(statearr_33704_35406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (3))){
var inst_33688 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33690__$1,inst_33688);
} else {
if((state_val_33691 === (12))){
var _ = (function (){var statearr_33706 = state_33690;
(statearr_33706[(4)] = cljs.core.rest((state_33690[(4)])));

return statearr_33706;
})();
var state_33690__$1 = state_33690;
var ex33702 = (state_33690__$1[(2)]);
var statearr_33707_35411 = state_33690__$1;
(statearr_33707_35411[(5)] = ex33702);


if((ex33702 instanceof Object)){
var statearr_33708_35412 = state_33690__$1;
(statearr_33708_35412[(1)] = (11));

(statearr_33708_35412[(5)] = null);

} else {
throw ex33702;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (2))){
var inst_33648 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33649 = cnt;
var inst_33650 = (0);
var state_33690__$1 = (function (){var statearr_33711 = state_33690;
(statearr_33711[(7)] = inst_33649);

(statearr_33711[(8)] = inst_33650);

(statearr_33711[(11)] = inst_33648);

return statearr_33711;
})();
var statearr_33712_35415 = state_33690__$1;
(statearr_33712_35415[(2)] = null);

(statearr_33712_35415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (11))){
var inst_33655 = (state_33690[(2)]);
var inst_33656 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33690__$1 = (function (){var statearr_33713 = state_33690;
(statearr_33713[(12)] = inst_33655);

return statearr_33713;
})();
var statearr_33714_35419 = state_33690__$1;
(statearr_33714_35419[(2)] = inst_33656);

(statearr_33714_35419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (9))){
var inst_33650 = (state_33690[(8)]);
var _ = (function (){var statearr_33715 = state_33690;
(statearr_33715[(4)] = cljs.core.cons((12),(state_33690[(4)])));

return statearr_33715;
})();
var inst_33662 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33650) : chs__$1.call(null,inst_33650));
var inst_33663 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33650) : done.call(null,inst_33650));
var inst_33664 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33662,inst_33663);
var ___$1 = (function (){var statearr_33716 = state_33690;
(statearr_33716[(4)] = cljs.core.rest((state_33690[(4)])));

return statearr_33716;
})();
var state_33690__$1 = state_33690;
var statearr_33717_35430 = state_33690__$1;
(statearr_33717_35430[(2)] = inst_33664);

(statearr_33717_35430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (5))){
var inst_33674 = (state_33690[(2)]);
var state_33690__$1 = (function (){var statearr_33718 = state_33690;
(statearr_33718[(13)] = inst_33674);

return statearr_33718;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33690__$1,(13),dchan);
} else {
if((state_val_33691 === (14))){
var inst_33679 = cljs.core.async.close_BANG_(out);
var state_33690__$1 = state_33690;
var statearr_33719_35432 = state_33690__$1;
(statearr_33719_35432[(2)] = inst_33679);

(statearr_33719_35432[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (16))){
var inst_33686 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33722_35435 = state_33690__$1;
(statearr_33722_35435[(2)] = inst_33686);

(statearr_33722_35435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (10))){
var inst_33650 = (state_33690[(8)]);
var inst_33667 = (state_33690[(2)]);
var inst_33668 = (inst_33650 + (1));
var inst_33650__$1 = inst_33668;
var state_33690__$1 = (function (){var statearr_33723 = state_33690;
(statearr_33723[(14)] = inst_33667);

(statearr_33723[(8)] = inst_33650__$1);

return statearr_33723;
})();
var statearr_33724_35436 = state_33690__$1;
(statearr_33724_35436[(2)] = null);

(statearr_33724_35436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (8))){
var inst_33672 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33725_35446 = state_33690__$1;
(statearr_33725_35446[(2)] = inst_33672);

(statearr_33725_35446[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__31050__auto__ = null;
var cljs$core$async$state_machine__31050__auto____0 = (function (){
var statearr_33726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33726[(0)] = cljs$core$async$state_machine__31050__auto__);

(statearr_33726[(1)] = (1));

return statearr_33726;
});
var cljs$core$async$state_machine__31050__auto____1 = (function (state_33690){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_33690);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e33727){var ex__31053__auto__ = e33727;
var statearr_33728_35451 = state_33690;
(statearr_33728_35451[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_33690[(4)]))){
var statearr_33729_35452 = state_33690;
(statearr_33729_35452[(1)] = cljs.core.first((state_33690[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35453 = state_33690;
state_33690 = G__35453;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$state_machine__31050__auto__ = function(state_33690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31050__auto____1.call(this,state_33690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31050__auto____0;
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31050__auto____1;
return cljs$core$async$state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_33730 = f__31146__auto__();
(statearr_33730[(6)] = c__31144__auto___35387);

return statearr_33730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
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
var G__33733 = arguments.length;
switch (G__33733) {
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
var c__31144__auto___35459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_33767){
var state_val_33768 = (state_33767[(1)]);
if((state_val_33768 === (7))){
var inst_33745 = (state_33767[(7)]);
var inst_33746 = (state_33767[(8)]);
var inst_33745__$1 = (state_33767[(2)]);
var inst_33746__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33745__$1,(0),null);
var inst_33747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33745__$1,(1),null);
var inst_33748 = (inst_33746__$1 == null);
var state_33767__$1 = (function (){var statearr_33769 = state_33767;
(statearr_33769[(7)] = inst_33745__$1);

(statearr_33769[(8)] = inst_33746__$1);

(statearr_33769[(9)] = inst_33747);

return statearr_33769;
})();
if(cljs.core.truth_(inst_33748)){
var statearr_33770_35467 = state_33767__$1;
(statearr_33770_35467[(1)] = (8));

} else {
var statearr_33771_35468 = state_33767__$1;
(statearr_33771_35468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (1))){
var inst_33734 = cljs.core.vec(chs);
var inst_33735 = inst_33734;
var state_33767__$1 = (function (){var statearr_33772 = state_33767;
(statearr_33772[(10)] = inst_33735);

return statearr_33772;
})();
var statearr_33773_35469 = state_33767__$1;
(statearr_33773_35469[(2)] = null);

(statearr_33773_35469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (4))){
var inst_33735 = (state_33767[(10)]);
var state_33767__$1 = state_33767;
return cljs.core.async.ioc_alts_BANG_(state_33767__$1,(7),inst_33735);
} else {
if((state_val_33768 === (6))){
var inst_33763 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
var statearr_33774_35474 = state_33767__$1;
(statearr_33774_35474[(2)] = inst_33763);

(statearr_33774_35474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (3))){
var inst_33765 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33767__$1,inst_33765);
} else {
if((state_val_33768 === (2))){
var inst_33735 = (state_33767[(10)]);
var inst_33738 = cljs.core.count(inst_33735);
var inst_33739 = (inst_33738 > (0));
var state_33767__$1 = state_33767;
if(cljs.core.truth_(inst_33739)){
var statearr_33776_35480 = state_33767__$1;
(statearr_33776_35480[(1)] = (4));

} else {
var statearr_33777_35481 = state_33767__$1;
(statearr_33777_35481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (11))){
var inst_33735 = (state_33767[(10)]);
var inst_33756 = (state_33767[(2)]);
var tmp33775 = inst_33735;
var inst_33735__$1 = tmp33775;
var state_33767__$1 = (function (){var statearr_33778 = state_33767;
(statearr_33778[(11)] = inst_33756);

(statearr_33778[(10)] = inst_33735__$1);

return statearr_33778;
})();
var statearr_33779_35482 = state_33767__$1;
(statearr_33779_35482[(2)] = null);

(statearr_33779_35482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (9))){
var inst_33746 = (state_33767[(8)]);
var state_33767__$1 = state_33767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33767__$1,(11),out,inst_33746);
} else {
if((state_val_33768 === (5))){
var inst_33761 = cljs.core.async.close_BANG_(out);
var state_33767__$1 = state_33767;
var statearr_33784_35489 = state_33767__$1;
(statearr_33784_35489[(2)] = inst_33761);

(statearr_33784_35489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (10))){
var inst_33759 = (state_33767[(2)]);
var state_33767__$1 = state_33767;
var statearr_33787_35490 = state_33767__$1;
(statearr_33787_35490[(2)] = inst_33759);

(statearr_33787_35490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33768 === (8))){
var inst_33745 = (state_33767[(7)]);
var inst_33746 = (state_33767[(8)]);
var inst_33747 = (state_33767[(9)]);
var inst_33735 = (state_33767[(10)]);
var inst_33751 = (function (){var cs = inst_33735;
var vec__33741 = inst_33745;
var v = inst_33746;
var c = inst_33747;
return (function (p1__33731_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33731_SHARP_);
});
})();
var inst_33752 = cljs.core.filterv(inst_33751,inst_33735);
var inst_33735__$1 = inst_33752;
var state_33767__$1 = (function (){var statearr_33791 = state_33767;
(statearr_33791[(10)] = inst_33735__$1);

return statearr_33791;
})();
var statearr_33792_35496 = state_33767__$1;
(statearr_33792_35496[(2)] = null);

(statearr_33792_35496[(1)] = (2));


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
var cljs$core$async$state_machine__31050__auto__ = null;
var cljs$core$async$state_machine__31050__auto____0 = (function (){
var statearr_33793 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33793[(0)] = cljs$core$async$state_machine__31050__auto__);

(statearr_33793[(1)] = (1));

return statearr_33793;
});
var cljs$core$async$state_machine__31050__auto____1 = (function (state_33767){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_33767);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e33794){var ex__31053__auto__ = e33794;
var statearr_33795_35497 = state_33767;
(statearr_33795_35497[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_33767[(4)]))){
var statearr_33796_35498 = state_33767;
(statearr_33796_35498[(1)] = cljs.core.first((state_33767[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35499 = state_33767;
state_33767 = G__35499;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$state_machine__31050__auto__ = function(state_33767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31050__auto____1.call(this,state_33767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31050__auto____0;
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31050__auto____1;
return cljs$core$async$state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_33800 = f__31146__auto__();
(statearr_33800[(6)] = c__31144__auto___35459);

return statearr_33800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
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
var G__33808 = arguments.length;
switch (G__33808) {
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
var c__31144__auto___35502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_33839){
var state_val_33840 = (state_33839[(1)]);
if((state_val_33840 === (7))){
var inst_33821 = (state_33839[(7)]);
var inst_33821__$1 = (state_33839[(2)]);
var inst_33822 = (inst_33821__$1 == null);
var inst_33823 = cljs.core.not(inst_33822);
var state_33839__$1 = (function (){var statearr_33845 = state_33839;
(statearr_33845[(7)] = inst_33821__$1);

return statearr_33845;
})();
if(inst_33823){
var statearr_33847_35506 = state_33839__$1;
(statearr_33847_35506[(1)] = (8));

} else {
var statearr_33848_35507 = state_33839__$1;
(statearr_33848_35507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (1))){
var inst_33813 = (0);
var state_33839__$1 = (function (){var statearr_33851 = state_33839;
(statearr_33851[(8)] = inst_33813);

return statearr_33851;
})();
var statearr_33853_35509 = state_33839__$1;
(statearr_33853_35509[(2)] = null);

(statearr_33853_35509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (4))){
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33839__$1,(7),ch);
} else {
if((state_val_33840 === (6))){
var inst_33834 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33855_35510 = state_33839__$1;
(statearr_33855_35510[(2)] = inst_33834);

(statearr_33855_35510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (3))){
var inst_33836 = (state_33839[(2)]);
var inst_33837 = cljs.core.async.close_BANG_(out);
var state_33839__$1 = (function (){var statearr_33859 = state_33839;
(statearr_33859[(9)] = inst_33836);

return statearr_33859;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33839__$1,inst_33837);
} else {
if((state_val_33840 === (2))){
var inst_33813 = (state_33839[(8)]);
var inst_33817 = (inst_33813 < n);
var state_33839__$1 = state_33839;
if(cljs.core.truth_(inst_33817)){
var statearr_33861_35511 = state_33839__$1;
(statearr_33861_35511[(1)] = (4));

} else {
var statearr_33862_35515 = state_33839__$1;
(statearr_33862_35515[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (11))){
var inst_33813 = (state_33839[(8)]);
var inst_33826 = (state_33839[(2)]);
var inst_33827 = (inst_33813 + (1));
var inst_33813__$1 = inst_33827;
var state_33839__$1 = (function (){var statearr_33866 = state_33839;
(statearr_33866[(10)] = inst_33826);

(statearr_33866[(8)] = inst_33813__$1);

return statearr_33866;
})();
var statearr_33867_35516 = state_33839__$1;
(statearr_33867_35516[(2)] = null);

(statearr_33867_35516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (9))){
var state_33839__$1 = state_33839;
var statearr_33869_35517 = state_33839__$1;
(statearr_33869_35517[(2)] = null);

(statearr_33869_35517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (5))){
var state_33839__$1 = state_33839;
var statearr_33870_35519 = state_33839__$1;
(statearr_33870_35519[(2)] = null);

(statearr_33870_35519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (10))){
var inst_33831 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33874_35520 = state_33839__$1;
(statearr_33874_35520[(2)] = inst_33831);

(statearr_33874_35520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (8))){
var inst_33821 = (state_33839[(7)]);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33839__$1,(11),out,inst_33821);
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
var cljs$core$async$state_machine__31050__auto__ = null;
var cljs$core$async$state_machine__31050__auto____0 = (function (){
var statearr_33877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33877[(0)] = cljs$core$async$state_machine__31050__auto__);

(statearr_33877[(1)] = (1));

return statearr_33877;
});
var cljs$core$async$state_machine__31050__auto____1 = (function (state_33839){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_33839);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e33881){var ex__31053__auto__ = e33881;
var statearr_33882_35531 = state_33839;
(statearr_33882_35531[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_33839[(4)]))){
var statearr_33884_35532 = state_33839;
(statearr_33884_35532[(1)] = cljs.core.first((state_33839[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35533 = state_33839;
state_33839 = G__35533;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$state_machine__31050__auto__ = function(state_33839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31050__auto____1.call(this,state_33839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31050__auto____0;
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31050__auto____1;
return cljs$core$async$state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_33888 = f__31146__auto__();
(statearr_33888[(6)] = c__31144__auto___35502);

return statearr_33888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33895 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33895 = (function (f,ch,meta33896){
this.f = f;
this.ch = ch;
this.meta33896 = meta33896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33897,meta33896__$1){
var self__ = this;
var _33897__$1 = this;
return (new cljs.core.async.t_cljs$core$async33895(self__.f,self__.ch,meta33896__$1));
}));

(cljs.core.async.t_cljs$core$async33895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33897){
var self__ = this;
var _33897__$1 = this;
return self__.meta33896;
}));

(cljs.core.async.t_cljs$core$async33895.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33895.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33895.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33895.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33895.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33907 = (function (f,ch,meta33896,_,fn1,meta33908){
this.f = f;
this.ch = ch;
this.meta33896 = meta33896;
this._ = _;
this.fn1 = fn1;
this.meta33908 = meta33908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33909,meta33908__$1){
var self__ = this;
var _33909__$1 = this;
return (new cljs.core.async.t_cljs$core$async33907(self__.f,self__.ch,self__.meta33896,self__._,self__.fn1,meta33908__$1));
}));

(cljs.core.async.t_cljs$core$async33907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33909){
var self__ = this;
var _33909__$1 = this;
return self__.meta33908;
}));

(cljs.core.async.t_cljs$core$async33907.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33907.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33907.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33907.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33890_SHARP_){
var G__33920 = (((p1__33890_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33890_SHARP_) : self__.f.call(null,p1__33890_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33920) : f1.call(null,G__33920));
});
}));

(cljs.core.async.t_cljs$core$async33907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33896","meta33896",613801297,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33895","cljs.core.async/t_cljs$core$async33895",-554634219,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33908","meta33908",369601948,null)], null);
}));

(cljs.core.async.t_cljs$core$async33907.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33907");

(cljs.core.async.t_cljs$core$async33907.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33907");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33907.
 */
cljs.core.async.__GT_t_cljs$core$async33907 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33907(f__$1,ch__$1,meta33896__$1,___$2,fn1__$1,meta33908){
return (new cljs.core.async.t_cljs$core$async33907(f__$1,ch__$1,meta33896__$1,___$2,fn1__$1,meta33908));
});

}

return (new cljs.core.async.t_cljs$core$async33907(self__.f,self__.ch,self__.meta33896,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33931 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33931) : self__.f.call(null,G__33931));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33895.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33895.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33896","meta33896",613801297,null)], null);
}));

(cljs.core.async.t_cljs$core$async33895.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33895");

(cljs.core.async.t_cljs$core$async33895.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33895");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33895.
 */
cljs.core.async.__GT_t_cljs$core$async33895 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33895(f__$1,ch__$1,meta33896){
return (new cljs.core.async.t_cljs$core$async33895(f__$1,ch__$1,meta33896));
});

}

return (new cljs.core.async.t_cljs$core$async33895(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33943 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33943 = (function (f,ch,meta33944){
this.f = f;
this.ch = ch;
this.meta33944 = meta33944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33945,meta33944__$1){
var self__ = this;
var _33945__$1 = this;
return (new cljs.core.async.t_cljs$core$async33943(self__.f,self__.ch,meta33944__$1));
}));

(cljs.core.async.t_cljs$core$async33943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33945){
var self__ = this;
var _33945__$1 = this;
return self__.meta33944;
}));

(cljs.core.async.t_cljs$core$async33943.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33943.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33943.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33944","meta33944",-1120147031,null)], null);
}));

(cljs.core.async.t_cljs$core$async33943.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33943");

(cljs.core.async.t_cljs$core$async33943.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33943");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33943.
 */
cljs.core.async.__GT_t_cljs$core$async33943 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33943(f__$1,ch__$1,meta33944){
return (new cljs.core.async.t_cljs$core$async33943(f__$1,ch__$1,meta33944));
});

}

return (new cljs.core.async.t_cljs$core$async33943(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33962 = (function (p,ch,meta33963){
this.p = p;
this.ch = ch;
this.meta33963 = meta33963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33964,meta33963__$1){
var self__ = this;
var _33964__$1 = this;
return (new cljs.core.async.t_cljs$core$async33962(self__.p,self__.ch,meta33963__$1));
}));

(cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33964){
var self__ = this;
var _33964__$1 = this;
return self__.meta33963;
}));

(cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33962.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33963","meta33963",-1847386582,null)], null);
}));

(cljs.core.async.t_cljs$core$async33962.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33962");

(cljs.core.async.t_cljs$core$async33962.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33962");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33962.
 */
cljs.core.async.__GT_t_cljs$core$async33962 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33962(p__$1,ch__$1,meta33963){
return (new cljs.core.async.t_cljs$core$async33962(p__$1,ch__$1,meta33963));
});

}

return (new cljs.core.async.t_cljs$core$async33962(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33988 = arguments.length;
switch (G__33988) {
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
var c__31144__auto___35601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_34016){
var state_val_34017 = (state_34016[(1)]);
if((state_val_34017 === (7))){
var inst_34012 = (state_34016[(2)]);
var state_34016__$1 = state_34016;
var statearr_34022_35602 = state_34016__$1;
(statearr_34022_35602[(2)] = inst_34012);

(statearr_34022_35602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (1))){
var state_34016__$1 = state_34016;
var statearr_34024_35603 = state_34016__$1;
(statearr_34024_35603[(2)] = null);

(statearr_34024_35603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (4))){
var inst_33997 = (state_34016[(7)]);
var inst_33997__$1 = (state_34016[(2)]);
var inst_33998 = (inst_33997__$1 == null);
var state_34016__$1 = (function (){var statearr_34027 = state_34016;
(statearr_34027[(7)] = inst_33997__$1);

return statearr_34027;
})();
if(cljs.core.truth_(inst_33998)){
var statearr_34029_35613 = state_34016__$1;
(statearr_34029_35613[(1)] = (5));

} else {
var statearr_34030_35614 = state_34016__$1;
(statearr_34030_35614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (6))){
var inst_33997 = (state_34016[(7)]);
var inst_34003 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33997) : p.call(null,inst_33997));
var state_34016__$1 = state_34016;
if(cljs.core.truth_(inst_34003)){
var statearr_34032_35621 = state_34016__$1;
(statearr_34032_35621[(1)] = (8));

} else {
var statearr_34033_35622 = state_34016__$1;
(statearr_34033_35622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (3))){
var inst_34014 = (state_34016[(2)]);
var state_34016__$1 = state_34016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34016__$1,inst_34014);
} else {
if((state_val_34017 === (2))){
var state_34016__$1 = state_34016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34016__$1,(4),ch);
} else {
if((state_val_34017 === (11))){
var inst_34006 = (state_34016[(2)]);
var state_34016__$1 = state_34016;
var statearr_34037_35623 = state_34016__$1;
(statearr_34037_35623[(2)] = inst_34006);

(statearr_34037_35623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (9))){
var state_34016__$1 = state_34016;
var statearr_34039_35630 = state_34016__$1;
(statearr_34039_35630[(2)] = null);

(statearr_34039_35630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (5))){
var inst_34001 = cljs.core.async.close_BANG_(out);
var state_34016__$1 = state_34016;
var statearr_34043_35631 = state_34016__$1;
(statearr_34043_35631[(2)] = inst_34001);

(statearr_34043_35631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (10))){
var inst_34009 = (state_34016[(2)]);
var state_34016__$1 = (function (){var statearr_34044 = state_34016;
(statearr_34044[(8)] = inst_34009);

return statearr_34044;
})();
var statearr_34046_35632 = state_34016__$1;
(statearr_34046_35632[(2)] = null);

(statearr_34046_35632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (8))){
var inst_33997 = (state_34016[(7)]);
var state_34016__$1 = state_34016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34016__$1,(11),out,inst_33997);
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
var cljs$core$async$state_machine__31050__auto__ = null;
var cljs$core$async$state_machine__31050__auto____0 = (function (){
var statearr_34050 = [null,null,null,null,null,null,null,null,null];
(statearr_34050[(0)] = cljs$core$async$state_machine__31050__auto__);

(statearr_34050[(1)] = (1));

return statearr_34050;
});
var cljs$core$async$state_machine__31050__auto____1 = (function (state_34016){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_34016);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e34052){var ex__31053__auto__ = e34052;
var statearr_34053_35634 = state_34016;
(statearr_34053_35634[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_34016[(4)]))){
var statearr_34057_35635 = state_34016;
(statearr_34057_35635[(1)] = cljs.core.first((state_34016[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35636 = state_34016;
state_34016 = G__35636;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$state_machine__31050__auto__ = function(state_34016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31050__auto____1.call(this,state_34016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31050__auto____0;
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31050__auto____1;
return cljs$core$async$state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_34061 = f__31146__auto__();
(statearr_34061[(6)] = c__31144__auto___35601);

return statearr_34061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34071 = arguments.length;
switch (G__34071) {
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
var c__31144__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_34164){
var state_val_34165 = (state_34164[(1)]);
if((state_val_34165 === (7))){
var inst_34159 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34170_35645 = state_34164__$1;
(statearr_34170_35645[(2)] = inst_34159);

(statearr_34170_35645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (20))){
var inst_34123 = (state_34164[(7)]);
var inst_34137 = (state_34164[(2)]);
var inst_34138 = cljs.core.next(inst_34123);
var inst_34106 = inst_34138;
var inst_34107 = null;
var inst_34108 = (0);
var inst_34109 = (0);
var state_34164__$1 = (function (){var statearr_34171 = state_34164;
(statearr_34171[(8)] = inst_34107);

(statearr_34171[(9)] = inst_34109);

(statearr_34171[(10)] = inst_34106);

(statearr_34171[(11)] = inst_34108);

(statearr_34171[(12)] = inst_34137);

return statearr_34171;
})();
var statearr_34175_35651 = state_34164__$1;
(statearr_34175_35651[(2)] = null);

(statearr_34175_35651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (1))){
var state_34164__$1 = state_34164;
var statearr_34177_35652 = state_34164__$1;
(statearr_34177_35652[(2)] = null);

(statearr_34177_35652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (4))){
var inst_34091 = (state_34164[(13)]);
var inst_34091__$1 = (state_34164[(2)]);
var inst_34092 = (inst_34091__$1 == null);
var state_34164__$1 = (function (){var statearr_34178 = state_34164;
(statearr_34178[(13)] = inst_34091__$1);

return statearr_34178;
})();
if(cljs.core.truth_(inst_34092)){
var statearr_34179_35658 = state_34164__$1;
(statearr_34179_35658[(1)] = (5));

} else {
var statearr_34180_35659 = state_34164__$1;
(statearr_34180_35659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (15))){
var state_34164__$1 = state_34164;
var statearr_34185_35660 = state_34164__$1;
(statearr_34185_35660[(2)] = null);

(statearr_34185_35660[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (21))){
var state_34164__$1 = state_34164;
var statearr_34186_35661 = state_34164__$1;
(statearr_34186_35661[(2)] = null);

(statearr_34186_35661[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (13))){
var inst_34107 = (state_34164[(8)]);
var inst_34109 = (state_34164[(9)]);
var inst_34106 = (state_34164[(10)]);
var inst_34108 = (state_34164[(11)]);
var inst_34119 = (state_34164[(2)]);
var inst_34120 = (inst_34109 + (1));
var tmp34182 = inst_34107;
var tmp34183 = inst_34106;
var tmp34184 = inst_34108;
var inst_34106__$1 = tmp34183;
var inst_34107__$1 = tmp34182;
var inst_34108__$1 = tmp34184;
var inst_34109__$1 = inst_34120;
var state_34164__$1 = (function (){var statearr_34187 = state_34164;
(statearr_34187[(8)] = inst_34107__$1);

(statearr_34187[(9)] = inst_34109__$1);

(statearr_34187[(10)] = inst_34106__$1);

(statearr_34187[(11)] = inst_34108__$1);

(statearr_34187[(14)] = inst_34119);

return statearr_34187;
})();
var statearr_34192_35665 = state_34164__$1;
(statearr_34192_35665[(2)] = null);

(statearr_34192_35665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (22))){
var state_34164__$1 = state_34164;
var statearr_34196_35666 = state_34164__$1;
(statearr_34196_35666[(2)] = null);

(statearr_34196_35666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (6))){
var inst_34091 = (state_34164[(13)]);
var inst_34103 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34091) : f.call(null,inst_34091));
var inst_34104 = cljs.core.seq(inst_34103);
var inst_34106 = inst_34104;
var inst_34107 = null;
var inst_34108 = (0);
var inst_34109 = (0);
var state_34164__$1 = (function (){var statearr_34198 = state_34164;
(statearr_34198[(8)] = inst_34107);

(statearr_34198[(9)] = inst_34109);

(statearr_34198[(10)] = inst_34106);

(statearr_34198[(11)] = inst_34108);

return statearr_34198;
})();
var statearr_34199_35676 = state_34164__$1;
(statearr_34199_35676[(2)] = null);

(statearr_34199_35676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (17))){
var inst_34123 = (state_34164[(7)]);
var inst_34129 = cljs.core.chunk_first(inst_34123);
var inst_34130 = cljs.core.chunk_rest(inst_34123);
var inst_34131 = cljs.core.count(inst_34129);
var inst_34106 = inst_34130;
var inst_34107 = inst_34129;
var inst_34108 = inst_34131;
var inst_34109 = (0);
var state_34164__$1 = (function (){var statearr_34204 = state_34164;
(statearr_34204[(8)] = inst_34107);

(statearr_34204[(9)] = inst_34109);

(statearr_34204[(10)] = inst_34106);

(statearr_34204[(11)] = inst_34108);

return statearr_34204;
})();
var statearr_34205_35678 = state_34164__$1;
(statearr_34205_35678[(2)] = null);

(statearr_34205_35678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (3))){
var inst_34161 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34164__$1,inst_34161);
} else {
if((state_val_34165 === (12))){
var inst_34146 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34210_35679 = state_34164__$1;
(statearr_34210_35679[(2)] = inst_34146);

(statearr_34210_35679[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (2))){
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34164__$1,(4),in$);
} else {
if((state_val_34165 === (23))){
var inst_34157 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34211_35685 = state_34164__$1;
(statearr_34211_35685[(2)] = inst_34157);

(statearr_34211_35685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (19))){
var inst_34141 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34216_35688 = state_34164__$1;
(statearr_34216_35688[(2)] = inst_34141);

(statearr_34216_35688[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (11))){
var inst_34106 = (state_34164[(10)]);
var inst_34123 = (state_34164[(7)]);
var inst_34123__$1 = cljs.core.seq(inst_34106);
var state_34164__$1 = (function (){var statearr_34217 = state_34164;
(statearr_34217[(7)] = inst_34123__$1);

return statearr_34217;
})();
if(inst_34123__$1){
var statearr_34219_35689 = state_34164__$1;
(statearr_34219_35689[(1)] = (14));

} else {
var statearr_34220_35690 = state_34164__$1;
(statearr_34220_35690[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (9))){
var inst_34148 = (state_34164[(2)]);
var inst_34149 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34164__$1 = (function (){var statearr_34221 = state_34164;
(statearr_34221[(15)] = inst_34148);

return statearr_34221;
})();
if(cljs.core.truth_(inst_34149)){
var statearr_34222_35691 = state_34164__$1;
(statearr_34222_35691[(1)] = (21));

} else {
var statearr_34223_35692 = state_34164__$1;
(statearr_34223_35692[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (5))){
var inst_34094 = cljs.core.async.close_BANG_(out);
var state_34164__$1 = state_34164;
var statearr_34224_35693 = state_34164__$1;
(statearr_34224_35693[(2)] = inst_34094);

(statearr_34224_35693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (14))){
var inst_34123 = (state_34164[(7)]);
var inst_34125 = cljs.core.chunked_seq_QMARK_(inst_34123);
var state_34164__$1 = state_34164;
if(inst_34125){
var statearr_34232_35694 = state_34164__$1;
(statearr_34232_35694[(1)] = (17));

} else {
var statearr_34233_35695 = state_34164__$1;
(statearr_34233_35695[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (16))){
var inst_34144 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34235_35696 = state_34164__$1;
(statearr_34235_35696[(2)] = inst_34144);

(statearr_34235_35696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (10))){
var inst_34107 = (state_34164[(8)]);
var inst_34109 = (state_34164[(9)]);
var inst_34117 = cljs.core._nth(inst_34107,inst_34109);
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34164__$1,(13),out,inst_34117);
} else {
if((state_val_34165 === (18))){
var inst_34123 = (state_34164[(7)]);
var inst_34135 = cljs.core.first(inst_34123);
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34164__$1,(20),out,inst_34135);
} else {
if((state_val_34165 === (8))){
var inst_34109 = (state_34164[(9)]);
var inst_34108 = (state_34164[(11)]);
var inst_34112 = (inst_34109 < inst_34108);
var inst_34113 = inst_34112;
var state_34164__$1 = state_34164;
if(cljs.core.truth_(inst_34113)){
var statearr_34240_35701 = state_34164__$1;
(statearr_34240_35701[(1)] = (10));

} else {
var statearr_34241_35702 = state_34164__$1;
(statearr_34241_35702[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__31050__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31050__auto____0 = (function (){
var statearr_34246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34246[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31050__auto__);

(statearr_34246[(1)] = (1));

return statearr_34246;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31050__auto____1 = (function (state_34164){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_34164);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e34247){var ex__31053__auto__ = e34247;
var statearr_34251_35705 = state_34164;
(statearr_34251_35705[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_34164[(4)]))){
var statearr_34253_35706 = state_34164;
(statearr_34253_35706[(1)] = cljs.core.first((state_34164[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35709 = state_34164;
state_34164 = G__35709;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31050__auto__ = function(state_34164){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31050__auto____1.call(this,state_34164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31050__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31050__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_34255 = f__31146__auto__();
(statearr_34255[(6)] = c__31144__auto__);

return statearr_34255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
}));

return c__31144__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34257 = arguments.length;
switch (G__34257) {
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
var G__34270 = arguments.length;
switch (G__34270) {
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
var G__34277 = arguments.length;
switch (G__34277) {
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
var c__31144__auto___35725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_34305){
var state_val_34306 = (state_34305[(1)]);
if((state_val_34306 === (7))){
var inst_34300 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
var statearr_34307_35726 = state_34305__$1;
(statearr_34307_35726[(2)] = inst_34300);

(statearr_34307_35726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (1))){
var inst_34282 = null;
var state_34305__$1 = (function (){var statearr_34312 = state_34305;
(statearr_34312[(7)] = inst_34282);

return statearr_34312;
})();
var statearr_34313_35728 = state_34305__$1;
(statearr_34313_35728[(2)] = null);

(statearr_34313_35728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (4))){
var inst_34285 = (state_34305[(8)]);
var inst_34285__$1 = (state_34305[(2)]);
var inst_34286 = (inst_34285__$1 == null);
var inst_34287 = cljs.core.not(inst_34286);
var state_34305__$1 = (function (){var statearr_34316 = state_34305;
(statearr_34316[(8)] = inst_34285__$1);

return statearr_34316;
})();
if(inst_34287){
var statearr_34319_35729 = state_34305__$1;
(statearr_34319_35729[(1)] = (5));

} else {
var statearr_34321_35730 = state_34305__$1;
(statearr_34321_35730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (6))){
var state_34305__$1 = state_34305;
var statearr_34323_35734 = state_34305__$1;
(statearr_34323_35734[(2)] = null);

(statearr_34323_35734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (3))){
var inst_34302 = (state_34305[(2)]);
var inst_34303 = cljs.core.async.close_BANG_(out);
var state_34305__$1 = (function (){var statearr_34325 = state_34305;
(statearr_34325[(9)] = inst_34302);

return statearr_34325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34305__$1,inst_34303);
} else {
if((state_val_34306 === (2))){
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34305__$1,(4),ch);
} else {
if((state_val_34306 === (11))){
var inst_34285 = (state_34305[(8)]);
var inst_34294 = (state_34305[(2)]);
var inst_34282 = inst_34285;
var state_34305__$1 = (function (){var statearr_34327 = state_34305;
(statearr_34327[(10)] = inst_34294);

(statearr_34327[(7)] = inst_34282);

return statearr_34327;
})();
var statearr_34330_35736 = state_34305__$1;
(statearr_34330_35736[(2)] = null);

(statearr_34330_35736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (9))){
var inst_34285 = (state_34305[(8)]);
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34305__$1,(11),out,inst_34285);
} else {
if((state_val_34306 === (5))){
var inst_34282 = (state_34305[(7)]);
var inst_34285 = (state_34305[(8)]);
var inst_34289 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34285,inst_34282);
var state_34305__$1 = state_34305;
if(inst_34289){
var statearr_34333_35741 = state_34305__$1;
(statearr_34333_35741[(1)] = (8));

} else {
var statearr_34335_35746 = state_34305__$1;
(statearr_34335_35746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (10))){
var inst_34297 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
var statearr_34339_35750 = state_34305__$1;
(statearr_34339_35750[(2)] = inst_34297);

(statearr_34339_35750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (8))){
var inst_34282 = (state_34305[(7)]);
var tmp34332 = inst_34282;
var inst_34282__$1 = tmp34332;
var state_34305__$1 = (function (){var statearr_34341 = state_34305;
(statearr_34341[(7)] = inst_34282__$1);

return statearr_34341;
})();
var statearr_34342_35751 = state_34305__$1;
(statearr_34342_35751[(2)] = null);

(statearr_34342_35751[(1)] = (2));


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
var cljs$core$async$state_machine__31050__auto__ = null;
var cljs$core$async$state_machine__31050__auto____0 = (function (){
var statearr_34345 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34345[(0)] = cljs$core$async$state_machine__31050__auto__);

(statearr_34345[(1)] = (1));

return statearr_34345;
});
var cljs$core$async$state_machine__31050__auto____1 = (function (state_34305){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_34305);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e34346){var ex__31053__auto__ = e34346;
var statearr_34348_35753 = state_34305;
(statearr_34348_35753[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_34305[(4)]))){
var statearr_34349_35754 = state_34305;
(statearr_34349_35754[(1)] = cljs.core.first((state_34305[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35756 = state_34305;
state_34305 = G__35756;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$state_machine__31050__auto__ = function(state_34305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31050__auto____1.call(this,state_34305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31050__auto____0;
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31050__auto____1;
return cljs$core$async$state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_34354 = f__31146__auto__();
(statearr_34354[(6)] = c__31144__auto___35725);

return statearr_34354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34361 = arguments.length;
switch (G__34361) {
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
var c__31144__auto___35762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_34410){
var state_val_34411 = (state_34410[(1)]);
if((state_val_34411 === (7))){
var inst_34405 = (state_34410[(2)]);
var state_34410__$1 = state_34410;
var statearr_34417_35764 = state_34410__$1;
(statearr_34417_35764[(2)] = inst_34405);

(statearr_34417_35764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (1))){
var inst_34368 = (new Array(n));
var inst_34371 = inst_34368;
var inst_34372 = (0);
var state_34410__$1 = (function (){var statearr_34419 = state_34410;
(statearr_34419[(7)] = inst_34372);

(statearr_34419[(8)] = inst_34371);

return statearr_34419;
})();
var statearr_34421_35765 = state_34410__$1;
(statearr_34421_35765[(2)] = null);

(statearr_34421_35765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (4))){
var inst_34375 = (state_34410[(9)]);
var inst_34375__$1 = (state_34410[(2)]);
var inst_34378 = (inst_34375__$1 == null);
var inst_34379 = cljs.core.not(inst_34378);
var state_34410__$1 = (function (){var statearr_34425 = state_34410;
(statearr_34425[(9)] = inst_34375__$1);

return statearr_34425;
})();
if(inst_34379){
var statearr_34426_35766 = state_34410__$1;
(statearr_34426_35766[(1)] = (5));

} else {
var statearr_34428_35767 = state_34410__$1;
(statearr_34428_35767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (15))){
var inst_34399 = (state_34410[(2)]);
var state_34410__$1 = state_34410;
var statearr_34433_35768 = state_34410__$1;
(statearr_34433_35768[(2)] = inst_34399);

(statearr_34433_35768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (13))){
var state_34410__$1 = state_34410;
var statearr_34436_35769 = state_34410__$1;
(statearr_34436_35769[(2)] = null);

(statearr_34436_35769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (6))){
var inst_34372 = (state_34410[(7)]);
var inst_34395 = (inst_34372 > (0));
var state_34410__$1 = state_34410;
if(cljs.core.truth_(inst_34395)){
var statearr_34440_35770 = state_34410__$1;
(statearr_34440_35770[(1)] = (12));

} else {
var statearr_34441_35771 = state_34410__$1;
(statearr_34441_35771[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (3))){
var inst_34407 = (state_34410[(2)]);
var state_34410__$1 = state_34410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34410__$1,inst_34407);
} else {
if((state_val_34411 === (12))){
var inst_34371 = (state_34410[(8)]);
var inst_34397 = cljs.core.vec(inst_34371);
var state_34410__$1 = state_34410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34410__$1,(15),out,inst_34397);
} else {
if((state_val_34411 === (2))){
var state_34410__$1 = state_34410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34410__$1,(4),ch);
} else {
if((state_val_34411 === (11))){
var inst_34389 = (state_34410[(2)]);
var inst_34390 = (new Array(n));
var inst_34371 = inst_34390;
var inst_34372 = (0);
var state_34410__$1 = (function (){var statearr_34447 = state_34410;
(statearr_34447[(7)] = inst_34372);

(statearr_34447[(10)] = inst_34389);

(statearr_34447[(8)] = inst_34371);

return statearr_34447;
})();
var statearr_34452_35773 = state_34410__$1;
(statearr_34452_35773[(2)] = null);

(statearr_34452_35773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (9))){
var inst_34371 = (state_34410[(8)]);
var inst_34387 = cljs.core.vec(inst_34371);
var state_34410__$1 = state_34410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34410__$1,(11),out,inst_34387);
} else {
if((state_val_34411 === (5))){
var inst_34372 = (state_34410[(7)]);
var inst_34375 = (state_34410[(9)]);
var inst_34371 = (state_34410[(8)]);
var inst_34382 = (state_34410[(11)]);
var inst_34381 = (inst_34371[inst_34372] = inst_34375);
var inst_34382__$1 = (inst_34372 + (1));
var inst_34383 = (inst_34382__$1 < n);
var state_34410__$1 = (function (){var statearr_34457 = state_34410;
(statearr_34457[(12)] = inst_34381);

(statearr_34457[(11)] = inst_34382__$1);

return statearr_34457;
})();
if(cljs.core.truth_(inst_34383)){
var statearr_34461_35774 = state_34410__$1;
(statearr_34461_35774[(1)] = (8));

} else {
var statearr_34462_35775 = state_34410__$1;
(statearr_34462_35775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (14))){
var inst_34402 = (state_34410[(2)]);
var inst_34403 = cljs.core.async.close_BANG_(out);
var state_34410__$1 = (function (){var statearr_34465 = state_34410;
(statearr_34465[(13)] = inst_34402);

return statearr_34465;
})();
var statearr_34466_35778 = state_34410__$1;
(statearr_34466_35778[(2)] = inst_34403);

(statearr_34466_35778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (10))){
var inst_34393 = (state_34410[(2)]);
var state_34410__$1 = state_34410;
var statearr_34471_35779 = state_34410__$1;
(statearr_34471_35779[(2)] = inst_34393);

(statearr_34471_35779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (8))){
var inst_34371 = (state_34410[(8)]);
var inst_34382 = (state_34410[(11)]);
var tmp34463 = inst_34371;
var inst_34371__$1 = tmp34463;
var inst_34372 = inst_34382;
var state_34410__$1 = (function (){var statearr_34472 = state_34410;
(statearr_34472[(7)] = inst_34372);

(statearr_34472[(8)] = inst_34371__$1);

return statearr_34472;
})();
var statearr_34474_35781 = state_34410__$1;
(statearr_34474_35781[(2)] = null);

(statearr_34474_35781[(1)] = (2));


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
var cljs$core$async$state_machine__31050__auto__ = null;
var cljs$core$async$state_machine__31050__auto____0 = (function (){
var statearr_34480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34480[(0)] = cljs$core$async$state_machine__31050__auto__);

(statearr_34480[(1)] = (1));

return statearr_34480;
});
var cljs$core$async$state_machine__31050__auto____1 = (function (state_34410){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_34410);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e34482){var ex__31053__auto__ = e34482;
var statearr_34484_35785 = state_34410;
(statearr_34484_35785[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_34410[(4)]))){
var statearr_34485_35786 = state_34410;
(statearr_34485_35786[(1)] = cljs.core.first((state_34410[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35787 = state_34410;
state_34410 = G__35787;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$state_machine__31050__auto__ = function(state_34410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31050__auto____1.call(this,state_34410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31050__auto____0;
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31050__auto____1;
return cljs$core$async$state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_34490 = f__31146__auto__();
(statearr_34490[(6)] = c__31144__auto___35762);

return statearr_34490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34492 = arguments.length;
switch (G__34492) {
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
var c__31144__auto___35789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31146__auto__ = (function (){var switch__31049__auto__ = (function (state_34543){
var state_val_34544 = (state_34543[(1)]);
if((state_val_34544 === (7))){
var inst_34535 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
var statearr_34547_35793 = state_34543__$1;
(statearr_34547_35793[(2)] = inst_34535);

(statearr_34547_35793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (1))){
var inst_34493 = [];
var inst_34494 = inst_34493;
var inst_34495 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34543__$1 = (function (){var statearr_34548 = state_34543;
(statearr_34548[(7)] = inst_34495);

(statearr_34548[(8)] = inst_34494);

return statearr_34548;
})();
var statearr_34550_35795 = state_34543__$1;
(statearr_34550_35795[(2)] = null);

(statearr_34550_35795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (4))){
var inst_34498 = (state_34543[(9)]);
var inst_34498__$1 = (state_34543[(2)]);
var inst_34499 = (inst_34498__$1 == null);
var inst_34500 = cljs.core.not(inst_34499);
var state_34543__$1 = (function (){var statearr_34554 = state_34543;
(statearr_34554[(9)] = inst_34498__$1);

return statearr_34554;
})();
if(inst_34500){
var statearr_34555_35797 = state_34543__$1;
(statearr_34555_35797[(1)] = (5));

} else {
var statearr_34556_35798 = state_34543__$1;
(statearr_34556_35798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (15))){
var inst_34494 = (state_34543[(8)]);
var inst_34527 = cljs.core.vec(inst_34494);
var state_34543__$1 = state_34543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34543__$1,(18),out,inst_34527);
} else {
if((state_val_34544 === (13))){
var inst_34520 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
var statearr_34558_35800 = state_34543__$1;
(statearr_34558_35800[(2)] = inst_34520);

(statearr_34558_35800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (6))){
var inst_34494 = (state_34543[(8)]);
var inst_34523 = inst_34494.length;
var inst_34524 = (inst_34523 > (0));
var state_34543__$1 = state_34543;
if(cljs.core.truth_(inst_34524)){
var statearr_34559_35801 = state_34543__$1;
(statearr_34559_35801[(1)] = (15));

} else {
var statearr_34561_35802 = state_34543__$1;
(statearr_34561_35802[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (17))){
var inst_34532 = (state_34543[(2)]);
var inst_34533 = cljs.core.async.close_BANG_(out);
var state_34543__$1 = (function (){var statearr_34562 = state_34543;
(statearr_34562[(10)] = inst_34532);

return statearr_34562;
})();
var statearr_34564_35804 = state_34543__$1;
(statearr_34564_35804[(2)] = inst_34533);

(statearr_34564_35804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (3))){
var inst_34537 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34543__$1,inst_34537);
} else {
if((state_val_34544 === (12))){
var inst_34494 = (state_34543[(8)]);
var inst_34513 = cljs.core.vec(inst_34494);
var state_34543__$1 = state_34543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34543__$1,(14),out,inst_34513);
} else {
if((state_val_34544 === (2))){
var state_34543__$1 = state_34543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34543__$1,(4),ch);
} else {
if((state_val_34544 === (11))){
var inst_34498 = (state_34543[(9)]);
var inst_34494 = (state_34543[(8)]);
var inst_34502 = (state_34543[(11)]);
var inst_34510 = inst_34494.push(inst_34498);
var tmp34565 = inst_34494;
var inst_34494__$1 = tmp34565;
var inst_34495 = inst_34502;
var state_34543__$1 = (function (){var statearr_34568 = state_34543;
(statearr_34568[(7)] = inst_34495);

(statearr_34568[(8)] = inst_34494__$1);

(statearr_34568[(12)] = inst_34510);

return statearr_34568;
})();
var statearr_34569_35806 = state_34543__$1;
(statearr_34569_35806[(2)] = null);

(statearr_34569_35806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (9))){
var inst_34495 = (state_34543[(7)]);
var inst_34506 = cljs.core.keyword_identical_QMARK_(inst_34495,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34543__$1 = state_34543;
var statearr_34573_35807 = state_34543__$1;
(statearr_34573_35807[(2)] = inst_34506);

(statearr_34573_35807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (5))){
var inst_34503 = (state_34543[(13)]);
var inst_34498 = (state_34543[(9)]);
var inst_34495 = (state_34543[(7)]);
var inst_34502 = (state_34543[(11)]);
var inst_34502__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34498) : f.call(null,inst_34498));
var inst_34503__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34502__$1,inst_34495);
var state_34543__$1 = (function (){var statearr_34574 = state_34543;
(statearr_34574[(13)] = inst_34503__$1);

(statearr_34574[(11)] = inst_34502__$1);

return statearr_34574;
})();
if(inst_34503__$1){
var statearr_34575_35810 = state_34543__$1;
(statearr_34575_35810[(1)] = (8));

} else {
var statearr_34576_35811 = state_34543__$1;
(statearr_34576_35811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (14))){
var inst_34498 = (state_34543[(9)]);
var inst_34502 = (state_34543[(11)]);
var inst_34515 = (state_34543[(2)]);
var inst_34516 = [];
var inst_34517 = inst_34516.push(inst_34498);
var inst_34494 = inst_34516;
var inst_34495 = inst_34502;
var state_34543__$1 = (function (){var statearr_34577 = state_34543;
(statearr_34577[(14)] = inst_34515);

(statearr_34577[(7)] = inst_34495);

(statearr_34577[(8)] = inst_34494);

(statearr_34577[(15)] = inst_34517);

return statearr_34577;
})();
var statearr_34578_35812 = state_34543__$1;
(statearr_34578_35812[(2)] = null);

(statearr_34578_35812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (16))){
var state_34543__$1 = state_34543;
var statearr_34579_35813 = state_34543__$1;
(statearr_34579_35813[(2)] = null);

(statearr_34579_35813[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (10))){
var inst_34508 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
if(cljs.core.truth_(inst_34508)){
var statearr_34580_35814 = state_34543__$1;
(statearr_34580_35814[(1)] = (11));

} else {
var statearr_34581_35816 = state_34543__$1;
(statearr_34581_35816[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (18))){
var inst_34529 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
var statearr_34589_35817 = state_34543__$1;
(statearr_34589_35817[(2)] = inst_34529);

(statearr_34589_35817[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (8))){
var inst_34503 = (state_34543[(13)]);
var state_34543__$1 = state_34543;
var statearr_34596_35822 = state_34543__$1;
(statearr_34596_35822[(2)] = inst_34503);

(statearr_34596_35822[(1)] = (10));


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
var cljs$core$async$state_machine__31050__auto__ = null;
var cljs$core$async$state_machine__31050__auto____0 = (function (){
var statearr_34603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34603[(0)] = cljs$core$async$state_machine__31050__auto__);

(statearr_34603[(1)] = (1));

return statearr_34603;
});
var cljs$core$async$state_machine__31050__auto____1 = (function (state_34543){
while(true){
var ret_value__31051__auto__ = (function (){try{while(true){
var result__31052__auto__ = switch__31049__auto__(state_34543);
if(cljs.core.keyword_identical_QMARK_(result__31052__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31052__auto__;
}
break;
}
}catch (e34604){var ex__31053__auto__ = e34604;
var statearr_34605_35840 = state_34543;
(statearr_34605_35840[(2)] = ex__31053__auto__);


if(cljs.core.seq((state_34543[(4)]))){
var statearr_34606_35846 = state_34543;
(statearr_34606_35846[(1)] = cljs.core.first((state_34543[(4)])));

} else {
throw ex__31053__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31051__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35847 = state_34543;
state_34543 = G__35847;
continue;
} else {
return ret_value__31051__auto__;
}
break;
}
});
cljs$core$async$state_machine__31050__auto__ = function(state_34543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31050__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31050__auto____1.call(this,state_34543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31050__auto____0;
cljs$core$async$state_machine__31050__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31050__auto____1;
return cljs$core$async$state_machine__31050__auto__;
})()
})();
var state__31147__auto__ = (function (){var statearr_34614 = f__31146__auto__();
(statearr_34614[(6)] = c__31144__auto___35789);

return statearr_34614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31147__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
