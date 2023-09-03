using Microsoft.Data.SqlClient;
using System.Data;

namespace AddressBook.Services.Contexts
{
    public class DapperContext
    {
        private string _connectionString;

        public DapperContext(string connectionString)
        {
            this._connectionString = connectionString;
        }

        public IDbConnection CreateConnection()
        {
            return new SqlConnection(this._connectionString);
        }
    }
}
