<template>
    <div class="footer-wrapper">
        <footer role="contentinfo">
            <div class="footer-container">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-lg-4 footer-col">
                            <h3 class="contact-title">Contact</h3>
                            <p>
                                (+0) 000-000-0000<br />
                                <router-link to="mailto:dancinggoat@localhost.local">dancinggoat@localhost.local</router-link>
                                <br />
                                <br /> Dancing Goat Ltd<br /> 62 E Lake St Chicago,<br /> Illinois 60601, USA
                            </p>
                        </div>
                        <div class="col-md-4 col-lg-4 footer-col">
                            <h3>Follow us</h3>
                            <a
                                class="followus-link"
                                href="https://www.facebook.com/Dancing.Goat"
                                target="_blank"
                            >
                                <g-image
                                    alt="Follow us on Facebook"
                                    class=""
                                    src="~/Images/facebook-icon.png"
                                    title="Follow us on Facebook"
                                />
                            </a>
                            <a
                                class="followus-link"
                                href="https://twitter.com/DancingGoat78"
                                target="_blank"
                            >
                                <g-image
                                    alt="Follow us on Twitter"
                                    class=""
                                    src="~/Images/twitter-icon.png"
                                    title="Follow us on Twitter"
                                />
                            </a>
                        </div>
                        <div class="col-md-4 col-lg-4 footer-col"></div>
                    </div>
                </div>
            </div>
            <div class="container copyright">
                Copyright &copy; 2016 Dancing Goat. All rights reserved.
            </div>
        </footer>
    </div>
</template>
