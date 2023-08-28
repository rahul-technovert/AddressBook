using AddressBook.API.Concerns;
using AddressBook.API.Contexts;
using AddressBook.Models;
using Dapper;

namespace AddressBook.API.Services
{
    public class DbServices
    {
        private DapperContext _context;
        public DbServices(DapperContext context)
        {
            this._context = context;
        }

        public ICollection<T> GetAll<T>(String query) where T : class
        {
            using(var connection = _context.CreateConnection())
            {
                return connection.Query<T>(query).ToList();
            }
        }

        public T Get<T>(String query, int id) where T : class
        {
            using(var connection = _context.CreateConnection())
            {
                return connection.QuerySingleOrDefault<T>(query, new {id});
            }
        }

        public int Post(String query, DynamicParameters parameters)
        {
            using(var connection = _context.CreateConnection())
            {
               int id = connection.QuerySingle<int>(query, parameters);
                return id;
            }
        }

        public void Put(String query, DynamicParameters parameters)
        {
            using(var connection = _context.CreateConnection())
            {
                connection.Execute(query, parameters);
            }
        }

        public void Delete(String query, int id)
        {
            using( var connection = _context.CreateConnection())
            {
                connection.Execute(query, new {id});
            }
        }
    }
}
