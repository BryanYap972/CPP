<template>
<h3>This is a Profit Page</h3>
<ProfitDisplay/>
</template>

<script>
import ProfitDisplay from "@/components/ProfitDisplay.vue"

export default {
    name: "OnlyProfit",
    components:{
        ProfitDisplay
    }
}
</script>