﻿
using Dapper;
using AddressBook.Services.Contexts;

namespace AddressBook.Services
{
    public class DbServices
    {
        private DapperContext _context;

        public DbServices(DapperContext context)
        {
          
            this._context = context;
        }

        public ICollection<T> GetAll<T>(String tableOrView) where T : class
        {
            using(var connection = _context.CreateConnection())
            {
                return connection.Query<T>($"SELECT * FROM {tableOrView}").ToList();
            }
        }

        public T Get<T>(String tableOrView, int id) where T : class
        {
            using(var connection = _context.CreateConnection())
            {
                return connection.QuerySingleOrDefault<T>($"SELECT * FROM {tableOrView} WHERE Id = @Id", new {id});
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