//a cloudflare worker application 
//for fetch data from firewall outside purpose

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
	try {
		var u = new URL(request.url);
		var h = new Headers(request.headers);
		var q = u.searchParams.get('q');
		if (q) {
			const opt = {
				method: request.method,
				headers: h,
				redirect: 'follow',
				body: request.body
			};
			var req_url = decodeURIComponent(q);
			var resp = await fetch(req_url, opt);
			var resp_headers = new Headers(resp.headers);
			resp_headers.set('access-control-allow-origin', '*');
			resp_headers.set('access-control-expose-headers', '*');
			resp_headers.set('Author', 'Akame');
			var len = resp_headers.get('content-length');
			return new Response(resp.body, { status: 200, headers: resp_headers });
		} else {
			return new Response('invalid parameters.', { status: 400 });
		}

	} catch (e) {
		return new Response('ERROR->' + e, { status: 500 });
	}

}
