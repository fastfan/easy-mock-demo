<script>
export default {
    name:"layout",
    render(h){
        return(
            <div class="layout-container">
                <div class="content-container">
                   <router-view />
                </div>
            </div>
        )
    }
}
</script>
<style lang="scss" scoped>
.layout-container{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    .content-container{
        width:100%;
        flex:1;
    }
}
</style>