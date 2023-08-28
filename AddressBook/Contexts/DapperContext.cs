using Microsoft.Data.SqlClient;
using System.Data;

namespace AddressBook.API.Contexts
{
    public class DapperContext
    {
        private IConfiguration _configuration;
        private string _connecctionString;

        public DapperContext(IConfiguration configuration)
        {
            this._configuration = configuration;
            _connecctionString = _configuration.GetConnectionString("Default");
        }

        public IDbConnection CreateConnection()
        {
            return new SqlConnection(_connecctionString);
        }
    }
}
