/**
 * Created with JetBrains WebStorm.
 * User: RD-小小WEB
 * Date: 13-9-13
 * Time: 上午11:57
 * To change this template use File | Settings | File Templates.
 */

KISSY.use('node',function (S,Node) {
    var $=Node.all;
    var API = 'http://api.flickr.com/services/rest/?',
        params = {
            'method': 'flickr.favorites.getPublicList',
            'api_key': '5d93c2e473e39e9307e86d4a01381266',
            'user_id': '26211501@N07',
            'per_page': 10,
            'format': 'json',
            'jsoncallback': 'getFavorites'
        },
        photoList = $('#photo-list');

    $('#fetch-btn-anim').on('click', function() {
        $(this).attr('disabled', true);
        photoList.addClass('loading');
        S.getScript(API + S.param(params));
    });

    window.getFavorites = function(data) {
        var html = 'Fetch photo failed, pls try again!',
            loading = true;

        if (data.stat === 'ok') {
            html = '';
            S.each(data.photos.photo, function(item, i){
                html += '<img style="display:none" src="http://farm' + item.farm + '.static.flickr.com/'
                    + item.server + '/' + item.id + '_' + item.secret + '_t.jpg" />';
            });
        }

        photoList.html(html).all('img').each(function(img) {
            img.on('load', function() {
                if(loading) {
                    photoList.removeClass('loading');
                    loading = false;
                }
                img.fadeIn(3);
            });
        });
    }
});
