/**
 * Created by JJJ on 2016/2/25.
 */
String.prototype.trim=function() {

    return this.replace(/(^\s*)|(\s*$)/g,'');
}
