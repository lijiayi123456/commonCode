<template>
    <div class="wrap_main">
        <div style="vertical-align:left;">text-align的使用</div>
        <span>一、text-align:baseline-----------------------------------------------------</span>
        <section class="vertical-align-baseline">
            <span>1、正常布局，三个子元素设置display:inline-block</span>
            <div class="parent">
                <div class="child ch1 "></div>
                <div class="child ch2"></div>
                <div class="child ch3"></div>
            </div>
        </section>
        <section class="vertical-align-baseline">
            <span>2、第三个子元素中加入xxx字符</span>
            <div class="parent">
                <div class="child ch1 "></div>
                <div class="child ch2"></div>
                <div class="child ch3">
                    xxx
                </div>
            </div>
        </section>
        <section class="vertical-align-baseline">
            <span>3、第二个子元素中加入xxx字符</span>
            <div class="parent">
                <div class="child ch1 "></div>
                <div class="child ch2">
                    xxx
                </div>
                <div class="child ch3">
                </div>
            </div>
        </section>
        <span>vertical-align:middle-----------------------------------------------------</span>
        <section class="vertical-align-middle ch1-middle">
            <span>1. 第一个元素设置middle</span>
            <div class="parent">
                <div class="child ch1 "></div>
                <div class="child ch2"></div>
                <div class="child ch3">
                </div>
            </div>
        </section>
        <section class="vertical-align-middle ch1-middle">
            <span>2. 第一个元素设置middle,ch3中加入xxx</span>
            <div class="parent">
                <div class="child ch1 "></div>
                <div class="child ch2"></div>
                <div class="child ch3">
                    xxx
                </div>
            </div>
        </section>
        <section class="vertical-align-middle ch1-middle">
            <span>2. 第一个元素设置middle,第二个中加入xxx</span>
            <div class="parent">
                <div class="child ch1 "></div>
                <div class="child ch2">xxx</div>
                <div class="child ch3">
                </div>
            </div>
        </section>
        <section class="vertical-align-middle ch2-middle">
            <span>3. 第二个元素设置middle</span>
            <div class="parent">
                <div class="child ch1 "></div>
                <div class="child ch2"></div>
                <div class="child ch3">
                </div>
            </div>
        </section>
        <section class="vertical-align-middle ch2-middle">
            <span>4. 第二个元素设置middle,ch3中加入xxx</span>
            <div class="parent">
                <div class="child ch1 "></div>
                <div class="child ch2"></div>
                <div class="child ch3">
                    xxx
                </div>
            </div>
        </section>
        <section class="vertical-align-middle ch2-middle">
            <span>4. 第二个元素设置middle,ch2中加入xxx</span>
            <div class="parent">
                <div class="child ch1 "></div>
                <div class="child ch2">xxx</div>
                <div class="child ch3">
                    
                </div>
            </div>
        </section>
        <section class="vertical-align-middle ch3-middle">
            <span>5. 第三个元素设置middle</span>
            <div class="parent">
                <div class="child ch1 "></div>
                <div class="child ch2"></div>
                <div class="child ch3">
                </div>
            </div>
        </section>
        <section class="vertical-align-middle ch3-middle">
            <span>6. 第三个元素设置middle,ch3中加入xxx</span>
            <div class="parent">
                <div class="child ch1 "></div>
                <div class="child ch2"></div>
                <div class="child ch3">
                    xxx
                </div>
            </div>
        </section>
        <section class="vertical-align-middle ch3-middle">
            <span>6. 第三个元素设置middle,ch2中加入xxx</span>
            <div class="parent">
                <div class="child ch1 "></div>
                <div class="child ch2">xxx</div>
                <div class="child ch3">
                    
                </div>
            </div>
        </section>

        <span>三、span 和 小图标垂直对齐：同时设置vertical-align:middle;</span>
        <section class="span-i-vertical-middle">
            <span>微博</span>
            <span class="iconfont icon-icon-test48"></span>
            <span>xxx</span>
        </section>
    </div>
    
</template>



<style lang="scss" scoped>
    .wrap_main {
        text-align: left;
        margin: 30px;
    }
    .vertical-align-baseline {
        .parent {
            padding: 20px;
            width: 300px;
            // height: 50px;
            border: 1px solid red;
        }
        .child {
            display: inline-block;
            width: 80px;
            height: 50px;
            border: 1px solid black;
        }
    }
    .vertical-align-middle {
        .parent {
            padding: 20px;
            width: 300px;
            // height: 50px;
            border: 1px solid red;
        }
        .child {
            display: inline-block;
            width: 80px;
            height: 50px;
            border: 1px solid black;
        }
    }
    .vertical-align-middle.ch2-middle {
        .ch2 {
            vertical-align: middle;
        }
    }
    .vertical-align-middle.ch3-middle {
        .ch3 {
            vertical-align: middle;
        }
    }
    .vertical-align-middle.ch1-middle {
        .ch1 {
            vertical-align: middle;
        }
    }
    .span-i-vertical-middle {
        font-size: 30px;
        span {
            position:relative;
            display: inline-block;
            vertical-align: middle;
        }
        span::before {
            position: absolute;
            height:2px;
            width: 20px;
            background: red;
            display: block;
            top: 50%;
            transform: translateY(-50%);
        }
    }
</style>