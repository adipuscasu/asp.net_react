using System;
using System.Threading.Tasks;
using Flurl;
using Flurl.Http;
using Microsoft.Identity.Client;

namespace SecureClient
{
    class Program
    {
        static void Main(string[] args)
        {
            var token = RunAsync().Result;
            GetFruits(token).Wait();

        }

        private static async Task<string> RunAsync()
        {
            AuthConfig config = AuthConfig.ReadJsonFromFile("appsettings.json");

            IConfidentialClientApplication application = ConfidentialClientApplicationBuilder.Create(config.ClientId)
                .WithClientSecret(config.ClientSecret)
                .WithAuthority(new Uri(config.Authority))
                .Build();
            string[] ResourceIds = new string[] { config.ResourceId };

            AuthenticationResult result = null;

            try
            {
                result = await application.AcquireTokenForClient(ResourceIds).ExecuteAsync();
                Console.ForegroundColor = ConsoleColor.Green;
                Console.WriteLine("Token aquired \t");
                Console.WriteLine(result.AccessToken);
                Console.ResetColor();
            }
            catch (MsalClientException ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }

            return result.AccessToken;
        }

        private static async Task GetFruits(string token)
        {

            var response = await "https://localhost:5001/api/Values"
                        .WithOAuthBearerToken(token)
                        .AppendPathSegment("getVegetables")
                        .GetJsonAsync<string[]>();
            Console.WriteLine($"Got response:");
            foreach (var item in response)
            {
                Console.WriteLine($"Vegetable: {item}");
            }
            Console.ReadLine();
        }


    }
}
