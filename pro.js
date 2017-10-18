function mytheme_request($am) {
	if (isset($am['feed']))
	$am['post_type'] = array('post', 'article');
	return $am;
}
add_filter('request', 'mytheme_request');

function extend_feed($qv) {
	if (isset($qv['feed']) && !isset($qv['post_type']))
		$qv['post_type'] = array('post', 'article');
	return $qv;
}
add_filter('request', 'extend_feed');