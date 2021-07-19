goog.provide('sevenguis.counter');
sevenguis.counter.click_count1 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
sevenguis.counter.main = (function sevenguis$counter$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.UI-task-center","div.UI-task-center",1773518898),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.UI-counter","label.UI-counter",1653917519),cljs.core.deref(sevenguis.counter.click_count1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.UI-button","button.UI-button",1720363561),"Counter",(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sevenguis.counter.click_count1,cljs.core.inc);
})], null)], null);
});

//# sourceMappingURL=sevenguis.counter.js.map
