//!/usr/bin/env nodejs
// encoding=utf-8
//codeby     道长且阻
//email      ydhcui@suliu.net/QQ664284092
//https://github.com/ydhcui/scanui
import Vue from 'vue';
import iView from 'iview';
import {router} from './router/index';
import {appRouter} from './router/router';
import store from './store';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import util from './libs/util';

Vue.use(iView);

new Vue({ 
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    data: {
        currentPageName: '',
        eventHub: new Vue(),
    },
    mounted () {
        this.currentPageName = this.$route.name;
        // 显示打开的页面的列表
        this.$store.commit('setOpenedList');
        this.$store.commit('initCachepage');
        // 权限菜单过滤相关
        this.$store.commit('updateMenulist');
    },
    created () {
        let tagsList = [];
        appRouter.map((item) => {
            if (item.children.length <= 1) {
                tagsList.push(item.children[0]);
            } else {
                tagsList.push(...item.children);
            }
        });
        this.$store.commit('setTagsList', tagsList);
    }
});

setInterval(function(){
    util.ajax({
        method:'POST',
        action:'heartbeat',
        json  :{}
    }).then(res => {
        sessionStorage.token = res.token;
        //msg ... 
    }).catch(err => {
        this.$Message.error(err);
    });
}, 1000*60);