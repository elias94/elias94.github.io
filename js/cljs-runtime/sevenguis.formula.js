goog.provide('sevenguis.formula');
sevenguis.formula.operations = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"SUM","SUM",607822884),(function (p1__57411_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,p1__57411_SHARP_);
}),new cljs.core.Keyword(null,"SUB","SUB",1236808813),(function (p1__57412_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,p1__57412_SHARP_);
}),new cljs.core.Keyword(null,"MUL","MUL",-1545099504),(function (p1__57413_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,p1__57413_SHARP_);
}),new cljs.core.Keyword(null,"DIV","DIV",-1432109015),(function (p1__57414_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._SLASH_,p1__57414_SHARP_);
}),new cljs.core.Keyword(null,"AVG","AVG",-577452922),(function (p1__57415_SHARP_){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,p1__57415_SHARP_) / cljs.core.count(p1__57415_SHARP_));
})], null);
/**
 * True if the cell value is a formula
 */
sevenguis.formula.formula_QMARK_ = (function sevenguis$formula$formula_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),"=");
});
/**
 * True if the string is a valid range
 */
sevenguis.formula.coord_QMARK_ = (function sevenguis$formula$coord_QMARK_(r){
return ((typeof r === 'string') && (cljs.core.boolean$(cljs.core.re_find(/^[A-Z]{1}[0-9]{1,2}$/,r))));
});
/**
 * True if the formula contains a valid operation
 */
sevenguis.formula.operation_QMARK_ = (function sevenguis$formula$operation_QMARK_(formula){
var and__4221__auto__ = cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("formula","op","formula/op",942093547),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(formula,(1),(4)));
if(and__4221__auto__){
var rest = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(formula,(3));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(rest),"(")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(rest),")")));
} else {
return and__4221__auto__;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("type","number","type/number",1566746768),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","boolean","cljs.core/boolean",-1222483266,null),cljs.core.list(new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),/^\d*\.?\d+$/,new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__57416_SHARP_){
return cljs.core.boolean$(cljs.core.re_find(/^\d*\.?\d+$/,p1__57416_SHARP_));
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("cell","range","cell/range",1647256220),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"coord-start","coord-start",1848928754),new cljs.core.Symbol("sevenguis.formula","coord?","sevenguis.formula/coord?",-1934799341,null),new cljs.core.Keyword(null,"semicolon","semicolon",797086549),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [":","null"], null), null),new cljs.core.Keyword(null,"coord-end","coord-end",-2069437354),new cljs.core.Symbol("sevenguis.formula","coord?","sevenguis.formula/coord?",-1934799341,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coord-start","coord-start",1848928754),new cljs.core.Keyword(null,"semicolon","semicolon",797086549),new cljs.core.Keyword(null,"coord-end","coord-end",-2069437354)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sevenguis.formula.coord_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [":",null], null), null),sevenguis.formula.coord_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("sevenguis.formula","coord?","sevenguis.formula/coord?",-1934799341,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [":","null"], null), null),new cljs.core.Symbol("sevenguis.formula","coord?","sevenguis.formula/coord?",-1934799341,null)], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("formula","op","formula/op",942093547),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AVG","SUB","MUL","DIV","AVG"], null)),cljs.core.set(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AVG","SUB","MUL","DIV","AVG"], null)));
/**
 * Get cell value using coordinates
 */
sevenguis.formula.cell_value = (function sevenguis$formula$cell_value(coord,table_state){
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(table_state),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(coord));
var computed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"computed","computed",-1482016762),cell);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cell);
var or__4223__auto__ = computed;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","number","type/number",1566746768),value)){
return value;
} else {
return null;
}
}
});
/**
 * Add a dependency to the cell dependencies state
 */
sevenguis.formula.update_dependencies = (function sevenguis$formula$update_dependencies(dep,coord,cell_dependencies){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_dependencies,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(coord)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dep], 0));
});
/**
 * Get column coordinate using spec map
 */
sevenguis.formula.coord_from_range = (function sevenguis$formula$coord_from_range(m,coord_pos){
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(coord_pos,m);
var col = cljs.pprint.char_code(cljs.core.first(r));
var row = sevenguis.utils.parse_int(cljs.core.rest(r));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"row","row",-570139521),row], null);
});
/**
 * Parse and return a range
 */
