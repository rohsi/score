<template>
    <div><h3>Start Trading!</h3>
        <h5>Buy and sell stocks and view your portfolio.</h5>
        <br>
        <h5><strong>Your funds: {{ funds}}</strong></h5>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style scoped>

</style>