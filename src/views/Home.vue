<template>
  <WelcomeCpp />
  <AddCoin @added="change" />
  <ProfitDisplay :key="refreshComp" />
  <img id="bg" src="@/assets/Coins2.png" alt="" />
</template>

<script>
import WelcomeCpp from '../components/WelcomeCpp.vue';
import AddCoin from '../components/AddCoin.vue';
import ProfitDisplay from '../components/ProfitDisplay.vue';

export default {
  name: 'App',
  components: {
    WelcomeCpp,
    AddCoin,
    ProfitDisplay,
  },
  data() {
    return {
      refreshComp: 0,
    };
  },
  methods: {
    change() {
      this.refreshComp += 1;
    },
  },
};
</script>