sevenguis.formula.parse_range = (function sevenguis$formula$parse_range(value,coord,table_state,cell_dependencies){
var m = cljs.spec.alpha.conform(new cljs.core.Keyword("cell","range","cell/range",1647256220),value);
var start = sevenguis.formula.coord_from_range(m,new cljs.core.Keyword(null,"coord-start","coord-start",1848928754));
var end = sevenguis.formula.coord_from_range(m,new cljs.core.Keyword(null,"coord-end","coord-end",-2069437354));
var iter__4622__auto__ = (function sevenguis$formula$parse_range_$_iter__57417(s__57418){
return (new cljs.core.LazySeq(null,(function (){
var s__57418__$1 = s__57418;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__57418__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var c = cljs.core.first(xs__6308__auto__);
var iterys__4618__auto__ = ((function (s__57418__$1,c,xs__6308__auto__,temp__5753__auto__,m,start,end){
return (function sevenguis$formula$parse_range_$_iter__57417_$_iter__57419(s__57420){
return (new cljs.core.LazySeq(null,((function (s__57418__$1,c,xs__6308__auto__,temp__5753__auto__,m,start,end){
return (function (){
var s__57420__$1 = s__57420;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__57420__$1);
if(temp__5753__auto____$1){
var s__57420__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57420__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__57420__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__57422 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__57421 = (0);
while(true){
if((i__57421 < size__4621__auto__)){
var r = cljs.core._nth(c__4620__auto__,i__57421);
cljs.core.chunk_append(b__57422,(function (){var cell_coord = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
var value__$1 = sevenguis.formula.cell_value(cell_coord,table_state);
sevenguis.formula.update_dependencies(cell_coord,coord,cell_dependencies);

var or__4223__auto__ = value__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})());

var G__57428 = (i__57421 + (1));
i__57421 = G__57428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57422),sevenguis$formula$parse_range_$_iter__57417_$_iter__57419(cljs.core.chunk_rest(s__57420__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57422),null);
}
} else {
var r = cljs.core.first(s__57420__$2);
return cljs.core.cons((function (){var cell_coord = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
var value__$1 = sevenguis.formula.cell_value(cell_coord,table_state);
sevenguis.formula.update_dependencies(cell_coord,coord,cell_dependencies);

var or__4223__auto__ = value__$1;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
})(),sevenguis$formula$parse_range_$_iter__57417_$_iter__57419(cljs.core.rest(s__57420__$2)));
}
} else {
return null;
}
break;
}
});})(s__57418__$1,c,xs__6308__auto__,temp__5753__auto__,m,start,end))
,null,null));
});})(s__57418__$1,c,xs__6308__auto__,temp__5753__auto__,m,start,end))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(start),(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(end) + (1))))));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,sevenguis$formula$parse_range_$_iter__57417(cljs.core.rest(s__57418__$1)));
} else {
var G__57429 = cljs.core.rest(s__57418__$1);
s__57418__$1 = G__57429;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(start),(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(end) + (1)))));
});
/**
 * Parse operation arguments
 */
sevenguis.formula.parse_args = (function sevenguis$formula$parse_args(formula,coord,table_state,cell_dependencies){
var args = clojure.string.split.cljs$core$IFn$_invoke$arity$2(formula,/,/);
if((cljs.core.count(args) > (1))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57423_SHARP_){
return (sevenguis.formula.parse_args.cljs$core$IFn$_invoke$arity$4 ? sevenguis.formula.parse_args.cljs$core$IFn$_invoke$arity$4(p1__57423_SHARP_,coord,table_state,cell_dependencies) : sevenguis.formula.parse_args.call(null,p1__57423_SHARP_,coord,table_state,cell_dependencies));
}),args));
} else {
var arg = cljs.core.first(args);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","number","type/number",1566746768),arg)){
return sevenguis.utils.parse_float(arg);
} else {
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cell","range","cell/range",1647256220),arg)){
return sevenguis.formula.parse_range(arg,coord,table_state,cell_dependencies);
} else {
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(sevenguis.formula.coord_QMARK_,arg)){
var G__57425 = sevenguis.formula.cell_value(arg,table_state);
var fexpr__57424 = sevenguis.formula.update_dependencies(arg,coord,cell_dependencies);
return (fexpr__57424.cljs$core$IFn$_invoke$arity$1 ? fexpr__57424.cljs$core$IFn$_invoke$arity$1(G__57425) : fexpr__57424.call(null,G__57425));
} else {
return null;
}
}
}
}
});
/**
 * Return the computed cell formula (without the =)
 */
sevenguis.formula.compute_formula = (function sevenguis$formula$compute_formula(formula,coord,table_state,cell_dependencies){
if(sevenguis.formula.operation_QMARK_(formula)){
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sevenguis.formula.operations,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(formula,(1),(4))));
var params = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(formula,(4)));
var args = sevenguis.formula.parse_args(clojure.string.join.cljs$core$IFn$_invoke$arity$1(params),coord,table_state,cell_dependencies);
return (op.cljs$core$IFn$_invoke$arity$1 ? op.cljs$core$IFn$_invoke$arity$1(args) : op.call(null,args));
} else {
var arg = cljs.core.rest(formula);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(sevenguis.formula.coord_QMARK_,arg)){
var G__57427 = sevenguis.formula.cell_value(arg,table_state);
var fexpr__57426 = sevenguis.formula.update_dependencies(arg,coord,cell_dependencies);
return (fexpr__57426.cljs$core$IFn$_invoke$arity$1 ? fexpr__57426.cljs$core$IFn$_invoke$arity$1(G__57427) : fexpr__57426.call(null,G__57427));
} else {
return null;
}
}
});

//# sourceMappingURL=sevenguis.formula.js.map
