<template>
  <div>
    <section class="pricing-section">
      <div class="container">
        <div class="pricing-text">
          <h1 class="title-lg-row">Choose your <span class="colorized">rate</span></h1>
        </div>
        <div class="home-flexbox hf-pricing">
          <div class="pricing-panel col-12 col-lg-8 col-xl-5">
            <div class="title-box">
              <h1 class="tb-text">STANDARD</h1>
            </div>
            <div class="pricing-panel-inner">
              <div class="desc-box">
                <ul class="features-list">
                  <li><i class="bi bi-check-circle-fill"></i><p>Quick start within one day</p></li>
                  <li><i class="bi bi-check-circle-fill"></i><p>No equipment and support costs</p></li>
                  <li><i class="bi bi-check-circle-fill"></i><p>Personal data privacy</p></li>
                  <li><i class="bi bi-check-circle-fill"></i><p>The price depends on the number of customer profiles</p></li>
                </ul>
              </div>
              <p class="num-text">Number of customer profiles</p>
              <vs-slider :min="5" @change="cambio" color="#7b98ff" step=25 text-fixed=K v-model="value1"/>
              <div style="text-align: center;">
                <h3 class="num-price">{{value2}}$/month</h3>
              </div>
              <p class="desc-sm">All payments in Dollars are subject to a 15% commission for acquiring services.
                Unfortunately, this is out of our control and there is nothing we can do about it. But you can always
                use Rubles or Yuan to pay without commission.
              </p>
            </div>
          </div>
          <div class="pricing-panel col-12 col-lg-8 col-xl-5">
            <div class="title-box">
              <h1 class="tb-text">PREMIUM</h1>
            </div>
            <div class="pricing-panel-inner">
              <div class="desc-box">
                <ul class="features-list">
                  <li><i class="bi bi-check-circle-fill"></i><p>Full compliance with your information security requirements</p></li>
                  <li><i class="bi bi-check-circle-fill"></i><p>Fixed payment for the entire usage period</p></li>
                  <li><i class="bi bi-check-circle-fill"></i><p>Functional improvements according to you</p></li>
                  <li><i class="bi bi-check-circle-fill"></i><p>Strategic safety and independence of your business</p></li>
                  <li><i class="bi bi-check-circle-fill"></i><p>Customer Profile 360°</p></li>
                </ul>
              </div>
              <p class="num-text">Number of customer profiles <span class="colorized">unlimited</span></p>
              <vs-slider disabled="true" color="#7b98ff" v-model="value3"/>
              <div style="text-align: center;">
                <h3>Price on request</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="home-flexbox">
          <div>
            <form class="pricing-form contact-form">
              <div class="pricing-flexbox">
                <div>
                  <h4 class="contact-form-title">Get more information</h4>
                  <input class="contact-input" type="text" placeholder="Full Name">
                  <input class="contact-input" type="text" placeholder="Job Title">
                  <input class="contact-input" type="email" placeholder="Business Email">
                  <input class="contact-input" type="tel" placeholder="Phone">
                  <div class="checkbox-f">
                    <vs-checkbox v-model="checkBox1">I agree to the <span style="color: #7b98ff">processing of personal data</span></vs-checkbox>
                  </div>
                  <div class="btn-f">
                    <form class="projects-btn-f">
                      <button class="main-btn projects-btn">SUBMIT</button>
                    </form>
                    <p class="contact-desc">We will contact you within the working day</p>
                  </div>
                </div>
                <div class="pricing-img-box">
                  <img alt="This is an image" class="pricing-img" src="../assets/Pricing.290jdc1k.webp">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PricingPage",
  data(){
    return {
      value1:5,
      value2:120,
      value3: 100,
      widthx:25,
      heightx:25
    }
  },
  methods:{
    cambio(value){
      this.widthx = value
      this.heightx = value
      this.value2 = value * 20
    }
  }
}
</script>

<style scoped>

</style>

<!--<div class="title-box">-->
<!--<h1 class="title-lg-row" style="margin: 0">STANDARD</h1>-->
<!--</div>-->
<!--<div class="title-desc-box">-->
<!--<ul class="features-list">-->
<!--  <li><i class="bi bi-check-circle-fill"></i><p>Quick start within one day</p></li>-->
<!--  <li><i class="bi bi-check-circle-fill"></i><p>No equipment and support costs</p></li>-->
<!--  <li><i class="bi bi-check-circle-fill"></i><p>Personal data privacy</p></li>-->
<!--  <li><i class="bi bi-check-circle-fill"></i><p>The price depends on the number of customer profiles</p></li>-->
<!--</ul>-->
<!--<p class="num-text">Number of customer profiles</p>-->
<!--<vs-slider :min="5" @change="cambio" color="#7b98ff" step=25 text-fixed=K v-model="value1"/>-->
<!--<div style="text-align: center;">-->
<!--  <h3 style="margin: 1.325rem 0;">{{value2}}$/month</h3>-->
<!--</div>-->
<!--<p class="desc-sm">All payments in Dollars are subject to a 15% commission for acquiring services.-->
<!--  Unfortunately, this is out of our control and there is nothing we can do about it. But you can always-->
<!--  use Rubles or Yuan to pay without commission-->
<!--</p>-->
<!--</div>-->

<!--            <div class="pricing-item">-->
<!--              <div class="title-box">-->
<!--                <h1 class="title-lg-row" style="margin: 0">PREMIUM</h1>-->
<!--              </div>-->
<!--              <div class="title-desc-box">-->
<!--                <ul class="features-list">-->

<!--                </ul>-->
<!--                <p class="num-text">Number of customer profiles</p>-->
<!--                <vs-slider disabled="true" @change="cambio" color="#7b98ff" v-model="value3"/>-->
<!--                <div style="text-align: center;">-->
<!--                  <h3 style="margin: 1.325rem 0 0 0;">Request for price</h3>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->