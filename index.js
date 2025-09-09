export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const newResponse = new Response(response.body, response);
    if (response.ok) {
      newResponse.headers.set("Content-Type", "text/calendar; charset=utf-8");
    }
    return newResponse;
  },
};
