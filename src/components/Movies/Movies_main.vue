<template>
<div>  
<h1>Movies main component</h1>    
</div>
</template>
<script>
import {ApiGet} from "../../Api.js";
export default{
     mounted() {
        ApiGet('/api/directors')
            .then(data => {
              console.log(data);
            });
     }
}
</script>
<style></style>