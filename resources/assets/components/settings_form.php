<div x-data="WordproofSDK.settings()" id="wordproof_settings_form" x-cloak xmlns:x-on="http://www.w3.org/1999/xhtml"
     xmlns:x-bind="http://www.w3.org/1999/xhtml">
    <div id="wordproof-settings-wrapper" x-show="isOpen()">
        <div class="wordproof-settings-overflow" x-on:click="close()"></div>
        <div class="wordproof-settings-content-wrapper">
            <div class="wordproof-settings-content-wrapper-content">
                <iframe class="wordproof-settings-content-wrapper-content-loader" x-bind:src="url()"></iframe>
            </div>
            <div class="wordproof-settings-content-wrapper-close" x-cloak x-on:click="close()">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far"
                     data-icon="times-circle" class="svg-inline--fa fa-times-circle fa-w-16" role="img"
                     viewBox="0 0 512 512">
                    <path fill="currentColor"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"/>
                </svg>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    
    WordproofSDK.settings = function() {
        return {
            sourceId: null,
            show: false,
            open: function () {
                this.show = true;
            },
            close: function () {
                this.show = false;
            },
            isOpen: function () {
                return this.show === true
            },
            url: function () {
                return "/wp-admin/admin-ajax.php?action=wordproof_settings_form";
            }
        }
    }
    
</script>

<style>
    #wordproof-settings-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: transparent;
    }
    
    #wordproof-settings-wrapper .wordproof-settings-overflow {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 30%;
        z-index: 1;
    }
    
    #wordproof-settings-wrapper .wordproof-settings-content-wrapper {
        width: 80%;
        height: 80%;
        text-align: center;
        font-size: 2em;
        z-index: 2;
        background-color: white;
        box-shadow: 0 0 26px 0 rgba(0, 0, 0, 0.75);
        position: relative;
    }
    
    #wordproof-settings-wrapper .wordproof-settings-content-wrapper .wordproof-settings-content-wrapper-content {
        width: 100%;
        height: 100%;
        padding: 50px 1px 0 0;
        box-sizing: border-box;
    }
    
    #wordproof-settings-wrapper .wordproof-settings-content-wrapper .wordproof-settings-content-wrapper-close {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        color: #0000008f;
    }
    
    #wordproof-settings-wrapper .wordproof-settings-content-wrapper .wordproof-settings-content-wrapper-close:hover {
        color: black;
        cursor: pointer;
    }
    
    .wordproof-settings-content-wrapper-content iframe {
        width: 100%;
        height: 100%;
    }
    .wordproof-settings-content-wrapper-content-loader {
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin: auto; display: block;shape-rendering: auto;' width='200px' height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%3Ccircle cx='50' cy='50' fill='none' stroke='%232bdec6' stroke-width='10' r='35' stroke-dasharray='164.93361431346415 56.97787143782138'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='1s' values='0 50 50;360 50 50' keyTimes='0;1'/%3E%3C/circle%3E%3C!-- %5Bldio%5D generated by https://loading.io/ --%3E%3C/svg%3E") center center no-repeat;
    }
</style>