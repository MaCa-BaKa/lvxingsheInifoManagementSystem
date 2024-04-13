const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot2e667147/",
            name: "springboot2e667147",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot2e667147/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "旅行社信息管理系统"
        } 
    }
}
export default base
