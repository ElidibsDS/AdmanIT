using Backend.Models;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Helpers
{
    public class ServiceHelper
    {
        const string BaseUrl = "https://reqres.in/";

        readonly IRestClient _client;

        string _accountSid;

        public ServiceHelper()
        {
            _client = new RestClient(BaseUrl);
        }

        public T Execute<T>(RestRequest request) where T : new()
        {
            var response = _client.Execute<T>(request);

            if (response.ErrorException != null)
            {
                const string message = "Error retrieving response.  Check inner details for more info.";
                throw new ApplicationException(message, response.ErrorException);
            }
            return response.Data;
        }
    }
}