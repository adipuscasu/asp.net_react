﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace SecureClient
{
    public class AuthConfig
    {
        public string Instance { get; set; }
        public string TenantId { get; set; }
        public string ClientId { get; set; }
        public string Authority 
        {
            get
            {
                return String.Format(CultureInfo.InvariantCulture, Instance, TenantId);
            } 
        }

        public string ClientSecret { get; set; }
        public string BaseAddress { get; set; }

        public string ResourceId { get; set; }

        public static AuthConfig ReadJsonFromFile(string path)
        {
            IConfiguration Configuration;

            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile(path)
                .AddUserSecrets<AuthConfig>(optional: true, reloadOnChange: true);

            Configuration = builder.Build();

            var authConfig = Configuration.Get<AuthConfig>();

            return authConfig;
        }

    }
}
