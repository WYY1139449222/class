<template>
    <div class="itemBox">
        <div class="iconBox">
            {{index+1}}
        </div>
        <div class="contentBox">
            <h2>{{data.title}}</h2>
            <p>{{data.author}}</p>
        </div>
        <div class="imgBox">
            <img :src="data.image_field?data.image_field.url:''" alt="">
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'XXX',
    data() {
        return {
           //data是从父组件拿到的那条数据
        }
    },
    props:['data','index'],
    components: {
        
    }
}
</script>
<style lang="less">
.itemBox{
    text-align: left;
    border-bottom: 1px solid #eee;
    padding:2vw 5vw;
    width: 90vw;
    display: flex;
    align-items: center;
    .contentBox{
        width: 62vw;
        padding: 2vw 2vw;
        overflow-wrap: break-word;
        >h2{
            font-size: 4vw;
            font-weight: 500;

        }
        >p{
            color:#aaa;
        }
    }
    .imgBox{
        width: 20vw;
        height:18vw;
        border-radius: 2vw;
        overflow: hidden;
        >img{
            width: 100%;
        }
    }
    .iconBox{
        width: 8vw;
    }
}
</style>