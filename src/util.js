

const Util =  {
    getJumpBaseUrl(toUrl) {
        var bundleUrl = weex.config.bundleUrl;
        bundleUrl = new String(bundleUrl);
        let platform = weex.config.env.platform.toLowerCase();
        var nativeBase;
        var native;
        if (platform === 'android') {
            nativeBase = '';
            native = nativeBase + toUrl + ".js";
        } else if (platform === 'ios') {
            if(bundleUrl.indexOf('index.js') != -1){
                nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
            }else{
                nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/'));
                console.log('===========>>>>>>>>',nativeBase)
                nativeBase = nativeBase.substring(0, nativeBase.lastIndexOf('/') + 1);
            }
            
            native = nativeBase + toUrl + ".js";
        } else {
            var host = 'localhost:8081';
            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }  
  
            // 此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.  
            if (typeof window === 'object') {
                nativeBase = 'http://' + host + '/';
            } else {
                nativeBase = 'http://' + host + '/';
            }
            // native = 'http://' + host + '/index.html?page=./dist/';
            native = nativeBase + toUrl + ".html";  
        }
        console.log('native===',native)
        return native;  
    }
}

export {
    Util
} 