export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const response = await env.ASSETS.fetch(request)
    const contentType = response.headers.get('content-type') || ''

    if (!contentType.includes('text/html')) {
      return response
    }

    const html = await response.text()
    const absoluteSocialImage = `${url.origin}/og.png`
    const renderedHtml = html.replaceAll('content="/og.png"', `content="${absoluteSocialImage}"`)

    return new Response(renderedHtml, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    })
  },
}
