console.log('a');

{{#if router}}
const routes = {
  '/': Home,
  '/about': About
}
{{/if}}

var app = new Vue({
    el : 'app',
    {{#if store}}
        store,
    {{/if}}
    render(h)=>{
        return h()
    }
})
