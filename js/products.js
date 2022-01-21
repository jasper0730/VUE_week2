const app = Vue.createApp({
    data() {
        return {
            apiUrl:'https://vue3-course-api.hexschool.io/v2',
            apiPath: 'jasper07301',
            products:[],
            temp:{},
        }
    },
    methods: {
        checkAdmin() {
            const url = `${this.apiUrl}/api/user/check`;
            axios.post(url)
            .then((res)=>{
                this.getData();
            })
            .catch((err)=>{
                alert(err.data.message)
                window.location = 'index.html';
            })
        },
        getData() {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
            axios.get(url)
            .then((res)=>{
                this.products = res.data.products;
            })
            .catch((err)=>{
                console.log(err.data.message)
            })
        },
        detailProduct(item) {
            this.temp = item;
        }
    },
    mounted() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
        axios.defaults.headers.common.Authorization = token;
        this.checkAdmin();
    },
})
app.mount('#app');