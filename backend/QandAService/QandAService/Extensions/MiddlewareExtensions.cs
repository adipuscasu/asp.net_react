using Microsoft.AspNetCore.Builder;
using QandAService.Web.CustomMiddleware;

namespace QandAService.Web.Extensions
{
    public static class MiddlewareExtensions
    {
        public static IApplicationBuilder UseCustomLogger(this IApplicationBuilder app)
        {
            return app.UseMiddleware<CustomLogger>();
        }
    }
}
