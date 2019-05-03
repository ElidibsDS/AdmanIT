using Backend.Helpers;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Models
{
    public class User
    {
        public int id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string avatar { get; set; }

        public static Response<User> GetUser(int id)
        {
            var request = new RestRequest("/api/users/{id}");

            request.AddParameter("id", id, ParameterType.UrlSegment);

            var helper = new ServiceHelper();

            return helper.Execute<Response<User>>(request);
        }

        public static Pagination<User> GetUsers(int pageindex)
        {
            var request = new RestRequest("/api/users");

            request.AddParameter("page", pageindex, ParameterType.QueryString);

            var helper = new ServiceHelper();

            return helper.Execute<Pagination<User>>(request);
        }
    }
}