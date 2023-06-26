<template>
  <div class ="main-breadcrumb">
    <div class="container">
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class ="breadcrumb-item">
                        <a href="https://wrds-www.wharton.upenn.edu/" class ="breadcrumb-item bc-home"><i class ="el-icon-s-home"></i> <span>Home</span></a>
                    </li>
                </ol>
            </nav>
        </div>
        <div class ="bc-right"></div>
    </div>
</div>

</template>

<style lang="less" scoped>
.main-breadcrumb {
    background-color: #e9ecef;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 10%;
    margin-left: 10%;
}

.breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    margin-top: 0;
    list-style: none;
    background-color: #e9ecef;
    border-radius: 0.25rem;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.breadcrumb-item + .breadcrumb-item::before {
    display: inline-block;
    padding-right: 0.75rem;
    color: #6c757d;
    content: "/";
}
.breadcrumb-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

a {
    color: #004785;
    text-decoration: none;
    background-color: transparent;
}

.bc-home {
    font-size: 1.2rem;
}
</style>
