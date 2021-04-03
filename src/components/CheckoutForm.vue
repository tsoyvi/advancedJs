<template>

  <section class="section">
        <div class="container">

            <details class="checkout-details" open>
                <summary class="checkout-details-summary">01. Shipping Adress</summary>

                <div class="checkout-blocks">

                    <div class="checkout-blocks-sub">
                        <h5>Check as a guest or register</h5>
                        <p class="checkout-blocks-sub-p">Register with us for future convenience</p>

                        <div class="checkout-blocks-margin">
                            <label class="checkout-blocks-label">
                                <input type="radio" name="reg-check" class="checkout-radio">
                                checkout as guest
                            </label><br>
                            <label class="checkout-blocks-label">
                                <input type="radio" name="reg-check" class="checkout-radio"
                                    checked>register
                            </label>
                        </div>

                        <h5>register and save time!</h5>
                        <p class="checkout-blocks-sub-p">Register with us for future convenience</p>

                        <div class="checkout-blocks-margin">
                            <p class="checkout-blocks-sub-p">
                                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                                Fast and easy checkout
                            </p>
                            <p class="checkout-blocks-sub-p">
                                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                                Easy access to your order
                                history and status
                            </p>
                        </div>
                        <div>
                            <button class="checkout-blocks-button button">Continue</button>
                        </div>
                    </div>

                    <div class="checkout-blocks-sub">
                        <form action="#!" method="post">

                            <h5>Already registed?</h5>
                            <p class="checkout-blocks-sub-p">Please log in below</p>

                            <div class="checkout-blocks-input-block">
                                <label for="checkout-email" class="checkout-blocks-label">
                                    EMAIL ADDRESS <span>*</span>
                                </label>
                                <input type="email" id="checkout-email"
                                    class="checkout-blocks-inputs" required>
                            </div>

                            <div class="checkout-blocks-input-block">
                                <label for="checkout-pass" class="checkout-blocks-label">
                                    PASSWORD <span>*</span>
                                </label>
                                <input type="password" id="checkout-pass"
                                    class="checkout-blocks-inputs" required>
                            </div>
                            <p class="required-fileds">* Required Fileds</p>

                            <div class="required-fileds-buttons">
                                <button class="checkout-blocks-button button-log-in button">
                                    Log in
                                </button>
                                <a href="#!" class="checkout-blocks-sub-link">Forgot Password ?</a>
                            </div>

                        </form>

                    </div>

                </div>

            </details>

            <details class="checkout-details">
                <summary class="checkout-details-summary">02. BILLING INFORMATION</summary>
                <div class="checkout-blocks">
                    <div class="checkout-blocks-sub">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Cupiditate quam eaque ab illo id officia, voluptates
                        beatae reiciendis voluptas praesentium sequi, magni perferendis quas
                        accusamus. Incidunt ut nihil neque. Reprehenderit?
                    </div>
                </div>

            </details>

            <details class="checkout-details">
                <summary class="checkout-details-summary">03. SHIPPING INFORMATION</summary>
                <div class="checkout-blocks">
                    <div class="checkout-blocks-sub">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Cupiditate quam eaque ab illo id officia, voluptates
                        beatae reiciendis voluptas praesentium sequi, magni perferendis quas
                        accusamus. Incidunt ut nihil neque. Reprehenderit?
                    </div>
                </div>
            </details>

            <details class="checkout-details">
                <summary class="checkout-details-summary">04. SHIPPING METHOD</summary>
                <div class="checkout-blocks">
                    <div class="checkout-blocks-sub">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Cupiditate quam eaque ab illo id
                        officia, voluptates beatae reiciendis voluptas praesentium sequi,
                        magni perferendis quas accusamus. Incidunt ut nihil neque. Reprehenderit?
                    </div>
                </div>
            </details>

            <details class="checkout-details">
                <summary class="checkout-details-summary">05. PAYMENT METHOD</summary>
                <div class="checkout-blocks">
                    <div class="checkout-blocks-sub">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Cupiditate quam eaque ab illo id officia, voluptates beatae
                        reiciendis voluptas praesentium sequi, magni perferendis quas
                        accusamus. Incidunt ut nihil neque. Reprehenderit?
                    </div>
                </div>
            </details>

            <details class="checkout-details">
                <summary class="checkout-details-summary">06. ORDER REVIEW</summary>
                <div class="checkout-blocks">
                    <div class="checkout-blocks-sub">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Cupiditate quam eaque ab illo id
                        officia, voluptates beatae reiciendis voluptas praesentium sequi,
                        magni perferendis quas accusamus. Incidunt ut nihil neque. Reprehenderit?
                    </div>
                </div>
            </details>

        </div>

        <div class="container">

        </div>

    </section>

</template>

<script>

export default {
  name: 'CheckoutForm',
};
</script>
