<template>
<nav class="header-nav d-print-none">
    <div class="top-nav">
        <div class="container">
            <div class="main-head">
                <div class="main-logo">
                    <div class="row">
                        <div class="col-sm-2 col-md-6">
                            <a href="https://wrds-www.wharton.upenn.edu/" title="WRDS PaperAbstract"><img src="@/assets/wrds_logo.svg" alt="Wharton wrds Logo" /></a>
                        </div>
                    </div>
                </div>
                <div id="menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>

    <div class="main-nav">
        <div class="utility-wrap">
            <div class="redbar"></div>
            <ul class="utility-links">
                <li class="utility-link">
                </li>
            </ul>
        </div>

        <div class="utility-wrap">
            <div class="redbar"></div>
        </div>

        <div role="tabpanel" class="main-panel">
            <div class="main-links">
                <div class="container">
                </div>
            </div>
        </div>
    </div>
</nav>

</template>

<script>
// import '@/assets/bootstrap.min.css'
export default {

}
</script>

<style scoped>
.header-nav {
    position: relative;
}
.top-nav {
    padding: 15px 15px 15px 15px;
}
/* .header-nav .container {
    padding: 0 15px 0 15px;
} */

body .header-nav .top-nav, body.defaultTheme .header-nav .top-nav {
    background: #154281;
    background: linear-gradient(#002C77, #2E55A4);
    height: 10vh;
}

.header-nav .main-head {
    width: 50%;
    height: 80px;
    z-index: 200;
    position: relative;
    margin-left: 10%;
}

.col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
}

.col-sm-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
}
/* .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
} */

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

a {
    color: #004785;
    text-decoration: none;
    background-color: transparent;
}

img {
    vertical-align: middle;
    border-style: none;
}

.header-nav .main-nav {
    display: block;
    height: auto;
    overflow: visible;
}

.header-nav .utility-wrap {
    position: absolute;
    display: block;
    width: 100%;
    height: 15px;
    top: 0;
    right: 0;
    background: #000000;
    z-index: 1001;
}

.header-nav .main-panel {
    transition: max-height .2s ease-out;
    max-height: 42px;
    overflow: visible;
}

.header-nav .utility-wrap .redbar {
    background: #a90533;
    height: 15px;
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
}

.header-nav .utility-wrap .utility-links {
    float: right;
}

.header-nav .utility-wrap .utility-links {
    margin: 0;
}

.header-nav .utility-wrap .utility-link .btn-group-sm a {
    color: #FFFFFF;
    font-size: 11px;
    padding: 5px 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.header-nav .main-head .main-logo img {
    padding-top: 30px;
    width: 400px;
}
</style>
