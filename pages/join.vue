<template>
  <div>
    <land-page />
    <section class="section hero is-info">
      <div class>
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <div class="has-text-centered">
              <h1 class="title is-4 has-text-white">BAGAIMANA CARA DAFTARNYA?</h1>
              <hr />
              <ul class="is-size-5">
                <li>
                  <font-awesome-icon :icon="['far', 'check-square']" />Untuk bergabung bersama kami syaratnya mudah banget cukup mempunyai Smartphone &amp; Email yang aktif, anda bisa jualan atau pemakaian pribadi.
                </li>
                <li>
                  <font-awesome-icon :icon="['far', 'check-square']" />Silahkan antri dulu di whatsapp nanti admin akan jelaskan cara gabungnya.
                </li>
              </ul>
            </div>
            <div class="is-warning has-text-centered">
              <h2
                class="subtitle is-5"
              >KLIK TOMBOL DI BAWAH INI UNTUK ANTRI KARENA PESERTANYA TERBATAS</h2>
              <button @click="whatsapp" class="button is-success is-focused is-large">
                <font-awesome-icon :icon="['fab', 'whatsapp']" />
                <span class>ANTRI VIA WHATSAPP</span>
              </button>
              <br />
              <br />
              <div class="notification is-dark">
                <p>
                  <i>Buruan karena peluang ini di infokan ke ribuan database kami.</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "~/components/AppFooter.vue";
import LandPage from "~/components/LandPage.vue";

export default {
  components: {
    AppFooter,
    LandPage
  },
  methods: {
    async whatsapp() {
      this.$fb.track("ViewContent");
      let message = encodeURIComponent(
        "Halo admin... Saya mau daftar Bimbingan Agen Travel *PT. MMBC Tour & Travel*"
      );
      let link = "https://wa.me/6282250925542?text=" + message;
      window.open(link);
    }
  }
};
</script>

<style lang="css">
ul,
ol,
p,
button {
  font-weight: 700;
  font-family: "Roboto Condensed", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Oswald", sans-serif;
}
ul {
  margin-bottom: 2em;
}
li {
  margin-bottom: 1em;
}
.subtitle {
  font-weight: 700;
}
svg.svg-inline--fa.fa-w-14 {
  width: 1.5em !important;
  height: 1.5em !important;
  margin-right: 0.5em !important;
  vertical-align: -0.5em !important;
}
#image .card {
  margin-bottom: 1em;
}
</style>