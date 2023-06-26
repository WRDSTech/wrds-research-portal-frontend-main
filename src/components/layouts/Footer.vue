<template>
    <footer class="wrds-footer d-print-none">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-4 mb-3">
                    <a href="http://www.wharton.upenn.edu" title="The Wharton School" target="_blank">
                        <img src="@/assets/wharton_white.svg" alt="The Wharton School Logo" class="wrds-footer-logo ">
                    </a>
                    <a class="wrds-footer-text" href="https://wrds-www.wharton.upenn.edu/">Wharton Research Data Services</a>
                <div class="border-white mt-3 border-top d-md-block d-lg-none"></div>
                </div>
                <div class="col-12 col-lg-8">
                    <div class="row">
                        <div class="col-md-3 col-sm-6 col-12">
                        </div>
                        <div class="col-md-3 col-sm-6 col-12">
                        </div>
                        <div class="col-md-3 col-sm-6 col-12">
                        </div>
                        <div class="col-md-3 col-sm-6 col-12">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 mb-3">
                    <small class="wrds-footer-copyright">Unless otherwise noted, all material is © 1993-2021, The Wharton School, University of Pennsylvania. All rights reserved.</small>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '@/assets/styles/grid-framework.less';
@media screen and (max-height: 1080px) {
}
.wrds-footer {
    padding: 40px 0 15px;
    margin-top: 10px;
    border-bottom: 4px solid #a90533;
    background: #2E55A4;
    color: #FFFFFF;
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}

.wrds-footer a {
    display: block;
    color: #FFFFFF;
}

html, body {
  height: 100%;
  margin: 0;
  display: flex; /* Use flexbox layout */
  flex-direction: column; /* Arrange elements vertically */
}

.wrapper {
  flex: 1; /* Allow the wrapper to grow and take up remaining space */
}

a {
    color: #337ab7;
    text-decoration: none;
    text-align: left;
}

.wrds-footer-logo {
    width: 245px;
    margin-left: -5px;
    margin-bottom: 10px;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 10%;
    margin-left:  10%;
}

.row {
    margin-right: -15px;
    margin-left: -15px;
}

.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}

.btn-group-vertical>.btn-group:after, .btn-group-vertical>.btn-group:before, .btn-toolbar:after, .btn-toolbar:before, .clearfix:after, .clearfix:before, .container-fluid:after, .container-fluid:before, .container:after, .container:before, .dl-horizontal dd:after, .dl-horizontal dd:before, .form-horizontal .form-group:after, .form-horizontal .form-group:before, .modal-footer:after, .modal-footer:before, .modal-header:after, .modal-header:before, .nav:after, .nav:before, .navbar-collapse:after, .navbar-collapse:before, .navbar-header:after, .navbar-header:before, .navbar:after, .navbar:before, .pager:after, .pager:before, .panel-body:after, .panel-body:before, .row:after, .row:before {
    display: table;
    content: " ";
}

.col-lg-4 {
    width: 33.33333333%;
}

.col-12 {
    flex: 0 0 100%;
    max-width: 100%;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
}

.wrds-footer-copyright {
    font-size: 80%;
    font-style: normal;
    text-align: left;
}

.mt-5, .my-5 {
    margin-top: 3rem !important;
}

small, .small {
    font-size: 80%;
    font-weight: 400;
    display: block;
}

</style>
