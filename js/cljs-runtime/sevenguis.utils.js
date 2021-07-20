goog.provide('sevenguis.utils');
/**
 * Log to js console
 */
sevenguis.utils.console_log = console.log;
/**
 * Parse a string of integer into an int value
 */
sevenguis.utils.parse_int = (function sevenguis$utils$parse_int(integer){
return parseInt(integer,(10));
});
/**
 * Parse a string of integer into an int value
 */
sevenguis.utils.parse_float = (function sevenguis$utils$parse_float(integer){
return parseFloat(integer,(10));
});
/**
 * Escape a string replacing spaces with `-`
 */
sevenguis.utils.escape_str = (function sevenguis$utils$escape_str(string_with_spaces){
return clojure.string.replace(string_with_spaces,/ /,"-");
});
/**
 * Remove elem in coll
 */
sevenguis.utils.vec_remove = (function sevenguis$utils$vec_remove(coll,pos){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),pos),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(pos + (1))));
});
/**
 * Prevent default and propagation of a DOM event
 */
sevenguis.utils.prevent_default = (function sevenguis$utils$prevent_default(e){
e.stopPropagation();

return e.preventDefault();
});
/**
 * First item in a collection that satisfy the predicate
 */
sevenguis.utils.find_first = (function sevenguis$utils$find_first(f,coll){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,coll));
});
/**
 * Generate a range sequence of characters
 */
sevenguis.utils.char_range = (function sevenguis$utils$char_range(start,end){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.char$,cljs.core.range.cljs$core$IFn$_invoke$arity$2((start | (0)),((end | (0)) + (1))));
});
/**
 * true if coll contains el
 */
sevenguis.utils.in_QMARK_ = (function sevenguis$utils$in_QMARK_(coll,el){
return cljs.core.some((function (p1__37119_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,p1__37119_SHARP_);
}),coll);
});
/**
 * Get current time in a js Date object
 */
sevenguis.utils.date_now = (new Date(Date.now()));
/**
 * Format date as dd-MM-yyyy
 */
sevenguis.utils.format_date = (function sevenguis$utils$format_date(var_args){
var G__37121 = arguments.length;
switch (G__37121) {
case 1:
return sevenguis.utils.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sevenguis.utils.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sevenguis.utils.format_date.cljs$core$IFn$_invoke$arity$1 = (function (date){
return sevenguis.utils.format_date.cljs$core$IFn$_invoke$arity$2(date,".");
}));

(sevenguis.utils.format_date.cljs$core$IFn$_invoke$arity$2 = (function (date,sep){
var year = cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.getFullYear());
var month = cljs.core.str.cljs$core$IFn$_invoke$arity$1((date.getMonth() + (1)));
var day = cljs.core.str.cljs$core$IFn$_invoke$arity$1(date.getDate());
return [(((((day).length) < (2)))?"0":null),day,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep),(((((month).length) < (2)))?"0":null),month,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep),year].join('');
}));

(sevenguis.utils.format_date.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sevenguis.utils.js.map
