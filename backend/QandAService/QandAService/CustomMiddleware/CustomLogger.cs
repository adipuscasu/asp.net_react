using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace QandAService.Web.CustomMiddleware
{
    public class CustomLogger

    {

        private readonly RequestDelegate _next;

        public CustomLogger(RequestDelegate next)

        {
            _next = next ?? throw new ArgumentNullException(nameof(next));
        }

        public async Task Invoke(HttpContext httpContext)

        {
            if (httpContext == null) throw new

            ArgumentNullException(nameof(httpContext));

            // TODO - log the request

            await _next(httpContext);

            // TODO - log the response
        }

    }
}
