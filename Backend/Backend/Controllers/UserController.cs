using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend.Controllers
{
    public class UserController : ApiController
    {
        [Route("user/{id}")]
        public IHttpActionResult GetUser(int id)
        {
            return Ok(Models.User.GetUser(id));
        }

        [Route("users/{page}")]
        public IHttpActionResult GetUsers(int page)
        {
            return Ok(Models.User.GetUsers(page));
        }

    }
}
